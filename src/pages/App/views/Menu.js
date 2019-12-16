import {Icon, Layout, Menu} from "antd";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

const {SubMenu} = Menu;

const  selectMenu = (e) => {
    console.log(e);
}
const adminMenu = (
    <Menu
        // theme="dark"
        mode="inline"
        onSelect={selectMenu}
        style={{ height: '100%', borderRight: 0 }}
    >
        <SubMenu
            key="sub1"

            title={<span><Icon type="book" />书籍管理</span>}
        >
            <Menu.Item key="0">
                <Link to="/book/manage"><span>管理书籍</span></Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to="/book/verify"><span>审核借还</span></Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
            key="sub2"
            title={<span><Icon type="user" />个人信息管理</span>}
        >
            <Menu.Item key="2">
                <span>修改个人信息</span>
            </Menu.Item>
        </SubMenu>
    </Menu>
)

const userMenu = (
        <Menu
            // theme="dark"
            mode="inline"
            onSelect={selectMenu}
            style={{ height: '100%', borderRight: 0 }}
        >
            <SubMenu
                key="sub1"

                title={<span><Icon type="book" />书籍管理</span>}
            >
                <Menu.Item key="0">
                    <Link to="/book/lend"><span>借阅情况</span></Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="/book/find"><span>查找书籍</span></Link>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={<span><Icon type="user" />个人信息管理</span>}
            >
                <Menu.Item key="2">
                    <Link to="/user/edit"><span>修改个人信息</span></Link>
                </Menu.Item>
            </SubMenu>
        </Menu>
)
class MenuCustom extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.isAdmin)
            return adminMenu;
        else
            return userMenu;
    }
}
const mapStateToProps = state => {
    return {
        isAdmin: state.Login.isAdmin
    }
}
export default connect(mapStateToProps, null)(MenuCustom);