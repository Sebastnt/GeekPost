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
                <h2 >Completar la siguiente informacion</h2>

                <div className="form-group-1">
                    <div className="form-group">  
                        <label htmlFor="formFileSm" className="form-label">Subir foto</label>
                        <input className="form-control form-control-sm" 
                        id="image" 
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        type="file" required 
                        />
                    </div>
                   
                    <input type="text" 
                    name="identity" 
                    id="identity" 
                    onChange={(e) => setIdentity(e.target.value)}
                    value={identity}
                    placeholder="Identidad"
                    />

                    <input type="text" 
                    name="main_text" 
                    id="main_text" 
                    onChange={(e) => setMain_text(e.target.value)}
                    value={main_text}
                    placeholder="Texto principal (opcional)" 
                    />

                    <input type="text" 
                    name="secondary_text" 
                    id="secondary_text" 
                    onChange={(e) => setSecondary_text(e.target.value)}
                    value={secondary_text}
                    placeholder="Texto secundario (opcional)"  
                    />

                    <input type="text" 
                    name="price" 
                    id="price" 
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    placeholder="Oferta (opcional)"  
                    />

                    <input type="text" 
                    name="contact" 
                    id="contact" 
                    onChange={(e) => setContact(e.target.value)}
                    value={contact}
                    placeholder="Dato de contacto (opcional)" 
                     />



                    <div className="form-group">  
                        <label htmlFor="formFileSm" className="form-label">Subir logo</label>
                        <input className="form-control form-control-sm" 
                        id="Logo" 
                        onChange={(e) => setLogo(e.target.value)}
                        value={logo}
                        type="file" />
                    </div>
                    <div className="select-list">
                        <label htmlFor="confirm_type" className="form-label" required>Que tan formal queres que sea tu publicacion</label>
                        <select name="confirm_type" 
                        onChange={(e) => setFormality(e.target.value)}
                        value={formality}
                        id="confirm_type">
                            <option defaultValue="">Elegir</option>
                            <option value="by_email">Muy formal</option>
                            <option value="by_email">Mas o menos formal</option>
                            <option value="by_email">Informal</option>
                        </select>
                    </div>
                </div>
                <div className="form-group-2">
                    <h3>Elige 3 colores que se identifican con tu marca </h3>
                     <table className="table">
                    <tbody>
                        <tr>
                          <td style="cursor:pointer;background-color:rgb(205, 92, 92)" onClick="clickColor(&quot;rgb(205, 92, 92):)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 20, 147)"   onClick="clickColor(&quot;rgb(255, 20, 147);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 160, 122)"   onClick="clickColor(&quot;rgb(255, 160, 122);)"></td>
                          <td style="cursor:pointer;background-color:rgb(220, 20, 60)"  onClick="clickColor(&quot;rgb(220, 20, 60);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 0, 0)"   onClick="clickColor(&quot;rgb(255, 0, 0);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 127, 80)"   onClick="clickColor(&quot;rgb(255, 127, 80);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 99, 71)"   onClick="clickColor(&quot;rgb(255, 99, 71);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 69, 0)"   onClick="clickColor(&quot;rgb(255, 69, 0);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 140, 0)"   onClick="clickColor(&quot;rgb(255, 140, 0);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 165, 0)"   onClick="clickColor(&quot;rgb(255, 165, 0);)"></td>
                        </tr>
                        <tr>
                          <td style="cursor:pointer;background-color:rgb(255, 215, 0)" onClick="clickColor(&quot;rgb(255, 215, 0);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 255, 0)"   onClick="clickColor(&quot;rgb(255, 255, 0);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 255, 224)"   onClick="clickColor(&quot;rgb(255, 255, 224);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 228, 181)"  onClick="clickColor(&quot;rgb(255, 228, 181);)"></td>
                          <td style="cursor:pointer;background-color:rgb(238, 232, 170)"   onClick="clickColor(&quot;rgb(238, 232, 170);)"></td>
                          <td style="cursor:pointer;background-color:rgb(240, 230, 140)"   onClick="clickColor(&quot;rgb(240, 230, 140);)"></td>
                          <td style="cursor:pointer;background-color:rgb(189, 183, 107)"   onClick="clickColor(&quot;rgb(189, 183, 107);)"></td>
                          <td style="cursor:pointer;background-color:rgb(230, 230, 250)"   onClick="clickColor(&quot;rgb(230, 230, 250);)"></td>
                          <td style="cursor:pointer;background-color:rgb(216, 191, 216)"   onClick="clickColor(&quot;rgb(216, 191, 216);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 0, 255)"   onClick="clickColor(&quot;rgb(255, 0, 255);)"></td>
                        </tr>
                        <tr>
                          <td style="cursor:pointer;background-color:rgb(186, 85, 211)" onClick="clickColor(&quot;rgb(186, 85, 211);)"></td>
                          <td style="cursor:pointer;background-color:rgb(147, 112, 219)"   onClick="clickColor(&quot;rgb(147, 112, 219);)"></td>
                          <td style="cursor:pointer;background-color:rgb(102, 51, 153)"   onClick="clickColor(&quot;rgb(102, 51, 153);)"></td>
                          <td style="cursor:pointer;background-color:rgb(148, 0, 211)"  onClick="clickColor(&quot;rgb(148, 0, 211);)"></td>
                          <td style="cursor:pointer;background-color:rgb(139, 0, 139)"   onClick="clickColor(&quot;rgb(139, 0, 139);)"></td>
                          <td style="cursor:pointer;background-color:rgb(128, 0, 128)"   onClick="clickColor(&quot;rgb(128, 0, 128);)"></td>
                          <td style="cursor:pointer;background-color:rgb(75, 0, 130)"   onClick="clickColor(&quot;rgb(75, 0, 130);)"></td>
                          <td style="cursor:pointer;background-color:rgb(106, 90, 205)"   onClick="clickColor(&quot;rgb(106, 90, 205);)"></td>
                          <td style="cursor:pointer;background-color:rgb(72, 61, 139)"   onClick="clickColor(&quot;rgb(72, 61, 139);)"></td>
                          <td style="cursor:pointer;background-color:rgb(123, 104, 238)"   onClick="clickColor(&quot;rgb(123, 104, 238);)"></td>
                        </tr>
                        <tr>
                          <td style="cursor:pointer;background-color:rgb(173, 255, 47)" onClick="clickColor(&quot;rgb(173, 255, 47);)"></td>
                          <td style="cursor:pointer;background-color:rgb(0, 255, 0)"   onClick="clickColor(&quot;rgb(0, 255, 0);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(50, 205, 50)"   onClick="clickColor(&quot;rgb(50, 205, 50);)"></td>
                          <td style="cursor:pointer;background-color:rgb(60, 179, 113)"  onClick="clickColor(&quot;rgb(60, 179, 113);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(34, 139, 34)"   onClick="clickColor(&quot;rgb(34, 139, 34);)"></td>
                          <td style="cursor:pointer;background-color:rgb(0, 100, 0)"   onClick="clickColor(&quot;rgb(0, 100, 0);)"></td>
                          <td style="cursor:pointer;background-color:rgb(107, 142, 35)"   onClick="clickColor(&quot;rgb(107, 142, 35));)"></td>
                          <td style="cursor:pointer;background-color:	rgb(102, 205, 170)"   onClick="clickColor(&quot;rgb(102, 205, 170);)"></td>
                          <td style="cursor:pointer;background-color:rgb(32, 178, 170)"   onClick="clickColor(&quot;rgb(32, 178, 170);)"></td>
                          <td style="cursor:pointer;background-color:rgb(0, 128, 128)"   onClick="clickColor(&quot;rgb(0, 128, 128);)"></td>
                        </tr>
                        <tr>
                          <td style="cursor:pointer;background-color:rgb(0, 255, 255)" onClick="clickColor(&quot;rgb(0, 255, 255);)"></td>
                          <td style="cursor:pointer;background-color:rgb(175, 238, 238)"   onClick="clickColor(&quot;rgb(175, 238, 238);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(64, 224, 208)"   onClick="clickColor(&quot;rgb(64, 224, 208);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(0, 206, 209)"  onClick="clickColor(&quot;rgb(0, 206, 209);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(95, 158, 160)"   onClick="clickColor(&quot;rgb(95, 158, 160);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(70, 130, 180)"   onClick="clickColor(&quot;rgb(70, 130, 180);)"></td>
                          <td style="cursor:pointer;background-color:rgb(0, 191, 255)"   onClick="clickColor(&quot;rgb(0, 191, 255);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(0, 0, 255)"   onClick="clickColor(&quot;rgb(0, 0, 255);)"></td>
                          <td style="cursor:pointer;background-color:rgb(0, 0, 205)"   onClick="clickColor(&quot;rgb(0, 0, 205);)"></td>
                          <td style="cursor:pointer;background-color:rgb(25, 25, 112)"   onClick="clickColor(&quot;rgb(25, 25, 112);)"></td>
                        </tr>
                        <tr>
                          <td style="cursor:pointer;background-color:rgb(255, 248, 220)" onClick="clickColor(&quot;rgb(255, 248, 220);)"></td>
                          <td style="cursor:pointer;background-color:rgb(255, 228, 196)"   onClick="clickColor(&quot;rgb(255, 228, 196);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(222, 184, 135)"   onClick="clickColor(&quot;rgb(222, 184, 135);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(188, 143, 143)"  onClick="clickColor(&quot;rgb(188, 143, 143);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(218, 165, 32)"   onClick="clickColor(&quot;rgb(218, 165, 32);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(210, 105, 30)"   onClick="clickColor(&quot;rgb(210, 105, 30);)"></td>
                          <td style="cursor:pointer;background-color:rgb(160, 82, 45)"   onClick="clickColor(&quot;rgb(160, 82, 45);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(139, 69, 19)"   onClick="clickColor(&quot;rgb(139, 69, 19);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(165, 42, 42)"   onClick="clickColor(&quot;rgb(165, 42, 42);)"></td>
                          <td style="cursor:pointer;background-color:rgb(128, 0, 0)"   onClick="clickColor(&quot;rgb(128, 0, 0);)"></td>
                        </tr>
                        <tr>
                          <td style="cursor:pointer;background-color:rgb(255, 255, 255)" onClick="clickColor(&quot;rgb(255, 255, 255);)"></td>
                          <td style="cursor:pointer;background-color:rgb(240, 255, 240)"   onClick="clickColor(&quot;rgb(240, 255, 240);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(240, 255, 255)"   onClick="clickColor(&quot;rgb(240, 255, 255);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(245, 245, 245)"  onClick="clickColor(&quot;rgb(245, 245, 245);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(255, 228, 225)"   onClick="clickColor(&quot;rgb(255, 228, 225);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(220, 220, 220)"   onClick="clickColor(&quot;rgb(220, 220, 220);)"></td>
                          <td style="cursor:pointer;background-color:rgb(192, 192, 192)"   onClick="clickColor(&quot;rgb(192, 192, 192);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(112, 128, 144)"   onClick="clickColor(&quot;rgb(112, 128, 144);)"></td>
                          <td style="cursor:pointer;background-color:	rgb(47, 79, 79)"   onClick="clickColor(&quot;rgb(47, 79, 79);)"></td>
                          <td style="cursor:pointer;background-color:rgb(0, 0, 0)"   onClick="clickColor(&quot;rgb(0, 0, 0);)"></td>
                        </tr>
                      </tbody>
                    </table>   

                    
                   
                </div>
               
                 {/* <div className="form-submit">
                    <input type="submit" name="submit" id="submit" className="submit" value={Crear} />
                </div>  */}
            </form>
        </div>

    </div>
     
  );
};
