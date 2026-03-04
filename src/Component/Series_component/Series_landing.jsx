
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeries2 } from "../../Redux/Series_slice";
import { Container, Card, Button } from "react-bootstrap";
import ReactStars from "react-stars";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";

const Series_landing = () => {
   const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.Series);

  useEffect(() => {
    dispatch(getSeries2(currentPage));
  }, [dispatch, currentPage]);

  const handelseriesDetailsClick =(seriesid)=>{
   navigate(`/Series/${seriesid}`)
  }


  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="pb-5 pt-4">
        <h1 className="home-title text-white-50">SERIES</h1>
        <h2 className="text-white-50 text-center">
          PAGE NUMBER <span className="text-info">{currentPage}</span> OF{" "}
          <span className="text-info">342</span>
        </h2>
      </div>

      {isLoading && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
          <Spinner animation="grow" variant="info" />
        </div>
      )}

      {!isLoading && (
        <Container fluid className="custom_card">
          {error && <h3 className="text-danger">Error: {error}</h3>}

          {data?.map((mov1) => (
            <Card
              key={mov1.id}
              style={{ width: "18rem", marginBottom: "20px" }}
              className="bg-dark border-0 card"
            >
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${mov1.poster_path}`}
              />
              <Card.Body>
                <Card.Title>
                  <span className="text-dark-emphasis">Title: </span>
                  <span className="text-info">{mov1.name}</span>
                </Card.Title>

                <div className="d-flex justify-content-between">
                  <span className="text-white">
                    Rate: <span className="text-info">{mov1.vote_average}</span>
                  </span>

                  <ReactStars
                    count={5}
                    value={mov1.vote_average / 2}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <Button variant="outline-info"
                  onClick={()=>handelseriesDetailsClick(mov1.id)}
                  >Details</Button>
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

export default Series_landing;
