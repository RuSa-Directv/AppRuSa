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
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem ><Button href="Ingresarmercaderia">
          <ListItemIcon >
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="Ingresar Mercaderia" />
          </Button>
        </StyledMenuItem> 
        <StyledMenuItem > <Button href="Modificarmercaderia">
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="Modificar Mercaderia" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="Ver Stock" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem >  <Button>
          <ListItemIcon >
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="Ver Inventario" /> </Button>
        </StyledMenuItem>
        <StyledMenuItem > <Button>
          <ListItemIcon> 
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText  primary="Ver Headcount" /> </Button>
        </StyledMenuItem>
        
      </StyledMenu>
      </div>
      );
}
export default  DesplegableMenu;
    ;
   
