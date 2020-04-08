import React from 'react';
import Link from '@material-ui/core/Link';
import '../Styles/Introduccion.css';
import Header from "./Header";
import mundo from '../Img/corte.png';
import Button from '@material-ui/core/Button';
import ar from "../Img/AR.png";
import co from "../Img/CO.png";
import ec from "../Img/EC.png";
import cl from "../Img/CL.png";
import pe from "../Img/PE.png";
import uy from "../Img/UY.png";
import ve from "../Img/VE.png";
import pr from "../Img/PR.png";
import ca from "../Img/CA.png";
import logo from '../Img/dtv.png';
import Buscador from "./Buscador";
import Argentina from "./Argentina";

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
        <Button href="#" ><img class="foto" src={co} /></Button>
        <Button href="#" ><img class="foto" src={ec} /></Button>
        <Button href="#" ><img class="foto" src={pe} /></Button>
        <Button href="#" ><img class="foto" src={uy} /></Button>
        <Button href="#" ><img class="foto" src={ve} /></Button>
        <Button href="#" ><img class="foto" src={pr} /></Button>
        <Button href="#" ><img class="foto" src={ca} /></Button>
        <Button href="#" ><img class="foto" src={cl} /></Button>

       
        </div >
        </body>
        
    );
    
  }
  
  
  export default Prueba;
