import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../AuthContext';

function Header({ role }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout } = useAuth();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose} component={Link} to="/profile">
            Profile
          </MenuItem>
          {role === 'admin' && (
            <>
              <MenuItem onClick={handleMenuClose} component={Link} to="/dashboard">
                Dashboard
              </MenuItem>
            </>
          )}
          <MenuItem onClick={handleMenuClose} component={Link} to="/services">
            Services
          </MenuItem>
        </Menu>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
