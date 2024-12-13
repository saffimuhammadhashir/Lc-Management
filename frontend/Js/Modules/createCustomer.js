export function createCustomer(config, createShortcode) {
  // console.log("Main Module - Create Customer");
  loadCountries();
  document.getElementById('createCustomer_CSCCountry').addEventListener('change', function() {   
  document.getElementById('createCustomer_CSCCity').innerHTML = '';
 
    loadStates(this.value);
  });

  document.getElementById('createCustomer_CSCState').addEventListener('change', function() {
  loadCities(this.value);
  });

  // ! Dynamic Table
// Initialize table and headers
var container = document.getElementById('tableContainer');
var table = document.createElement('table');
table.className = 'w3-table-all';
var headerRow = table.insertRow(-1);
var headers = ["Contact Name", "Contact Phone", "Contact Email"];
headers.forEach(function(headerText) {
    var headerCell = document.createElement('th');
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});
container.appendChild(table);

// Variables to store contact information
var contactNameJs = "";
var contactPhoneJs = "";
var contactEmailJs = "";

// Function to add a new editable row
function addEditableRow() {
    var row = table.insertRow(-1); // Append row at the end of the table
    for (var i = 0; i < headers.length; i++) {
        var cell = row.insertCell(i);
        // Create an editable input inside each cell
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'w3-input'; // Style with W3.CSS
        cell.appendChild(input);

        // Event listener to update variables when inputs change
        input.addEventListener('input', updateContactInfo);
    }
}

// Function to update contact information variables
function updateContactInfo() {
    var rows = table.querySelectorAll('tr');
    contactNameJs = "";
    contactPhoneJs = "";
    contactEmailJs = "";
    rows.forEach(function(row, index) {
        if (index !== 0) { // Skip the header row
            var cells = row.querySelectorAll('td input');
            contactNameJs += cells[0].value + "|";
            contactPhoneJs += cells[1].value + "|";
            contactEmailJs += cells[2].value + "|";
        }
    });
}

// Add event listener to the "Add Row" button
document.getElementById('addRowBtn').addEventListener('click', addEditableRow);

// Optional: Initialize the table with one editable row
addEditableRow();

  // ! Dynamic Table End


  const saveContact_Button = document.querySelector("#saveContact_Button");
  saveContact_Button.addEventListener("click", createCustomer);

  function createCustomer() {
    console.log("Save contact");


    // CSC
    var createCustomer_CSCCountry = document.getElementById("createCustomer_CSCCountry");
    var createCustomer_CSCCountryOption = createCustomer_CSCCountry.options[createCustomer_CSCCountry.selectedIndex];
    let createCustomer_CSCCountryText = createCustomer_CSCCountryOption.text;

    var createCustomer_CSCState = document.getElementById("createCustomer_CSCState");
    var createCustomer_CSCStateOption = createCustomer_CSCState.options[createCustomer_CSCState.selectedIndex];
    let createCustomer_CSCStateText = createCustomer_CSCStateOption.text;

    var createCustomer_CSCCity = document.getElementById("createCustomer_CSCCity");
    var createCustomer_CSCCityOption = createCustomer_CSCCity.options[createCustomer_CSCCity.selectedIndex];
    let createCustomer_CSCCityText = createCustomer_CSCCityOption.text;


    //  customer_forwarder_shipper_bank
    let customer_forwarder_shipper_bank_value = document.querySelector('input[name="customer_forwarder_shipper_bank"]:checked').value;
    

    // Default Preparer
    var createCustomer_Default_Preparer = document.getElementById("createCustomer_Default_Preparer");
    var createCustomer_Default_PreparerOption = createCustomer_Default_Preparer.options[createCustomer_Default_Preparer.selectedIndex];
    let createCustomer_Default_PreparerOptionText = createCustomer_Default_PreparerOption.text;


    // Customer Currency
    let createCustomer_Type = document.getElementById("createCustomer_Type");
    let createCustomer_TypeOption = createCustomer_Type.options[createCustomer_Type.selectedIndex];
    const createCustomer_TypeText = createCustomer_TypeOption.text;

    // Customer Currency
    let createCustomer_Currency = document.getElementById("createCustomer_Currency");
    let createCustomer_CurrencyOption = createCustomer_Currency.options[createCustomer_Currency.selectedIndex];
    const createCustomer_CurrencyText = createCustomer_CurrencyOption.text;



    // Customer Code
    let createCustomer_FullnameElement = document.querySelector("#createCustomer_Fullname");
    let createCustomer_Phone = document.querySelector("#createCustomer_Phone");
    let createCustomer_AddressElement = document.querySelector("#createCustomer_Address");

    let firstFourCharactersOfFullName = createCustomer_FullnameElement.value
    ? createCustomer_FullnameElement.value.substring(0, 4)
    : "";
    let lastFourDigitsOfPhone = createCustomer_Phone.value
    ? createCustomer_Phone.value.substring(createCustomer_Phone.value.length - 4)
    : "";
    let firstFourCharactersOfAddress = createCustomer_AddressElement.value
    ? createCustomer_AddressElement.value.substring(0, 4)
    : "";

    let CustomerDetailsShortcode =
    firstFourCharactersOfFullName +
    firstFourCharactersOfAddress +
    lastFourDigitsOfPhone;

      
    // console.log('document.querySelector("#createCustomer_Fullname").value: ', typeof(document.querySelector("#createCustomer_Fullname").value));
    // console.log('document.querySelector("#createCustomer_Address").value: ', typeof(document.querySelector("#createCustomer_Address").value));
    // console.log('CustomerDetailsShortcode ', typeof(CustomerDetailsShortcode));
    // console.log('createCustomer_CSCCountryText ', typeof(createCustomer_CSCCountryText));
    // console.log('createCustomer_CSCStateText ', typeof(createCustomer_CSCStateText));
    // console.log('createCustomer_CSCCityText ', typeof(createCustomer_CSCCityText));
    // console.log('customer_forwarder_shipper_bank_value ', typeof(customer_forwarder_shipper_bank_value));
    // console.log('createCustomer_Default_PreparerOptionText ', typeof(createCustomer_Default_PreparerOptionText));
    // console.log('createCustomer_Default_PreparerOptionText ', typeof(createCustomer_Default_PreparerOptionText));
    // console.log('createCustomer_Procedures ', typeof(document.querySelector("#createCustomer_Procedures").value));
    // console.log('createCustomer_Zipcode ', typeof(document.querySelector("#createCustomer_Zipcode").value));
    // console.log('createCustomer_Phone ', typeof(document.querySelector("#createCustomer_Phone").value));
    // console.log('createCustomer_MailTo_Value ', typeof(document.querySelector("#createCustomer_MailTo_Value").value));
    // console.log('createCustomer_TypeText ', typeof(createCustomer_TypeText));
    // console.log('createCustomer_CurrencyText ', typeof(createCustomer_CurrencyText));
    // console.log('createCustomer_TollFree ', typeof(document.querySelector("#createCustomer_TollFree").value));
    // console.log('createCustomer_AffiliatedWith ', typeof(document.querySelector("#createCustomer_AffiliatedWith").value));
    // console.log('createCustomer_UAN ', typeof(document.querySelector("#createCustomer_UAN").value));
    // console.log('createCustomer_Charges ', typeof(document.querySelector("#createCustomer_Charges").value));
    // console.log('createCustomer_FedexAccountNo ', typeof(document.querySelector("#createCustomer_FedexAccountNo").value));
    // console.log('createCustomer_DHLAccountNo ', typeof(document.querySelector("#createCustomer_DHLAccountNo").value));
    // console.log('createCustomer_UPSAccountNo ', typeof(document.querySelector("#createCustomer_UPSAccountNo").value));
    // console.log('createCustomer_AccountNumber ', typeof(document.querySelector("#createCustomer_AccountNumber").value));
    // console.log('createCustomer_ABA ', typeof(document.querySelector("#createCustomer_ABA").value));
    // console.log('createCustomer_BankName ', typeof(document.querySelector("#createCustomer_BankName").value));
    // console.log('createCustomer_Remarks ', typeof(document.querySelector("#createCustomer_Remarks").value));
    console.log('contactNameJs  ', contactNameJs);
    console.log('contactPhoneJs ', contactPhoneJs);
    console.log('contactEmailJs ', contactEmailJs);





    const customerData = {
      customer_fax: "123",
      customer_full_name: document.querySelector("#createCustomer_Fullname").value,
      customer_address: document.querySelector("#createCustomer_Address").value,
      customer_code: CustomerDetailsShortcode,
      customer_country: createCustomer_CSCCountryText,
      customer_states: createCustomer_CSCStateText,
      customer_city: createCustomer_CSCCityText,
      customer_forwarder_shipper_bank: customer_forwarder_shipper_bank_value,
      customer_default_preparer: createCustomer_Default_PreparerOptionText,
      customer_customer_procedures: document.querySelector("#createCustomer_Procedures").value,
      customer_zipcode: document.querySelector("#createCustomer_Zipcode").value,
      customer_phone: document.querySelector("#createCustomer_Phone").value.toString(),
      customer_mailto: document.querySelector("#createCustomer_MailTo_Value").value,
      customer_type: createCustomer_TypeText,
      customer_currency: createCustomer_CurrencyText,
      customer_toll_free: document.querySelector("#createCustomer_TollFree").value,
      customer_affiliated_with: document.querySelector("#createCustomer_AffiliatedWith").value,
      customer_uan: document.querySelector("#createCustomer_UAN").value,
      customer_charges: document.querySelector("#createCustomer_Charges").value,
      customer_fedex_account_no: document.querySelector("#createCustomer_FedexAccountNo").value,
      customer_dhl_account_no: document.querySelector("#createCustomer_DHLAccountNo").value,
      customer_ups_account_no: document.querySelector("#createCustomer_UPSAccountNo").value,
      customer_account_number: document.querySelector("#createCustomer_AccountNumber").value,
      customer_aba: document.querySelector("#createCustomer_ABA").value,
      customer_bank_name: document.querySelector("#createCustomer_BankName").value,
      customer_payee_name: document.querySelector("#createCustomer_PayeeName").value,
      customer_remarks: document.querySelector("#createCustomer_Remarks").value,
      customer_contact_name:  contactNameJs,
      customer_contact_phone: contactPhoneJs,
      customer_contact_email: contactEmailJs,

    };

    const SavingOptions = {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`${config.HOST}/customers`, SavingOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        console.log(data);
        alert("Contact Added Successfully");

        // Loading Contacts
        // Loading customers information in select field
        let nextStepLC_ShipperOrBene = document.getElementById(
          "nextStepLC_ShipperOrBene"
        );
        nextStepLC_ShipperOrBene.innerHTML = "";
        fetch(`${config.HOST}/customers`)
          .then(function (response) {
            if (!response.ok) {
              throw new Error("Network response was not OK");
            }
            return response.json();
          })
          .then(function (responseCustomers) {
            console.log("Create Customer");

            nextStepLC_ShipperOrBene.value = "";
            nextStepLC_ShipperOrBene.name = "";

            for (const customer of responseCustomers) {
              var option1 = document.createElement("option");
              // console.log('create customer: ', customer);

              option1.text =
                createShortcode(customer) +
                "  (" +
                customer.customer_full_name +
                ") (" +
                customer.customer_address +
                ") (" +
                customer.customer_phone +
                ")";
              option1.value = customer.customer_id;
              nextStepLC_ShipperOrBene.add(option1);
            }
          })
          .catch(function (error) {
            console.log("Error:", error);
          });

        // End loading contacts again

        document.getElementById("info").style.display = "none";
      })
      .catch((error) => {
        console.log(error);
      });
  }





  function loadCountries() {
    fetch(`${config.HOST}/CSCCountryNameAll`)
    .then(response => response.json())
    .then(data => {
        populateSelect('createCustomer_CSCCountry', data);
    })
    .catch(error => console.error('Error fetching countries:', error));
}

