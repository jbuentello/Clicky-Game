//set up all dependencies and routes 
// Setting the state for cars to json array
//shuffle the cars cards when they are clicked
// render a Card component for each card object
import React, { Component } from "react";
import Card from "./components/cardbox/Card";
import Container from "./components/maincontainer/container";
import Score from "./components/Score";
import cars from "./cards.json";
import "./App.css";

class App extends Component {
  
  state = {
    cars,
    clickedIdCars: [],
    score: 0,
    goal: 8,
    status: ""
  };

  shuffleCard = id => {
    let clickedIdCars = this.state.clickedIdCars;

    if(clickedIdCars.includes(id)){
      this.setState({ clickedIdCars: [], score: 0, status:  "Game Over! Bet you wont try again! Click to play again!" });
      return;
    }else{
      clickedIdCars.push(id)

      if(clickedIdCars.length === 8){
        this.setState({score: 8, status: "You actually did it!", clickedIdCars: []});
        console.log('You Win');
        return;
      }

      this.setState({ cars, clickedIdCars, score: clickedIdCars.length, status: " " });

      for (let i = cars.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cars[i], cars[j]] = [cars[j], cars[i]];
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="mainHeader">
          <h1 className="mainTitle">Clicky Game</h1>
          <p className="headerInstruction">
            Dont Click on the same image twice! 
          </p>
        </header>

        <Container>
          {this.state.cars.map(car => (
            <Card
              shuffleScoreCard={this.shuffleCard}
              id={car.id}
              key={car.id}
              image={car.image}
            />
          ))}
        </Container>

        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
                      
        <footer>
          <p>Built by Joel Buentello, to see the code please click the following link<a href="https://github.com/jbuentello/Clicky-Game" target="_blank" rel="noopener noreferrer"> Code</a>.</p>
        </footer>
    </div>
    );
  }
}

export default App;
