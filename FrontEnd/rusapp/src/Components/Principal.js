import React from 'react';
import '../Styles/Introduccion.css';
import Header from "./Header";
import Button from '@material-ui/core/Button';
import ar from "../Img/AR.png";
import co from "../Img/CO.png";
import ec from "../Img/EC.png";
import cl from "../Img/CL.png";
import pe from "../Img/PE.png";
import uy from "../Img/UY.png";
import pr from "../Img/PR.png";
import ca from "../Img/CA.png";
import logo from '../Img/dtv.png';
import Buscador from "./Buscador";


function Prueba() {
    return (
        <body class="fondo" extends Component> 
        <div class="container">
        <Header></Header>
        <img src={logo} class="center" />  <br></br>
        <div class="center">
        <Buscador></Buscador>
        </div>
        <br/>
        <Button href="Argentina" ><img class="foto" src={ar} /></Button>
        <Button href="Colombia" ><img class="foto" src={co} /></Button>
        <Button href="Ecuador" ><img class="foto" src={ec} /></Button>
        <Button href="Peru" ><img class="foto" src={pe} /></Button>
        <Button href="Uruguay" ><img class="foto" src={uy} /></Button>
        <Button href="Puertorico" ><img class="foto" src={pr} /></Button>
        <Button href="Caribe" ><img class="foto" src={ca} /></Button>
        <Button href="Chile" ><img class="foto" src={cl} /></Button>

       
        </div >
        </body>
        
    );
    
  }
  
  
  export default Prueba;
