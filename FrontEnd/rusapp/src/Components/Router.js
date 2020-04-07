import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import Header from "./Header";
import Inicio from "./Inicio";
import Introduccion from "./Introduccion";
import Tabla from "./Tabla"


const Router =() => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/Header" component={Header}/>
    <Route exact path="/Inicio" component={Inicio}/>
    <Route exact path="/Introduccion" component={Introduccion}/>
    <Route exact path="/Tabla" component={Tabla}/>

    </Switch>
    </BrowserRouter>
    
    
    );
    
    export default Router;