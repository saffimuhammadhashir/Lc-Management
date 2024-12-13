export default function UpdateBankTableFunction(config) {
    // console.log("Main Module - UpdateBankTableFunction  😊");

    let elements = document.getElementsByClassName("UpdateIssuingBankField");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("change", handleInputChange(i));
    }
        
    function handleInputChange(index) {
        return async function() {
            console.log('Sherry ', index);

            let id = parseInt(document.getElementById("storeissuingbank_bank_id").value);
            
            let storeissuingbank_bank_id= document.getElementById("storeissuingbank_bank_id").value;
            let lcInformationPageIssuingBankName = document.getElementById("lcInformationPageIssuingBankName").value;
            let lcInformationPageIssuingBankFax = document.getElementById("lcInformationPageIssuingBankFax").value;
            let lcInformationPageIssuingBankAddress = document.getElementById("lcInformationPageIssuingBankAddress").value;
            let storeissuingbank_bank_main_bank = document.getElementById("storeissuingbank_bank_main_bank").value;
            let storeissuingbank_bank_country = document.getElementById("storeissuingbank_bank_country").value;
            let storeissuingbank_bank_state = document.getElementById("storeissuingbank_bank_state").value;
            let storeissuingbank_bank_city = document.getElementById("storeissuingbank_bank_city").value;
            let storeissuingbank_bank_zipcode = document.getElementById("storeissuingbank_bank_zipcode").value;
            let storeissuingbank_bank_email = document.getElementById("storeissuingbank_bank_email").value;
            let storeissuingbank_bank_phone = document.getElementById("storeissuingbank_bank_phone").value;

           


            const updatedData = {
                "bank_name": lcInformationPageIssuingBankName,
                "bank_fax_number": lcInformationPageIssuingBankFax,
                "bank_address": lcInformationPageIssuingBankAddress,
                "bank_main_bank": storeissuingbank_bank_main_bank,
                "bank_country": storeissuingbank_bank_country,
                "bank_state": storeissuingbank_bank_state,
                "bank_city": storeissuingbank_bank_city,
                "bank_zipcode": storeissuingbank_bank_zipcode,
                "bank_phone": storeissuingbank_bank_email,
                "bank_email": storeissuingbank_bank_phone
            };

            try {
                const response = await fetch(`${config.HOST}/update_bank_table/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(updatedData)
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log('Update successful:', result);
                } else {
                    console.error('Failed to update:', response.statusText);
                }
            } catch (error) {
                console.error('Error updating:', error);
            }
        };
    }


   

}