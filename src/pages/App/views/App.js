import React, {Component} from 'react';

import {connect} from "react-redux";
import '../style.css';
import {Layout} from "antd";
import {HashRouter as Router, Route, Link} from "react-router-dom";

// import BreadcrumbCustom from './Breadcrumb';
import HeaderCustom from './Header';
import MenuCustom from './Menu';

import {view as Login} from "../../LoginPage";
import {view as Welcome} from '../../WelcomePage';
import {view as User} from '../../UserPage';
import {view as Book} from '../../BookPage';

const { Footer, Content, Sider} = Layout;

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.islogin) {
            return <Login />
        } else {
            return (
                <Router>
                    <Layout className="layout">
                        <HeaderCustom/>
                        <Layout className="content-layout">
                            <Sider width={230} className="sider">
                                <MenuCustom />
                            </Sider>
                            <Layout>
                                {/* <BreadcrumbCustom/> */}
                                <Content style={{margin: '16px 0 0 16px', overflow: 'auto'}}>
                                    <div className="content" >
                                        <Route path="/" exact component={Welcome} />
                                        <Route path="/user/edit"  component={User} />
                                        <Route path="/book"  component={Book} />
                                    </div>
                                </Content>
                                <Footer style={{  textAlign: 'center', paddingBottom: '15   px'}}> ©CopyRight 2019 Created by Ed1son Chan</Footer>
                            </Layout>
                        </Layout>
                    </Layout>
                </Router>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        islogin: state.Login.islogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
