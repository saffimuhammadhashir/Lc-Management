// console.log("Country Js");
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

function populateCountrySelectField(countrySelectField) {
    const countryUrl = `https://api.countrystatecity.in/v1/countries`;
    fetch(countryUrl, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            for (const country of data) {
                let option = document.createElement("option");
                option.text = country.name;
                option.value = country.iso2;
                countrySelectField.add(option);
            }
            countrySelectField.addEventListener("change", populateRegion);

        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });


}

// Setting States
function populateRegion() {
    console.log('Populating Region');
    let countryCode = this.value;
    console.log('countryCode:', countryCode);

    regionSelectFieldArray.forEach(function (element) {
        element.innerHTML = "";
    });

    citySelectFieldArray.forEach(function (element) {
        element.innerHTML = "";
    });

    
   
    let urlForStates = `https://api.countrystatecity.in/v1/countries/${countryCode}/states`;
    fetch(urlForStates, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("States ka data");
            console.log(regionSelectFieldArray);
            
            for (const region of data) {
                let option = document.createElement("option");
                option.text = region.name;
                option.value = region.iso2;
                // regionSelectFieldArray[0].add(option);
                for (let index = 0; index < regionSelectFieldArray.length; index++) {
                    console.log(regionSelectFieldArray[0]);
                    
                regionSelectFieldArray[index].add(option);
                    
                }
                // regionSelectFieldArray.forEach(function (element) {
                //     console.log(element);
                    
                //     element.add(option);
                // });
            }
        })
        .catch((error) => {
            console.error("Fetch error:", error);
        });

}


    let countrySelectFieldArray = document.querySelectorAll('.classCountry');
    let regionSelectFieldArray = document.querySelectorAll('.classRegion');
    let citySelectFieldArray = document.querySelectorAll('.classCity');

    countrySelectFieldArray.forEach(function (element) {
        populateCountrySelectField(element);
    });
