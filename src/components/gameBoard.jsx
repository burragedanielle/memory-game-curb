import React, { Component } from 'react';
import GameCardContainer from './gameCardContainer';
import images from './images.json';
import ScoreBar from './scorebar';
import Jumbotron from './jumbotron';

class GameBoard extends Component {
    state = {
        imageArray: images,
        selectedList: [],
        currentScore: 0,
        highScore: 0
    }

    handleClick = cardId => {
        console.log(`I've beeen clicked! ${cardId}`);

        if (this.state.selectedList.includes(cardId)) {
            alert('Start again!');
            this.setState(
                {
                    imageArray: this.shuffle(),
                    selectedList: [],
                    currentScore: 0
                }
            );
        } else {
            const selectedList = [...this.state.selectedList];
            selectedList.push(cardId);
            this.setState(
                {
                    selectedList,
                    imageArray: this.shuffle(),
                    currentScore: this.state.currentScore + 1,
                }
            );

            if (this.state.currentScore >= this.state.highScore) {
                this.setState({ highScore: this.state.currentScore + 1 });
            }
        };
    }

    shuffle() {
        let imageArrayTemp = [...images];
        for (let i = imageArrayTemp.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = imageArrayTemp[i];
            imageArrayTemp[i] = imageArrayTemp[j];
            imageArrayTemp[j] = temp;
        }
        return imageArrayTemp;
    }

    render() {
        return (
            <div>
                <ScoreBar highScore={this.state.highScore} currentScore={this.state.currentScore} />
                <Jumbotron />
                <div className="container">
                    <GameCardContainer imageArray={this.state.imageArray} handleClick={this.handleClick} />
                </div>
            </div >
        )
    }
}

export default GameBoard;