import React, { useEffect, useState } from "react";
import { getMoviesdetails, getMoviescasting } from "../../Redux/Movies_slice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { TbJewishStar } from "react-icons/tb";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdNoteAdd } from "react-icons/md";
import MyVerticallyCenteredModal from "./playtailermovies";
import Castingsection from "./castingsection";
import Mediamovies from "./mediamovies";
import Moviesrecommendation from "./moviesrecommendation";
import "../../App.css";

const Moviedetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { datadetails, isLoadingDetails, error, moviecasting } = useSelector(
    (state) => state.Movies_2
  );

  useEffect(() => {
    dispatch(getMoviesdetails(id));
    dispatch(getMoviescasting(id));
  }, [dispatch, id]);

  // لو مفيش بيانات ما نعرضش حاجة
  if (!datadetails) return null;

  return (
    <>
      {isLoadingDetails ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <Spinner animation="grow" variant="info" />
        </div>
      ) : error ? (
        <h3 className="text-danger text-center">Error: {error}</h3>
      ) : (
        <>
          <div
            className="customback d-flex"
            style={{
              backgroundImage: datadetails.backdrop_path
                ? `url(https://image.tmdb.org/t/p/original${datadetails.backdrop_path})`
                : "none",
            }}
          >
            <div className="container d-flex justify-content-evenly align-items-center">
              <div className="custom-size">
                <img
                  src={`https://image.tmdb.org/t/p/w500${datadetails.poster_path}`}
                  alt={datadetails.original_title}
                />
              </div>

              <div className="custom-space">
                <div className="custom-height">
                  <h2 className="text-info">MOVIE DETAILS</h2>
                </div>

                <h2 className="text-white">{datadetails.original_title}</h2>

                <span className="text-white pb-5">
                  {datadetails.release_date} • {datadetails.original_language} • 👉
                  {datadetails.genres?.map((g) => g.name).join(", ")} 👈
                </span>

                <div>
                  <h2 className="text-info">Overview :</h2>
                  <span className="text-white">{datadetails.overview}</span>
                </div>

                <h2 className="text-info">Casting :</h2>
                <div className="d-flex justify-content-evenly align-items-center d-block">
                  {moviecasting.cast?.slice(0, 2).map((actor, index) => (
                    <React.Fragment key={actor.id}>
                      <div>
                        <span className="text-white">{actor.name}</span>
                        <h5 className="text-warning text-center">
                          {actor.known_for_department}
                        </h5>
                      </div>
                      {index !== 1 && <span className="text-white">||</span>}
                    </React.Fragment>
                  ))}
                  {moviecasting.crew?.slice(0, 2).map((actor, index) => (
                    <React.Fragment key={actor.id}>
                      <div>
                        <span className="text-white">{actor.name}</span>
                        <h5 className="text-warning text-center">
                          {actor.known_for_department}
                        </h5>
                      </div>
                      {index !== 1 && <span className="text-white">||</span>}
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
                    <span>Rate Movie</span>
                  </div>

                  <div className="d-flex align-items-center gap-2 text-white">
                    <BsFillPlayCircleFill
                      size={30}
                      className="text-danger"
                      onClick={() => setModalShow(true)}
                    />
                    <span>Play Trailer</span>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      movieId={datadetails.id}
                      originalTitle={datadetails.original_title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Castingsection revenue={datadetails.revenue}   movieId={id}/>
          <Mediamovies moviecasting={moviecasting} movieId={id} />
          <Moviesrecommendation movieId={id} />
        </>
      )}
    </>
  );
};

export default Moviedetails;