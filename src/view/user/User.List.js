import React, {Component} from 'react';
import {getUserList} from "../../api/user";
import {Table, Spin, Button} from "antd";

class UserList extends Component {
  constructor(props) {
    super(props.history);
    // let {current = 1} = props.history.location.state || {};
    console.log(props);
    this.state = {
      userList: [],
      loading: true,
      page: {
        total: 0,
        // current,
        pageSize: 2
      }
    };
    this.init();
  }

  init = () => {
    this.initList();
  };

  initList = () => {
    console.log(this.state.page);
    getUserList({...this.state.page,})
      .then(res => {
        let {users, page: {pageNum: current, pageSize, total}} = res.data;
        setTimeout(() => {
          this.setState({userList: users, loading: false, page: {current, pageSize, total}})
        }, 200);
      })
      .catch(e => {
        console.log(e)
      })
  };

  pageChange = async (s) => {
    await this.setState({page: {...this.state.page, current: s.current,}, loading: true});
    this.props.history.replace({pathname: '/users', state: s});
    // this.setState({});
    this.init();
  };

  render() {

    let {userList = [], loading, page} = this.state;

    const columns = [
      {
        title: '姓名',
        align: 'center',
        dataIndex: 'name',
        default: '空'
      },
      {
        title: '账号',
        dataIndex: 'account',
      },
      {
        title: '邮箱',
        dataIndex: 'email'
      },
      {
        title: '年龄',
        dataIndex: 'age'
      },
      {
        title: '操作',
        align: 'center',
        render: row =>
          <Button size="small"
                  href={'/user/' + row.id}
                  type="link"
                  style={{fontSize: '12px'}}>查看</Button>
      }
    ];

    return (
      <div>
        <Spin spinning={loading}>
          <Table rowKey="id" dataSource={userList} columns={columns} pagination={page}
                 onChange={(s) => this.pageChange(s)}/>
        </Spin>
      </div>
    )
  }
}

export default UserList;