import React, {Component} from 'react'
import {getUserList} from "../../api/user";
import {Table} from "antd";

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
    })
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Table data={this.state.userList}/>
      </div>
    )
  }
}

export default UserList;