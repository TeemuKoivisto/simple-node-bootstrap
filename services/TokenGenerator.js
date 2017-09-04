
const jwt = require("jsonwebtoken")

const { TOKEN_SECRET } = process.env

const TokenGenerator = {
  verifyToken(token, options) {
    return jwt.verify(token, TOKEN_SECRET, options)
  },
  isTokenExpired(decodedToken) {
    // return new Date() > decodedToken.expires;
    return Math.floor(Date.now() / 1000) > decodedToken.expires
  },
  generateToken(payload) {
    return jwt.sign(payload, TOKEN_SECRET, { audience: payload.audience })
  },
  generateLoginPayload(user) {
    const payload = {
      user: {
        id: user.id,
        fullname: `${user.firstname} ${user.lastname}`,
        role: user.role,
      },
      audience: "login",
      // expires in two days in seconds
      expires: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 2,
      // expiresIn: 172800, // seconds
    }
    return payload
  },
}

module.exports = TokenGenerator
