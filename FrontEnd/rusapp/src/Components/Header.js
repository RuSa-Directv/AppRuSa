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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton ><Desplegablemenu></Desplegablemenu>
            </IconButton>
            <Typography variant="h6" className={classes.title}>
           <Button className="titulo3" href="Pantalla1" color="inherit"><font size="5"> Catalogo de Servicio </font></Button>
           </Typography>
          <Button href="./Login"   color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;