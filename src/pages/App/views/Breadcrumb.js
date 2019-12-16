import {Breadcrumb} from "antd";
import React from "react";

const routes = [
    {
        path: '/',
        breadcrumbName: '主页',
    },
    {
        path: '/user',
        breadcrumbName: '个人信息管理',
        children: [
            {
                path: '/user/edit',
                breadcrumbName: '修改个人信息',
            }
        ],
    },
    {
        path: '/book',
        breadcrumbName: '书籍管理',
    },
];
const BreadcrumbCustom  = () => (
    <Breadcrumb
        separator=">"
        routes={routes}
        style={{ margin: '20px 16px' }}>

    </Breadcrumb>
)

export default BreadcrumbCustom;
