import React from 'react'
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getseriesrecommend} from"../../Redux/Series_slice"
import { useNavigate } from 'react-router-dom'; 

const Seriesrecommendation = ({seriesId}) => {
   const navigate = useNavigate();
    const {  seriesrecommend } = useSelector((state) => state.Series);
    const dispatch = useDispatch();

useEffect(() => {
  if (seriesId) {
    dispatch(getseriesrecommend(seriesId)); 
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

}, [seriesId, dispatch]);

  
  const handelseriesDetailsClick =(seriesid)=>{
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
        {seriesrecommend?.results?.map((mov)=>(
     <Card key={mov.id}  style={{ width: '15rem' }}  className='bg-black flex-shrink-0'>
      <Card.Img variant="top"   className="cast-img" src={`https://image.tmdb.org/t/p/w500/${mov?.poster_path}`} 
       onClick={()=>handelseriesDetailsClick(mov.id)}
      
      
      />
      <Card.Body>
        <Card.Title className='text-white'>{mov?.original_name}</Card.Title>
       </Card.Body>
        </Card>
        ))}
    
     
    </div>
    </div>
    </>
  )
}

export default Seriesrecommendation