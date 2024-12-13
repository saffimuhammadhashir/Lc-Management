export function display_Banks_Function(config) {
    // console.log('Main Module - Display Banks Function');

    document.addEventListener('DOMContentLoaded', function () {    
        // Loading banking information
        fetch(`${config.HOST}/banks`)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("Network response was not OK");
                    }
                    return response.json();
                })
                .then(function (responseBanks) {
                    for (const banks of responseBanks) {
                        var option1 = document.createElement("option");
                        option1.text = banks.bank_name;
                        option1.value = banks.bank_id;
                        nextStepLC_IssuingBankName.add(option1);


                        var option2 = document.createElement("option");
                        option2.text = banks.bank_name;
                        option2.value = banks.bank_id;
                        nextStepLC_AdvisingBankName.add(option2);
                    }
                })



        });
    }
    