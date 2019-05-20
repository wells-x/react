/**
 * Create by wells
 * @date
 */
import React, {Component} from 'react';
import './login.scss';
import style from './login.module.css'

console.log(style.positionFixed);

class Login extends Component {
    /*componentWillMount () {
        const {receiveData = new Function} = this.props;
        receiveData(null, 'auth');
    }*/

    // componentWillReceiveProps(nextProps) {
    //     const { auth: nextAuth = {} } = nextProps;
    //     const { history } = this.props;
    //     if (nextAuth.data && nextAuth.data.uid) {   // 判断是否登陆
    //         localStorage.setItem('user', JSON.stringify(nextAuth.data));
    //         history.push('/');
    //     }
    // }
    /*componentDidUpdate (prevProps) { // React 16.3+弃用componentWillReceiveProps
        const {auth: nextAuth = {}, history} = this.props;
        // const { history } = this.props;
        if (nextAuth.data && nextAuth.data.uid) {   // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(nextAuth.data));
            history.push('/');
        }
    }*/

    /*handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { fetchData } = this.props;
                if (values.userName === 'admin' && values.password === 'admin') fetchData({funcName: 'admin', stateName: 'auth'});
                if (values.userName === 'guest' && values.password === 'guest') fetchData({funcName: 'guest', stateName: 'auth'});
            }
        });
    };
    gitHub = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin';
    };*/
    render() {
        // const { getFieldDecorator } = this.props.form;
        return (
            <div className={['login', style.positionFixed].join(' ')}>
                <div className="login-form">
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
/*
const mapStateToPorps = state => {
    const { auth } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
});
*/


// export default connect(mapStateToPorps, mapDispatchToProps)(Form.create()(Login));
