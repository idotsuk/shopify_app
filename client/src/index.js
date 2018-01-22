import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './css/index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './js/stores/Store'

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <div>
                <App />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);
