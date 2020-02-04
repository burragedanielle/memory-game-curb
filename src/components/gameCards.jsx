import React from 'react';

function GameCard(props) {
    return (
        <div>
            <div className="col s4">
                <div className="card hoverable">
                    <div className="card-image">
                        <img onClick={() => props.handleClick(props.id)} src={props.img} alt={props.value} value={props.value} id={props.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
