export default function UpdateBankModule(config) {
    // console.log("Main Module - Update Bank Module  😊");
 
    document.getElementById("Homepage_UpdateBank_Close_Button").addEventListener("click", function () {
      document.getElementById("updateBankModal").classList.remove("show");
      document.getElementById("updateBankModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });


    document
    .getElementById("Homepage_AdvisingBank_Info_Button")
    .addEventListener("click", function () {
        
      document.getElementById("updateBankModal").classList.add("show");
      document.getElementById("updateBankModal").style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";

      document.body.classList.add("modal-open");


    //  ! Start CSC
        loadCountries();
    
        document.getElementById('Homepage_UpdateBank_CSC_Country').addEventListener('change', function() {   
            document.getElementById('Homepage_UpdateBank_CSC_City').innerHTML = '';
         
            loadStates(this.value);
        });
    
        document.getElementById('Homepage_UpdateBank_CSC_State').addEventListener('change', function() {
            loadCities(this.value);
        });

        fetch(`${config.HOST}/banks/38`)
        .then(response => response.json())
        .then(data => {
        // Propogate the existing Values of bank
        console.log('Data: ', data);
        
        document.getElementById('Homepage_UpdateBank_MainBank').value = data.bank_main_bank;
        document.getElementById('Homepage_UpdateBank_BankName').value = data.bank_name;
        document.getElementById('Homepage_UpdateBank_BankAddress').value = data.bank_address;

        document.getElementById('Homepage_UpdateBank_Zipcode').value = data.bank_zipcode;
        document.getElementById('Homepage_UpdateBank_PhoneNumber').value = data.bank_phone;
        document.getElementById('Homepage_UpdateBank_EmailAddress').value = data.bank_email;
        document.getElementById('Homepage_UpdateBank_FaxNumber').value = data.bank_fax_number;
        
        let Homepage_UpdateBank_CSC_Country = document.getElementById("Homepage_UpdateBank_CSC_Country");
        let Homepage_UpdateBank_CSC_State = document.getElementById("Homepage_UpdateBank_CSC_State");
        let Homepage_UpdateBank_CSC_City = document.getElementById("Homepage_UpdateBank_CSC_City");

        console.log(data.bank_country);
        console.log(data.bank_state);
        console.log(data.bank_city);


        for (var i = 0; i < Homepage_UpdateBank_CSC_Country.options.length; i++) {
            console.log('Homepage_UpdateBank_CSC_Country.options[i].text: ', Homepage_UpdateBank_CSC_Country.options[i].text);
        
            if (Homepage_UpdateBank_CSC_Country.options[i].text === "Pakistan") {
                Homepage_UpdateBank_CSC_Country.options[i].selected = true;
                break;
            }
        }


        for (var i = 0; i < Homepage_UpdateBank_CSC_State.options.length; i++) {
            console.log('Homepage_UpdateBank_CSC_Country.options[i].text: ', Homepage_UpdateBank_CSC_State.options[i].text);
        
            if (Homepage_UpdateBank_CSC_State.options[i].text === "Punjab") {
                Homepage_UpdateBank_CSC_State.options[i].selected = true;
                break;
            }
        }


        for (var i = 0; i < Homepage_UpdateBank_CSC_City.options.length; i++) {
        
            if (Homepage_UpdateBank_CSC_City.options[i].text === "Sargodha") {
                Homepage_UpdateBank_CSC_City.options[i].selected = true;
                break;
            }
        }
        
        


        
        })
        .catch(error => console.error('Error fetching countries:', error));
        
    });
  

    function loadCountries() {
        fetch(`${config.HOST}/CSCCountryNameAll`)
        .then(response => response.json())
        .then(data => {
            populateSelect('Homepage_UpdateBank_CSC_Country', data);
        })
        .catch(error => console.error('Error fetching countries:', error));
    }
    
    function loadStates(countryId) {
        document.getElementById('Homepage_UpdateBank_CSC_State').innerHTML = '';

        if (!countryId) {
            // Disable state select if no country is selected
            document.getElementById('Homepage_UpdateBank_CSC_State').disabled = true;
            return;
        } else {
            // Call your API to get states for the selected country
            // Populate the state-select element
            // Enable state select
            document.getElementById('Homepage_UpdateBank_CSC_State').disabled = false;
            fetch(`${config.HOST}/CSCStateByCountryName/${countryId}`)
            .then(response => response.json())
            .then(data => {
            populateSelect('Homepage_UpdateBank_CSC_State', data);
            })
            .catch(error => console.error('Error fetching state:', error));
            }
       
    }       
    
    function loadCities(stateId) {
        document.getElementById('Homepage_UpdateBank_CSC_City').innerHTML = '';

        if (!stateId) {
            // Disable city select if no state is selected
            document.getElementById('Homepage_UpdateBank_CSC_City').disabled = true;
            return;
        } else {
             // Call your API to get cities for the selected state
             // Populate the city-select element
             // Enable city select
            document.getElementById('Homepage_UpdateBank_CSC_City').disabled = false;
            fetch(`${config.HOST}/CSCCityByStateAndCountryName/${stateId}`)
            .then(response => response.json())
            .then(data => {
            populateSelect('Homepage_UpdateBank_CSC_City', data);
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

    //  ! End CSC






/*

    document
    .getElementById("Homepage_CreateBank_SaveBank_Button").addEventListener("click", function () {
        console.log("Homepage Save Bank 🧡");
        
        
        // Validate required fields
        let Homepage_CreateBank_MainBank = document.getElementById('Homepage_CreateBank_MainBank').value;
        let Homepage_CreateBank_BankName = document.getElementById('Homepage_CreateBank_BankName').value;
        let Homepage_CreateBank_BankAddress = document.getElementById('Homepage_CreateBank_BankAddress').value;

        // Set the country, state, and city values
        let Homepage_CreateBank_CSC_Country = document.getElementById("Homepage_CreateBank_CSC_Country");
        let Homepage_CreateBank_CSC_CountryOption = Homepage_CreateBank_CSC_Country.options[Homepage_CreateBank_CSC_Country.selectedIndex];
        const Homepage_CreateBank_CSC_CountryText = Homepage_CreateBank_CSC_CountryOption.text;

        let Homepage_CreateBank_CSC_State = document.getElementById("Homepage_CreateBank_CSC_State");
        let Homepage_CreateBank_CSC_StateOption = Homepage_CreateBank_CSC_State.options[Homepage_CreateBank_CSC_State.selectedIndex];
        const Homepage_CreateBank_CSC_StateText = Homepage_CreateBank_CSC_StateOption.text;


        let Homepage_CreateBank_CSC_City = document.getElementById("Homepage_CreateBank_CSC_City");
        let Homepage_CreateBank_CSC_CityOption = Homepage_CreateBank_CSC_City.options[Homepage_CreateBank_CSC_City.selectedIndex];
        const Homepage_CreateBank_CSC_CityText = Homepage_CreateBank_CSC_CityOption.text;
    
        if (!Homepage_CreateBank_MainBank || !Homepage_CreateBank_BankName || !Homepage_CreateBank_BankAddress) {
            alert('Main Bank, Bank Name, and Bank Address are required.');
            return;
        }
    
        // Construct data object
        let bankData = {
            bank_main_bank: Homepage_CreateBank_MainBank,
            bank_name: Homepage_CreateBank_BankName,
            bank_address: Homepage_CreateBank_BankAddress,
            bank_zipcode: document.getElementById('Homepage_CreateBank_Zipcode').value,
            bank_phone:  document.getElementById('Homepage_CreateBank_PhoneNumber').value,
            bank_email: document.getElementById('Homepage_CreateBank_EmailAddress').value,
            bank_fax_number :  document.getElementById('Homepage_CreateBank_FaxNumber').value,

            // CSC
            bank_country: Homepage_CreateBank_CSC_CountryText,
            bank_state: Homepage_CreateBank_CSC_StateText,
            bank_city: Homepage_CreateBank_CSC_CityText,
        };

        // POST request to server
        fetch(`${config.HOST}/banks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bankData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error creating bank');
            }
            return response.json();
        })
        .then(data => {
            alert('Successfully created a bank');
            window.location.href = 'index.html';
        })
        .catch(error => {
            console.error(error);
            alert('Error creating bank');
        });
    });
    

    */
}