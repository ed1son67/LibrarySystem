import {Icon, Layout, Menu} from "antd";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";

const {SubMenu} = Menu;

const selectMenu = (e) => {
    console.log(e);
}

class MenuCustom extends Component{
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            currentSub: ''
        }
    }
    componentWillMount() {
        console.log(this.props.history.location);
        let location = this.props.history.location.pathname;
        let arr = location.split('/');
        console.log(arr);
        this.setState({
            currentSub: arr[1],
            current: arr[2]
        })
    }
    render() {
        const userMenu = (
            <Menu
                // theme="dark"
                mode="inline"
                defaultSelectedKeys={[this.state.current]}
                defaultOpenKeys={[this.state.currentSub]}
                style={{ height: '100%', borderRight: 0 }}

            >
                <SubMenu
                    key="book"

                    title={<span><Icon type="book" />书籍管理</span>}
                >
                    <Menu.Item key="lend">
                        <Link to="/book/lend"><span>借阅情况</span></Link>
                    </Menu.Item>
                    <Menu.Item key="find">
                        <Link to="/book/find"><span>查找书籍</span></Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="user"
                    title={<span><Icon type="user" />个人信息管理</span>}
                >
                    <Menu.Item key="edit">
                        <Link to="/user/edit"><span>修改个人信息</span></Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        )
        const adminMenu = (
            <Menu
                // theme="dark"
                mode="inline"
                defaultSelectedKeys={[this.state.current]}
                defaultOpenKeys={[this.state.currentSub]}
                style={{ height: '100%', borderRight: 0 }}
                selectedKeys={[this.state.current]}
            >
                <SubMenu
                    key="book"

                    title={<span><Icon type="book" />书籍管理</span>}
                >
                    <Menu.Item key="manage">
                        <Link to="/book/manage"><span>管理书籍</span></Link>
                    </Menu.Item>
                    <Menu.Item key="verify">
                        <Link to="/book/verify"><span>审核借还</span></Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu
                    key="user"
                    title={<span><Icon type="user" />个人信息管理</span>}
                >
                    <Menu.Item key="edit">
                        <Link to="/user/edit"><span>修改个人信息</span></Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        )
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
export default withRouter(connect(mapStateToProps, null)(MenuCustom));