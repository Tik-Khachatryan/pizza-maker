import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {connect, Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import './index.css';
import {cache} from "./cache/cache.middleware";
import {live} from "./live/live.middleware";
import {mainApp} from "./reducers/reducers";
import {NotificationManager} from 'react-notifications';


const mapStateToProps = (state) => ({
    data: state
})

const mapDisPatchToProps = dispatch => ({
    saveData:           () => dispatch({type: "SAVE_DATA"}),
    createNotification: (type) => {
            switch (type) {
                case 'success':
                    NotificationManager.success("Order Completed!!!")
                    break;
                default:
                    return null
            }
        }

})

const Wrapper = connect(mapStateToProps, mapDisPatchToProps)(App)
let store     = createStore(mainApp, applyMiddleware(cache, live))


ReactDOM.render(
    <Provider store={store}>
        <Wrapper/>
    </Provider>,
    document.getElementById('root')
);

