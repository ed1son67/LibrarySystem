import React, {Component} from "react";
import {Form, Radio, Select, Divider, Input, Button, message} from 'antd';
import {connect} from 'react-redux';

const {Option} = Select;
class InfoForm extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.form);
        this.submitInfo = this.submitInfo.bind(this);
    }
    submitInfo(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
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
                <Divider orientation="left">修改个人信息</Divider>
                <Form {...formItemLayout} style={{padding: 20}} onSubmit={this.submitInfo}>
                    <Form.Item label="手机号码">
                        {getFieldDecorator('phone', {
                            rules: [
                                {

                                }
                            ]
                        })(
                            <Input placeholder="请输入手机号码"/>
                        )}
                    </Form.Item>
                    <Form.Item label="邮箱">
                        {getFieldDecorator('email', {
                            rules: [

                            ]
                        })(
                            <Input placeholder="请输入邮箱"/>,
                        )}
                    </Form.Item>
                    <Form.Item label="专业" >
                        {getFieldDecorator('dept', {
                            rules: [],
                        })(
                            <Select placeholder="请选择专业">
                                <Option value="china">软件工程</Option>
                                <Option value="usa">网络工程</Option>
                                <Option value="usa">信息安全</Option>
                                <Option value="usa">计算机科学与技术</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="性别">
                        {getFieldDecorator('sex')(
                            <Radio.Group>
                                <Radio value="a">男</Radio>
                                <Radio value="b">女</Radio>
                            </Radio.Group>,
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

InfoForm = Form.create({ name: 'info' })(InfoForm);
export default connect(mapStateToProps, mapDispatchToProps)(InfoForm);