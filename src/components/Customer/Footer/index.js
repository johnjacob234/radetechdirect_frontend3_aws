

import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import theme from './theme';

const useStyles = makeStyles({
  root: {
    width: '100%',
        position:'fixed',
    bottom:0,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <BottomNavigation
      value={value}
              // indicatorColor="secondary"
        style={{borderTop:"1px solid grey"}}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction  label="Notification" icon={<NotificationsIcon />} />
      <BottomNavigationAction  label="My Order" icon={<LocalShippingTwoToneIcon />} />
      <BottomNavigationAction   label="Account"  icon={<AccountCircleIcon/>} />
    </BottomNavigation>
    </ThemeProvider>
    </React.Fragment>
  );
}
