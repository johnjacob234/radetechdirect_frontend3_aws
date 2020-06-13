import { action, observable, decorate, computed } from "mobx";
import User from "../models/User";
import Account from "../models/Account";
import Product from "../models/Product";
import Distributor from "../models/Distributor";

import Stock from "../models/Stock";
import Token from './../models/AccessCode'
import MyCart from './../models/MyCart'
import Order from './../models/Order'
import Report from './../models/Report'
import CustomerLogs from './../models/CustomerLogs'
class StartingStore {
  account =new Account();
  product = new Product();
  distributor = new Distributor();
  token = new Token();
  stock = new Stock();
  currentUser = new User();
  cart = new MyCart();
  order = new Order();
  report = new Report();
  cLogs = new CustomerLogs();

  welcomeMessage = "Welcome!";
  listOfUsers = [];
  listOfDistributors =[];
  listofProducts =[];
  listOfCart = [];
  listOfReport= [];
  productStocks=[];
  listofProductImg =[];
  listOfUserDocs = [];
  listOfOrder =[];
  listOfDistributorDocs = [];
  listOfToken = [];
  api = undefined
  

  constructor(api) {
    this.api = api
  }


  addAccount = () => {
    this.api.addaccount(this.account)
    .then(resp => {
      console.log(resp.data)

     
    })
  }

  getAccounts = () => {
    this.api.getaccounts()
    .then(resp => {

     this.listOfUsers=resp.data
     this.listOfUserDocs = resp.data
  
    })
  }
  

  getProducts = () => { 
    return new Promise((resolve, reject) => {   
      let getDisId = JSON.parse(sessionStorage.getItem('userData'))

    
      this.api.getproducts(getDisId.distributor_ID)
      .then(resp => {    
         this.listofProducts = resp.data
   
         if (resp.data !== false ) {   
                  resolve(resp.data);       
                  } 
         else {         
           resolve(false);      
           }  
           });
          })
    }

    getProductImg = () => {
      return new Promise((resolve,reject)=>{
        let getId = JSON.parse(sessionStorage.getItem('userData'))

        this.api.getproductImg(getId.distributor_ID)
        .then(resp => {
          this.listofProductImg = resp.data
  
          if (resp.data !== false ) {   
            resolve(resp.data);       
            } 
   else {         
     resolve(false);      
     }  
        })

      })
     
    }


  editAccount = () => {
    let doc = this.listOfUserDocs.filter(data=> {
      if (data.account_ID === this.account.account_ID){
          return data._id
      }
    })

 
    this.api.editaccount(this.account , doc[0]._id)
    .then(resp => {
   
      this.listOfUsers=resp.data
    })
  }


  loginAccount = () => { 
    return new Promise((resolve, reject) => {   
         this.api.loginaccount(this.account)
         .then(resp => {        
             console.log(resp.data) 
             sessionStorage.setItem("userData",JSON.stringify(resp.data));
            //  this.cookies.set("userData", resp.data, {            
            //  expires: new Date(Date.now() + 5592000)          });      
         
            
          console.log(resp.data.account_accessType , "Aws")   
            if (resp.data.account_accessType === "superadmin"  ) {   
                     resolve(1);       
                     } 
              else if (resp.data.distributor_accessType === "distributor"){
                resolve(2);
              }
              else if (resp.data.account_accessType === "customer"){
                resolve(3);
              }
              else if (resp.data.account_accessType === "staff"){
                console.log('tama')
                resolve(4);
              }

            else {         
              resolve(false);      
              }  
              });
        });
      }



        addProduct = () => { 
          return new Promise((resolve, reject) => {   
            this.api.addproduct(this.product)
            .then(resp => {    
               this.listofProducts = resp.data
         
               if (resp.data !== false ) {   
                        resolve(resp.data);       
                        } 
               else {         
                 resolve(false);      
                 }  
                 });
                })
          }


        addProductImg = (img) => {
         
          this.api.addproductImg(img)
          .then(resp => {
            console.log(resp ,"resp")
            this.product.setProperty('product_Img' , resp.data.secure_url )
            this.addProduct()
           
          })
        }

        editProduct = () => {
          let prod = this.listofProducts.filter(data=> {
            if (data.product_ID === this.product.product_ID){
                return data._id
            }
          })
      console.log(this.product,"ID")
       
      this.api.editproduct(this.product, prod[0]._id)
          .then(resp => {
         
            this.listofProducts=resp.data
          })
        }

      //   addStocks = () => {
      //     let stock = this.listofProducts.filter(data=> {
      //       if (data.product_ID === this.product.product_ID){
      //           return data._id
      //       }
      //     })
      // console.log(this.product,"ID")
       
