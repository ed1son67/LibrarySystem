import React, {Component} from "react";
import {Form, Divider, Input, Button ,message} from 'antd';
import {connect} from 'react-redux';
import {editPassword} from '../../../api/api';

class PasswordForm extends Component {
    constructor(props) {
        super(props);
        this.submitPassword = this.submitPassword.bind(this);
        this.tryEditPassword = this.tryEditPassword.bind(this);
        this.state = {

        }
    }
    tryEditPassword(values) {
        let formData = new FormData();
        formData.append("password", values.password);
        formData.append("newPassword1", values.newPassword);
        formData.append("newPassword2", values.confirmPassword);

        editPassword(formData).then(res => {
            if (res.result == 'success') {
                message.success(res.message);
            } else {
                message.error(res.message);
            }
        })
    }
    submitPassword(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.tryEditPassword(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 1 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 1,
                },
                sm: {
                    span: 1,
                    offset: 1,
                },
            },
        }
        return(
            <div>
                <Divider orientation="left">修改密码</Divider>
                <Form {...formItemLayout} style={{padding: 20}} onSubmit={this.submitPassword}>
                    <Form.Item label="当前密码" >
                        {getFieldDecorator('password', {
                            rules: [{require: true, message: "密码不能为空"}]
                        })(
                            <Input type="password" placeholder="请输入当前密码"/>,
                        )}
                    </Form.Item>
                    <Form.Item label="新密码" >
                        {getFieldDecorator('newPassword', {
                            rules: [
                                {require: true, message: "密码不能为空"},

                                ]
                        })(
                            <Input type="password" placeholder="请输入新密码"/>,
                        )}
                    </Form.Item>
                    <Form.Item label="确认密码" >
                        {getFieldDecorator('confirmPassword', {
                            rules: [
                                {require: true, message: "密码不能为空"},

                                ]
                        })(
                            <Input type="password" placeholder="请确认密码"/>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            确认
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapStateToProps = state => {
    return {

    }
}

PasswordForm = Form.create({ name: 'info' })(PasswordForm);
export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);