import React, { Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import Header from "./Header";
import Inicio from "./Inicio";

const Router =() => (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Inicio}/>
    <Route exact path="/Header" component={Header}/>
    <Route exact path="/Inicio" component={Inicio}/>

    </Switch>
    </BrowserRouter>
    
    
    );
    
    export default Router;