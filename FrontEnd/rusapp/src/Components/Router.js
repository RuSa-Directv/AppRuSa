import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import Header from "./Header";
import Inicio from "./Inicio";
import Buscador from "./Buscador"
import Principal from "./Principal";
import Argentina from "./Argentina"
import Colombia from "./Colombia"
import Peru from "./Peru"
import Chile from "./Chile"
import Puertorico from "./Puertorico"
import Caribe from "./Caribe"
import Uruguay from "./Uruguay"
import Ecuador from "./Ecuador"
import Certificados from "./Certificados"
import Basecertificado from "./Basecertificado"
import Buscadorgeneral from "./Buscadorgeneral"
import Login from "./Login"
import Empleados from "./Empleados"
import Paises from "./Paises"
import Aplicaciones from "./Aplicaciones"
import Productos from "./Productos"
import Servicios from "./Servicios"
import Detalleaplicaciones from "./Detalleaplicaciones"
import Detalleservicios from "./Detalleservicios"
import Modificacion from "./Modificacion"




const Router =() => (
    <BrowserRouter>

    <Switch>
        
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/Header" component={Header}/>
    <Route exact path="/Inicio" component={Inicio}/>
    <Route exact path="/Buscador" component={Buscador}/>
    <Route exact path="/Principal" component={Principal}/>
    <Route exact path="/Argentina" component={Argentina}/>
    <Route exact path="/Colombia" component={Colombia}/>
    <Route exact path="/Peru" component={Peru}/>
    <Route exact path="/Chile" component={Chile}/>
    <Route exact path="/Puertorico" component={Puertorico}/>
    <Route exact path="/Caribe" component={Caribe}/>
    <Route exact path="/Uruguay" component={Uruguay}/>
    <Route exact path="/Ecuador" component={Ecuador}/>
    <Route exact path="/Certificados" component={Certificados}/>   
    <Route exact path="/Basecertificado" component={Basecertificado}/>
    <Route exact path="/Buscadorgeneral" component={Buscadorgeneral}/>
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/Empleados" component={Empleados}/>
    <Route exact path="/Paises" component={Paises}/>
    <Route exact path="/Aplicaciones" component={Aplicaciones}/>
    <Route exact path="/Productos" component={Productos}/>
    <Route exact path="/Servicios" component={Servicios}/>
    <Route exact path="/Detalleaplicaciones" component={Detalleaplicaciones}/>
    <Route exact path="/Detalleservicios" component={Detalleservicios}/>
    <Route exact path="/Modificacion" component={Modificacion}/>

    

  

    

    </Switch>
    </BrowserRouter>
    
    
    );
    
    export default Router;