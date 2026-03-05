import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useSelector , useDispatch } from 'react-redux';
import { getseriestailler } from "../../Redux/Series_slice";
import { useEffect } from 'react';



function Platseriestailer ({ movieseriesId, originalseriesTitle , ...props }) {
  const { seriestailler } = useSelector((state) => state.Series);
  const dispatch = useDispatch();

  useEffect(() => {
    if ( movieseriesId) {
      dispatch(getseriestailler(movieseriesId));
    }
  }, [movieseriesId ,dispatch]);

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton className='bg-dark'>
        <Modal.Title className="text-white">
         {  originalseriesTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-dark'>
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${seriestailler?.results?.[0]?.key}`}
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
export default Platseriestailer