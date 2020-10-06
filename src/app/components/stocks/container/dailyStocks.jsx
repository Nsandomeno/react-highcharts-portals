import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDailyStocksTimeSeries } from '../../../actions/stock-actions'

class DailyStocks extends Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.props.getDailyStocksTimeSeries("MSFT");
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dailyStocks: state.stocksReducer.dailyStocks
})

connect(mapStateToProps, {getDailyStocksTimeSeries})(DailyStocks)