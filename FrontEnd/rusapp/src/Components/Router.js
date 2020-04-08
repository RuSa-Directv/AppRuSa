import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import Header from "./Header";
import Inicio from "./Inicio";
import Introduccion from "./Introduccion";
import Tabla from "./Tabla"
import Buscador from "./Buscador"
import Principal from "./Principal";


const Router =() => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/Header" component={Header}/>
    <Route exact path="/Inicio" component={Inicio}/>
    <Route exact path="/Introduccion" component={Introduccion}/>
    <Route exact path="/Tabla" component={Tabla}/>
    <Route exact path="/Buscador" component={Buscador}/>
    <Route exact path="/Principal" component={Principal}/>
    </Switch>
    </BrowserRouter>
    
    
    );
    
    export default Router;