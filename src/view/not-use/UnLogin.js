import React, {Component} from "react";
import {Link} from "react-router-dom";

class UnLogin extends Component {

  render() {
    return (
      <div>
        <Link to="/login">去登陆</Link>
      </div>
    )
  }
}

export default UnLogin