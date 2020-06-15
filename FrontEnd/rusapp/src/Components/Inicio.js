import React from 'react';
import '../Styles/App.css';
import logo from '../Img/dtv.png';
import Header from "./Header"
import Login from "./Login"

function Inicio() {
  return (
    <div className="App" extends Component>
      <Header></Header>
      
      <header >
      <div className="App-header">
        
        <img src={logo} />
        
        <br></br><br></br><br></br><br></br>
        
        <Login></Login>
       
        
        
        </div>
       
         
      
        </header>
      
    </div>

  );
  
}



export default Inicio;