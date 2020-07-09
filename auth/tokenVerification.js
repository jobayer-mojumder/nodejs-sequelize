const jwt = require("jsonwebtoken");

var tokenVerification = (req, res, next) => {
    let token = req.get("authorization");
    if (token) {

        // Remove Bearer from string
        token = token.slice(7);

        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    status: 401,
                    message: "Invalid Token"
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({
            status: 403,
            message: "Access Denied! Unauthorized User"
        });
    }
}

module.exports = tokenVerification