console.log("Country Js");


function populateCountrySelectField (countryID, isContinue) {
    
}


















    let headers = new Headers();
    headers.append(
        "X-CSCAPI-KEY",
        "WjhTS2JmcHNhVmhYSWpMclAxTFJrbVIyUWtwcklVVmtRZkNYMllyTA=="
    );

    let requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
    };
    const Country_KEY =
        "WjhTS2JmcHNhVmhYSWpMclAxTFJrbVIyUWtwcklVVmtRZkNYMllyTA==";

    const selectedCountry = (selectedRegion = selectedCity = "");
    let countrySelectField = document.getElementById("country");
    let regionSelectField = document.getElementById("region");
    let citySelectField = document.getElementById("city");


    function populateCountry() {
        const countryUrl = `https://api.countrystatecity.in/v1/countries?X-CSCAPI-KEY=${selectedCountry}`;
        fetch(countryUrl, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Your code to handle the 'data' goes here
                console.log(data);
                for (const country of data) {
                    let option = document.createElement("option");
                    option.text = country.name;
                    option.value = country.iso2;
                    countrySelectField.add(option);
                }
            })
            .catch((error) => {
                // Handle error here
                console.error("Fetch error:", error);
            });
    }

    // Setting States
    countrySelectField.addEventListener("change", populateRegion);
    function populateRegion() {
        let selectedCountry = this.options[this.selectedIndex].text;
        let countryCode = this.value;
        regionSelectField.innerHTML = "";
        citySelectField.innerHTML = "";
        let urlForStates = `https://api.countrystatecity.in/v1/countries/${countryCode}/states`;
        fetch(urlForStates, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Your code to handle the 'data' goes here
                console.log("States ka data");

                console.log(data);
                for (const region of data) {
                    let option = document.createElement("option");
                    option.text = region.name;
                    option.value = region.iso2;
                    regionSelectField.add(option);
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }

    // Setting Region
    regionSelectField.addEventListener("change", populateCities);
    function populateCities() {
        const selectedRegion = this.options[this.selectedIndex].text;
        let regionCode = this.value;
        const countryCode = document.querySelector("#country").value;
        citySelectField.innerHTML = "";
        let urlForCities = `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${regionCode}/cities`;
        fetch(urlForCities, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Your code to handle the 'data' goes here
                console.log(data);
                for (const city of data) {
                    let option = document.createElement("option");
                    option.text = city.name;
                    option.value = city.name;
                    citySelectField.add(option);
                }
            })
            .catch((error) => {
                console.error("Fetch error:", error);
            });
    }
    
    populateCountry();
