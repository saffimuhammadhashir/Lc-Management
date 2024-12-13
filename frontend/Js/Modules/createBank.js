export function createBank(config) {
    // console.log('Main Module - Create Bank');

    // createBankCountry - nextStepLC_CreateBank_Country
    // createBankState - nextStepLC_CreateBank_State
    // createBankCity - nextStepLC_CreateBank_City




    const saveBank_Button = document.querySelector("#saveBank_Button");
    saveBank_Button.addEventListener("click", createBank);

    function createBank() {
        console.log('Save Bank');


        //  Getting Bank Info
        // var createBankCountry = document.getElementById("nextStepLC_CreateBank_Country");
        // var createBankCountryValue = createBankCountry.text;
        // // console.log('Country: ', createBankCountry);
      
        // var createBankState = document.getElementById("nextStepLC_CreateBank_State");
        // var createBankStateValue = createBankState.text;
      
        var createBankCountry = document.getElementById("nextStepLC_CreateBank_Country");
        var createBankCountryOption = createBankCountry.options[createBankCountry.selectedIndex];
        const createBankCountryText = createBankCountryOption.text;


        var createBankState = document.getElementById("nextStepLC_CreateBank_State");
        var createBankStateOption = createBankState.options[createBankState.selectedIndex];
        const createBankStateText = createBankStateOption.text;


        var createBankCity = document.getElementById("nextStepLC_CreateBank_City");
        var createBankCityOption = createBankCity.options[createBankCity.selectedIndex];
        const createBankCityText = createBankCityOption.text;

          
        const BankData = {
            bank_name: document.querySelector("#nextStepLC_CreateBank_BankName").value,
            bank_address: document.querySelector("#nextStepLC_CreateBank_BankAddress").value,
            bank_phone: document.querySelector("#nextStepLC_CreateBank_PhoneNumber").value,
            bank_email: document.querySelector("#nextStepLC_CreateBank_EmailAddress").value,
            bank_country: createBankCountryText,
            bank_state: createBankStateText,
            bank_city: createBankCityText,
            bank_zipcode: document.querySelector("#nextStepLC_CreateBank_Zipcode").value,
            bank_fax_number : document.querySelector("#nextStepLC_CreateBank_FaxNumber").value,
            bank_main_bank: document.querySelector("#nextStepLC_CreateBank_MainBank").value,
        };

        const SavingOptions = {
            method: 'POST',
            body: JSON.stringify(BankData),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(`${config.HOST}/banks`, SavingOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then((data) => {
                console.log(data);
                alert("Bank Added Successfully");

                // 
                // Loading banking information
                let nextStepLC_IssuingBankName = document.getElementById("nextStepLC_IssuingBankName");
                let nextStepLC_AdvisingBankName = document.getElementById("nextStepLC_AdvisingBankName");
                nextStepLC_IssuingBankName.innerHTML = '';
                nextStepLC_AdvisingBankName.innerHTML = '';

                fetch(`${config.HOST}/banks`)
                    .then(function (response) {
                        if (!response.ok) {
                            throw new Error("Network response was not OK");
                        }
                        return response.json();
                    })
                    .then(function (responseBanks) {
                        for (const banks of responseBanks) {
                            var option1 = document.createElement("option");
                            option1.text = banks.bank_name;
                            option1.value = banks.bank_id;
                            nextStepLC_IssuingBankName.add(option1);


                            var option2 = document.createElement("option");
                            option2.text = banks.bank_name;
                            option2.value = banks.bank_id;
                            nextStepLC_AdvisingBankName.add(option2);
                        }
                    })
                    .catch(function (error) {
                        console.log("Error:", error);
                    });

                // End banks information

                document.getElementById('addbankModel').style.display = 'none';


            })
            .catch((error) => {
                console.log(error);
            });
    }

}