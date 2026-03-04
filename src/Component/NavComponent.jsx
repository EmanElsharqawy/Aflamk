import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviessearch } from "../Redux/Movies_slice";
import { getseriessearch } from "../Redux/Series_slice";

function NavScrollExample() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchType, setSearchType] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moviesearch = useSelector((state) => state.Movies_2?.moviesearch);
  const seriessearch = useSelector((state) => state.Series?.seriessearch);

  useEffect(() => {
    if (
      (searchType === "movie" && moviesearch?.results?.length > 0) ||
      (searchType === "series" && seriessearch?.length > 0)
    ) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [moviesearch, seriessearch, searchType]);

  const handleSearchMovies = () => {
    if (!query.trim()) return;
    setSearchType("movie");
    dispatch(getMoviessearch(query));
  };

  const handleSearchSeries = () => {
    if (!query.trim()) return;
    setSearchType("series");
    dispatch(getseriessearch(query));
  };

  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>

        <Navbar.Brand className='text-white px-4'>
          Aflamek
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          className='bg-secondary-subtle'
        />

        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className='text-white px-3'>Home</Nav.Link>
            <Nav.Link as={Link} to="/Movies" className='text-white px-3'>Movies</Nav.Link>
            <Nav.Link as={Link} to="/Series" className='text-white px-3'>Series</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className='text-white px-3 me-4'>Contact US</Nav.Link>
          </Nav>

          {/* Search Section */}
          <div style={{ position: "relative", width: "500px" }}>

            <Form className="d-flex align-items-center gap-2">

              <Form.Control
                type="search"
                placeholder="Search..."
                style={{ color: 'white', flex: 1 }}
                className="bg-dark border border-primary custom-placeholder"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <Button
                variant="outline-success"
                type="button"
                onClick={handleSearchMovies}
              >
                  Search Movies
              </Button>

              <Button
                variant="outline-danger"
                type="button"
                onClick={handleSearchSeries}
              >
                Search Series
              </Button>

              <Button
                variant="outline-primary"
              >
                Login
              </Button>

            </Form>

            {/* Dropdown */}
            {showDropdown && (
              <div
                className="bg-dark text-white p-2"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  maxHeight: "300px",
                  overflowY: "auto",
                  zIndex: 2000,
                  border: "1px solid #0d6efd",
                  borderRadius: "4px"
                }}
              >

                {searchType === "movie" &&
                  moviesearch?.results?.map((item) => (
                    <div
                      key={item.id}
                      className="p-2 border-bottom"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowDropdown(false);
                        navigate(`/movies/${item.id}`);
                      }}
                    >
                      {item.title}
                    </div>
                  ))
                }

                {searchType === "series" &&
                  seriessearch?.map((item) => (
                    <div
                      key={item.id}
                      className="p-2 border-bottom"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setShowDropdown(false);
                        navigate(`/series/${item.id}`);
                      }}
                    >
                      {item.name}
                    </div>
                  ))
                }

              </div>
            )}

          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;