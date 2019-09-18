import React, {Component} from "react";
import {getUserById} from "../../api/user";

class Details extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const {id} = props.match.params;
    this.state = {id, user: {id: ''}};
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

    console.log(user);
    return (
      <div>{JSON.stringify(user)}</div>
    )
  }
}

export default Details