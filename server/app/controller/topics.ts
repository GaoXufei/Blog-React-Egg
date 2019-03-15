// import { Controller } from 'egg';
import BaseController from '../core/baseController';

export default class Topics extends BaseController {
  // 文章所有
  public async index() {
    const query = this.ctx.query;
    const result = await this.service.topics.getTopicsByQuery(query);

    // 判断是否有当前字段
    if (!result) {
      this.ctx.status = 401;
      this.ctx.body = {
        success: false,
        data: {
          errorMsg: '没有该字段，请核实',
        },
      };
      return false;
    }
    this.ctx.body = {
      success: true,
      data: result,
    };
  }
  // 创建文章
  public async create() {
    // 获取数据
    const params = this.ctx.request.body;
    const result = await this.service.topics.addTopics(params);
    this.ctx.body = result;
  }
  // 查询文章 id
  public async findArticle() {
    const id = this.ctx.params.id;
    const result = await this.service.topics.getTopicsById(id);
    if (result === null) {
      this.ctx.body = {
        success: false,
        data: {
          errorMsg: '没有该文章，请核实',
        },
      };
      return false;
    }
    this.ctx.body = {
      success: true,
      data: result,
    };
  }
  // 查询所有标签类
  public async findTags() {
    const result = await this.service.topics.getTags();
    this.ctx.body = {
      data: result,
    };
  }

}
