import React from 'react';

function ScoreBar(props) {
    return (
        <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <li><span className="scoretitle">Current Score:</span> {props.currentScore}</li>
                        <li><span className="scoretitle">Top Score:</span> {props.highScore}</li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default ScoreBar;