import React, {Component} from 'react';
import {getUserList} from "../../api/user";
import {Table, Spin} from "antd";
import {Link} from "react-router-dom";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.initList()
  }

  state = {userList: [], loading: true};

  initList = () => {
    getUserList().then(res => {
      this.setState({userList: res.data, loading: false})
    })
  };

  render() {

    let {userList = [], loading} = this.state;

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Account',
        dataIndex: 'account',
      },
      {
        title: 'Email',
        dataIndex: 'email'
      },
      {
        title: 'Age',
        dataIndex: 'age'
      },
      {
        title: '详情',
        render: row => <Link to={'/user/' + row.id}>详情</Link>
      }
    ];

    return (
      <div>
        <Spin spinning={loading}>
          <Table rowKey="id" dataSource={userList} columns={columns}/>
        </Spin>
      </div>
    )
  }
}

export default UserList;