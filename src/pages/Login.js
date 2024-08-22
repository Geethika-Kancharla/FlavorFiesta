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
      navigate("/contact");
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
    <div className='h-screen flex items-center justify-center shadow-md'>
      <form onSubmit={handleLogin} className='flex justify-center items-center rounded-md shadow-lg'>
        <div className='flex flex-col p-14 justify-center items-center space-y-5 rounded-md shadow-3xl bg-white'>
          <h2 className='text-3xl'>Sign In</h2>


          <input type='email' placeholder='Enter the email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-slate-800 rounded-lg w-96 p-2 placeholder-black'></input>

          <input type='password' placeholder='Enter the password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-slate-800 rounded-lg w-96 p-2 placeholder-black'></input>

          <button className='bg-gradient-to-br from-green-300 to-blue-300 p-2 rounded-md ' type='submit'>Sign In</button>
          <p>Don't have an account <Link to="/register" className="text-blue-500">Register here</Link></p>

        </div>
      </form>
    </div>
  );
}

export default Login