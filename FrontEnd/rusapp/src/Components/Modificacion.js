import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import Empleados from "./Empleados"
import Servicios from "./Servicios"
import Productos from "./Productos"
import Aplicaciones from "./Aplicaciones"
import Paises from "./Paises"
import Detalleservicio from "./Detalleservicios"
import Detalleaplicaciones from "./Detalleaplicaciones"
import Basecertificado from "./Basecertificado"


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#3F62A4"
  },
  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


function PermanentDrawerLeft() {
  const classes = useStyles();
  const [component, setComponent] = useState('Empleados')
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <div class="col-md-1" align="center"> <Typography variant="h6" noWrap >
            Directv
          </Typography> </div>
         <div class="col-md-9" align="center"> <Typography variant="h6" noWrap >
            Bienvenido Admin
          </Typography> </div>
          <div class="col-md-2" align="right">
          <Typography variant="h6" noWrap  >
        <Button style = {{color:'White'}}  href="Inicio"  >
          
            Logout
            </Button>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer style={{color: 'red'}}
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div  className={classes.toolbar} />
        
            
        
        <Divider />
        <List align="center"><br></br>
              <Button  style = {{color:'White'}} onClick={() => setComponent("Empleados")} >ABM de Empleados</Button>
              <Button style = {{color:'White'}} onClick={() => setComponent("Servicios")}>ABM de Servicios</Button>
              <Button style = {{color:'White'}} onClick={() => setComponent("Productos")}>ABM de Producto</Button>
              <Button style = {{color:'White'}} onClick={() => setComponent("Aplicaciones")}>ABM de Aplicaciones</Button>
              <Button style = {{color:'White'}} onClick={() => setComponent("Paises")}>ABM de Pais</Button>
              <Button style = {{color:'White'}} onClick={() => setComponent("Detalleaplicaciones")}>ABM Detalle Aplicaciones</Button>
              <Button style = {{color:'White'}} onClick={() => setComponent("Detalleservicios")}>ABM Detalle Servicios</Button>
        
        <Divider />
        <Button style = {{color:'White'}} onClick={() => setComponent("Basecertificado")}>ABM Certificados</Button>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {
            
            
            component === "Empleados" 
            ? <Empleados></Empleados>
            : [component === "Servicios"
                ? <Servicios></Servicios>
                : [component === "Productos"
                ? <Productos></Productos>
                : [ component === "Aplicaciones"
                ? <Aplicaciones></Aplicaciones>
                :  [ component === "Paises"
                ? <Paises></Paises>
                : [ component === "Detalleaplicaciones"
                ? <Detalleaplicaciones></Detalleaplicaciones>
                : [ component === "Detalleservicios"
                ? <Detalleservicio></Detalleservicio>
                : <Basecertificado></Basecertificado>
                ] ] ] ] ] ]
            
        }
      </main>
      
    </div>
    
  );
}
    export default PermanentDrawerLeft;