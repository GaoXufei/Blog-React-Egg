import * as React from 'react'
import { getQueryTopics } from '../../request/api';
interface IProps {
  list: [
    {
      title: string,
      id: number,
      created_at: Date
    }
  ],
}

export default class PostList extends React.Component<IProps, {}> {

  public async componentDidMount() {
    const result = await (await getQueryTopics({ page: 1, limit: 8 })).json()
    // tslint:disable-next-line:no-console
    console.log(result);
  }

  public render() {
    const { list } = this.props;
    return (
      <ul>
        {

          list.map((value, key) => (
            <li key={key}>
              {value.title}

              {value.created_at}
            </li>
          ))
        }
      </ul>
    )
  }
}