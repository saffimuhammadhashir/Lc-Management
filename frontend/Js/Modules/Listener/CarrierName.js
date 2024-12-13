export function ChangeCarrierName(config) {

    document.getElementById("TransportInformation_MAWBNumber").onchange = function() {
        // Get the value of the input field
        const mawbNumber = this.value;
        
        // Extract the first three digits (assuming they represent the IATA code)
        const iataCode = mawbNumber.substring(0, 3);
        
        // Make the fetch request
        fetch(`${config.HOST}/getIataCode/${iataCode}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Check if the data contains the airline name
                if (data.airline_name) {
                    // Update the CarrierName field with the retrieved airline name
                    document.getElementById("TransportInformation_CarrierName").value = data.airline_name;
                } else {
                    // If airline name is not found, populate "N/A"
                    document.getElementById("TransportInformation_CarrierName").value = "N/A";
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                // Populate "N/A" in case of error
                document.getElementById("TransportInformation_CarrierName").value = "N/A";
            });
    };
    
}