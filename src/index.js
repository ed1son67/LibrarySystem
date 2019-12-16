import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {Router, Route} from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom'
import {view as App} from './pages/App';
import store from './store.js';
import * as serviceWorker from './serviceWorker';

const routers = (
    <Provider store={store}>
        <Router >
            <Route path="/" component={App}>
                {/*<IndexRoute component={Welcome}/>*/}

                {/*<Route path="index">*/}
                {/*    <Route path="option1" tableName="test" getComponent={DBTableContainer}/>*/}
                {/*    <Route path="option2" tableName="testSms" getComponent={DBTableContainer}/>*/}
                {/*    <Route path="option3" tableName="testAction" getComponent={DBTableContainer}/>*/}
                {/*</Route>*/}

            </Route>
        </Router>
    </Provider>
)

// ReactDOM.render(routers, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
   , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
