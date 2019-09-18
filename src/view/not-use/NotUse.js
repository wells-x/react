import React from 'react';
import img from '../../assets/imgs/404.png';
import '../../assets/lib/animate.css';


class NotUse extends React.Component {
  state = {
    animated: ''
  };
  enter = () => {
    this.setState({animated: 'hinge'})
  };

  render() {
    let style = {height: '100%', background: 'transparent', padding: '0 120px', overflow: 'hidden'};
    return (
      <section className="center" style={style}>
        <h2 style={{fontSize: '24px', textAlign: 'center'}}>404</h2>
        <div>
          <img src={img} alt="404" style={{textAlign: "center"}} className={`animated swing ${this.state.animated}`}
               onMouseEnter={this.enter}/>
        </div>
      </section>

    )
  }
}

export default NotUse;
