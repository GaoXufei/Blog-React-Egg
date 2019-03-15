import { Button, Col, Row, message } from 'antd';
import * as React from 'react'

import Markdown from './markdown'
import Tags from './tags'
import Title from './title'

export default class CreatePost extends React.Component<{}, { tags?: string, content?: string, title?: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: '',
      tags: '',
      content: '',
    }
  }
  // 获取输入数据
  public handleResult = async (data: any, type: string) => {
    await this.setState({ [type]: data })
  }

  // 验证数据
  public verification = () => {
    const result = Object.keys(this.state);
    let isYes = true;
    for (const i of result) {
      if (!this.state[i]) {
        isYes = false;
        message.error('数据为空');
        break;
      }
    }
    return isYes;
  }

  // 提交
  public handleSubmit = async () => {
    if (!this.verification()) return;
    const response = await (await fetch('http://localhost:7001/topics', {
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })).json();
    message.success('success!!!');
    console.log(response);

  }


  public render() {
    return (
      <React.Fragment>
        <Row style={{ marginBottom: 10 }}>
          <Col>
            <Title onResult={this.handleResult} />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col>
            <Tags onResult={this.handleResult} />
          </Col>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Col>
            <Markdown onResult={this.handleResult} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          </Col>
        </Row>
      </React.Fragment>

    )
  }
}