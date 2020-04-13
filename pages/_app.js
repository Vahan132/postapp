import App from 'next/app';
import {Provider} from "react-redux";
import store from "../store";
import Index from "../components";
import React from "react";

class MyApp extends App {

    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        );
    }
}

export default MyApp;