export default function UpdateCourierTableFunction(config) {
    // console.log("Main Module - UpdateCourierTableFunction  😊");

    let elements = document.getElementsByClassName("UpdateCourierField");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("change", async function() {
            console.log('Sherry ', i);

            let id = parseInt(document.getElementById("store_CourierID").value);

            
            let Homepage_LatestPresentationDate = document.getElementById("Homepage_LatestPresentationDate").value;
            let Homepage_TargetDateToComplete = document.getElementById("Homepage_TargetDateToComplete").value;
            let Homepage_ActualDateCompleted = document.getElementById("Homepage_ActualDateCompleted").value;
            let Homepage_PCCompleted = document.getElementById("Homepage_PCCompleted").value;
            let Homepage_DateReimbursmentFiled = document.getElementById("Homepage_DateReimbursmentFiled").value;
            let Homepage_TargetPaidDate = document.getElementById("Homepage_TargetPaidDate").value;

            
            const updatedData = {
                courier_no_of_days_to_present: document.getElementById("Homepage_NoOfDaysToPresent").value,
                courier_issuing_bank_courier: document.getElementById("Homepage_IssuingBankCourier").value,
                courier_issuing_bank_courier_courier_co: document.getElementById("Homepage_IssuingBankCourierCo").options[document.getElementById("Homepage_IssuingBankCourierCo").selectedIndex].text,

                courier_latest_presentation_date: Homepage_LatestPresentationDate ? Homepage_LatestPresentationDate : null,
                courier_domestic_bank_courier: document.getElementById("Homepage_DomesticBankCourier").value,
                courier_domestic_bank_courier_courier_co: document.getElementById("Homepage_DomesticBankCourierCo").options[document.getElementById("Homepage_DomesticBankCourierCo").selectedIndex].text,

                courier_target_date_to_complete: Homepage_TargetDateToComplete ? Homepage_TargetDateToComplete : null,
                courier_applicant_courier: document.getElementById("Homepage_ApplicantCourier").value,
                courier_applicant_courier_courier_co: document.getElementById("Homepage_ApplicantCourierCo").options[document.getElementById("Homepage_ApplicantCourierCo").selectedIndex].text,


                courier_actual_date_completed: Homepage_ActualDateCompleted ? Homepage_ActualDateCompleted : null,
                courier_2nd_appt_courier: document.getElementById("Homepage_SecondApplicantCourier").value,
                courier_2nd_appt_courier_courier_co: document.getElementById("Homepage_SecondApplicantCourierCo").options[document.getElementById("Homepage_SecondApplicantCourierCo").selectedIndex].text,


                courier_pc_completed: Homepage_PCCompleted ? Homepage_PCCompleted : null,
                courier_inbound_courier: document.getElementById("Homepage_InboundCourier").value,
                courier_inbound_courier_courier_co: document.getElementById("Homepage_InboundCourierCo").options[document.getElementById("Homepage_InboundCourierCo").selectedIndex].text,


                courier_date_reimbursment_filed: Homepage_DateReimbursmentFiled ? Homepage_DateReimbursmentFiled : null,
                courier_inbound_rtn_courier: document.getElementById("Homepage_InboundRTNCourier").value,
                courier_inbound_rtn_courier_courier_co: document.getElementById("Homepage_InboundRTNCourierCo").options[document.getElementById("Homepage_InboundRTNCourierCo").selectedIndex].text,


                courier_reimbursment_via: document.getElementById("Homepage_ReimbursmentVia").options[document.getElementById("Homepage_ReimbursmentVia").selectedIndex].text,
                courier_outbound_rtn_courier: document.getElementById("Homepage_OutboundRTNCourier").value,
                courier_outbound_rtn_courier_courier_co: document.getElementById("Homepage_OutboundRTNCourierCo").options[document.getElementById("Homepage_OutboundRTNCourierCo").selectedIndex].text,

                
                courier_target_paid_date: Homepage_TargetPaidDate ? Homepage_TargetPaidDate : null,
                courier_other_courier: document.getElementById("Homepage_OtherCourier").value,
                courier_other_courier_courier_co: document.getElementById("Homepage_OtherCourierCo").options[document.getElementById("Homepage_OtherCourierCo").selectedIndex].text,
                
              
            };

            try {
                const response = await fetch(`${config.HOST}/update_courier_table/${id}`, {
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
