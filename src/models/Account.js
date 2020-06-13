import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Account extends Model {
  constructor(props) {
    const defaults = {
        account_ID: "",
        distributor_ID:"",
        account_fName: "",
        account_lName:"",
        account_mName: "",
        account_suffix: "",
        account_address: "",
        account_emailAddress: "",
        account_contactNo :"",
        account_contract :"",
        account_username: "",
        account_password: "",
        account_birthday:"",
        account_dateRegistered :"",
        account_shopName :"",
        account_shopAddress :"",
        staff_Role :"",
        account_accessType:"",
        account_status:"",
    };
    super({ ...defaults, ...props });
  }

  // static get schema() {
  //   return {
  //     _id: Joi.string()
  //       .hex()
  //       .length(20),
  //     firstName: Joi.string().required(),
  //     lastName: Joi.string().required(),
  //     email: Joi.email().required(),
  //     password: Joi.string().required(),
  //     phone: Joi.string().required(),
  //     address: Joi.object().keys({
  //       street: Joi.string(),
  //       city: Joi.string(),
  //       state: Joi.string(),
  //       postalCode: Joi.number()
  //     }),
  //     date: Joi.date()
  //       .iso()
  //       .required()
  //   };
  // }
}

decorate(Account, {
  account_ID: observable,
  distributor_ID:observable,
  account_fName: observable,
  account_lName:observable,
  account_mName: observable,
  account_suffix: observable,
  account_address: observable,
  account_emailAddress: observable,
  account_contactNo :observable,
  account_contract :observable,
  account_username: observable,
  account_password: observable,
  account_birthday:observable,
  account_dateRegistered :observable,
  account_shopName :observable,
  account_shopAddress :observable,
  staff_Role :observable,
  account_accessType:observable,
  account_status:observable,
});

export default Account;
