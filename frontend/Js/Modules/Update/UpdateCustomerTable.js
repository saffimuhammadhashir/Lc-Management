export default function UpdateCustomerTableFunction(config) {
    let elements = document.getElementsByClassName("UpdateCustomerField");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("change", handleInputChange(i));
    }

    function getCustomerData() {
        return {
            id: parseInt(document.getElementById("storecustomer_CUSTOMER_ID").value),
            customer_fax: document.getElementById("storecustomer_CUSTOMER_FAX").value,
            customer_full_name: document.getElementById("LCInformation_BENEFICIARYName").value,
            customer_address: document.getElementById("LCInformation_BENEFICIARYAddress").value,
            customer_code: document.getElementById("storecustomer_CUSTOMER_CODE").value,
            customer_country: document.getElementById("storecustomer_CUSTOMER_COUNTRY").value,
            customer_states: document.getElementById("storecustomer_CUSTOMER_STATES").value,
            customer_city: document.getElementById("storecustomer_CUSTOMER_CITY").value,
            customer_forwarder_shipper_bank: document.getElementById("storecustomer_CUSTOMER_FORWARDER_SHIPPER_BANK").value,
            customer_default_preparer: document.getElementById("storecustomer_CUSTOMER_DEFAULT_PREPARER").value,
            customer_customer_procedures: document.getElementById("storecustomer_CUSTOMER_CUSTOMER_PROCEDURES").value,
            customer_zipcode: document.getElementById("storecustomer_CUSTOMER_ZIPCODE").value,
            customer_phone: document.getElementById("storecustomer_CUSTOMER_PHONE").value,
            customer_mailto: document.getElementById("storecustomer_CUSTOMER_MAILTO").value,
            customer_type: document.getElementById("storecustomer_CUSTOMER_TYPE").value,
            customer_currency: document.getElementById("storecustomer_CUSTOMER_CURRENCY").value,
            customer_toll_free: document.getElementById("storecustomer_CUSTOMER_TOLL_FREE").value,
            customer_affiliated_with: document.getElementById("storecustomer_CUSTOMER_AFFILIATED_WITH").value,
            customer_uan: document.getElementById("storecustomer_CUSTOMER_UAN").value,
            customer_charges: document.getElementById("storecustomer_CUSTOMER_CHARGES").value,
            customer_fedex_account_no: document.getElementById("storecustomer_CUSTOMER_FEDEX_ACCOUNT_NO").value,
            customer_dhl_account_no: document.getElementById("storecustomer_CUSTOMER_DHL_ACCOUNT_NO").value,
            customer_ups_account_no: document.getElementById("storecustomer_CUSTOMER_UPS_ACCOUNT_NO").value,
            customer_account_number: document.getElementById("storecustomer_CUSTOMER_ACCOUNT_NUMBER").value,
            customer_aba: document.getElementById("storecustomer_CUSTOMER_ABA").value,
            customer_bank_name: document.getElementById("storecustomer_CUSTOMER_BANK_NAME").value,
            customer_payee_name: document.getElementById("storecustomer_CUSTOMER_PAYEE_NAME").value,
            customer_remarks: document.getElementById("storecustomer_CUSTOMER_REMARKS").value,
            customer_contact_name: document.getElementById("storecustomer_CUSTOMER_CONTACT_NAME").value,
            customer_contact_phone: document.getElementById("storecustomer_CUSTOMER_CONTACT_PHONE").value,
            customer_contact_email: document.getElementById("storecustomer_CUSTOMER_CONTACT_EMAIL").value
        };
    }

    async function updateCustomerTable(customerData) {
        try {
            const response = await fetch(`${config.HOST}/update_customer_table/${customerData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerData)
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
    }

    function handleInputChange(index) {
        return async function () {
            console.log('Sherry ', index);
            const customerData = getCustomerData();
            await updateCustomerTable(customerData);
        };
    }

    async function periodicUpdate() {
        const customerData = getCustomerData();
        await updateCustomerTable(customerData);
    }

    setInterval(periodicUpdate, 10000); // Run every second
}
