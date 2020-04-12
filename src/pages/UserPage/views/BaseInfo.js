import React, {Component} from 'react';
import {Divider, Descriptions} from "antd";
import {getUserInfo } from '../../../api/api';

class BaseInfo extends Component {
    constructor(props) {
        super(props)
        this.initalUserInfo = this.initalUserInfo.bind(this);
        this.state = {
            userName: '',
            account: '',
            sex: '',
            dept: '',
            email: ''
        }
    }
    initalUserInfo() {
        getUserInfo().then(res => {
            console.log(res);
            this.setState({
                userName: res.message.Sname,
                account: res.message.Saccount,
                sex: res.message.sex,
                dept: res.message.dept,
                email: res.message.email
            })
        })
    }
    componentDidMount() {
        this.initalUserInfo();
    }
    render() {
        return(
            <div>

                <Descriptions title="个人信息">
                    <Descriptions.Item label="姓名">{this.state.userName}</Descriptions.Item>
                    <Descriptions.Item label="学号">{this.state.account}</Descriptions.Item>
                    <Descriptions.Item label="专业">{this.state.dept}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{this.state.email}</Descriptions.Item>
                    <Descriptions.Item label="性别">{this.state.sex}</Descriptions.Item>
                </Descriptions>
            </div>
        )
    }
}

export default BaseInfo;