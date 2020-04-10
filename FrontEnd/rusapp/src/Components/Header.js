import React from 'react';
import '../Styles/Introduccion.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Desplegablemenu from "./Desplegablemenu";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    
    },
}));

function Header() {
  const classes = useStyles();

  return (
    <div class="container-fluid">
    <div className={classes.root} class="row">
    <div class="col-md-12"> 
      <AppBar position="static">
        <Toolbar>
        <div class="col-md-1">
          <IconButton ><Desplegablemenu></Desplegablemenu>
            </IconButton></div>
            <div class="col-md-10" align="center">
            <Typography variant="h6" className={classes.title} >
           <Button  href="Principal" color="inherit"><font size="5"> Catalogo de Servicio </font></Button>
           </Typography></div>
           <div class="col-md-1">
          <Button href="./Login"   color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    </div>
    </div>
  );
}

export default Header;