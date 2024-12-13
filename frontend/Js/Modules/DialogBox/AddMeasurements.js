export function AddMeasurementsFunction(config) {

    populateSelectField();


    let Measurements_Remove_Option_SaveButton = document.getElementById(
        "Measurements_Remove_Option_SaveButton"
    );

    let Measurements_Add_Option_SaveButton = document.getElementById(
        "Measurements_Add_Option_SaveButton"
    );

    Measurements_Add_Option_SaveButton.addEventListener("click", function (event) {
        event.preventDefault();

        let Measurements_Add_Option_Value = document.getElementById('Measurements_Add_Option_Value').value;

        if (!Measurements_Add_Option_Value || Measurements_Add_Option_Value.trim() === "") {
            alert("Value cannot be empty");
        } else {
            const requestUrl = `${config.HOST}/Select`;
            const requestBody = {
                field_name: "MEASUREMENTS",
                field_value: Measurements_Add_Option_Value,
            };
    
            document.getElementById("Measurements_Add_Option_Value").value = "";         
    
    
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
                var selectFieldText = document.getElementById("TransportInformation_Measurements").options[document.getElementById("TransportInformation_Measurements").selectedIndex].text;
        
                populateSelectField(selectFieldText);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
        }
        

    });




    function populateSelectField(selectFieldText) {
        var selectField = document.getElementById("TransportInformation_Measurements");
        
    
        fetch(`${config.HOST}/Select/MEASUREMENTS`)
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


    let RemoveMeasurements = document.getElementById("RemoveMeasurements");
    RemoveMeasurements.addEventListener("click", function (event) {
        event.preventDefault();

        console.log('Remove Select ');
        
        var selectX = document.getElementById('TransportInformation_Measurements');
        var selectY = document.getElementById('Measurements_Remove_Option_Value');
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
    Measurements_Remove_Option_SaveButton.addEventListener("click", function (event) {
        event.preventDefault();

        console.log('Working on Remove');
        

        var Measurements_Remove_Option_Value = document.getElementById("Measurements_Remove_Option_Value");
        var Measurements_Remove_Option_ValueOption = Measurements_Remove_Option_Value.options[Measurements_Remove_Option_Value.selectedIndex];
        const Measurements_Remove_Option_ValueText = Measurements_Remove_Option_ValueOption.text;

        if (!Measurements_Remove_Option_ValueText || Measurements_Remove_Option_ValueText.trim() === "") {
            alert("Value cannot be empty");
        } else {
            const requestUrl = `${config.HOST}/Select/MEASUREMENTS/${Measurements_Remove_Option_ValueText}`;
            console.log(requestUrl);
            
            fetch(requestUrl)
            .then(response => response.json())
            .then(data => {
                var selectFieldText = document.getElementById("TransportInformation_Measurements").options[document.getElementById("TransportInformation_Measurements").selectedIndex].text;        
                populateSelectField(selectFieldText);
            })
            .catch(error => {
                console.error('Error:', error);
            });


          
        }
        

    });

    
}