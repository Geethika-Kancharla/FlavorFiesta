import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { useFirebase } from '../context/Firebase'

const Login = () => {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate])

  //console.log(firebase)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Log in an user")
      await firebase.signinUserWithEmailAndPassword(email, password);
      console.log("Log in successfull");
    }
    catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return (
    <>
      <Form className='h-100 min-vh-100 d-flex flex-column align-items-center justify-content-center' onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </Form.Group>
        <Button onClick={handleLogin}>Login</Button>
        {
          error && <span className='mt-3 text-danger'>Wrong Email and password</span>
        }
        <p>Don't have an account</p>
        <Link to="/register">Sign up here</Link>
      </Form>

    </>
  );
}

export default Login