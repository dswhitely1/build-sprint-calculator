import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  }
}));

function Navigation() {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes=useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = e => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuId='primary-menu';
  const renderMenu = (
    <Menu anchorEl={anchorEl} anchorOrign={{vertical:'top', horizontal:'right'}} id={menuId} keepMounted transformOrigin={{vertical:'top', horizontal:'right'}} open={isMenuOpen} onClose={handleMenuClose}>
      <MenuItem component={RouterLink} to="/" onClick={handleMenuClose}>Home</MenuItem>
      <MenuItem component={RouterLink} to="/web-unit-1" onClick={handleMenuClose}>Unit 1 - Web Fundamentals</MenuItem>
      <MenuItem component={RouterLink} to="/web-unit-2" onClick={handleMenuClose}>Unit 2 - Web Applications 1</MenuItem>
    </Menu>
  )
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Build Sprint Calculator
          </Typography>
          <Button color="inherit" onClick={handleProfileMenuOpen}>Menu</Button>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  )
}

export default Navigation;