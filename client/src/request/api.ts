import { ObjectToQuery } from '../tools/requestTool';

// 获取全部
export const getAlltopics = (): Promise<any> => fetch('/api/topics');
// 根据id查找文章
export const getArticleById = (id: number): Promise<any> => fetch(`/api/topics/${id}`);
// 获取所有标签
export const getAllTags = (): Promise<any> => fetch(`/api/tags`);
// 分页 / 文章条件
export const getQueryTopics = (query: any) => fetch(`/api/topics?${ObjectToQuery(query)}`);
