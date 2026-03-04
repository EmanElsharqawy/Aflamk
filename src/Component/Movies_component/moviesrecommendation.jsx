import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getMoviesrecommandation} from"../../Redux/Movies_slice"
import { useNavigate } from 'react-router-dom';


const Moviesrecommendation = ({movieId}) => {
     const navigate = useNavigate();
     const {  movierecomend } = useSelector((state) => state.Movies_2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(getMoviesrecommandation(movieId));
    }

  }, [movieId]);

  const handelmoviesDetailsClick =(seriesid)=>{
   navigate(`/Series/${seriesid}`);
   
  }
  
  return (
    <>
    <div class="text-white container">
    <div className='d-flex justify-content-between align-item-between ml-5'>
    <h4 className='text-info mt-3 custom-margin'>RECOMMENDATIONS</h4>
    </div></div>
    <div className='d-flex container  justify-content-between mt-3 align-item-between'>
    <div className='d-flex custom-scroll  gap-2 ' >
        {movierecomend?.results?.map((mov)=>(
     <Card key={mov.id}  style={{ width: '15rem' }}  className='bg-black flex-shrink-0'>
      <Card.Img variant="top"   className="cast-img" src={`https://image.tmdb.org/t/p/w500/${mov?.poster_path}`} 
      onClick={()=>handelmoviesDetailsClick(mov.id)}
      
      />
      <Card.Body>
        <Card.Title className='text-white'>{mov?.original_title}</Card.Title>
       </Card.Body>
        </Card>
        ))}
    
     
    </div>
    </div>
    </>
  )
}

export default Moviesrecommendation 