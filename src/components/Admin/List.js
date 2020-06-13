import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';




class DrawerList extends React.Component{

render(){

   
//   let {startingStore:{ getProducts}}=this.props;


return (


    <List>
        
    <ListItem button >
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/Admin");
 
  }} ><DashboardIcon  style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Admin");
 
  }}> Dashboard</ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button>
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/Admin/CRM");
 
  }}><PeopleAltOutlinedIcon  style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Admin/CRM");
 
  }}> CRM </ListItemText> 
    </ListItem>
    <Divider />
    <ListItem button >

<ListItemIcon onClick={()=>{
   
   this.props.history.push("/Admin/AdminUserManagement");

}}><FormatListNumberedOutlinedIcon  style={{color:"white"}}/></ListItemIcon>
<ListItemText onClick={()=>{
   
   this.props.history.push("/Admin/AdminUserManagement");

}}>Employee Management</ListItemText> 
</ListItem>
<Divider />

<ListItem button >
      <ListItemIcon onClick={()=>{

         this.props.history.push("/Admin/InventoryManagement");
 
  }}><HomeWorkIcon  style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Admin/InventoryManagement");
 
  }}> Inventory Management</ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button>
      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/Admin/OrderManagement");
 
  }}><AssignmentOutlinedIcon  style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Admin/OrderManagement");
 
  }}> Order Management </ListItemText> 
    </ListItem>
    <Divider />


    <ListItem button >

      <ListItemIcon onClick={()=>{
         
         this.props.history.push("/Admin/ProfileManagement");
 
  }}><PersonOutlineIcon  style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Admin/ProfileManagement");
 
  }}> Profile Management</ListItemText> 
    </ListItem>
    <Divider />


    <ListItem button >

<ListItemIcon onClick={()=>{
   
   this.props.history.push("/Admin/Accounting");

}}><AccountBalanceIcon  style={{color:"white"}}/></ListItemIcon>
<ListItemText onClick={()=>{
   
   this.props.history.push("/Admin/Accounting");

}}> Accounting</ListItemText> 
</ListItem>
<Divider />

    <ListItem button >
      <ListItemIcon onClick={()=>{

         this.props.history.push("/Admin/Reports");
 
  }}><AssessmentOutlinedIcon  style={{color:"white"}}/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Admin/Reports");
 
  }}> Reports</ListItemText> 
    </ListItem>
    <Divider />
</List>




);




}





}
export default withRouter(inject("startingStore")(observer(DrawerList)));