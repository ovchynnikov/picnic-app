import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const peopleList = [
  {id: 1, name: "Denis", brings: "Blankets"},
  {id: 5, name: "Nastya", brings: "Coil, water"},
  {id: 2, name: "Alexander", brings: "beef, chiken"},
  {id: 3, name: "Anya", brings: "Cards, camera"},
  {id: 4, name: "Oleksii", brings: "Fireball, Cola"},
  {id: 5, name: "Alina", brings: "Salat, cups, plates"}

];

ReactDOM.render(<App peoples={peopleList}/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
