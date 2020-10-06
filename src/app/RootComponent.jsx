import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./MainLayout";
import stockStore from "./store/stocks-store";


export default class RootComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={stockStore}>
                <BrowserRouter>
                    <MainLayout />
                </BrowserRouter>
            </Provider>
        );
    }
}