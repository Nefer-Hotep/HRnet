import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          HRnet
        </Typography>
        {location.pathname === '/' ? (
          <Button color='inherit' component={RouterLink} to='/employee-list'>
            View Current Employees
          </Button>
        ) : (
          <Button color='inherit' component={RouterLink} to='/'>
            Home
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
