require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

class JWT {
  generateToken(reqData) {
    return jwt.sign(reqData, secret, { expiresIn: "1h" });
  }

  verifyToken(req) {
    return new Promise((resolve, reject) => {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      if (token == null) {
        resolve({ status: false, msg: "token not found" });
      } else {
        jwt.verify(token, secret, (err, data) => {
          if (err) {
            resolve({ status: false, msg: "invalid token orr expire token" });
          } else {
            req.data = data;
            resolve({ status: true, msg: "success" });
          }
        });
      }
    });
  }

}
module.exports = new JWT;
