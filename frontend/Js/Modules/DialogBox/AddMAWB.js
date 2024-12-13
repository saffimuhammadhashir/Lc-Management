export function AddMAWBFunction(config) {

    let MAWB_Add_Option_SaveButton = document.getElementById(
        "MAWB_Add_Option_SaveButton"
    );

    MAWB_Add_Option_SaveButton.addEventListener("click", function (event) {
        event.preventDefault();

        let MAWB_MAWBCode = document.getElementById('MAWB_MAWBCode').value;
        let MAWB_IataCode = document.getElementById('MAWB_IataCode').value;
        let MAWB_AirlineName = document.getElementById('MAWB_AirlineName').value;

        if (!MAWB_MAWBCode || MAWB_MAWBCode.trim() === "" || !MAWB_AirlineName || MAWB_AirlineName.trim() === "") {
            alert("Value cannot be empty");
        } else {
            const requestUrl = `${config.HOST}/create_iatacode`;
            const requestBody = {
                mawb_code: MAWB_MAWBCode,
                iata_code: MAWB_IataCode,
                airline_name: MAWB_AirlineName,
            };
    
            document.getElementById("TenorOfDraft_Add_Option_Value").value = "";         
    
    
            fetch(requestUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('IATA CODE SUCCESSFULLY ADDED:', data);
                document.getElementById('MAWB_MAWBCode').value = "";
                document.getElementById('MAWB_IataCode').value = "";
                document.getElementById('MAWB_AirlineName').value = "";
                
            })
            .catch((error) => {
                console.log('Error:', error);
            });
        }
        

    });
    
}