      // this.api.addstocks(this.product, stock[0]._id)
      //     .then(resp => {
         
      //       this.listofProducts=resp.data
      //     })
      //   }


        
        fileUpload = data => {
          let local = JSON.parse(localStorage.getItem("Inventory"));
          return new Promise((resolve, reject) => {
            this.api.fileupload(data, local.product_ID).then(resp => {
              console.log(resp.data);
              if (resp.data !== false) {
                resolve(1);
              } else {
                resolve(false);
              }
            });
          });
        };

        addDistributor = () => {
          this.api.adddistributor(this.distributor)
          .then(resp => {
            console.log(resp.data)
      
           
          })
        }




      getDistributors = () => { 
        return new Promise((resolve, reject) => {   
          this.api.getdistributors()
          .then(resp => {    
             this.listOfDistributors = resp.data
       
             if (resp.data !== false ) {   
                      resolve(resp.data);       
                      }  
             else {         
               resolve(false);      
               }  
               });
              })
        }

        editDistributor = () => {
          let dis = this.listOfDistributors.filter(data=> {
            if (data.distributor_ID === this.distributor.distributor_ID){
                return data._id
            }
          })
      console.log(dis)
       
          this.api.editdistributor(this.distributor , dis[0]._id)
          .then(resp => {
         
            this.listOfDistributors=resp.data
          })
        }

        // getDistributors = () => { 
        //   return new Promise((resolve, reject) => {   
        //     this.api.getdistributors()
        //     .then(resp => {    
        //        this.listOfDistributors = resp.data
         
        //        if (resp.data !== false ) {   
        //                 resolve(resp.data);       
        //                 } 
        //        else {         
        //          resolve(false);      
        //          }  
        //          });
        //         })
        //   }
        archiveDistributor = () => {
          let dis = this.listOfDistributors.filter(data=> {
            if (data.distributor_ID === this.distributor.distributor_ID){
                return data._id
            }
          })
          
       
          this.api.archivedistributor(this.distributor , dis[0]._id)
          .then(resp => {
         
            this.listOfDistributors=resp.data
          })
        }




        addStock = () => {
          let getId = JSON.parse(sessionStorage.getItem('userData'))
          let dis = this.listofProducts.filter(data=> {
            if (data.product_ID === this.product.product_ID){
                return data._id
            }
          })
      console.log(dis)
       
          this.api.addstock(this.stock , dis[0]._id)
          .then(resp => {
         console.log(resp.data,"respss")
            this.listofProducts=resp.data
          })
        }


        getStock = () => { 
          return new Promise((resolve, reject) => {   
            let getDistId = JSON.parse(sessionStorage.getItem('userData'))
            this.api.getstock(getDistId.distributor_ID)
            .then(resp => {    
               this.productStocks = resp.data
         
               if (resp.data !== false ) {   
                        resolve(resp.data);       
                        } 
               else {         
                 resolve(false);      
                 }  
                 });
                })
          }


          addtoCart = () => {
            this.api.addtocart(this.cart)
            .then(resp => {
              console.log(resp.data)
        
             
            })
          }
          
