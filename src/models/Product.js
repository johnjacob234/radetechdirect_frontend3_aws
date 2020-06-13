import Joi from "joi";
import { decorate, observable } from "mobx";
import Model from "./Model";

class Product extends Model {
  constructor(props) {
    const defaults = {
        product_ID: "",
        distributor_ID: "",
        product_Name: "",
        product_Category:"",
        product_Description: "",
        product_Price: "",
        product_UoM: "",
        product_Img: undefined,
        product_Barcode: "",
        product_Brand: "",
        product_Stocks:"",
        product_DateReceived: "",
        product_ExpirationDate: "",
        product_Remarks: "",

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

decorate(Product, {
    product_ID: observable,
    distributor_ID:observable,
    product_Name: observable,
    product_Category:observable,
    product_Description: observable,
    product_Price: observable,
    product_UoM: observable,
    product_Img: observable,
    product_Stock:observable,
    product_Barcode: observable,
    product_Brand: observable,
    product_DateReceived: observable,
    product_ExpirationDate: observable,
    product_Remarks: observable,

});

export default Product;
