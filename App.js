import React from 'react';
import logo from './logo.svg';
import './App.css'

const App = ({ peoples }) => (
<ul>
  {peoples.map(people =>
    <li className="rows" key={people.id}>{people.name} | Will Bring: {people.brings}</li>
     )}
  </ul>
)

export default App;
