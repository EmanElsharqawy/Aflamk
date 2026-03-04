import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector , useDispatch } from 'react-redux';
import {  getMoviestailler } from "../../Redux/Movies_slice";
import { useEffect } from 'react';



function MyVerticallyCenteredModal({ originalTitle, movieId, ...props }) {
  const { movietailler } = useSelector((state) => state.Movies_2);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movieId) {
      dispatch(getMoviestailler(movieId));
    }
  }, [movieId, dispatch]);

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton className='bg-dark'>
        <Modal.Title className="text-white">
         { originalTitle}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='bg-dark'>
       
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${movietailler?.results?.[0]?.key}`}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
     
         
     
      </Modal.Body>

      <Modal.Footer className='bg-dark'>
        <Button variant="outline-info" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal