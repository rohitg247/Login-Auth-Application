import React, { useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, signInWithGoogle, googleAuthProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button, Card, CardContent, TextField, Typography } from '@material-ui/core';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const user = result;
        console.log(user);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage:"url('https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg')" }}>
      <Card variant="outlined" style={{ maxWidth: '500px', padding: '16px' }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>Login</Typography>
          <Button variant="contained" color="primary" fullWidth onClick={handleGoogleLogin}>Login with Google</Button>
          <Typography variant="subtitle1" align="center" gutterBottom>or</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </form>
          <Typography variant="subtitle1" align="center" gutterBottom>Don't have an account? <a style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/signup')}>Sign Up</a></Typography>
        </CardContent>
      </Card>
    </div>
  );
}
