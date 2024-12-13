export function AddFreightFunction(config) {

    populateSelectField();


    let Freight_Remove_Option_SaveButton = document.getElementById(
        "Freight_Remove_Option_SaveButton"
    );

    let Freight_Add_Option_SaveButton = document.getElementById(
        "Freight_Add_Option_SaveButton"
    );

    Freight_Add_Option_SaveButton.addEventListener("click", function (event) {
        event.preventDefault();

        let Freight_Add_Option_Value = document.getElementById('Freight_Add_Option_Value').value;

        if (!Freight_Add_Option_Value || Freight_Add_Option_Value.trim() === "") {
            alert("Value cannot be empty");
        } else {
            const requestUrl = `${config.HOST}/Select`;
            const requestBody = {
                field_name: "FREIGHT",
                field_value: Freight_Add_Option_Value,
            };
    
            document.getElementById("Freight_Add_Option_Value").value = "";         
    
    
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
                var selectFieldText = document.getElementById("lcInformationPageFreight").options[document.getElementById("lcInformationPageFreight").selectedIndex].text;
        
                populateSelectField(selectFieldText);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
        }
        

    });




    function populateSelectField(selectFieldText) {
        var selectField = document.getElementById("lcInformationPageFreight");
        
    
        fetch(`${config.HOST}/Select/FREIGHT`)
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


    let RemoveFreight = document.getElementById("RemoveFreight");
    RemoveFreight.addEventListener("click", function (event) {
        event.preventDefault();

        console.log('Remove Select ');
        
        var selectX = document.getElementById('lcInformationPageFreight');
        var selectY = document.getElementById('Freight_Remove_Option_Value');
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
    Freight_Remove_Option_SaveButton.addEventListener("click", function (event) {
        event.preventDefault();

        console.log('Working on Remove');
        

        var Freight_Remove_Option_Value = document.getElementById("Freight_Remove_Option_Value");
        var Freight_Remove_Option_ValueOption = Freight_Remove_Option_Value.options[Freight_Remove_Option_Value.selectedIndex];
        const Freight_Remove_Option_ValueText = Freight_Remove_Option_ValueOption.text;

        if (!Freight_Remove_Option_ValueText || Freight_Remove_Option_ValueText.trim() === "") {
            alert("Value cannot be empty");
        } else {
            const requestUrl = `${config.HOST}/Select/FREIGHT/${Freight_Remove_Option_ValueText}`;
            console.log(requestUrl);
            
            fetch(requestUrl)
            .then(response => response.json())
            .then(data => {
                var selectFieldText = document.getElementById("lcInformationPageFreight").options[document.getElementById("lcInformationPageFreight").selectedIndex].text;        
                populateSelectField(selectFieldText);
            })
            .catch(error => {
                console.error('Error:', error);
            });


          
        }
        

    });

    
}