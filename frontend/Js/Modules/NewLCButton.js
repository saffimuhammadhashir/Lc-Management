export function NewLCFunction(config) {
    // console.log('Main Module - New LC Button');

    let newLCButton = document.getElementById("Homepage_NewLC_Button");

    newLCButton.addEventListener('click', function () {
        console.log('New LC Clicked');
        let NewLC_Country = document.getElementById("NewLC_Country");
        let NewLC_Currency = document.getElementById("NewLC_Currency");

        NewLC_Currency.innerHTML = '';
        NewLC_Country.innerHTML = '';



        const requestUrlCountry = `${config.HOST}/CSCCountryNameAll`;
    
        fetch(requestUrlCountry, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((countryData) => {
            console.log('Success:', countryData);
            for (const country of countryData) {
                const optionCountry = document.createElement('option');
                optionCountry.value = country.id;
                optionCountry.textContent = country.name;            
                NewLC_Country.appendChild(optionCountry);
            }
    
          })
          .catch((error) => {
            console.log('Error:', error);
            
          });


        const requestUrlCurrency = `${config.HOST}/CurrencyList`;
    
        fetch(requestUrlCurrency, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((currencyData) => {
            console.log('Success:', currencyData);
            for (const currency of currencyData) {
              const optionCurrency = document.createElement('option');
              optionCurrency.value = currency.currency_id;
              optionCurrency.textContent = currency.currency_name_singular;
              NewLC_Currency.appendChild(optionCurrency);      
          }
    
          })
          .catch((error) => {
            console.log('Error:', error);
            
          });
        
    });


}