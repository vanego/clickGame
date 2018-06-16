import React, { Component } from "react";

// import Search from "./pages/Search";
import Header from "./components/Header/Header";
import Directions from "./components/Directions/Directions";
import Furniture from "./components/Furniture/Furniture";
import Card from "./components/cards.json";
// const App = () => (
//   <Router>
//     <div>
//       <Header />
//       <Directions />
//       <Furniture />
//     </div>
//   </Router>
// );

class App extends Component {
  render() {
    return (

      <div className="container">
        <Header />
        <div className="container">
          <Directions />
          <div className="container">
            <Furniture />

            {/* //shuffle cards in array
            shuffleCards = array => {
  for (let i = array.length - 1; i > 0; i --) {
              let j = Math.floor(Math.random() * (i +1));
            [array[i], array[j]] = [array[j], array[i]];
          } 
        }
         */}
          </div>
        </div>
      </div>

    );
  }
}


export default App;
