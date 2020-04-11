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
import Venezuela from "./Venezuela"
import Caribe from "./Caribe"
import Uruguay from "./Uruguay"
import Ecuador from "./Ecuador"
import Certificados from "./Certificados"
import Modificarcertificado from "./Modificarcertificado"
import Basecertificado from "./Basecertificado"








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
    <Route exact path="/Venezuela" component={Venezuela}/>
    <Route exact path="/Caribe" component={Caribe}/>
    <Route exact path="/Uruguay" component={Uruguay}/>
    <Route exact path="/Ecuador" component={Ecuador}/>
    <Route exact path="/Certificados" component={Certificados}/>
    <Route exact path="/Modificarcertificado" component={Modificarcertificado}/>
    <Route exact path="/Basecertificado" component={Basecertificado}/>
  

    

    </Switch>
    </BrowserRouter>
    
    
    );
    
    export default Router;