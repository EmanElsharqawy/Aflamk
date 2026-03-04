import React, { useEffect } from "react";
import { getseriesdetails, getseriescasting } from "../../Redux/Series_slice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { TbJewishStar } from "react-icons/tb";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdNoteAdd } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Playseriestailer from"./playtailerseries"
import "../../App.css";
import Castingseries from"./castingseries"
import Mediaseries from "./mediaseries"
import Seriesrecommendation from"./seriesrecommendation"


const Seriesdetails = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
   const [modalShow, setModalShow] = React.useState(false);

  const {seriesdata , seriescasting } = useSelector(
    (state) => state.Series
  );

  useEffect(() => {
    dispatch(getseriesdetails(id));
    dispatch(getseriescasting(id));
  }, [dispatch, id]);

  if (!seriesdata) return null;



  return (
    <>
 
      
      <div
        className="customback d-flex"
        style={{
          backgroundImage: seriesdata.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${seriesdata.backdrop_path})`
            : "none",
        }}
      >
       

        <div className="container d-flex justify-content-evenly align-items-center">
          <div className="custom-size">
            <img
              src={`https://image.tmdb.org/t/p/w500${seriesdata.poster_path}`}
              alt={seriesdata.original_name}
            />
          </div>

          <div className="custom-space">
            <div className="custom-height">
              <h2 className="text-info">SERIES DETAILS</h2>
            </div>

            <h2 className="text-white">{seriesdata.original_name}</h2>

            <span className="text-white pb-5">
              {seriesdata.first_air_date} • {seriesdata.original_language} • 👉
              {seriesdata.genres?.map((g) => g.name).join(", ")} 👈
            </span>

            <div>
              <h2 className="text-info">Overview :</h2>
              <span className="text-white">{seriesdata.overview}</span>
            </div>

            <h2 className="text-info">Casting :</h2>

            <div className="d-flex justify-content-evenly align-items-center d-block">
              {seriescasting.cast?.slice(0, 2).map((actor, index) => (
                <React.Fragment key={actor.id}>
                  <div>
                    <span className="text-white">{actor.name}</span>
                    <h5 className="text-warning text-center">
                      {actor.known_for_department}
                    </h5>
                  </div>

                  {index !== 3 && <span className="text-white">||</span>}
                </React.Fragment>
              ))}
               {seriescasting.crew?.slice(0, 2).map((actor, index) => (
                <React.Fragment key={actor.id}>
                  <div>
                    <span className="text-white">{actor.name}</span>
                    <h5 className="text-warning text-center">
                      {actor.known_for_department}
                    </h5>
                  </div>

                  {index !== 3 && <span className="text-white">||</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="d-flex gap-4 mt-4 justify-content-evenly align-items-center">
              <div className="d-flex align-items-center gap-2 text-white">
                <MdNoteAdd size={30} className="text-success" />
                <span>Add To WatchList</span>
              </div>

              <div className="d-flex align-items-center gap-2 text-white">
                <TbJewishStar size={30} className="text-warning" />
                <span>Rate Series</span>
              </div>

             
  
              <div className="d-flex align-items-center gap-2 text-white">
                <BsFillPlayCircleFill size={30}
                onClick={() => setModalShow(true)
                
                }
              
                className="text-danger" />
                <span>Play Trailer</span>

                <Playseriestailer
                 show={modalShow}
                onHide={() => setModalShow(false)}
                 movieseriesId={seriesdata.id}
                 originalseriesTitle={ seriesdata.original_name } 
                
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Castingseries 
       revenue={seriescasting.revenue}  seriesId={id}
      />
     <Mediaseries
     seriescasting={seriescasting } seriesId={id}
     />
     < Seriesrecommendation
     
     seriesId={id}
     
     />   
      </>
  );
};

export default Seriesdetails;