function loadStates(countryId) {
    document.getElementById('createCustomer_CSCState').innerHTML = '';

    if (!countryId) {
        // Disable state select if no country is selected
        document.getElementById('createCustomer_CSCState').disabled = true;
        return;
    } else {
        // Call your API to get states for the selected country
        // Populate the state-select element
        // Enable state select
        document.getElementById('createCustomer_CSCState').disabled = false;
        fetch(`${config.HOST}/CSCStateByCountryName/${countryId}`)
        .then(response => response.json())
        .then(data => {
        populateSelect('createCustomer_CSCState', data);
        })
        .catch(error => console.error('Error fetching state:', error));
        }
   
}       

function loadCities(stateId) {
    document.getElementById('createCustomer_CSCCity').innerHTML = '';

    if (!stateId) {
        // Disable city select if no state is selected
        document.getElementById('createCustomer_CSCCity').disabled = true;
        return;
    } else {
         // Call your API to get cities for the selected state
         // Populate the city-select element
         // Enable city select
        document.getElementById('createCustomer_CSCCity').disabled = false;
        fetch(`${config.HOST}/CSCCityByStateAndCountryName/${stateId}`)
        .then(response => response.json())
        .then(data => {
        populateSelect('createCustomer_CSCCity', data);
        })
        .catch(error => console.error('Error fetching city:', error));
        }
   
}

function populateSelect(selectId, items) {

    const select = document.getElementById(selectId);
    items.forEach(item => {
        let option = document.createElement('option');
        option.value = item.id; // Assuming each item has an id
        option.textContent = item.name; // Assuming each item has a name
        select.appendChild(option);
    });
}



}
