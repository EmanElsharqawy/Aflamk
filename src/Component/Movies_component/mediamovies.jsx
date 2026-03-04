import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useSelector, useDispatch } from "react-redux";
import { getMoviestailler, getMovieimage } from "../../Redux/Movies_slice";
import "../../App.css";
import Card from 'react-bootstrap/Card';

const Mediamovies = ({ movieId, moviecasting }) => {
  const { movietailler, movieimage } = useSelector((state) => state.Movies_2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(getMoviestailler(movieId));
      dispatch(getMovieimage(movieId));
    }
  }, [movieId]);
   

  return (
    <>
      <div className="text-white container">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-info mt-3">Media</h4>
        </div>
      </div>

      <div className="container">
        <Tabs defaultActiveKey="videos" id="media-tabs" className="mb-3">
          
          {/* VIDEOS */}
          <Tab eventKey="videos" title={`VIDEOS (${movietailler?.results?.length || 0})`}>
            <div className="custom-scroll">
              {movietailler?.results?.map((mov) => (
                <iframe
                  key={mov.id}
                  src={`https://www.youtube.com/embed/${mov?.key}`}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          </Tab>

          {/* BACKDROPS */}
          <Tab eventKey="backdrops" title="BACKDROPS">
  <div className="custom-scroll">
   
    {movieimage?.backdrops?.slice(0, 7).map((mov2) => (
          <Card key={mov2.file_path} className="poster-card">
            <Card.Img 
              src={`https://image.tmdb.org/t/p/w500${mov2?.file_path}`}
              alt="Backdrop"
            />
          </Card>
        ))}
    
     
    
    
  </div>
</Tab>

          {/* POSTERS */}
          <Tab eventKey="posters" title="POSTERS">
            <div className="custom-scroll">
              { moviecasting?.cast?.slice(0, 7).map((mov1) => (
                  <Card key={mov1.id} className="poster-card">
                    <Card.Img
                      src={`https://image.tmdb.org/t/p/w500${mov1?.profile_path}`}
                      alt="Poster"
                    />
                  </Card>
                ))}
               
              
            </div>
          </Tab>

        </Tabs>
      </div>
    </>
  );
};

export default Mediamovies;