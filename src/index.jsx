import React from 'react';
import { render } from 'react-dom';
import {
	StartingStore,
	IssuesStore,
	AccountingStore,
	CrmStore,
	InventoryStore,
	OrderStore,
	ManagerStore,
	EmployeeStore,
	CustomerStore,
	StaffStore,
	ReportStore,
	NotificationStore,
	SupAdminStore,
	Api
} from './stores';
import { Provider } from 'mobx-react';
const api = new Api();
const startingStore = new StartingStore(api);
const issuesStore = new IssuesStore(api);
const crmStore = new CrmStore(api);
const accountingStore = new AccountingStore(api);
const inventoryStore = new InventoryStore(api);
const orderStore = new OrderStore(api);
const managerStore = new ManagerStore(api);
const employeeStore = new EmployeeStore(api);
const customerStore = new CustomerStore(api);
const staffStore = new StaffStore(api);
const reportStore = new ReportStore(api);
const notificationStore = new NotificationStore(api);
const supadminStore = new SupAdminStore(api);

const stores = {
	startingStore,
	issuesStore,
	accountingStore,
	inventoryStore,
	crmStore,
	orderStore,
	managerStore,
	employeeStore,
	customerStore,
	staffStore,
	reportStore,
	notificationStore,
	supadminStore
};

import App from './App/App';

render(
	<Provider {...stores}>
		<App />
	</Provider>,
	document.getElementById('app')
);
