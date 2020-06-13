// import React from "react";
// import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import { Grid,AppBar,Tabs,Tab,Typography,Box} from "@material-ui/core";

// import RegisterDestributor from "./AddDestributor";
// import DestributorTable from './Table'

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box p={3}>{children}</Box>}
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     backgroundColor: theme.palette.background.paper,
//     width: "100%"
//   }
// }));

// export default function DestributorTabs() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = index => {
//     setValue(index);
//   };

//   return (
//     <div className={classes.root}>
//       <Grid container xs={12}>
//       <AppBar position="static" style={{ backgroundColor:"#3F7F7F"}} >
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="primary"
//           maxWidth="100"
        
//           style={{width:"1700px",  backgroundColor:"#3F7F7F"}}
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab  label="Profile" {...a11yProps(0)} />
//           {/* <Tab label="Staff" {...a11yProps(1)} />
//           <Tab label="manager" {...a11yProps(2)} />
//           <Tab label="Admin" {...a11yProps(3)} /> */}
       
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           <Grid container direction="column" sm={12} style={{width:"1750px"}} >
           
//           <Grid item style={{marginBottom:"1%"}} sm={12} >
//           <div style={{float:"right"}}>
//             <RegisterDestributor/></div>
//         </Grid>
//         <Grid item alignItems="strech" sm={12}>
      
//        <DestributorTable/>
//         </Grid>
//           </Grid>
//         </TabPanel>
       
//       </SwipeableViews>
//       </Grid>
//     </div>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import {Grid,Tab} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DestributorTable from './Table'
import RegisterDestributor from "./AddDestributor";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './../../theme'
import ArchivedDisTable from './Table/Archived'
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

export default function FullWidthTabs() {
  const classes = useStyles();
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
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
          <Tab label="Distributor Accounts" {...a11yProps(0)} />
          <Tab label="Archived Accounts" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      </ThemeProvider>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container sm={12}> 
          <Grid item sm={12} style={{textAlign:"right",marginBottom:"12px"}}>
          <RegisterDestributor/>
          </Grid>
          </Grid>
        <DestributorTable/>
        {/* <Grid container direction="column" sm={12} style={{width:"1750px"}} >
           
//           <Grid item style={{marginBottom:"1%"}} sm={12} >
//           <div style={{float:"right"}}>
//             <RegisterDestributor/></div>
//         </Grid>
//         <Grid item alignItems="strech" sm={12}>
      
//        <DestributorTable/>
//         </Grid>
//           </Grid> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ArchivedDisTable/>
        </TabPanel>
        {/* <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
      </SwipeableViews>
    </div>
  );
}
