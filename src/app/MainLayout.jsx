import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

import HighchartsMenu from "./components/navigation/presentation/HighchartsMenu";
import DashboardHome from lazy(() => import("./components/dashboards/container/DashboardHome"));
import DailyStocks from lazy(() => import("./components/stocks/container/DailyStocks"));

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HighchartsMenu />
                <main>
                    <Suspense fallback={<div style={{ textAlign: "center", marginTop: "10%" }}>
                        <h5>Loading...</h5>
                    </div>}>
                        <Switch>
                            <Route path="/" component={DashboardHome} exact />
                            <Route path="/home" render={props => 
                            <DashboardHome {...props} />} exact />
                            <Route path="/stocks/daily" render={props => 
                            <DailyStocks {...props} />} />
                        </Switch>
                    </Suspense>
                </main>
            </div>
        )
    }
}
