import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from './../../Logo/logowhite.png'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

class DrawerList extends React.Component{

render(){

       function  logout() {
              localStorage.clear();
              window.location.href = '/';
          }
//   let {startingStore:{ getProducts}}=this.props;


return (


    <List >
           <ListItem style={{textAlign:"center"}} > 
           <img src={logo} style={{height:"60px",margin:"auto"}} /> 
     
 
    </ListItem>
    <Divider  />



        <ListItem button >
      <ListItemIcon style={{color:"white"}} onClick={()=>{

         this.props.history.push("/Staff");
 
  }}><ListAltIcon/></ListItemIcon>
     <ListItemText style={{color:"white"}} onClick={()=>{
         
         this.props.history.push("/Staff");
 
  }}> My Orders</ListItemText> 
    </ListItem>
    <Divider  />

    <ListItem button  style={{color:"white"}}>
      <ListItemIcon style={{color:"white"}} onClick={()=>{
      
         this.props.history.push("/Staff/MyProfile");
 
  }}><FaceIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Staff/MyProfile");
 
  }}> My Profile</ListItemText> 
    </ListItem>
    <Divider />

    <ListItem button  style={{color:"white"}}>

      <ListItemIcon style={{color:"white"}} onClick={()=>{
         
         this.props.history.push("/Staff/OrderHistory");
 
  }}><LibraryBooksOutlinedIcon/></ListItemIcon>
     <ListItemText onClick={()=>{
         
         this.props.history.push("/Staff/OrderHistory");
 
  }}> Order History</ListItemText> 
    </ListItem>
    <Divider />


    <ListItem button  style={{color:"white"}}>

<ListItemIcon style={{color:"white"}} onClick={logout}><ExitToAppOutlinedIcon/></ListItemIcon>
<ListItemText onClick={logout}> Logout</ListItemText> 
</ListItem>
<Divider />



</List>




);




}





}
export default withRouter(inject("startingStore")(observer(DrawerList)));