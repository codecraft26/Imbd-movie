import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom" 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { useState, useEffect } from "react";
import "./Home.css";
const Home = () => {
  //storing the data into papularMovie into the useState
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    // then I fetched the api
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      // fir usse jo bhi response aya use maine json me convert kr lia
      .then((res) => res.json())
      // then jo data mile use print krlia use console.log

     


     
      .then((data) => setPopularMovies(data.results) 
    
      );

      
    // mtlab jaise he humara home page ka component load legareact
    // waise he hamari api call hogi
    // fir usse jo data milega use hum console.log krk print kr denge
  }, []);

  return (
    <>
      <div className="poster">
      <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie =>(
                            <Link style={{textDecoration:"none", color:"white"}} to={`/movie/${movie.id}`}>
                                {/* for backdrop */}
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                </div>

                                <div className="posterImage__overlay">

                                    <div className="posterImage__title">
                                        {movie ? movie.original_title: ""}
                                    </div>

                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date: ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average: ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>

                                    <div className="posterImage__description">
                                        {movie ? movie.overview: ""}
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>



      </div>
    </>
  );
};

export default Home;
