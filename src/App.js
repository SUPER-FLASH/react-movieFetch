import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import MovieHomePage from './components/MovieHomePage';
import MovieMania from './components/MovieMania';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);


  return (
    <div>
     <Routes>
        <Route path='/' element={<MovieHomePage/>}/>
        <Route path='/mania' element={<MovieMania/>}/>

      
     </Routes>
    </div>
  );
}

export default App;