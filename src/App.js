import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import { useFirebase } from './context/Firebase';

function App() {

  const firebase = useFirebase();

  console.log(firebase);

  const handleLogout = () => {
    firebase.handleLogout();
  }
  console.log(firebase);

  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              FlavorFiesta
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
              <Nav.Link href='/register' className='text-uppercase'>Register</Nav.Link>
              <Nav.Link href='/login' className='text-uppercase'>Login</Nav.Link>
              <Nav.Link href='/' className='text-uppercase' onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>Copyright @ FlavorFiesta</p>
      </footer>
    </div>
  );
}
export default App;