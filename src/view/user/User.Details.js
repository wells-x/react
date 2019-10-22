import React, {Component} from "react";
import {getUserById} from "../../api/user";

class Details extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const {id} = props.match.params;
    this.state = {id, user: null};
    this.getDetailsData()
  }

  getDetailsData() {
    getUserById({id: this.state.id})
      .then(res => {
        console.log(res);
        this.setState({user: res.data})
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    let {user} = this.state;
    return (
      <div>{user ? JSON.stringify(user) : ''}</div>
    )
  }
}

export default Details