import React, { Component } from "react";
import '../Styles/App.css';
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';

class Usuario extends Component {

    constructor(props) {
        super(props)
        this.state ={userName:'', passold:'',password:'',password2:'.',isError:false}
        this.Newpass = this.Newpass.bind(this);
            // this.logoImg = ./logo2.png;
        }

        Newpass() {
            console.log(this.state.password)
            console.log(this.state.password2)
            if(this.state.password===this.state.password2 && this.state.password!==''){
                console.log("IF OK")
                const token = localStorage.getItem('tokenL')
                const usuariol = localStorage.getItem('usuarioL')
                const datos = {usuario: usuariol ,pass: this.state.password, passold: this.state.passold}
                console.log(datos)
                fetch("http://localhost:2999/pass",{
                    method:'POST', 
                    body: JSON.stringify(datos),
            
                    headers: {'Content-Type': 'application/json', 'token':token    }
                   }).then((response) => {
                    if(response.status === 200){
                        localStorage.removeItem('usuarioL')
                        localStorage.removeItem('tokenL')
                        alert('Contraseña Actualizada')
                        this.props.history.push("/Modificacion") 
    
            
                    }
                    else if (response.status === 444)
    
                    {
                        // this.setState({isError: true})
                        alert("No se pudo Actualizar la contraseña, Intente mas tarde o comuniquise con el Administrador")
                    }
                    
                  })

            }
            else{

                alert("Las contraseñas no Coinciden")

            }

            
        
        
        
        }



    render() {
        return (
            
            <form class="container-fluid" >
                
                <br></br>
                <div class="row"  align="center">
                
                <div  className="form-group" class="col-md-3" >
                   
                </div>

                <div class="col-md-2">
                    <label className="login">Contraseña</label>
                    <input value={this.passold} type="password" className="form-control" placeholder="Contraseña Anterior" 
                    onChange={e => {this.setState({passold: e.target.value});}}
                    
                    />
                </div>
                <div class="col-md-2">
                    <label className="login">Nueva Contraseña</label>
                    <input value={this.password} type="password" className="form-control" placeholder="Contraseña Nueva" 
                    onChange={e => {this.setState({password: e.target.value});}}
                    
                    />
                </div>
                <div class="col-md-2">
                    <label className="login">Contraseña New</label>
                    <input value={this.password2} type="password" className="form-control" placeholder="Repita Contraseña " 
                    onChange={e => {this.setState({password2: e.target.value});}}
                    
                    />
                </div>

                </div> 
                <br></br>

                <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-2" align="center">
                
                    <Button onClick={this.Newpass} className="form-control" color="primary" variant="outlined" type="submit" 
                     >Submit</Button>
                </div>
                </div>
                
            </form>
            
        );
    }
}
export default withRouter(Usuario);