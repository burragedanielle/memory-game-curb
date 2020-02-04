import React from 'react';
import GameCard from './gameCards';

function GameCardContainer(props) {
    return (
        <div>
            <div className="row">
                {props.imageArray.map(gameCard =>
                    <GameCard
                        key={gameCard.id}
                        value={gameCard.value}
                        img={gameCard.img}
                        id={gameCard.id}
                        handleClick={props.handleClick}
                    />
                )}
            </div>
        </div>
    );
}

export default GameCardContainer;