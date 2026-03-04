import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../Redux/cursor_slice";
import { useNavigate } from "react-router-dom";


import Spinner from 'react-bootstrap/Spinner';

const Home_cursor = () => {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.movies);
   const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handelclick=(movieId)=>{
    navigate(`/movies/${movieId}`);
  }

  return (
    <div className="slider-container  my-2">
      <h1 className="home-title mb-5 ">MOVIES</h1>
     {!isLoading && (
      <Slider {...settings}>
        {data?.map((movie) => (
          <div key={movie.id} className="movie-slide ">
            <img
       
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              onClick={()=>handelclick(movie.id)}
              alt={movie.title}
              style={{ width: "90%", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
  )}
    </div>


  );
};

export default Home_cursor;
