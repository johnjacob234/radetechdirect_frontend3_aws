import {decorate, observable} from 'mobx';
import Model from "./Model";

class Order extends Model {
constructor(props){
 const defaults ={
 orderID:"",
 modeOfPayment:"",
 orderDate:"",
 orderItems:"",
 order_Quantity:"",
 orderStatus:"",
 paymentStatus:"",
 order_addedInfo:"",
 order_totalPayment:"",
 account_ID:"",
 distributor_ID:"",
 packer_ID:"",
 dispatcher_ID:"",




 };
 super({...defaults,...props});
}

}
decorate(Order,{

    orderID:observable,
    modeOfPayment:observable,
    orderDate:observable,
    orderItems:observable,
    order_Quantity:observable,
    orderStatus:observable,
    paymentStatus:observable,
    order_addedInfo:observable,
    order_totalPayment:observable,
    account_ID:observable,
    distributor_ID:observable,
    packer_ID:observable,
    dispatcher_ID:observable,

});


export default Order;