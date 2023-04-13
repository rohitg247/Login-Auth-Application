import { onAuthStateChanged, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        navigate("/login");
      }
      return () => listen();
    });
  }, []);
  
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      {user ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#f5f5f5",
          }}
        >
          <h1 style={{ fontSize: "3rem", margin: "2rem 0" }}>
            Hello World
          </h1>
          <button
            style={{
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              backgroundColor: "#1e88e5",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : null}
    </>
  );
}
