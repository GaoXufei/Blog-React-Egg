import * as React from 'react';
// canvas顶部动画
export default class HeaderCanvas extends React.Component {

  public componentDidMount() {
    this.initCanvas();
  }

  public render() {
    return (
      <canvas id="headerCanvas" style={{ width: "100%", height: "150px" }} />
    )
  }

  private initCanvas() {
    // const canvas = document.querySelector('#headerCanvas');


  }
}