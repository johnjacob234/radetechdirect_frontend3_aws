import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';








class DrawerList extends React.Component{

render(){
  let {startingStore:{ getProducts}}=this.props;


return (


    <List>
        
    <ListItem button >
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/SuperAdmin");
 
  }} ><DashboardIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/SuperAdmin");
 
  }}> Dashboard</ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button>
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/SuperAdmin/DistibutorManagement");
 
  }}><PeopleAltOutlinedIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/SuperAdmin/DistributorManagement");
 
  }}> CRM </ListItemText> 
    </ListItem>
    <Divider />


</List>




);




}





}
export default withRouter(inject("startingStore")(observer(DrawerList)));