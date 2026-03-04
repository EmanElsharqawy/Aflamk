import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Home_upper from '../Component/Home-component/Home_upper';
import Home_cursor from '../Component/Home-component/Movies_cursor';
import Series_curser from '../Component/Home-component/Series_cursor';
import Top_movies from '../Component/Home-component/Top_movies';
import Top_series from '../Component/Home-component/Top_series';  
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
 <Home_upper />
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
     
      <Home_cursor />
      <Series_curser />
      <Top_movies />
      <Top_series />
    </>
  )}
</div>
   
    </>
  );
};

export default Home;
