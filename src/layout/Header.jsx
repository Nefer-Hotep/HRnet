import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          HRnet
        </Typography>
        <Button color='inherit' component={RouterLink} to='/employee-list'>
          View Current Employees
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
