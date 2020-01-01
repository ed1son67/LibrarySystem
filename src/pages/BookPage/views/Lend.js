import React, {Component} from 'react';
import {Button, Divider, Table} from 'antd';
import {getLendInfo} from '../../../api/api';
const columns = [
    {
        title: '图书编号',
        dataIndex: 'bookId',
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
        title: '借书时间',
        dataIndex: 'lendTime',
    },
    {
        title: '应归还时间',
        dataIndex: 'shouldReturnTime',
    },
    {
        title: '归还时间',
        dataIndex: 'returnTime',
    }

];



class Lend extends Component{
    constructor(props) {
        super(props);
        this.state ={
            data: []
        }
    }
    componentDidMount() {
        getLendInfo().then(res =>{
            console.log(res.message);
            let arr = [];
            for (let record of res.message) {
                console.log();
                let data = record.bookLendInfo[0];
                let obj = {};
                obj.bookId = data.book.Bid;
                obj.bookName = data.book.Bname;
                obj.bookType = data.book.Btype;
                obj.publish = data.book.publish.Pname;
                obj.lendTime = data.lendTime;
                obj.shouldReturnTime = data.shouldReturnTime;
                obj.returnTime = data.returnTime;
                arr.push(obj);
            }
            console.log(arr);
            this.setState({
                data: arr
            })
        }).catch(err => console.log(err))
    }
    render() {
        return(
            <div>
                <Divider orientation="left">个人借阅情况</Divider>
                <Table
                    columns={columns}
                    dataSource={this.state.data}
                    bordered
                    style={{padding: '15px 0'}}
                />
            </div>
        )
    }
}

export default Lend;