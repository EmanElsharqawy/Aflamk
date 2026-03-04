import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { IoLogoFacebook } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { MdHome } from "react-icons/md";
import "../../App.css"
import { useDispatch, useSelector } from 'react-redux';
import {getMoviescasting} from "../../Redux/Movies_slice";


const Castingsection = ({movieId ,revenue}) => {

  const { moviecasting}= useSelector((state)=>state.Movies_2 );
  const dispatch = useDispatch();

 useEffect(()=>{
    if (movieId) {
   dispatch (getMoviescasting(movieId))
    }
 },[movieId]);

  return (
   <>
  
 <div class="text-white container">
    <div className='d-flex justify-content-between align-item-between ml-5'>
    <h4 className='text-info mt-5 custom-margin'>Top Billed Cast</h4>
    <div className='mt-5 d-flex gap-4 custom-margin2'>
      <span><IoLogoFacebook size={25} className='text-info  hovering' /></span>
      <span><RiTwitterXLine size={25} className='text-info hovering'  /></span>
      <span><BsInstagram  size={25} className='text-info hovering'/></span>
      <span><MdHome size={25} className='text-info hovering' /></span>
    </div>
    </div>
    </div>
    <div className='d-flex container  justify-content-between mt-3 align-item-between'>
    <div className='d-flex custom-scroll  gap-2 ' >
        {moviecasting?.cast?.slice(0,9)?.map((mov)=>(
         <Card key={mov.id} style={{ width: '15rem' }}  className='bg-black flex-shrink-0'>
      <Card.Img variant="top"   className="cast-img" src={`https://image.tmdb.org/t/p/w500${mov.profile_path}`} />
      <Card.Body>
        <Card.Title className='text-white'>{mov?.name}</Card.Title>
      </Card.Body>
    </Card>
        ))}
    </div>
    
   <div className='text-white mb-4 flex-column '>
      <span>
        <h4>Status</h4>
        <p className='text-info'>Released</p>
      </span>
      <span>
        <h4>Language</h4>
        <p className='text-info'>en</p>
      </span>
      <span>
        <h4>Budget</h4>
        <p className='text-info'>$0</p>
      </span>
      <span>
        <h4>Revenue</h4>
        <p className='text-info'>{revenue}</p>
      </span>
    
    </div></div>
   
 
   </>
  )
};
 export default Castingsection;