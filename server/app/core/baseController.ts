import { Controller } from 'egg';

export default class BaseController extends Controller {
  get user() {
    // tslint:disable-next-line:no-console
    console.log(1);
    return this.ctx.session.user;
  }
  public async success(data) {
    this.ctx.body = {
      success: true,
      data,
    };
  }
  public async notFound(msg) {
    const message = msg || 'not found';
    this.ctx.throw(404, message);
  }
}
