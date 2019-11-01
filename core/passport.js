
const db = require('../db/models/index')
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const config = require('../config/config')
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretOrKey;

module.exports = passport => {
passport.use(new JwtStrategy(opts, async function (paload, done) {
  let user = await db.user.findOne({
    attributes: {
      exclude: ['password']
    },
    where: {
      id: paload.id
    }
  })
  if (user) {
    return done(null, user)
  } else {
    return done(null, false)
  }
}));
}
