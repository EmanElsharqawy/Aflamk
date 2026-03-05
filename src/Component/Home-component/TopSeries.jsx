import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import ReactStars from 'react-stars';
import { getTopSeries } from '../../Redux/Top_series_slice';
import { useNavigate } from "react-router-dom";

const TopSeries = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.TopSeries);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getTopSeries());
  }, [dispatch]);

  

   const handelclick=(seriesId)=>{
    navigate(`/series/${seriesId}`);
  }

  
  return (
    <>
      <h1 className="home-title my-5">Top Series</h1>
      <div className="custom_responsive">
     


        {!isLoading && !error && (
          <Container fluid className="custom_card">
            {data?.map((series) => (
              <Card key={series.id} style={{ width: '18rem', marginBottom: '20px' }} className="bg-dark border-0 card">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${series.poster_path}`} />
                <Card.Body>
                  <Card.Title>
                    <span className="text-dark-emphasis">Title: </span>
                    <span className="text-info">{series.original_name}</span>
                  </Card.Title>

                  <div className="d-flex justify-content-between">
                    <span className="text-white">
                      Rate: <span className="text-info">{series.vote_average}</span>
                    </span>

                    <ReactStars
                      count={5}
                      value={series.vote_average / 2}
                      size={24}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <Button variant="outline-info"
                     onClick={()=>handelclick(series.id)}
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

export default TopSeries;
