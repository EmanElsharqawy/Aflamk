import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import HomeUpper from '../Component/Home-component/HomeUpper';
import HomeCursor from '../Component/Home-component/HomeCursor';
import SeriesCursor from '../Component/Home-component/SeriesCursor';
import TopMovies from '../Component/Home-component/TopMovies';
import TopSeries from '../Component/Home-component/TopSeries';  
import { useSelector,useDispatch } from 'react-redux';
import {getMovies_2} from "../Redux/Movies_slice"
import { useEffect } from 'react';


const Home = () => {
  const {isLoadingMovies } = useSelector((state)=>state.Movies_2)
    const dispatch = useDispatch();
 
   useEffect(() => {
    dispatch(getMovies_2()); 
  }, [dispatch]);
  return (
    <>
   <HomeUpper/>
   <div className='custom_bg'>
  {isLoadingMovies ? (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "300px" }}
    >
      <Spinner animation="grow" variant="info" />
    </div>
  ) : (
    <>
     
      <HomeCursor />
      <SeriesCursor />
      <TopMovies/>
      <TopSeries />
    </>
  )}
</div>
   
    </>
  );
};

export default Home;
