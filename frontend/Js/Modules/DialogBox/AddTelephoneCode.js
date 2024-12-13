export function AddTelephoneCodeFunction(config) {    
    populateSelectField();

    let AddTelephoneCode_Add_Option_SaveButton = document.getElementById(
        "AddTelephoneCode_Add_Option_SaveButton"
    );

    AddTelephoneCode_Add_Option_SaveButton.addEventListener("click", function (event) {
        // console.log("AddTelephoneCode_Add_Option_SaveButton Clicked");

        event.preventDefault();

        let AddTelephoneCode_AirportCode = document.getElementById('AddTelephoneCode_AirportCode').value;
        let AddTelephoneCode_AirportName = document.getElementById('AddTelephoneCode_AirportName').value;
        let AddTelephoneCode_CityName = document.getElementById('AddTelephoneCode_CityName').value;
        let AddTelephoneCode_CountryName = document.getElementById('AddTelephoneCode_CountryName').value;
        let AddTelephoneCode_CountryCode = document.getElementById('AddTelephoneCode_CountryCode').value;

        if (!AddTelephoneCode_AirportCode || AddTelephoneCode_AirportCode.trim() === "" ||
            !AddTelephoneCode_CityName || AddTelephoneCode_CityName.trim() === "" ||
            !AddTelephoneCode_CountryName || AddTelephoneCode_CountryName.trim() === "") {
            alert("Values cannot be empty");
        } else {

        const requestUrl = `${config.HOST}/create_airport`;
        const requestBody = {
            airport_code: AddTelephoneCode_AirportCode,
            airport_name: AddTelephoneCode_AirportName,
            city_name: AddTelephoneCode_CityName,
            country_name: AddTelephoneCode_CountryName,
            country_code: AddTelephoneCode_CountryCode,
        };

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
            populateSelectField();
            document.getElementById('AddTelephoneCode_AirportCode').value = "";
            document.getElementById('AddTelephoneCode_AirportName').value = "";
            document.getElementById('AddTelephoneCode_CityName').value = "";
            document.getElementById('AddTelephoneCode_CountryName').value = "";
            document.getElementById('AddTelephoneCode_CountryCode').value = "";
    
        })
        .catch((error) => {
            console.log('Error:', error);
        });

    }
});


    function populateSelectField() {
        var selectField = document.getElementById("TransportInformation_1stToCityCode");
    
        fetch(`${config.HOST}/AirportList`)
        .then(response => response.json())
            .then(data => {
                selectField.innerHTML = '';
                    data.forEach(option => {
                        const optionAirport = document.createElement('option');
                        optionAirport.value = option.airport_code;
                        optionAirport.textContent = option.city_name + ", " + option.country_name;
                        selectField.appendChild(optionAirport);
                });


                for (var i = 0; i < selectField.options.length; i++) {                    
                    if (selectField.options[i].value === document.getElementById("TransportInformation_1stToCityCodeValue").value) {                        
                        selectField.options[i].selected = true;
                        document.getElementById("TransportInformation_1stToCityCodeValue").value = TransportInformation_1stToCityCode.options[i].value;
                        break;
                    }
                  }




            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    
}