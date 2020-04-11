import React  from 'react';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Basecertificado from "./Basecertificado";
import Header from "./Header"
import '../Styles/Paises.css';
import dtv from "../Img/dtv.png";
import ar from "../Img/AR.png";
import co from "../Img/CO.png";
import ec from "../Img/EC.png";
import pe from "../Img/PE.png";
import cl from "../Img/CL.png";
import ve from "../Img/VE.png";
import pr from "../Img/PR.png";
import ca from "../Img/CA.png";
import uy from "../Img/UY.png";




function Modificarcertificado() {
  return (
<div class="container-fluid">
<div class="row">
    <div class="col-md-12"> 
    <Header></Header>
    </div>
    <div class="col-md-4" > 
    <img src={ar} className="banderita" />   
    <img src={co} className="banderita" /> 
    <img src={cl} className="banderita" /> 
    <img src={uy} className="banderita" /> 
    

    </div>
    <div class="col-md-4" align="center" >
    <img src={dtv} className="dtvpaises" /> 
    </div>
    <div class="col-md-4" align="right" >
    <img src={pe} className="banderita" />   
    <img src={ve} className="banderita" />
    <img src={ca} className="banderita" />
    <img src={pr} className="banderita" />
    <img src={ec} className="banderita" />
     
    </div>
    </div>
    <div class="col-md-12" class="lugar" >
    <Basecertificado></Basecertificado>
    </div>
  
    
    
    </div>
  );
    
}

export default Modificarcertificado;