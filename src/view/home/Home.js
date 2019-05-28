import React, {Component} from 'react'
import {Link} from "react-router-dom";

// import {Link} from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
        <Link to={"/login"}>
          登录
        </Link>
      </div>
    )
  }
}

export default Home;
