export function HandlerNextStepLC(config, createShortcode, convertLCID, extractValuesFromSecondParentheses) {
    // console.log('Main Module - Next Step LC');

    const locationID = document.getElementById("NewLC_LocationCode");


    const LCIDInput = document.getElementById("nextStepLC_ID");
    const masterIDInput = document.getElementById("nextStepLC_MasterID");
    const url = `${config.HOST}/Recent_LC_Information`;


    let nextStepLC = document.getElementById("nextStepLC");
    nextStepLC.addEventListener('click', CheckNextStepLC);

    function CheckNextStepLC() {
        let NewLC_ReferenceNumber = document.getElementById("NewLC_ReferenceNumber").value;
        let NewLC_InvoiceNumber = document.getElementById("NewLC_InvoiceNumber").value;
        let NewLC_InvoiceDate = document.getElementById("NewLC_InvoiceDate").value;
        let NewLC_AmountOfDraw = document.getElementById("NewLC_AmountOfDraw").value;

        // console.log('NewLC_ReferenceNumber: ', NewLC_ReferenceNumber);
        // console.log('NewLC_InvoiceNumber:', NewLC_InvoiceNumber);
        // console.log('NewLC_InvoiceDate: ', NewLC_InvoiceDate);
        // console.log('NewLC_AmountOfDraw', NewLC_AmountOfDraw);
        
        if (!NewLC_ReferenceNumber || !NewLC_InvoiceNumber || !NewLC_InvoiceDate || !NewLC_AmountOfDraw) {        
            alert("Some values are undefined or null. Filling the values.");

        } else {
            console.log('Check');
            
            document.getElementById('submit').style.display='block';
            myNextStepLC();
        }
        

    }

    function myNextStepLC() {

        console.log('NextStep LC Clicked');
        let nextStepLC_ShipperOrBeneClear = document.getElementById("nextStepLC_ShipperOrBene");
        nextStepLC_ShipperOrBeneClear.innerHTML = '';

        let nextStepLC_IssuingBankNameClear = document.getElementById("nextStepLC_IssuingBankName");
        nextStepLC_IssuingBankNameClear.innerHTML = '';


        let nextStepLC_AdvisingBankNameClear = document.getElementById("nextStepLC_AdvisingBankName");
        nextStepLC_AdvisingBankNameClear.innerHTML = '';

        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.Ok) {

                    console.log(data);
                    console.log("location Code: " + locationID.value);
                    //print type of locationID.value
                    console.log(typeof (locationID.value));
                    const locationCode = parseInt(locationID.value);
                    const id = data.Ok.lc_id;
                    const convertedID = convertLCID(locationCode, id);
                    masterIDInput.value = convertedID + 1;
                    LCIDInput.value = convertedID + 1;



                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        // Loading customers information in select field
        let nextStepLC_ShipperOrBene = document.getElementById("nextStepLC_ShipperOrBene");
        fetch(`${config.HOST}/customers`)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }
                return response.json();
            })
            .then(function (responseCustomers) {
                nextStepLC_ShipperOrBene.value = '';
                nextStepLC_ShipperOrBene.name = '';
                console.log('NextStep LC Customer');

                for (const customer of responseCustomers) {
                    var option1 = document.createElement("option");
                    // console.log('customer', customer);

                    option1.text = createShortcode(customer) + "  (" + customer.customer_full_name + ") (" + customer.customer_address + ") (" + customer.customer_phone + ")";
                    option1.value = customer.customer_id;
                    nextStepLC_ShipperOrBene.add(option1);


                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });

        // Loading banking information
        let nextStepLC_IssuingBankName = document.getElementById("nextStepLC_IssuingBankName");
        let nextStepLC_AdvisingBankName = document.getElementById("nextStepLC_AdvisingBankName");
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



        // Fetching customer address
        let nextStepLC_ShipperOrBeneAddress = document.getElementById("nextStepLC_ShipperOrBeneAddress");
        nextStepLC_ShipperOrBene.addEventListener('change', function () {
            var selectedOption = nextStepLC_ShipperOrBene.options[nextStepLC_ShipperOrBene.selectedIndex];
            var selectedText = selectedOption.text;
            var textToTrim = selectedText
            var customerAddressFromSelectField = extractValuesFromSecondParentheses(textToTrim);
            nextStepLC_ShipperOrBeneAddress.value = customerAddressFromSelectField;





        });

        // Fetching Bank address
        let nextStepLC_AdvisingBankAddress = document.getElementById("nextStepLC_AdvisingBankAddress");
        nextStepLC_AdvisingBankName.addEventListener('change', function () {
            nextStepLC_AdvisingBankAddress.value = "";
            let xBank = nextStepLC_AdvisingBankName.value;

            if(xBank > 0) {
                fetch(`${config.HOST}/banks/${xBank}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('API response:', data);
                        nextStepLC_AdvisingBankAddress.value = data.bank_address;
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    });
            }
            console.log('xBank: ', xBank);
            
        });
    }



}