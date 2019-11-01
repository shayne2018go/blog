const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const requireDirectory = require('require-directory')
const passport = require('koa-passport')

class InitManage {
  static async initCore (app) {
    InitManage.app = app
    
    await InitManage.initPassport() // token验证
    await InitManage.initCors() // 跨域
    await InitManage.initBodyParser() // post请求
    await InitManage.initLoadRouter() // 路由
    
  }

  static async initLoadRouter () {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: function (path) {
        if (path instanceof Router) {
          InitManage.app.use(path.routes()).use(path.allowedMethods())
        }
      }
    })
  }

  static async initBodyParser () {
    InitManage.app.use(bodyParser())
  }

  static async initCors () {
    InitManage.app.use(cors({
      origin: function (ctx) {
        return 'http://localhost:8888' || 'http://localhost:9999'
      },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 5,
      credentials: true,
      allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
  }

  static async initPassport () {
    InitManage.app.use(passport.initialize());
    InitManage.app.use(passport.session());
    require('./passport')(passport)
  }
}

module.exports = InitManage