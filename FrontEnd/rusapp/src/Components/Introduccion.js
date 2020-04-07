import React from 'react';
import Link from '@material-ui/core/Link';
import '../Styles/Introduccion.css';
import Header from "./Header";
import mundo from '../Img/corte.png';
import Button from '@material-ui/core/Button';
import Tabla from "./Tabla";
import ar from "../Img/AR.png";
import co from "../Img/CO.png";
import ec from "../Img/EC.png";
import cl from "../Img/CL.png";
import pe from "../Img/PE.png";
import uy from "../Img/UY.png";
import ve from "../Img/VE.png";
import pr from "../Img/PR.png";
import ca from "../Img/CA.png";


function Introduccion() {
    return (
      <div >
          
        <Header></Header><br></br>
        <body>
        <div class="container">
        <div class="center"><img src={mundo} className="mundo"  alt="mundo"  /></div>
        <div class="left"> 
        <Link class="destacado" href="#">Ver Catalogo de Servicio </Link><br></br><br></br> 
        <Link class="destacado" href="#">Ver Aplicaciones / Matriz de Escalamiento </Link><br></br><br></br>
        <Link class="destacado" href="#">Modificar Catalogo de Servicio </Link><br></br><br></br>
        <Link class="destacado" href="#">Modificar Aplicaciones </Link><br></br><br></br>
        <Link class="destacado" href="#">Ver Certificados  </Link><br></br><br></br>
        </div>
        <div class="right"> 
        <Button href="#" ><img class="foto" src={ar} /></Button>
        <Button href="#" ><img class="foto" src={co} /></Button><br></br>
        <Button href="#" ><img class="foto" src={ec} /></Button>
        <Button href="#" ><img class="foto" src={pe} /></Button><br></br>
        <Button href="#" ><img class="foto" src={uy} /></Button>
        <Button href="#" ><img class="foto" src={ve} /></Button><br></br>
        <Button href="#" ><img class="foto" src={pr} /></Button>
        <Button href="#" ><img class="foto" src={ca} /></Button><br></br>
        <Button href="#" ><img class="foto" src={cl} /></Button>
        </div>
        </div>
        <div  >
        <br></br><h1 class="destacado" > Tablero de Disponibilidad </h1>
        <Tabla></Tabla>
        </div>
        </body>
        </div >
    );
    
  }
  
  
  export default Introduccion;