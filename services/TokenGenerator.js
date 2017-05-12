
const jwt = require("jsonwebtoken")

const TokenGenerator = (secret) => ({
  secret: secret,
  verifyToken: (token, options) => {
    return jwt.verify(token, secret, options)
  },
  isTokenExpired: (decodedToken) => {
    // return new Date() > decodedToken.expires;
    return Math.floor(Date.now() / 1000) > decodedToken.expires
  },
  generateToken: function (payload) {
    return jwt.sign(payload, secret, { audience: payload.audience })
  },
  generateLoginPayload: function(user) {
    console.log(this.secret)
    console.log(this.generateToken("asdf"));
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
  }
})

module.exports = Object.freeze(TokenGenerator(process.env.TOKEN_SECRET))
