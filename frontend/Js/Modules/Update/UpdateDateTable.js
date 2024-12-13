export default function UpdateDateTableFunction(config, reverseConvertLCID) {
    // console.log("Main Module - UpdateDateTableFunction  😊");

    let elements = document.getElementsByClassName("UpdateDateField");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("change", async function() {
            console.log('Sherry ', i);

            let id = parseInt(document.getElementById("store_DateID").value);

            
            let Homepage_DateReceived = document.getElementById("Homepage_DateReceived").value;
            let Homepage_DteSntToLegalize = document.getElementById("Homepage_DteSntToLegalize").value;
            let Homepage_LegalizeRetDte = document.getElementById("Homepage_LegalizeRetDte").value;
            let Homepage_MaturityDate = document.getElementById("Homepage_MaturityDate").value;
            let HomepageLCExpiryDate = document.getElementById("HomepageLCExpiryDate").value;
            let Homepage_LatestShipmentDate = document.getElementById("Homepage_LatestShipmentDate").value;
            let HomePage_DateSentInspection = document.getElementById("HomePage_DateSentInspection").value;
            let Homepage_ShipDate = document.getElementById("Homepage_ShipDate").value;
            let HomePage_AWBorBLDate = document.getElementById("HomePage_AWBorBLDate").value;
            let Homepage_DatePaid = document.getElementById("Homepage_DatePaid").value;
            let Homepage_DataSentToBank = document.getElementById("Homepage_DataSentToBank").value;
            let Homepage_NextTraceDt = document.getElementById("Homepage_NextTraceDt").value;
            let Homepage_LatestUpdate = document.getElementById("Homepage_LatestUpdate").value;
            let lcInformationPageLcIssueDate = document.getElementById("lcInformationPageLcIssueDate").value;
            let lcInformationLatestUpdate = document.getElementById("lcInformationLatestUpdate").value;
            let TransportInformation_ShipDate = document.getElementById("Homepage_ShipDate").value;
            let TransportInformation_LastUpdate = document.getElementById("Homepage_ShipDate").value;
            let TransportInformation_InvoiceDate = document.getElementById("TransportInformation_InvoiceDate").value;
            let TransportInformation_1stFlightDate = document.getElementById("TransportInformation_1stFlightDate").value;
            let TransportInformation_2ndFlightDate = document.getElementById("TransportInformation_2ndFlightDate").value;
            let PrintPage_LastUpdate = document.getElementById("PrintPage_LastUpdate").value;


            
            const updatedData = {
                "date_date_received": Homepage_DateReceived ? Homepage_DateReceived : null,
                "date_dte_snt_to_legalize": Homepage_DteSntToLegalize ? Homepage_DteSntToLegalize : null,
                "date_legalize_ret_dte": Homepage_LegalizeRetDte ? Homepage_LegalizeRetDte : null,
                "date_maturity_date": Homepage_MaturityDate ? Homepage_MaturityDate : null,
                "date_expiry_date": HomepageLCExpiryDate ? HomepageLCExpiryDate : null,
                "date_latest_shipment_date": Homepage_LatestShipmentDate ? Homepage_LatestShipmentDate : null,
                "date_date_sent_inspection": HomePage_DateSentInspection ? HomePage_DateSentInspection : null,
                "date_ship_date": Homepage_ShipDate ? Homepage_ShipDate : null,
                "date_awb_bl_recv_date": HomePage_AWBorBLDate ? HomePage_AWBorBLDate : null,
                "date_date_paid": Homepage_DatePaid ? Homepage_DatePaid : null,
                "date_date_sent_to_bank": Homepage_DataSentToBank ? Homepage_DataSentToBank : null,
                "date_next_trace_dt": Homepage_NextTraceDt ? Homepage_NextTraceDt : null,
                "date_last_update": Homepage_LatestUpdate ? Homepage_LatestUpdate : null,
                "date_issue_date": lcInformationPageLcIssueDate ? lcInformationPageLcIssueDate : null,
                "date_invoice_date": TransportInformation_InvoiceDate ? TransportInformation_InvoiceDate : null,
                "date_1st_flight_date": TransportInformation_1stFlightDate ? TransportInformation_1stFlightDate : null,
                "date_2nd_flight_date": TransportInformation_2ndFlightDate ? TransportInformation_2ndFlightDate : null,
                
              
            };
            console.log(date_expiry_date);
            try {
                const response = await fetch(`${config.HOST}/update_date_table/${id}`, {
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
        });
    }
}
