export function CustomerInfoButton(config) {
  // console.log("Main Module - Customer Info Button Customer");

  const nextStepCustomerInfoButton = document.getElementById("nextStepCustomerInfoButton");
  nextStepCustomerInfoButton.addEventListener("click", function () {

    console.log('nextStepCustomerInfoButton');
    let customerDetailsCurrency = document.getElementById(
      "customerDetailsCurrency"
    );
    const requestUrlCurrency = `${config.HOST}/CurrencyList`;

    fetch(requestUrlCurrency, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((currencyData) => {
        console.log('Customer Currency:', currencyData);
        for (const currency of currencyData) {
          const optionCurrency = document.createElement("option");
          optionCurrency.value = currency.currency_id;
          optionCurrency.textContent = currency.currency_name_singular;
          customerDetailsCurrency.appendChild(optionCurrency);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    

    
  });
}

export default CustomerInfoButton;

