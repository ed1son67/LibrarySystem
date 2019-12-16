import React, {Component} from 'react';
import {Divider, Table} from 'antd';

const columns = [
    {
        title: '图书编号',
        dataIndex: 'bookId',
    },
    {
        title: '图书名称',
        className: 'column-money',
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
    },
];

const data = [];

class Lend extends Component{
    render() {
        return(
            <div>
                <Divider orientation="left">个人借阅情况</Divider>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered

                />
            </div>
        )
    }
}

export default Lend;