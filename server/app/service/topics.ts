import { Service } from 'egg';
import { Op } from 'sequelize';
import * as Showdown from 'showdown';
import { setStringToArray, towArrayToOneArray, unique } from '../public/tools';

const converter = new Showdown.Converter();

export default class ServiceTopics extends Service {
  // 条件查询
  // 根据query查询
  public async getTopicsByQuery({ limit, page, tag, tab, ...other }) {
    let topics;
    const _limit = limit ? Number(limit) : null;
    const _page = Number(page) || 1;
    try {
      // 分页逻辑
      // page 页码
      // limit 显示条数
      // ( page - 1 ) * limit 页码减一再乘以页码数
      const result = await this.app.model.Posts.findAndCountAll(
        // 条件匹配
        // 默认获取20条数据，不进行筛选
        {
          // 条件筛选
          where: (tag && { tags: { [Op.regexp]: tag } }) || (tab && { tab }) || {},
          offset: _limit ? (_page - 1) * _limit : 0,
          limit: _limit,
          order: [
            ['created_at', 'DESC'],
          ],
          other,
        },
      );
      // 循环数据 将tags字符串转换为数组
      const list = result.rows.map((value) => {
        if (value.tags) { value.tags = setStringToArray(value.tags); }
        if (value.content) { value.content = converter.makeHtml(value.content); }
        return value;
      });
      // 获取总条目
      const count = result.count;
      // 整合数据
      topics = {
        list,
        count,
      };
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.log(e);
      topics = null;
    }
    return topics;
  }
  // 添加文章
  public async addTopics({ title, content, tab, tags }: { title: string, content: string, tab: string, tags: [] }) {
    // ...
    const result = this.app.model.Posts.create({ title, content, tab, tags });
    return result;
  }
  // 根据id查询文章
  public async getTopicsById(id) {
    const result = await this.app.model.Posts.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    result.tags = setStringToArray(result.tags);
    result.content = converter.makeHtml(result.content);
    return result;
  }
  // 获取所有标签类
  public async getTags() {
    const tags = await this.app.model.Posts.findAll({
      attributes: ['tags'],
    });
    // 将tag中的字符串转换为数组
    // 得到一个二维数组
    const resultTags = tags.map((tag: any) => setStringToArray(tag.tags));
    // 将二维数组转换为一维数组(有重复数据)
    const tagsResult = towArrayToOneArray(resultTags);
    // 返回去重后的数组
    return unique(tagsResult);

  }

}
