import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // Authorization header nikalna
  const authHeader = req.headers["authorization"];
  console.log("Auth Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "No token provided, please login again",
    });
  }

  // "Bearer <token>" se token extract karna
  const token = authHeader.split(" ")[1];
  console.log("Token received:", token);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token missing",
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User ki info req object me store karna
    req.body.userId = decoded.id;

    next();
  } catch (error) {
    console.log("JWT Error:", error.message);
    res.status(403).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authMiddleware;
