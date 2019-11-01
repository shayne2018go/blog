const Router = require('koa-router')
const jwt = require('jsonwebtoken')
const passport =require('passport')
const bcrypt = require('../../../../utils/bcrypt')
const config = require('../../../../config/config')
const db = require('../../../../db/models/index')
const router = new Router({
  prefix: '/admin/v1'
})

router.post('/login', async (ctx, next) => {
  const {username, password} = ctx.request.body
  let hasAdmin = await db.user.findOne({
    where: {
      username: username
    }
  })
  if (hasAdmin) {
    let valitorPwd = bcrypt.decode(password, hasAdmin.password)
    if (valitorPwd) {
      let payload = {
        username: hasAdmin.username,
        id: hasAdmin.id
      }
      let token = jwt.sign(payload, config.secretOrKey, { expiresIn: 1000 * 60 * 60 * 24 })
      return ctx.body = {
        success: true,
        token: `Bearer ${token}`
      }
    }
    return ctx.body = {
      success: false,
      msg: '密码错误'
    }
  }
  return ctx.body = {
    success: false,
    msg: '用户名不存在'
  }
})

router.get('/user_info', passport.authenticate('jwt', { session: false }), async (ctx, next) => {
  const user = ctx.state.user
  ctx.body = {
    success: true,
    data: {
      user
    }
  }
})

module.exports = router