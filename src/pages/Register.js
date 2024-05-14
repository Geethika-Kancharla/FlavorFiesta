import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFirebase } from '../context/Firebase';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {

  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sign up an user")
    await firebase.signupUserWithEmailAndPassword(email, password);
    console.log("Sign up successfull");
  }


  return (
    <>
      <p>Sign up to make an booking</p>
      <Form className='h-100 min-vh-100 d-flex flex-column align-items-center justify-content-center' onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </Form.Group>
        <Button type="submit">Create Account</Button>
        <p>Already have an account</p>
        <Link to="/login">Login here</Link>
      </Form>
    </>
  )
}

export default Register