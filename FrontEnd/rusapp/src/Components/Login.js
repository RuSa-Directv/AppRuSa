import React, { Component } from "react";
import '../Styles/App.css';
import Principal from "./Principal"


class Login extends Component {
    render() {
        return (
            
            <form class="container-fluid" align="center">
                
                
                <div class="row" align="center">
                
                <div  className="form-group" class="col-md-4" align="center">
                   
                </div>


                <div  className="form-group" class="col-md-2" align="center">
                    <label className="login">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div class="col-md-2">
                    <label className="login">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>


                </div> 
                <br></br>

                <div class="row">
                <div class="col-md-5"></div>
                <div class="col-md-2" align="center">
                
                    <button  className="form-control" type="submit"  >Submit</button>
                </div>
                </div>
                
            </form>
            
        );
    }
}
export default Login;