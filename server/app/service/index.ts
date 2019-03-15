import { Service } from 'egg';

export default class ServiceIndex extends Service {
  public async index() {
    return await this.app.model.Posts.findAll();
  }
}
