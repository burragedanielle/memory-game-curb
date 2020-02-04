import React, { Component } from 'react';
class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="card horizontal" id="jumbotron">
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>curb your enthusiasm</h3>
                            <h1>Memory Game</h1>
                            <p className="description">Test your memory! See how many images of Larry David you can click without repeating yourself.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;