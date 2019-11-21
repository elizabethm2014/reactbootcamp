import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Jokes from "./components/Jokes";
import FileUpload from "./components/FileUpload";
import Header from "./components/Header";
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App/></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes/></Header>} />
            <Route path='/fileupload' render={() => <Header><FileUpload/></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

