import React , {useEffect}from 'react';

import classes from './Movie.module.css';



const MovieMania = (props) => {

    useEffect(()=>{
        const fetchMovie = async()=>{
            const movies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=c5a20c861acf7bb8d9e987dcc7f1b558&with_genres=16')
            console.log(movies);
         }
        fetchMovie();
       
    
    },[])

  return (
    <li className={classes.movie}>
      
    </li>
  );
};

export default MovieMania;