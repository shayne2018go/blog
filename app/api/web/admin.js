const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const router = new Router({
  prefix: '/web'
})

router.get('/', async (ctx, next) => {
  const index = fs.readFileSync(path.resolve(__dirname, '../../../admin/dist/index.html'), 'utf-8')
  ctx.body = index
})

// router.get('/static/:dirname/:filename', async (ctx, next) => {
//   const dirname = ctx.params.dirname
//   const filename = ctx.params.filename
//   const text = fs.readFileSync(path.resolve(__dirname, `../../../admin/dist/static/${dirname}/${filename}`), 'utf-8')
//   ctx.body = text
// })

module.exports = router