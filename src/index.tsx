import React from "react";
import App from "./app";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import * as _ from 'lodash';
function Init() {


    return (
            <React.StrictMode>
            <Router>
                    <App/>
            </Router>
           </React.StrictMode>
    )
}

ReactDOM.render(<Init />, document.getElementById('root'));

