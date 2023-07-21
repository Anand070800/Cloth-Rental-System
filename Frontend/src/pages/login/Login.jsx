import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/navbar/Navbar";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import styles from './Login.module.css';
	


const LoginPage = ({ setIsLoggedIn }) => {
  const [userLogin, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...userLogin, [name]: value });
    // console.log(name,value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const newForm = { ...userLogin };
    setLogin({
      email: "",
      password: "",
    });
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err.status === 401) {
          err.json().then((data) => {
            setError(data.error);
          });
        } else {
          console.log("Something wrong at login");
        }
      });
  };
  return (
    <>
    <NavigationBar/>
    <div className={styles.body1}>
      <div className={styles.background}>
        <div className={styles.shape}></div>
        <div className={styles.shape}></div>
      </div>
      <form className={styles.form}>
        <h3>Login Here</h3>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          placeholder="Email"
          onChange={handler}
          name="email"
          value={userLogin.email}
          id="username"
          className={styles.input}
        />

        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          onChange={handler}
          name="password"
          value={userLogin.password}
          id="password"
          className={styles.input}
        />
        <div className="text-center mt-2">
          <span style={{ color: "red" }}>{error}</span>
        </div>
        <button onClick={formSubmit} className={styles.button}>
          Log In
        </button>
        <div className="mt-1">
          <p className="text-right text-center">
            Don't have an account ?{"  "}
            <Link to="/Signup" style={{ textDecoration: "none", color: "red" }}>
              Sign Up
            </Link>
          </p>
          <p className="text-center">
          <Link to="/Forgot" style={{ textDecoration: "none",color:'blue' }}>
                 Forgot password?
          </Link>
          </p>
        </div>
      </form>
    </div>
    </>
    );
};

export default LoginPage;
