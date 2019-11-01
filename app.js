const Koa = require('koa')
const InitManage = require('./core/init')
const app = new Koa()

// 初始化核心库
InitManage.initCore(app)

app.listen(9999)