import React from 'react'
import { useDispatch, useSelector } from 'react-redux';  
import { decrement, increment } from '../Component/User_slice';
import Button from 'react-bootstrap/Button';


const Feature = () => {
  const counter = useSelector((state) => state.users.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(increment());
  }

   const decrese = () => {
    dispatch(decrement());
  }
  return (
    <>

      <h1>counter: {counter}</h1>
      <Button variant="primary" onClick={add}>Increment</Button>
         <Button variant="primary" onClick={decrese}>Increment</Button>
        
    </>
  )
}

export default Feature;
