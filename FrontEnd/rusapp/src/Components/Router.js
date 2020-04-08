import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import Header from "./Header";
import Inicio from "./Inicio";
import Introduccion from "./Introduccion";
import Buscador from "./Buscador"
import Principal from "./Principal";
import Argentina from "./Argentina"


const Router =() => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/Header" component={Header}/>
    <Route exact path="/Inicio" component={Inicio}/>
    <Route exact path="/Introduccion" component={Introduccion}/>
    <Route exact path="/Buscador" component={Buscador}/>
    <Route exact path="/Principal" component={Principal}/>
    <Route exact path="/Argentina" component={Argentina}/>
    



    </Switch>
    </BrowserRouter>
    
    
    );
    
    export default Router;