          getCart = () => {
            return new Promise ((resolve,reject) =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            
            this.api.getcart(getuserId.account_ID)
            .then(resp =>{
              this.listOfCart =resp.data

              if (resp.data !== false){
                resolve(resp.data);

              }
              else{
                resolve(false);
              }
            });
          } )
          }

          editCart = () => {

            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            let cartz = this.listOfCart.filter(data=> {
              if (data.cart_ID === this.cart.cart_ID){
                  return data._id
              }

            })
        console.log(cartz,"awa")
         
            this.api.editcart(this.cart , cartz[0]._id,getuserId.account_ID, getuserId.distributor_ID)
            .then(resp => {
               console.log(resp.data,"editt")
              this.listOfCart=resp.data
            })
          }


          deleteCart =() =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            let cartz = this.listOfCart.filter(data=> {
              if (data.cart_ID === this.cart.cart_ID){
                  return data._id
              }

            })
            console.log(cartz,"deleter")
            this.api.deletecart(this.cart , cartz[0]._id,getuserId.account_ID)
            .then(resp => {
               console.log(resp.data,"editt")
              this.listOfCart=resp.data
            })
          }

          addOrder = () => {
            return new Promise((resolve, reject) => {
            this.api.addorder(this.order)
           
             .then(resp => {
              this.listOfOrder = resp.data
              if (resp.data !== false ) {   
                resolve(resp.data);       
                } 
       else {         
         resolve(false);      
         }  
       
             })
            })
          }

          getOrder = () => {
            return new Promise ((resolve,reject) =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            
            this.api.getorder(getuserId.distributor_ID)
            .then(resp =>{
              this.listOfOrder =resp.data

              if (resp.data !== false){
                resolve(resp.data);
               console.log(resp.data,"safasfas")
              }
              else{
                resolve(false);
              }
            });
          } )
          }

          staffAssigned = () => {
            return new Promise ((resolve,reject) =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            console.log(getuserId.account_ID,getuserId.distributor_ID,"duwa")
            this.api.staffassigned(getuserId.account_ID,getuserId.distributor_ID)
            .then(resp =>{
              console.log(resp.data)
              this.listOfOrder =resp.data
                  
              if (resp.data !== false){
                resolve(resp.data);
               console.log(resp.data,"packerassign")
              }
              else{
                resolve(false);
              }
            });
          } )
          }

          assignOrder = () => {
            let dis = this.listOfOrder.filter(data=> {
              console.log(this.order,"filtere")
              if (data.orderID === this.order.orderID){
                  return data._id
              }
            })
        console.log(dis,"assign order")
         
            this.api.assignorder(this.order , dis[0]._id)
            .then(resp => {
           
              this.listOfOrder=resp.data
            })
          }


          addToken = () => {
            this.api.addtoken(this.token)
            .then(resp => {
              console.log(resp.data)
        
             
            })
          }

          deletetoken =() =>{
            let mytoken =this.listOfCart.filter(data =>{
              if (data.distributor_ID === this.token.Distributor_ID){
                return data._id
              }
            })
            this.api.deletetoken(this.token ,mytoken[0]._id)
            .then(resp => {

              this.listOfToken=resp.data
            })
          }

          getToken = () => {
            return new Promise ((resolve,reject) =>{
            let getuserId = JSON.parse(sessionStorage.getItem('userData'))
            
            this.api.gettoken(getuserId.distributor_ID)
            .then(resp =>{
              this.listOfToken =resp.data

              if (resp.data !== false){
                resolve(resp.data);

              }
              else{
                resolve(false);
              }
            });
          } )
          }



          accessDistributor = () => { 
            return new Promise((resolve, reject) => {   
              this.api.accessdistributor(this.token.access_Token)
              .then(resp => {        
                  console.log(resp.data,"my") 

                  sessionStorage.setItem("distributorData",JSON.stringify(resp.data));
            
           
               
               let getdisId = JSON.parse(sessionStorage.getItem('distributorData'))
              // 
                
              console.log(getdisId.distributor)
              
             
                if (resp.data[0].access_distributor_ID === getdisId.distributor_ID  ) {   
                         
                          resolve(resp.data[0].distributor_ID)   
                          } 
                  
                 else {         
                  console.log("false")     
                   }  

                   });
             });
       
              }


              addReport = () => { 
                return new Promise((resolve, reject) => {   
                  this.api.addreport(this.report)
                  .then(resp => {    
                     this.listOfReport = resp.data
                      console.log(resp.data,'reports')
                     if (resp.data !== false ) {   
                              resolve(resp.data);       
                              } 
                     else {         
                       resolve(false);      
                       }  
                       });
                      })
                }

        
                addcLogs = () => {
                  this.api.addclogs(this.cLogs)
                  .then(resp => {
                    console.log(resp.data)
              
                   
                  })
                }

           
}

decorate(StartingStore, {
  welcomeMessage: observable,
  listName: observable,
  currentUser: observable,
  changeMessage: action,
  resetMessage: action,
  pushToArray: action,
  getName: action,
  addAccount:action,
  getAccounts:action,
  editAccount:action,
  account : observable,
  listOfUsers:observable,
  addProduct:action,
  product :observable,
  listofProducts:observable,
  getProducts:action,
  fileUpload:action,
  listofProductImg:observable,
  addDistributor:action,
  distributor:observable,
  listOfDistributors:observable,
  getDistributors:action,
  addProductImg:action,
  getProductImg:action,
  editProduct:action,
  addStock:action,
  productStocks:observable,
 getStock:action,
  stock:observable,
 
  cart : observable,
  addtoCart:action,
  listOfCart:observable,
  getCart:action,
  deleteCart:action,
  addOrder:action,
  order:observable,
  listOfOrder:observable,
  getOrder:action,
  token:observable,
  listOfToken:observable,
  addToken:action,
  deleteToken:action,
  getToken:action,
  accessDistributor:action,
  assignOrder:action,
  staffAssigned:action,
  report:observable,
  listOfReport:observable,
  archiveDistributor:action,
  cLogs:observable,
  addcLogs:action,
  
});

export default StartingStore;
