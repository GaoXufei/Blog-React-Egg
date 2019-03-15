import { Context, EggAppConfig } from 'egg';
import * as isJson from 'koa-is-json';
import { createGzip } from 'zlib';

export default function MiddlewareGzip(options: EggAppConfig['gzip']): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    if (!(ctx.headers.authorization === 'jwt TOKEN')) {
      ctx.status = 401;
      ctx.body = '没有token, 无法访问';
      return;
    } else {
      await next();
      // ...
    }
    // 后续中间件执行完成后将响应体换成gzip
    let body = ctx.body;
    if (!body) { return; }

    // 支持options.threshold
    if (options.threshold && ctx.length < options.threshold) { return; }

    if (isJson(body)) { body = JSON.stringify(body); }
    // // 设置gzip body 修正响应头
    const stream = createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');
  };
}
