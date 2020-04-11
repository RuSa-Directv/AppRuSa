import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Argentina from "./Argentina"
import Colombia from "./Colombia"
import Peru from "./Peru"
import Chile from "./Chile"
import Puertorico from "./Puertorico"
import Venezuela from "./Venezuela"
import Caribe from "./Caribe"
import Uruguay from "./Uruguay"
import Ecuador from "./Ecuador"
import ar from "../Img/AR.png";
import co from "../Img/CO.png";
import ec from "../Img/EC.png";
import cl from "../Img/CL.png";
import pe from "../Img/PE.png";
import uy from "../Img/UY.png";
import ve from "../Img/VE.png";
import pr from "../Img/PR.png";
import ca from "../Img/CA.png";
import mundo from "../Img/mundo.png";
import modmundo from "../Img/modificacion.png";






const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

function DesplegableMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem ><Button href="Certificados">
          <ListItemIcon >
          <img src={mundo} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Ver Certificados" />
          </Button>
        </StyledMenuItem> 
        <StyledMenuItem > <Button href="Modificarcertificado">
          <ListItemIcon>
          <img src={modmundo} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Modificar Certificados" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Argentina">
          <ListItemIcon>
          <img src={ar} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Argentina" /> </Button >
        </StyledMenuItem>
        <StyledMenuItem >  <Button href="Colombia">
          <ListItemIcon >
          <img src={co} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Colombia" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Uruguay">
          <ListItemIcon> 
          <img src={uy} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Uruguay" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Chile">
          <ListItemIcon> 
          <img src={cl} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Chile" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Peru">
          <ListItemIcon> 
          <img src={pe} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Peru" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Venezuela">
          <ListItemIcon> 
          <img src={ve} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Venezuela" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Puertorico">
          <ListItemIcon> 
          <img src={pr} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Puerto Rico" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Caribe">
          <ListItemIcon> 
          <img src={ca} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Caribe" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button href="Ecuador">
          <ListItemIcon> 
          <img src={ec} class="desplegable" fontSize="small" /> 
          </ListItemIcon>
          <ListItemText  primary="Catalogo Ecuador" /> </Button>
        </StyledMenuItem>
      </StyledMenu>
      </div>
      );
}
export default  DesplegableMenu;
    ;
   
