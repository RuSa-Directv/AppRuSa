import React, { Component } from "react";
import '../Styles/App.css';
import Principal from "./Principal"
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state ={userName:'', password:'',isError:false}
        this.postLogin = this.postLogin.bind(this);
            // this.logoImg = ./logo2.png;
        }

        postLogin() {
            
            const datos = {usuario: this.state.userName ,pass: this.state.password}
            console.log(datos)
            fetch("http://localhost:2999/logina",{
                method:'POST', 
                body: JSON.stringify(datos),
        
                headers: {'Content-Type': 'application/json'}
               }).then((response) => {
                if(response.status === 200){
                    response.json()
        
                    .then((token) => {
                        localStorage.setItem('usuarioL',this.state.userName)
                        localStorage.setItem('tokenL',token.token)
                        this.props.history.push("/Modificacion")
        
                })
        
                }
                else if (response.status === 401)

                {
                    // this.setState({isError: true})
                    alert("Usuario y/o Contraseña Incorrecto")
                }
                
              })
        
        
        
        
        }



    render() {
        return (
            
            <form class="container-fluid" align="center">
                
                
                <div class="row" align="center">
                
                <div  className="form-group" class="col-md-4" align="center">
                   
                </div>


                <div  className="form-group" class="col-md-2" align="center">
                    <label className="login">Usuario</label>
                    <input value={this.userName} type="email" className="form-control" placeholder="Ingrese Usuario" 
                    onChange={e => {this.setState({userName: e.target.value});}}
                    
                    />
                </div>

                <div class="col-md-2">
                    <label className="login">Contraseña</label>
                    <input value={this.password} type="password" className="form-control" placeholder="Ingrese Contraseña" 
                    onChange={e => {this.setState({password: e.target.value});}}
                    
                    />
                </div>


                </div> 
                <br></br>

                <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-2" align="center">
                
                    <Button onClick={this.postLogin} className="form-control" color="white" type="submit" 
                     >Submit</Button>
                </div>
                </div>
                
            </form>
            
        );
    }
}
export default withRouter(Login);