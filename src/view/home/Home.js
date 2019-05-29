import React, {Component} from 'react'
import {Link} from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div>
        <Link to={"/login"}>
          登录
        </Link>
        <div className='ad google-ad testAd'>这是广告位</div>
      </div>
    )
  }
}

export default Home;
