const jwt = require("jsonwebtoken");

module.exports = async function checkAuth(req, res, next) {
  const token = (req.headers.autorization || "").replace(/Bearer\s?/, "");
  console.log(token, "Токен юзера");
  if (token) {
    try {
      const decoded = jwt.verify(token, "secret-word");
      req.userId = decoded._id;
      next();
    } catch (err) {
      return res.status(403).json({
        message: "Нет доступа",
      });
    }
  } else {
    return res.status(403).json({
      message: "Нет доступа",
    });
  }
};
