import React, {Component} from 'react';

import '../style.css';
import {Button, Form, Input, Table, Divider, Statistic} from 'antd';
import {getBookRecommend, getBookStore, queryBook} from "../../../api/api";



const bookStoreColumns = [
    {
        title: '图书编号',
        dataIndex: 'bookNumber',
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
        title: '应归还时间',
        dataIndex: 'shouldReturnTime',
    },

];

let bookStoreData = [];



class Find extends Component {
    constructor(props) {
        super(props);
        this.searchBook = this.searchBook.bind(this);
        this.state = {
            bookStore: [
            ],
            bookDetail: [

            ]
        }
    }
    BookStore()  {
        let array = [];
        this.state.bookStore.forEach(element => {

            array.push(<Statistic title={element.bookType} style={{paddingRight: '30px'}} value={element.bookCount} suffix="本" />);
        })
        return array;
    }
    componentDidMount() {
        getBookRecommend().then(res => {
            console.log(res.data.message)
        }).catch(err => {
            console.log(err)
        })
        getBookStore().then(res => {
            console.log(res.data.message)

            this.setState({
                bookStore: res.data.message
            })
        }).catch(err => {
            console.log(err)
        })
        // 获取所有的藏书
        queryBook().then(res => {
            this.setState({
                bookDetail: res.data.message
            });
        }).catch(err => {
            console.log(err)
        })
    }
    searchBook(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                queryBook(values.bookName).then(res => {
                    this.setState({
                        bookDetail: res.data.message
                    });
                }).catch(err => {
                    console.log(err)
                })
            }
        });
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return(
            <div className="find-container">
                <Divider orientation="left">馆藏情况</Divider>
                <div style={{display: "flex"}}>
                    {this.BookStore()}
                </div>
                <Divider orientation="left">搜索图书</Divider>
                <Form layout="inline" onSubmit={this.searchBook} >
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
                    columns={bookStoreColumns}
                    dataSource={this.state.bookDetail}
                    bordered
                    style={{padding: '15px 0'}}
                />
            </div>
        )
    }
}
Find = Form.create()(Find);
export default Find;