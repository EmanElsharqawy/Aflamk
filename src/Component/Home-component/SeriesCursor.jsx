import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { getseries } from "../../Redux/series_curser_slice";
import { useNavigate } from "react-router-dom";

function SeriesCursor() {
  const dispatch = useDispatch();
  
  const seriesState = useSelector(state => state.seriescursor || { data: [], isLoading: false, error: null });
  const { data, isLoading } = seriesState;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getseries());
  }, [dispatch]);

  const handelclick=(seriesId)=>{
    navigate(`/series/${seriesId}`);
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="slider-container my-5">
      <h1 className="home-title my-5">Series</h1>

      {!isLoading && (
        <Slider {...settings}>
          {data?.map((series) => (
            <div key={series.id} className="movie-slide">
              <img
              onClick={()=>handelclick(series.id)}
                src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                alt={series.name}
                style={{ width: "90%", borderRadius: "10px" }}
              />
              <h5 className="text-center mt-2">{series.name}</h5>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SeriesCursor;
