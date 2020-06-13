import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import CustListTable from './Customer/table.js'
import CrmMessages from './CrmMessages/index.js'
import { Grid } from '@material-ui/core';
import RegisterDialog from './Customer/RegisterCustomer'
import theme from './theme'
import CustomerLog from './CustomerLog'

// import CompletedPage from './Completed/index.js'
// import DeliverablesGrid from './Deliverables'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
}));

export default function  CRMTab() {
  const classes = useStyles();
  // const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    
    <div className={classes.root} maxWidth="100" style={{width:"1220px"}} >
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          style={{color:"white",backgroundColor:"#208769"}}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Messages" {...a11yProps(0)} />
          <Tab label="Customers" {...a11yProps(1)} />
          <Tab label="Customer Logs" {...a11yProps(2)} />
     
        
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
         <CrmMessages/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} >
          <Grid container direction="row" md={12}>
      <Grid item sm={12} justify="flex-end" alignItems="flex-end">
        <Grid style={{float:"right",marginBottom:"10px"}}>
    <RegisterDialog/>
    </Grid>
      </Grid>
      <Grid item sm={12}>
          <CustListTable/>
          </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <CustomerLog/>
        </TabPanel>
    
      
      </SwipeableViews>
    </div>
  
  );
}