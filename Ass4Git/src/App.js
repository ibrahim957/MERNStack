import logo from './logo.svg';
import './App.css';
import { MovieCard } from './components/card'
import React, { useState } from 'react'


function App() {
  const [email, setEmail] = useState('xyz@xyz.com');
  const [password, setPassword] = useState('***');
  let data = [
    {
      name: "M1",
      description: "M1 Description",
      avail: "yes",
      image: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-amiens-cathedral.jpg"
    },
    {
      name: "M2",
      description: "M2 Description",
      avail: "yes",
      image: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    },
    {
      name: "M3",
      description: "M3 Description",
      avail: "no",
      image: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg"
    },
    {
      name: "M4",
      description: "M4 Description",
      avail: "yes",
      image: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-chateau-de-chenonceau.jpg"
    }
  ]
  return (

    <div className="App">
      {
        data.map((movie) => <MovieCard name={movie.name} description={movie.description} avail={movie.avail} img={movie.image} />)
      }
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <span>Email : {email}<br></br></span>
      <span>Password : {password}</span>
    </div>
  );
}

export default App;
