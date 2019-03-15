import { Icon, Input, Row, Tag, Tooltip } from 'antd'
import * as React from 'react'

// 标签组件
export default (props: any) => {
  // 定义初始数据
  const state: any = {
    inputValue: '',
    inputVisible: false,
    tags: [],
  }

  // 获取input element
  const inputRef: any = React.useRef(null);
  // 定义hook
  const [tagsObj, setTagsObj] = React.useState(state)

  // 显示添加标签输入框
  const showInput = async () => {
    // 显示
    await setTagsObj({ ...tagsObj, ...{ inputVisible: true } });
    // 焦点
    inputRef.current.focus();
  }
  // 获取用户输入
  const handleInputChange = (e: any) => {
    // 更改hook
    setTagsObj({ ...tagsObj, ...{ inputValue: e.target.value } })
  }
  // 失去焦点 / 回车
  const handleInputConfirm = async () => {
    // 将tags数组进行组合
    const tags = [...tagsObj.tags, tagsObj.inputValue];
    // 更新hook
    await setTagsObj({ ...tagsObj, ...{ tags }, ...{ inputVisible: false } });
    // 返回给父组件
    props.onResult(tags.toString(), 'tags')
  }
  // 删除标签
  const handleDelTag = (removeTag: string) => {
    // 在源数组中（tags）剔除（filter）要删除的项（removeTag）
    const tags = tagsObj.tags.filter((tag: any) => tag !== removeTag);
    // 更新hook
    setTagsObj({ ...tagsObj, ...{ tags } })
  }


  return (
    <Row type="flex" >
      {
        tagsObj.tags.map((tag: any, index: any) => (
          <Tooltip title={tag} key={index}>
            <Tag closable={true} afterClose={() => handleDelTag(tag)}>{tag}</Tag>
          </Tooltip>
        ))
      }
      {
        tagsObj.inputVisible
          ?
          (
            <Input
              ref={inputRef}
              style={{ width: 78 }}
              size="small"
              onChange={handleInputChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )
          :
          (
            <Tag
              onClick={showInput}
            >
              <Icon type="plus" />
              添加标签
            </Tag>
          )
      }
    </Row>
  )
}