import React, { Component } from 'react';
import './Header.css';

function Header() {
    return (
        <div className="row">
            <div className="col-sm-12 Header">

                <div className="col-sm-4 Clicker">Click Game</div>
                <div className="col-sm-4 RightWrong"></div>
                <div className="col-sm-4 Score">Score: </div>

            </div>
        </div>
    )
}

export default Header;