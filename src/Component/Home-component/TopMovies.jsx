import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { getTopMovies } from "../../Redux/Top_movies_slice";
import Container from 'react-bootstrap/Container';
import ReactStars from 'react-stars';
import { useNavigate } from "react-router-dom";

const TopMovies = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error  } = useSelector((state) => state.topMovies);
  const navigate = useNavigate();
  

  useEffect(() => {
    dispatch(getTopMovies());
  }, [dispatch]);

   const handelclick=(movieId)=>{
    navigate(`/movies/${movieId}`);
  }
  return (
    <>
      <h1 className="home-title my-5">Top Movies</h1>

      <div className="custom_responsive">
    
      
        {!isLoading && (
          <Container fluid className="custom_card">
            {error && <h3 className="text-danger">Error: {error}</h3>}

            {data?.slice(0, 10).map((movie) => (
              <Card key={movie.id} style={{ width: '18rem', marginBottom: '20px' }} className="bg-dark border-0 card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title>
                    <span className="text-dark-emphasis">Title: </span>
                    <span className="text-info">{movie.title}</span>
                  </Card.Title>

                  <div className="d-flex justify-content-between">
                    <span className="text-white">
                      Rate: <span className="text-info">{movie.vote_average}</span>
                    </span>

                    <ReactStars
                      count={5}
                      value={movie.vote_average / 2}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <Button variant="outline-info"
                      onClick={()=>handelclick(movie.id)}
                    
                    >Details</Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Container>
        )}
      </div>
    </>
  );
}

export default TopMovies;
