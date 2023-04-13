import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    margin: theme.spacing(2, 0),
  },
  link: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundImage:"url('https://wallpaperaccess.com/full/7826460.jpg')" }}>
      <Card variant="outlined" style={{ minWidth: '500px', padding: '16px' }}>
        <CardContent>
      <Typography variant="h3" component="h1" align="center">
        Sign Up
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          className={classes.input}
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          id="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.input}
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          id="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
        >
          Sign Up
        </Button>
      </form>
      <Typography variant="body1" align="center" className={classes.link}>
        Already have an account?{" "}
        <Link onClick={() => navigate("/login")} underline="always">
          Log In
        </Link>
      </Typography>
      </CardContent>
      </Card>
    </div>
  );
}
