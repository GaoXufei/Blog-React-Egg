# React 博客系统

> ### 本项目分为三个部分

> - 前端 client
> - 服务端 server
> - 后台管理 admin

`三个系统相互独立，前后分离，全系标配Typescript`

## 前端部分(React)
> - 使用了React新特性Hooks （ 也让我从OOP又一次转到了FP - - ） ，使各组件的颗粒度更精细
> - 因为博客系统功能简单，所以网络请求没有使用第三方库而选择了fetch
> - 状态管理用到了Redux
> - 样式方面使用了Sass

`
  在程序部署到服务器的时候在出现了数据获取不到的问题，Nginx反向代理接口就可以正常访问数据了
`

## 服务端部分(Egg)
> - 使用了egg脚手架工具生成Typescript环境（话说回来，egg对ts的支持着实不怎么样，很多d.ts需要自己写，怀念写nest的日子）
> - 数据库使用了Mysql
> - ORM框架使用了Sequelize对数据库进行操作
> - 由于是博客系统Markdown解析是必须有的，使用了第三方库[showdown](href="https://github.com/showdownjs/showdown")

## 后台管理部分(Admin)
> - 仍然是React, 使用了阿里的开源UI组件库Ant Design
> - 既然使用了Ant，那么按需加载就是必不可少的，这里使用了官方推荐的react-app-rewired对create-react-app默认配置进行了自定义，babel-plugin-import按需加载组件和样式 - [传送门](https://ant.design/docs/react/use-in-typescript-cn)
> - 接口请求方面仍然是fetch
