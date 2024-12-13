export function AddSalesTermsFunction(config) {

    populateSelectField();


    let SalesTerms_Remove_Option_SaveButton = document.getElementById(
        "SalesTerms_Remove_Option_SaveButton"
    );

    let SalesTerms_Add_Option_SaveButton = document.getElementById(
        "SalesTerms_Add_Option_SaveButton"
    );

    SalesTerms_Add_Option_SaveButton.addEventListener("click", function (event) {
        event.preventDefault();

        let SalesTerms_Add_Option_Value = document.getElementById('SalesTerms_Add_Option_Value').value;

        if (!SalesTerms_Add_Option_Value || SalesTerms_Add_Option_Value.trim() === "") {
            alert("Value cannot be empty");
        } else {
            const requestUrl = `${config.HOST}/Select`;
            const requestBody = {
                field_name: "SALES TERMS",
                field_value: SalesTerms_Add_Option_Value,
            };
    
            document.getElementById("SalesTerms_Add_Option_Value").value = "";         
    
    
            fetch(requestUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            })
            .then((response) => response.json())
            .then((data) => {
                // console.log('Success:', data);
                var selectFieldText = document.getElementById("lcInformationPageSalesTerms").options[document.getElementById("lcInformationPageSalesTerms").selectedIndex].text;
        
                populateSelectField(selectFieldText);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
        }
        

    });




    function populateSelectField(selectFieldText) {
        var selectField = document.getElementById("lcInformationPageSalesTerms");
        
    
        fetch(`${config.HOST}/Select/SALES%20TERMS`)
        .then(response => response.json())
            .then(data => {
                selectField.innerHTML = '';
                    data.forEach(option => {
                    var optionElement = document.createElement("option");
                    optionElement.value = option.field_value;
                    optionElement.textContent = option.field_value;                   
                    if (optionElement.value=== selectFieldText) {                        
                        optionElement.selected = true;
                    }
                    selectField.appendChild(optionElement);
                });

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


    let RemoveSalesTerms = document.getElementById("RemoveSalesTerms");
    RemoveSalesTerms.addEventListener("click", function (event) {
        event.preventDefault();

        console.log('Remove Select ');
        
        var selectX = document.getElementById('lcInformationPageSalesTerms');
        var selectY = document.getElementById('SalesTerms_Remove_Option_Value');
        selectY.innerHTML = '';
        // Copy options from selectX to selectY
         for (var i = 0; i < selectX.options.length; i++) {
            var option = document.createElement('option');
            option.value = selectX.options[i].value;
            option.text = selectX.options[i].text;
            selectY.appendChild(option);
        }

    });

    // Remove
    SalesTerms_Remove_Option_SaveButton.addEventListener("click", function (event) {
        event.preventDefault();

        console.log('Working on Remove');
        

        var SalesTerms_Remove_Option_Value = document.getElementById("SalesTerms_Remove_Option_Value");
        var SalesTerms_Remove_Option_ValueOption = SalesTerms_Remove_Option_Value.options[SalesTerms_Remove_Option_Value.selectedIndex];
        const SalesTerms_Remove_Option_ValueText = SalesTerms_Remove_Option_ValueOption.text;

        if (!SalesTerms_Remove_Option_ValueText || SalesTerms_Remove_Option_ValueText.trim() === "") {
            alert("Value cannot be empty");
        } else {
            const requestUrl = `${config.HOST}/Select/SALES%20TERMS/${SalesTerms_Remove_Option_ValueText}`;
            console.log(requestUrl);
            
            fetch(requestUrl)
            .then(response => response.json())
            .then(data => {
                var selectFieldText = document.getElementById("lcInformationPageSalesTerms").options[document.getElementById("lcInformationPageSalesTerms").selectedIndex].text;        
                populateSelectField(selectFieldText);
            })
            .catch(error => {
                console.error('Error:', error);
            });


          
        }
        

    });

    
}