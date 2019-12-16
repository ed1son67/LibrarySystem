import React, {Component} from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import {connect} from "react-redux";
import {loginSuccess} from '../actions';
import {login} from '../../../api/api';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    tryLogin(data) {
        let formData = new FormData();
        formData.append("userAccount", data.userAccount);
        formData.append("password", data.password);

        login(formData).then(res =>{
            if (res.data.result == "success") {
                this.props.loginSuccess("123");
            } else {

            }
        }).catch(err => {
            console.log(err);
            message.error("登录失败，请检查网络后重试！");
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 尝试登陆
                console.log('Received values of form: ', values);
                this.tryLogin(values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userAccount', {
                        rules: [{ required: true, message: '账号不能为空!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入账号"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '密码不能为空!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginSuccess: text => {
            dispatch(loginSuccess(text));
        }
    }
}
const mapStateToProps = state => {
    return {

    }
}
LoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);