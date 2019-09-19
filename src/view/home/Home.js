import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {store} from "../../store";

class Home extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      const {token} = store.getState().app;
      this.state.isLogin = !!token;
    })
  }

  state = (function () {
    const {token} = store.getState().app;
    return {
      isLogin: !!token
    }
  })();


  render() {
    return (
      <div>
        {
          this.state.isLogin ?
            <Link to={'/users'}>用户列表</Link> :
            <Link to={"/login"}>登录</Link>
        }
        <div className='ad google-ad testAd'>这是广告位</div>
      </div>
    )
  }
}

export default Home;
