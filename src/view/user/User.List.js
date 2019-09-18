import React, {Component} from 'react'
import {getUserList} from "../../api/user";
import {Table} from "antd";
import {Link} from "react-router-dom";

class UserList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {userList: []};
    this.initList()
  }

  initList = () => {
    getUserList().then(res => {
      console.log(res);
      this.setState({userList: res.data})
    })
  };

  render() {

    let {userList} = this.state;

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
        <Table rowKey="id" dataSource={userList} columns={columns}/>
      </div>
    )
  }
}

export default UserList;