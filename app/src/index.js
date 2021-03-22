import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
        <Suspense fallback="...loading">
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>,
    document.getElementById('root')
);

serviceWorker.unregister();