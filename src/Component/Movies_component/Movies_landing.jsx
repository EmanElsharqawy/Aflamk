import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies_2 } from "../../Redux/Movies_slice";
import { Container, Card, Button } from "react-bootstrap";
import ReactStars from "react-stars";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";

const Movies_landing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data ,isLoadingMovies, error  } = useSelector((state) => state.Movies_2);

  useEffect(() => { 
    dispatch(getMovies_2(currentPage));

   
  }, [currentPage]);


  const handleDetailsClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  
  };

 return (
  <>
    <div className="pb-5 pt-4">
      <h1 className="home-title text-white-50">MOVIES</h1>
      <h2 className="text-white-50 text-center">
        PAGE NUMBER <span className="text-info">{currentPage}</span> OF{" "}
        <span className="text-info">342</span>
      </h2>
    </div>


    {isLoadingMovies && (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
        <Spinner animation="grow" variant="info" />
      </div>
    )}

   
    {!isLoadingMovies && (
  <Container fluid className="custom_card">
    {error && <h3 className="text-danger">Error: {error}</h3>}

    {data?.map((mov) => (
      <Card
        key={mov.id}
        style={{ width: "18rem", marginBottom: "20px" }}
        className="bg-dark border-0 card"
      >
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
        />
        <Card.Body>
          <Card.Title className="text-info">{mov.title}</Card.Title>

          <div className="d-flex justify-content-between">
            <span className="text-white">
              Rate: <span className="text-info">{mov.vote_average}</span>
            </span>

            <ReactStars
              count={5}
              value={mov.vote_average / 2}
              size={24}
              edit={false}
              activeColor="#ffd700"
            />
          </div>

          <div className="d-flex justify-content-center">
            <Button
              variant="outline-info"
              onClick={() => handleDetailsClick(mov.id)}
            >
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
    ))}
  </Container>
)}
    <div className="d-flex justify-content-center my-4">
      <Stack spacing={2}>
        <Pagination
          count={342}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={{
            "& .MuiPaginationItem-root": { color: "rgba(255,255,255,0.5)" },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "rgba(255,255,255,0.2)",
              color: "#fff",
            },
          }}
        />
      </Stack>
    </div>
  </>
);

};

export default Movies_landing;
