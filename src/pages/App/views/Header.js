import {Dropdown, Icon, Layout, Menu} from "antd";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import {logout} from '../../../api/api';
import {connect} from "react-redux";
import { withRouter } from "react-router-dom"
const {Header} = Layout;

class HeaderCustom extends Component {
    constructor(props) {
        super(props);
        this.tryLogout = this.tryLogout.bind(this);
        this.menu = this.menu.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        if (e.key == 'logout')
            this.tryLogout();
    }
    tryLogout() {
        logout().then(res => {
            this.props.history.push('/');
        }).catch(err => {
            console.log(err);
        })
    }
    menu() {
        return(
            <Menu onClick={this.handleClick}>
                <Menu.Item>
                    <Link to="/user/edit">修改个人信息</Link>
                </Menu.Item>
                <Menu.Item key="logout">
                    <span >注销</span>
                </Menu.Item>
            </Menu>
        )
    }
    render() {
        return(
            <Header className="header" style={{padding: 0, color: '#fff'}}>
                <span style={{fontSize: 18, paddingLeft: '30px'}}>图书管理系统</span>
                <Dropdown overlay={this.menu} placement="bottomCenter">
                    <div className="header-user">
                        <Icon type="user" /><span>{this.props.userName || '用户名'}</span>
                    </div>
                </Dropdown>
            </Header>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLogin: state.Login.isLogin,
        userName: state.Login.userName
    }
}
export default withRouter(connect(mapStateToProps, null)(HeaderCustom));