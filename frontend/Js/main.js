// console.log("Main JS - Call Modules Here");

import config from "./Configuration/config.prod.js";
// import config from "./Configuration/config.dev.js";

import {checkCookie, getCookie, setCookie, deleteCookie } from "./Modules/cookies.js";
import { navbar_function } from './Modules/navbar.js';
import { logout_function } from './Modules/logoutbutton.js';
import { lc_Count_Function } from './Modules/lcCount.js';
import { admin_List_Function } from './Modules/AdminList.js';
import { display_Banks_Function } from './Modules/DisplayBanks.js';
import { display_lc_function } from './Modules/display_LC.js';
import { saving_lc_function } from './Modules/savingLC.js';
import { HandlerNextStepLC } from './Modules/HandlerNextStepLC.js';
import { NewLCFunction } from './Modules/NewLCButton.js';
import { createCustomer } from './Modules/createCustomer.js';
import { createBank } from './Modules/createBank.js';
import prePrintFunction from "./Modules/prePrintFunction.js";
import printAllFunction from "./Modules/printAllButton.js";
import PrintListener from "./Modules/PrintListener.js";
import CustomerInfoButton from "./Modules/CustomerInfoButton.js";
import { createShortcode, convertLCID, reverseConvertLCID, extractValuesFromSecondParentheses} from './Modules/reusableFunctions.js';

// Select Field
import { AddTenorOfDraftFunction } from './Modules/DialogBox/AddTenorOfDraft.js';
import { AddSalesTermsFunction } from './Modules/DialogBox/AddSalesTerms.js';
import { AddMeasurementsFunction } from './Modules/DialogBox/AddMeasurements.js';
import { AddFreightFunction } from './Modules/DialogBox/AddFreight.js';
import { AddTelephoneCodeFunction } from './Modules/DialogBox/AddTelephoneCode.js';
import { AddMAWBFunction } from './Modules/DialogBox/AddMAWB.js';
// Listeners
import { ChangeCarrierName } from './Modules/Listener/CarrierName.js';
import { EscapeModalFunction } from './Modules/Listener/EscapeModal.js';


// Create
import CreateBankModule from "./Modules/Create/CreateBankHomepage.js";


// Update
import UpdateBankModule from "./Modules/Update/UpdateBankHomepage.js";

// Update Table
import UpdateCourierTableFunction from "./Modules/Update/UpdateCourierTable.js";
import UpdateDateTableFunction from "./Modules/Update/UpdateDateTable.js";
import UpdateLcTableFunction from "./Modules/Update/UpdateLcTable.js";

import UpdateCustomerTableFunction from "./Modules/Update/UpdateCustomerTable.js";
import UpdateBankTableFunction from "./Modules/Update/UpdateBankTable.js";


// Search
import HomepageSearchModalFunction from "./Modules/Search/HomepageSearch.js";


// !Function Calls

// First Check the cookies
checkCookie();

// Logout Button function
logout_function(deleteCookie);

// Navbar function on homescreen
navbar_function(getCookie);

// display_lc_function on homescreen
lc_Count_Function(config);
admin_List_Function(config);
display_Banks_Function(config)
display_lc_function(config, convertLCID, reverseConvertLCID);


// Listeners
ChangeCarrierName(config);
EscapeModalFunction();

// Next LC
NewLCFunction(config);

// Next Step LC
HandlerNextStepLC(config, createShortcode, convertLCID, extractValuesFromSecondParentheses);
CustomerInfoButton(config);
createCustomer(config, createShortcode);
createBank(config);
saving_lc_function(config);


// Create Bank and Customers
CreateBankModule(config);

// Update Bank and Customers
UpdateBankModule(config);


// Update Table
UpdateCourierTableFunction(config);
UpdateDateTableFunction(config);
UpdateLcTableFunction(config, reverseConvertLCID);

UpdateCustomerTableFunction(config);
UpdateBankTableFunction(config);

// Select
AddTenorOfDraftFunction(config, reverseConvertLCID);
AddSalesTermsFunction(config, reverseConvertLCID);
AddMeasurementsFunction(config, reverseConvertLCID);
AddFreightFunction(config, reverseConvertLCID);

// Others
AddTelephoneCodeFunction(config, reverseConvertLCID);
AddMAWBFunction(config, reverseConvertLCID);
HomepageSearchModalFunction();

// Print Listener
PrintListener();
prePrintFunction(config);
printAllFunction(config);
