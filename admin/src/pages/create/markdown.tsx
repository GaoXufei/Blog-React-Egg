import * as React from 'react'
import 'react-mde/lib/styles/css/react-mde-all.css'

import ReactMde from 'react-mde';
import * as Showdown from 'showdown';

export default class Markdown extends React.Component<{ onResult: any }, { tab: "write" | "preview", value: string }> {
  private converter: any;
  constructor(props: any) {
    super(props);
    this.state = {
      tab: "write",
      value: ''
    };
    this.converter = new Showdown.Converter({
      simplifiedAutoLink: true,
      strikethrough: true,
      tables: true,
      tasklists: true
    });
  }

  // 切换模式 写作模式 / 预览模式
  public handleTabChange = (tab: "write" | "preview") => {
    this.setState({ tab });
  }

  // 获取输入
  public handleValueChange = (value: string) => {
    this.setState({ value });
    this.props.onResult(value, 'content');
  }

  public render() {
    return (
      <ReactMde
        // 切换模式
        onTabChange={this.handleTabChange}
        // 将数据转换为html填充进预览里
        generateMarkdownPreview={markdown => Promise.resolve(this.converter.makeHtml(markdown))}
        // 选择状态
        selectedTab={this.state.tab}
        // 获取输入
        onChange={this.handleValueChange}
        // 显示输入
        value={this.state.value}
        // 编辑器高度
        minEditorHeight={500}
        // 预览高度
        minPreviewHeight={500}
      />
    )
  }
}