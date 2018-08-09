import React, {Component} from 'react';
import {Menu, Icon,} from 'antd';
import {store} from "../store";

// console.log(store.getState());
const {SubMenu, Item} = Menu;

class Menus extends Component {
    state = {
        collapsed: () => store.getState().nav.isCollapsed,
    };

    /* toggleCollapsed = () => {
         this.setState({
             collapsed: !this.state.collapsed,
         });
     };*/

    render() {
        // console.log(this.props);
        return (
            <nav className="no-scroll"
                 style={
                     {
                         textAlign: 'left',
                         position: 'absolute',
                         top: '0',
                         bottom: '50px',
                         right: 0,
                         left: 0,
                         overflowY: 'auto'
                     }
                 }>
                <Menu defaultSelectedKeys={['1']}
                      defaultOpenKeys={['sub1']}
                      mode="inline"
                      inlineCollapsed={this.props.collapsed}>
                    <Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Item>
                    <Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Item>
                    <Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Item key="5">Option 5</Item>
                        <Item key="6">Option 6</Item>
                        <Item key="7">Option 7</Item>
                        <Item key="8">Option 8</Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Item key="9">Option 9</Item>
                        <Item key="10">Option 10</Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Item key="11">Option 11</Item>
                            <Item key="12">Option 12</Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                        <Item key="15">Option 5</Item>
                        <Item key="16">Option 6</Item>
                        <Item key="17">Option 7</Item>
                        <Item key="18">Option 8</Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Item key="19">Option 9</Item>
                        <Item key="20">Option 10</Item>
                        <SubMenu key="sub6" title="Submenu">
                            <Item key="21">Option 11</Item>
                            <Item key="22">Option 12</Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </nav>
        )
    }
}

export default Menus;