import React from 'react';
import '../Styles/App.css';
import logo from '../Img/dtv.png';
import Header from "./Header"


function Inicio() {
  return (
    <div className="App" extends Component>
      <Header></Header>
      
      <header className="App-header">
        
        <img src={logo} />
        
       
        </header>
      
    </div>

  );
  
}



export default Inicio;