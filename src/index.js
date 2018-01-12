import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from "react-router-dom";
import App from './js/App';
import Manage from "./js/ManagePage"
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render((
    <HashRouter>
        <div className="full-screen">
            <Route exact path="/" component={App}/>
            <Route path="/yx/manage" component={Manage}/>
        </div>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
