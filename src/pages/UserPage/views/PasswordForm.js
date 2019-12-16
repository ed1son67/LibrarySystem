import React, {Component} from "react";
import {Form, Divider, Input, Button } from 'antd';
import {connect} from 'react-redux';

class PasswordForm extends Component {
    constructor(props) {
        super(props);
        this.submitPassword = this.submitPassword.bind(this);
    }
    submitPassword(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    }

    validatePassword() {

    }
    comparePassword() {

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
                    <Form.Item label="当前密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [{require: true, message: "密码不能为空"}]
                        })(
                            <Input placeholder="请输入当前密码"/>,
                        )}
                    </Form.Item>
                    <Form.Item label="新密码" >
                        {getFieldDecorator('newPassword', {
                            rules: [
                                {require: true, message: "密码不能为空"},
                                {validator: this.validatePassword}
                                ]
                        })(
                            <Input placeholder="请输入新密码"/>,
                        )}
                    </Form.Item>
                    <Form.Item label="确认密码" hasFeedback>
                        {getFieldDecorator('confirmPassword', {
                            rules: [
                                {require: true, message: "密码不能为空"},
                                {validator: this.comparePassword}
                                ]
                        })(
                            <Input placeholder="请确认密码"/>,
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