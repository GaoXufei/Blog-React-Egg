/**
 * 主题路由
 */
import { Application } from 'egg';
export default (app: Application) => {
  const { controller, router } = app;
  // const gzip = app.middleware.gzip({ threshold: 1024 }); // 登录中间件

  // 主题
  router.get('/topics', controller.topics.index);
  router.post('/topics', controller.topics.create);
  router.get('/topics/:id', controller.topics.findArticle);
  router.get('/tags', controller.topics.findTags);

  // 测试
  // router.post('/test', controller.home.index);
};
