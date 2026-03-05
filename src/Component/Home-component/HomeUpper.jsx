import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const Home_upper = () => {
  return (

<div className="">
  <Container fluid className="home-section">

    <h1 className="home-title">Home</h1>


    <div className="sort-section">
      <h2 className="sort-title">SORT BY</h2>
      <div className="sort-grid sort-flex1">
        <Button variant="outline-secondary border border-dark-subtle ">Title</Button>
        <Button variant="outline-secondary border border-dark-subtle ">Polarity</Button>
        <Button variant="outline-secondary border border-dark-subtle ">Date</Button>
        <Button variant="outline-secondary border border-dark-subtle ">Rating</Button>
      </div>
    </div>

   
    <div className="sort-section   mt-4">
      <h2 className="sort-title">SORT ORDER</h2>
      <div className="sort-grid sort-flex2">
        <Button variant="outline-secondary border border-dark-subtle">Designing</Button>
        <Button variant="outline-secondary border border-dark-subtle ">Ascending</Button>
      </div>
    </div>

  </Container>
</div>

  )
}

export default Home_upper;