import React from 'react';
import { NavLink } from "react-router-dom";


const HighchartsMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/home">
            HighCharts
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Stocks
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="nav-link" to="/stocks/daily">Daily Stocks</NavLink>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default HighchartsMenu;
