import React, {Component} from 'react';
import {Button, Divider, Table, Upload, Icon, message} from "antd";
import url from '../../../api/config'
import {queryBook} from "../../../api/api";

const props = {
    name: 'file',
    action:  url.upload,
    method: 'post',
    withCredentials: true,
    accept: ".xlsx",
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            // message.success();
        } else if (info.file.status === 'error') {
            message.error('上传失败');
        }
    },
};


class Manage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [

            ]
        }
    }
    componentDidMount() {
        queryBook().then(res => {
            this.setState({
                data: res.message
            });
        })
    }
    editBook() {

    }
    deleteBook() {

    }
    render() {
        const columnsData = [
            {
                title: '图书编号',
                dataIndex: 'Bid',
            },
            {
                title: '图书名称',
                dataIndex: 'bookName',
            },
            {
                title: '类别',
                dataIndex: 'bookType',
            },
            {
                title: '出版社',
                dataIndex: 'publish',
            },
            {
                title: '馆藏位置',
                dataIndex: 'location',
            },
            {
                title: '是否可借',
                dataIndex: 'isReturn',
            },
            {
                title: '图书库存',
                dataIndex: 'bookNumber',
            },
            {
                title: '操作',
                render: (text, record) => {
                    let Bid = record.Bid;
                    let userAccount = record.userAccount;
                    return (
                        <div>
                            <Button type="primary" style={{marginRight: '10px'}} onClick={this.editBook}>编辑</Button>
                            <Button type="danger" onClick={this.deleteBook}>删除</Button>
                        </div>
                    )
                }
            }
        ]
        return (
            <div>
                <Divider orientation="left">上传书籍</Divider>

                <div style={{width: '150px'}}>
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> 上传书籍
                        </Button>
                    </Upload>
                </div>
                <Divider orientation="left">管理书籍</Divider>
                <Table
                    columns={columnsData}
                    dataSource={this.state.data}
                    bordered
                />
            </div>
        )
    }
}

export default Manage;