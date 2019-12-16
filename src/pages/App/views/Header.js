import {Dropdown, Icon, Layout, Menu} from "antd";
import React from "react";
import {Link} from "react-router-dom";
// import '../style.css';
const {Header} = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <Link to="/user/edit">修改个人信息</Link>
        </Menu.Item>
        <Menu.Item>
            <span>注销</span>
        </Menu.Item>
    </Menu>
);

const HeaderCustom = () => (
        <Header className="header" style={{  padding: 0, color: '#fff' }}>
            <span style={{fontSize: 18, paddingLeft: '30px'}}>图书管理系统</span>
            <Dropdown overlay={menu} placement="bottomCenter">
                <div className="header-user">
                    <Icon type="user" /><span>用户名</span>
                </div>
            </Dropdown>
        </Header>
)

export default HeaderCustom;