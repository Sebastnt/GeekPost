import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/info_post.css";
import { Link, useNavigate } from "react-router-dom";

export const Info_post = () => {
  const { store, actions } = useContext(Context);
  const [image, setImage] = useState(" ");
  const [identity, setIdentity] = useState(" ");
  const [main_text, setMain_text] = useState("");
  const [secondary_text, setSecondary_text] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [contact, setContact] = useState("");
  const [logo, setLogo] = useState("");
  const [formality, setFormality] = useState(" ");
  const [main_color, setMain_color] = useState(" ");
  const [secondary_color, setSecondary_color] = useState("");
  const [colors, setColors] = useState("");
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="container">
        <form method="POST" className="appointment-form" id="appointment-form">
          <h2>Completar la siguiente informacion</h2>

          <div className="form-group-1">
            <div className="form-group">
              <label htmlFor="formFileSm" className="form-label">
                Subir foto
              </label>
            
              <input
                className="form-control form-control-sm"
                id="image"
                onChange={(e) => setImage(e.target.value)}
              //  value={image}
                type="file"
                required
              />
            </div>

            <input
              type="text"
              name="identity"
              id="identity"
              onChange={(e) => setIdentity(e.target.value)}
              value={identity}
              placeholder="Identidad"
            />

            <input
              type="text"
              name="main_text"
              id="main_text"
              onChange={(e) => setMain_text(e.target.value)}
              value={main_text}
              placeholder="Texto principal (opcional)"
            />

            <input
              type="text"
              name="secondary_text"
              id="secondary_text"
              onChange={(e) => setSecondary_text(e.target.value)}
              value={secondary_text}
              placeholder="Texto secundario (opcional)"
            />

            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              placeholder="Oferta (opcional)"
            />

            <input
              type="text"
              name="contact"
              id="contact"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              placeholder="Dato de contacto (opcional)"
            />

            <div className="form-group">
              <label htmlFor="formFileSm" className="form-label">
                Subir logo
              </label>
              <input
                className="form-control form-control-sm"
                id="Logo"
                 onChange={(e) => setLogo(e.target.value)}
              //  value={logo}
                type="file"
              />
            </div>
            <div className="select-list">
              <label htmlFor="confirm_type" className="form-label" required>
                Que tan formal queres que sea tu publicacion
              </label>
              <select
                name="confirm_type"
                onChange={(e) => setFormality(e.target.value)}
                value={formality}
                id="confirm_type"
              >
                <option defaultValue="">Elegir</option>
                <option value={formality}>Muy formal</option>
                <option value={formality}>Mas o menos formal</option>
                <option value={formality}>Informal</option>
              </select>
            </div>
          </div>
          <div className="form-group-2">
            <h3>Elige 3 colores que se identifican con tu marca </h3>

            
            <div className="w-100">
              <label htmlFor="color">Pick a color: </label>
              <input type="color" name="color" id="color" className="w-25" />
              <button>Submit</button>
            </div>
          </div>

          <div className="form-submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
