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
                <style jsx global>{`
                    html, body, #__next {
                        width: 100%;
                        height: 100%;
                        font-family: sans-serif;
                    }
                    
                    #__next {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column
                    }
                `}</style>
            </Provider>
        );
    }
}

export default MyApp;