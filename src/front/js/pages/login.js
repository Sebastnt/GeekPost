import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/login.css";
import { Navigate, Link, useNavigate } from "react-router-dom";


export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (email === "" || password === "") {
        console.log("Complete la Formacion solicitada");
      } else {
        const ver = await actions.fetchCredentials(email, password);
        ver ? Navigate("/principal") : null;
        //	if (store.login === true)
        //	   {<Link to="/demo"/> }
        console.log(ver);
      }
    };

 
  
    return (
        <div className="container row login-box">
        <div className="col login-title">
        <h1>Que quieres crear hoy?</h1>
        <span className="small-text">Empecemos!</span>
        </div>
        <div className="col login-form">
        <div className="avatar">
        </div>
        <div className="registration">
        Necesitas una cuenta? 
        <Link to="/Registro"><a href="#">Registrate</a></Link>
        </div>
        <form action="" method="POST">
        <label for="login" className="login">
        <input id="login" type="email" placeholder="Usuario" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        </label>
        <label for="passwd" className="passwd">
        <input id="passwd" type="password" placeholder="Password" 
         onChange={(e) => setPassword(e.target.value)}
         value={password}
        />
        </label>
        <button className="button" type="submit" onClick={handleSubmit} >Entrar</button>
        </form>
        <div className="lost-passwd">
        <a href="#">Olvidaste tu password?</a>
        </div>
        </div>
        </div>
       
       
    );
  };
  