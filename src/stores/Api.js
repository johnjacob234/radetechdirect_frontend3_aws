import axios from 'axios';
import { action, decorate } from 'mobx';

class Api {
	api = axios.create({
		baseURL: 'http://localhost:4000/'
	});

	getUsers = () => {
		return this.api.get('accounts');
	};
	addaccount = (data) => {
		return this.api.post('accounts', {
			mode: 'cors',
			data: data
		});
	};
	getaccounts = () => {
		return this.api.get('accounts');
	};
	editaccount = (data, docID) => {
		return this.api.post(`accounts/${docID}`, {
			mode: 'cors',
			data: data
		});
	};

	addproduct = (data) => {
		return this.api.post('product', {
			mode: 'cors',
			data: data
		});
	};

	addproductImg = (data) => {
		return this.api.post('upload', data, {
			mode: 'cors'
		});
	};
	getproductImg = (data) => {
		return this.api.post('getproductImg', {
			mode: 'cors',
			data: data
		});
	};

	getproducts = (id) => {
		return this.api.get(`products/${id}`);
	};

	fileupload = (data) => {
		return this.api.post('product', {
			mode: 'cors',
			data: data
		});
	};

	loginaccount = (data) => {
		return this.api.post('accounts/login', {
			mode: 'cors',
			data: data
		});
	};

	adddistributor = (data) => {
		return this.api.post('distributors', {
			mode: 'cors',
			data: data
		});
	};
	getdistributors = () => {
		return this.api.get('distributors');
	};

	editdistributor = (data, distributor_ID) => {
		return this.api.put(`distributors/${distributor_ID}`, {
			mode: 'cors',
			data: data
		});
	};

	archivedistributor = (data, distributor_ID) => {
		return this.api.put(`distributors/${distributor_ID}`, {
			mode: 'cors',
			data: data
		});
	};

	editproduct = (data, product_ID) => {
		return this.api.put(`product/${product_ID}`, {
			mode: 'cors',
			data: data
		});
	};

	// getinventory = (id) =>{
	//   return this.api.get(`inventory/${id}`)

	// }

	addstock = (data, product_ID) => {
		return this.api.post(`stock/${product_ID}`, {
			mode: 'cors',
			data: data
		});
	};

	getstock = (id) => {
		return this.api.get(`stock/${id}`);
	};

	// addstocks = (data ,product_ID)=>{
	//   return this.api.put(`product/${product_ID}`,{
	//   mode:'cors',
	//   data:data,
	// })
	// }

	addtocart = (data) => {
		return this.api.post('cart', {
			mode: 'cors',
			data: data
		});
	};

	editcart = (data, cart_ID, account_ID, distributor_ID) => {
		return this.api.put(`cart/${cart_ID}/${account_ID}/${distributor_ID}`, {
			mode: 'cors',
			data: data
		});
	};

	getcart = (id) => {
		return this.api.get(`cart/${id}`);
	};

	deletecart = (data, id, account_ID) => {
		return this.api.delete(`cart/${id}/${account_ID}`, {
			data: data
		});
	};

	addorder = (data) => {
		return this.api.post('order', {
			mode: 'cors',
			data: data
		});
	};

	getorder = (id) => {
		return this.api.get(`order/${id}`);
	};

	assignorder = (data, id) => {
		return this.api.patch(`order/${id}`, {
			mode: 'cors',
			data: data
		});
	};

	staffassigned = (id, distributor_ID) => {
		return this.api.get(`order/${id}/${distributor_ID}`);
	};

	addtoken = (data) => {
		return this.api.post('token/', {
			mode: 'cors',
			data: data
		});
	};

	deletetoken = (id) => {
		return this.api.delete(`token/${id}`);
	};

	gettoken = (id) => {
		return this.api.get(`token/${id}`);
	};

	accessdistributor = (id) => {
		return this.api.get(`token/${id}`);
	};

	addreport = (data) => {
		return this.api.post('/report', {
			mode: 'cors',
			data: data
		});
	};

	addclogs = (data) => {
		return this.api.post('/log', {
			mode: 'cors',
			data: data
		});
	};
}

decorate(Api, {
	getUsers: action,
	addaccount: action,
	getaccounts: action,
	loginaccount: action,
	editaccount: action,
	addproduct: action,
	getproducts: action,
	adddistributor: action,
	getdistributors: action,
	editdistributor: action,
	addproductImg: action,
	getproductImg: action,
	editproduct: action,
	// addinventory:action,
	// getinventory:action,
	addstock: action,
	getstock: action,
	// addstocks:action,
	addcart: action,
	getcart: action,
	editcart: action,
	deletecart: action,
	addorder: action,
	getorder: action,
	addtoken: action,
	deletetoken: action,
	gettoken: action,
	accessdistributor: action,
	assignorder: action,
	staffassigned: action,
	addreport: action,
	archivedistributor: action,
	addclogs: action
});

export default Api;
