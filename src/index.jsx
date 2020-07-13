import React from 'react';
import { render } from 'react-dom';
import { StartingStore, Api,
 IssuesStore, AccountingStore, CrmStore, InventoryStore, 
OrderStore, ManagerStore,EmployeeStore,CustomerStore,
 StaffStore,ReportStore,NotificationStore } from './stores'; 
import { Provider } from 'mobx-react';
 const api = new Api();
 const startingStore = new StartingStore(api);
 const issueStore = new IssuesStore(api); 
 const accountingStore = new AccountingStore(api);
 const crmStore = new CrmStore(api);
 const inventoryStore = new InventoryStore(api);
 const orderStore = new OrderStore(api);
 const managerStore = new ManagerStore(api);
 const employeeStore = new EmployeeStore(api);
 const customerStore = new CustomerStore(api);
 const staffStore = new StaffStore(api);
 const reportStore = new ReportStore(api);
 const notificationStore = new NotificationStore(api);
 const stores = {startingStore,issueStore,accountingStore, crmStore,inventoryStore,orderStore,managerStore,employeeStore,customerStore,staffStore,
reportStore,notificationStore};

import App from './App/App';

render(
	<Provider {...stores}>
		<App />
	</Provider>,
	document.getElementById('app')
);
