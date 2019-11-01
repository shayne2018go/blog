## 这是个什么的项目？

使用 Node.js + Koa2 + MySQL + react.js 实战开发一套完整个人博客项目网站。

---
- Koa2服务端
    - 管理员与权限控制
    - 文章
    - 文章分类
    - 评论文章
- 前端博客网站 Vue.js
- 后台管理系统 Vue.js
---
## 解决了什么问题？
- 服务端：使用 Node.js 的 Koa2 框架二次开发 Restful API。

- 前端：react.js 打造了前端网站和后台管理系统。


---
## 技术栈

* **koa**
* **mysql**
* **react**
* **redux**
* **axios**
---

## 项目的亮点
- Koa 与 Koa 二次开发API
- 多 koa-router 拆分路由
- require-directory 自动路由加载
- 异步编程 - async/await
- 异步异常链与全局异常处理
- Sequelize ORM 管理 MySQL
- JWT 权限控制中间件
- 参数验证器 Validator
- nodemon 修改文件自动重启
- 前后端分离
- 使用 react.js 搭建前端网站和后台管理系统

---

## 数据库
启动项目前一定要在创建好 `blog` 数据库。
```sql
# 登录数据库
$ mysql -uroot -p密码

# 创建 wxapp 数据库
$ CREATE DATABASE IF NOT EXISTS blog DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
---

## 文件目录
```
> admin   # 后台管理
> app     # api接口
> config  # 配置文件
> core    # 核心库
> db      # 数据库
> utils   # 插件
> .sequelizerc 
```
---

## 一.**运行接口**

1. **安装依赖**
```bash
# 
cd /path/blog

# 安装所有依赖文件
npm install
# or
yarn 

```

2. **修改sequelize 数据库配置文件**

```json
# /blog/db/database.json

{
  "development": {
    "username": "root", //用户名
    "password": "root", //密码
    "database": "blog1", //数据库名称
    "host": "127.0.0.1", // IP
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "blog1",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "blog1",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

3. **运行sequelize 迁移文件， 创建数据表及填充数据**
> 更多指令请查看[官方文档](https://sequelize.org/v5/)
```bash
# 运行迁移文件 创建表
npx sequelize-cli db:migrate

# 运行种子文件 填充数据
npx sequelize-cli db:seed:all

```

4. **启动koa服务**

```bash

# 启动
yarn start
#or
npm run start

# 启动成功

dell@DESKTOP-KBRNM73:/mnt/c/Learnspace/node/blog$ yarn start
yarn run v1.19.1
warning package.json: No license field
$ nodemon app.js
[nodemon] 1.19.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
数据库链接成功
...
```

---

## 二. 启动后台管理系统
```bash

# 进入后台管理目录
cd /path/admin

# 启动
yarn dev
# or
npm run dev

#启动成功

dell@DESKTOP-KBRNM73:/mnt/c/Learnspace/node/blog/admin$ yarn dev
yarn run v1.19.1
warning ../package.json: No license field
$ webpack-dev-server --inline --config build/webpack.dev.config.js
ℹ ｢wds｣: Project is running at http://localhost:9527/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from /mnt/c/Learnspace/node/blog1/admin
ℹ ｢wds｣: 404s will fallback to /index.html
...
```
> 打开浏览器  http://localhost:9527/

---

## 三.启动前端服务 **<font color=red size=5>未完成</font>**

```bash

# 进入前端目录
cd /path/blog/web

# 启动
yarn dev
# or
npm run dev
```
