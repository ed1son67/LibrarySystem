import React, {Component} from 'react';

import '../style.css';

import Find from './Find';
import Lend from './Lend';
import Verify from './Verify';
import Manage from './Manage';

import { Route} from "react-router-dom";

import {connect} from "react-redux";


class Book extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {

    }
    render() {
        if (this.props.isAdmin)
            return (
                <div>
                    <Route path="/book/verify" component={Verify}></Route>
                    <Route path="/book/manage" component={Manage}></Route>
                </div>
            )
        else
            return (
                <div>
                    <Route path="/book/find" component={Find}></Route>
                    <Route path="/book/lend" component={Lend}></Route>
                </div>
            )

    }
}

const mapStateToProps = state => {
    return {
        isAdmin: state.Login.isAdmin
    }
}
export default connect(mapStateToProps, null)(Book);