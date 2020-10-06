import {
    STOCK_TIME_SERIES_DAILY,
    STOCK_TIME_SERIES_WEEKLY,
    STOCK_TIME_SERIES_MONTHLY,
    MULTIPLE_STOCKS_SERIES_MONTHLY
} from './stock-action-types.js';

export const getDailyStocksTimeSeries = (symbol) => dispatch => {
    fetch(`https://alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=XHMOEBLSQHKEIVE7`).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        stocksData => dispatch({
            type: STOCK_TIME_SERIES_DAILY,
            payload: stocksData
        }),
        reason => dispatch({
            type: STOCK_TIME_SERIES_DAILY,
            payload: reason
        })
    )
}