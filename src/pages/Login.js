import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { auth } from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  



  const handleLogin = (e) => {
    // e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }

  return (
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
        error && <span className='mt-3 text-danger'>Wrong email or password!</span>
      }
    </Form>
  );
}

export default Login