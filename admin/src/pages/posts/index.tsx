import { List, Row, } from 'antd'
import React, { useEffect, useState } from 'react'

const Item = List.Item; // List Item

const ListItem = (props: any) => {
  const { item } = props;
  const [isEdit, setEdit] = useState(false);
  const handleToggleEditBuff = () => setEdit(!isEdit);
  const DOMShow = () => (<Item
    actions={[
      <a onClick={handleToggleEditBuff} key={'edit'}>编辑</a>,
      <a key={'del'}>删除</a>,
    ]}
    className={'post-item'}
  >
    <Item.Meta title={item.title} />
    <div>{item.created_at}</div>
  </Item>);

  return <DOMShow />
}

// 列表组件
const ListWrap = (props: any) => {
  const { list } = props.data;
  return (
    <List
      dataSource={list}
      renderItem={(item: any) => (<ListItem item={item} />)}
    />
  );
}
// posts 组件
const Posts = React.memo(() => {
  const [data, setData] = useState([]);
  const HttpGetList = async () => {
    const Response = await (await fetch('http://localhost:7001/topics')).json();
    setData(Response.data)
  }

  useEffect((): any => {
    HttpGetList(); // 请求数据
    return () => setData([]); // 清除数据
  }, [])

  return (
    < Row >
      <ListWrap data={data} />
    </Row >
  )
});


export default class PagePosts extends React.Component {
  public render() {
    return (
      <div>
        <Posts />
      </div>
    )
  }
}