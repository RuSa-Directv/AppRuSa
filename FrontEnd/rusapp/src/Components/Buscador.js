import React from 'react';
import Paper from '@material-ui/core/Paper';
import { InputBase } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter} from 'react-router-dom';

class Buscador extends React.Component {
  

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        

      }




      handleSubmit(event) {
        event.preventDefault();
        var t = document.getElementById("username")
        console.log(t.value)


        this.props.history.push({pathname: "/Buscadorgeneral", data: t.value})

      }
      

    render(){
      
        return (
          <Paper 
          component="form" 
          onSubmit={this.handleSubmit} >

            <InputBase 
            onSubmit={this.handleSubmit}
            placeholder="  Buscar" 
            inputProps={{ 'aria-label': '  Buscar' }}
            id="username" 
            name="username" 
            type="text"
            
            >

            </InputBase>

            <IconButton 
            
            type="submit" 
            aria-label="search"
            onClick={this.handleSubmit}
            >


            <SearchIcon  /> 
            </IconButton>

           </Paper>
          );

    }
}

export default withRouter( Buscador);

