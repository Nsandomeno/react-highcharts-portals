import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { getDailyStocksTimeSeries } from '../../../actions/stock-actions';
import getSeriesData from '../../../utilities/global-functions';

class DailyStocks extends Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.getDailyStocksTimeSeries("MSFT");
    }

    render() {
        if (this.props.dailyStocks) {
            const stockSeriesData = getSeriesData(this.props.dailyStocks["Time Series (Daily)"])
            const options = {
                title: {
                    text: "Daily Chart - MSFT"
                },
                rangeSelector: {
                    selected: 6
                },
                series: [
                    {
                        name: "MSFT",
                        data: stockSeriesData
                    }
                ]
            } // END OPTIONS OBJ
        
        return (
            <div>
                <HighchartsReact
                highcharts={Highcharts}
                constructorType={"stockChart"}
                options={options}
                />
            </div>
            )
        } else {
            return <h5>Loading...</h5>
        }
    }
}

const mapStateToProps = state => ({
    dailyStocks: state.stocksReducer.dailyStocks
})

connect(mapStateToProps, {getDailyStocksTimeSeries})(DailyStocks)