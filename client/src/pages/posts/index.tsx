import * as React from 'react';

import { connect } from 'react-redux'
// import { addPost } from '../../redux/actions'
// import reducers from '../../redux/reducers'

class Posts extends React.Component<{ state: any, add: any, post: any }, { num: number }> {

  constructor(props: any) {
    super(props);
    this.state = {
      num: 0
    }
  }

  public async componentDidMount() {
    await this.props.add(this.state.num)

  }

  public zengjia = () => {
    let num = this.state.num;
    this.setState({
      num: ++num
    })
    this.props.add(num)
  }

  public render() {
    return (
      <div>
        {
          this.props.post.number
        }
        <button onClick={this.zengjia}>点击</button>
      </div>
    )
  }
}

const res = (state: any) => {
  return { post: state.post }
}

const set = (dispatch: any) => {
  return {
    add: (num: number) => dispatch({ type: "ADD_TEST", number: num })
  }
}

export default connect(res, set)(Posts)