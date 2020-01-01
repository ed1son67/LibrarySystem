import React, {Component} from 'react';
import {Button, Divider, DatePicker,Form, Input, Table, Modal, message} from 'antd';

import {getNotReturnRecord, queryBook,lendBook,returnBook} from "../../../api/api";


class Verify extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visible:false,
            borrowVisible: false,
            allBooksData: [],
            nowBid: null,
            nowUserAccount: null,
            confirmBorrowLoading: false,
            confirmReturnLoading: false
        }
        this.searchStudent = this.searchStudent.bind(this);
        this.returnBook = this.returnBook.bind(this);
        this.searchBook = this.searchBook.bind(this);
        this.borrowBook = this.borrowBook.bind(this);
        this.returnBook = this.returnBook.bind(this);
        this.openBorrowModal = this.openBorrowModal.bind(this);
        this.openReturnModal = this.openReturnModal.bind(this);
    }
    getNotReturnData(userAccount = "") {
        getNotReturnRecord(userAccount).then(res => {
            if (res.result == "success") {
                this.setState({
                    data: res.message
                })
            }
        })
    }
    componentDidMount() {
        this.getNotReturnData();
        this.getAllBooks();
    }

    searchStudent(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {

                this.getNotReturnData(values.userAccount);

        });
    }
    getAllBooks(bookName = "") {
        queryBook(bookName).then(res => {
            this.setState({
                allBooksData: res.message
            });
        })
    }
    searchBook(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

                this.getAllBooks(values.bookName);

        });
    }


    /**
     * 借书请求
     */
    borrowBook() {
        let formDate = new FormData();
        this.props.form.validateFields((err, values) => {

            if (!err) {
                this.setState({
                    confirmBorrowLoading: true
                });
                formDate.append("userAccount", values.userAccount2);
                formDate.append("shouldReturnTime", values.shouldReturnTime.format('YYYY-MM-DD'));
                formDate.append("Bid", this.state.nowBid);

                lendBook(formDate).then(res=>{
                    if (res.result == 'success') {
                        message.success(res.message);
                        this.setState({
                            borrowVisible: false,
                            confirmBorrowLoading: false
                        });
                        this.getNotReturnData();
                        this.getAllBooks();
                    } else {
                        message.error(res.message);
                        this.setState({
                            confirmBorrowLoading: false
                        });
                    }
                })
            }
        })
    }

    /**
     * 还书请求
     */
    returnBook() {
        let formDate = new FormData();
        this.props.form.validateFields((err, values) => {

                this.setState({
                    confirmReturnLoading: true
                });
                formDate.append("userAccount", this.state.nowUserAccount);
                formDate.append("Bid", this.state.nowBid);

                returnBook(formDate).then(res=>{
                    if (res.result == 'success') {
                        message.success(res.message);
                        this.setState({
                            confirmReturnLoading: false,
                            visible: false,
                        });
                        this.getNotReturnData();
                        this.getAllBooks();
                    } else {
                        message.error(res.message);
                        this.setState({
                            confirmReturnLoading: false
                        });
                    }
                })

        })
    }
    openReturnModal(userAccount, Bid) {
        this.setState({
            visible: true,
            nowBid: Bid,
            nowUserAccount: userAccount
        })
    }
    openBorrowModal(Bid) {
        this.setState({
            borrowVisible: true,
            nowBid: Bid
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const columns = [

            {
                title: '学号',
                dataIndex: 'userAccount',
            },
            {
                title: '学生名',
                dataIndex: 'userName',
            },
            {
                title: '图书编号',
                dataIndex: 'Bid',
            },
            {
                title: '图书名称',
                dataIndex: 'bookName',
            },
            {
                title: '借书时间',
                dataIndex: 'lendTime',
            },
            {
                title: '应归还时间',
                dataIndex: 'shouldReturnTime',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => {
                    let Bid = record.Bid;
                    let userAccount = record.userAccount;
                    return(
                        <Button type="primary" onClick={this.openReturnModal.bind(this, userAccount, Bid)}>还书</Button>
                    )
                }
            }
        ];
        const allBooksColumns = [
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
            }, {
                title: '操作',
                render: (text, record) => {
                    let Bid = record.Bid;
                    return(
                        <Button type="primary" onClick={this.openBorrowModal.bind(this, Bid)}>借书</Button>
                    )
                }
            }
        ];

        return (
            <div>
                <Modal
                    title="还书"
                    centered
                    visible={this.state.visible}
                    onOk={this.returnBook}
                    onCancel={ ()=>(this.setState({
                        visible: false
                    }))}
                    cancelText="取消"
                    okText="确定"
                    confirmLoading={this.state.confirmReturnLoading}
                />
                <Divider orientation="left">未还书名单</Divider>

                <Form layout="inline" onSubmit={this.searchStudent} style={{ margin: "10px 0"}}>
                    <Form.Item label="搜索：">
                        {getFieldDecorator('userAccount', {

                        })(
                            <Input placeholder="请输入学号" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary"  htmlType="submit">查询</Button>
                    </Form.Item>
                </Form>
                <Table
                    columns={columns}
                    dataSource={this.state.data}
                    bordered
                />
                <Divider orientation="left">所有书籍</Divider>
                <Modal
                    title="借书"
                    centered
                    visible={this.state.borrowVisible}
                    onOk={this.borrowBook}
                    onCancel={() => {
                        this.setState({
                            borrowVisible: false
                        })
                    }}
                    cancelText="取消"
                    okText="确定"
                    confirmLoading={this.state.confirmBorrowLoading}
                >
                    <Form  style={{width: "200px"}} >
                        <Form.Item label="学号："  >
                            {getFieldDecorator('userAccount2', {
                                rules:[{required: true, message: "学号不可以为空"}]
                            })(
                                <Input placeholder="请输入学号" />
                            )}
                        </Form.Item>
                        <Form.Item label="还书日期：">
                            {getFieldDecorator('shouldReturnTime', {
                                rules:[{required: true, message: "日期不可以为空"}]
                            })(
                                <DatePicker showTime format="YYYY-MM-DD"></DatePicker>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
                <Form layout="inline" onSubmit={this.searchBook} style={{ margin: "10px 0"}}>
                    <Form.Item label="搜索：">
                        {getFieldDecorator('bookName', {
                        })(
                            <Input placeholder="请输入书名" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary"  htmlType="submit">查询</Button>
                    </Form.Item>
                </Form>
                <Table
                    columns={allBooksColumns}
                    dataSource={this.state.allBooksData}
                    bordered
                />
            </div>
        )
    }
}
Verify = Form.create()(Verify);
export default Verify;