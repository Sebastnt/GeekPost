import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-around">
        
    <div>
      <h1 className=" d-flex flex-row mt-5 ms-5 p-4"> Sign Up</h1>
      <form className="d-flex flex-column m-4">
          <div className=" col-12 d-flex flex-row m-4 ms-5 ">
            <label className="opacity-50" for="inlineFormInputGroupName"><i className="fa-solid fa-user"></i></label>
            <div className="input-group">
              <input type="text" 
              className="border border-0 border-bottom w-100" 
              id="inlineFormInputGroupName" 
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="  Ingrese su nombre"/>
            </div>
          </div>
          
          <div className="  col-12 d-flex flex-row m-4 ms-5">
              <label className="opacity-50" for="inlineFormInputGroupEmail"><i className="fa-regular fa-envelope"></i></label>
              <div className="input-group">
                <input type="email" 
                className="border border-0 border-bottom w-100" 
                id="inlineFormInputGroupEmail" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="  Ingrese su correo"/>
              </div>
          </div>
          
          <div className=" col-12 d-flex flex-row m-4 ms-5">
              <label className="opacity-50" for="inlineFormInputGroupPassword"><i className="fa-solid fa-lock"></i></label>
              <div className="input-group">
                <input type="password" className="border border-0 border-bottom w-100" 
                id="inlineFormInputGroupPassword" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="  Ingrese un password"/>
              </div>
          </div>

          <div className=" col-12 d-flex flex-row m-4 ms-5">
              <label className="opacity-50" for="inlineFormInputGroupPassword2"><i className="fa-solid fa-lock"></i></label>
              <div className="input-group">
                <input type="password" 
                className="border border-0 border-bottom w-100" 
                id="inlineFormInputGroupPassword2" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="  Confirme su password"/>
              </div>
          </div>

        
          <div className=" col-12 d-flex flex-row m-4 ms-5">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
              <label className="form-check-label" for="inlineFormCheck">
                Estas de acuerdo con los <a href="#" className="text-reset">Terminos y Condiciones</a>
              </label>
            </div>
          </div>
        
          <div className="col-12 m-4 ms-5">
          <Link to="/home">
            <button type="submit" className="btn btn-primary opacity-50 m-3">Registrarme</button></Link>
          </div>
          <Link to="/login"><a href="#" className="stretched-link col-12 m-1 ms-5 text-secondary">Ya estoy registrado</a></Link>
      </form>
      
    </div>
    <div >
      <img className="col-8  mt-5 me-5 w-100 rounded" src="src/front/img/foto1.jpg" alt=""/>
     
    </div>

  </div>

  );
};
