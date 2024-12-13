export function saving_lc_function(config) {
  // console.log("Main Module - Saving LC Function");

  let dateApiResponse;

  // Get DOM elements
  const newLCPostChangesButton = document.querySelector("#Homepage_PostChanges_Button");

  // Add event listener
  newLCPostChangesButton.addEventListener("click", createLC);

  async function createLC() {
    // console.log('Homepage_PostChanges_Button Clicked');
    
    // Fetch recent LC information
    const response = await fetch(`${config.HOST}/Recent_LC_Information`);
    const data = await response.json();
    if (!data || !data.Ok) {
      console.log("Data Not OK");
      return;
    }

    const recentLCValue = data.Ok.lc_id;
    // LC ID
    const Lvalue = recentLCValue + 1;

    // Master ID
    const Mvalue = recentLCValue + 1;

    //  There are Two Parts of Creating  An LC
    // 1- New LC
    // 2- Next Step LC

    // ----------------- 1- New LC -----------------------------------------------------
    // Location Code
    let NewLC_LocationCode = document.getElementById("NewLC_LocationCode");
    let NewLC_LocationCodeOption =
      NewLC_LocationCode.options[NewLC_LocationCode.selectedIndex];
    let NewLC_LocationCodeText = NewLC_LocationCodeOption.text;

    // LC Type
    let NewLC_LcType = document.getElementById("NewLC_LcType");
    let NewLC_LcTypeOption = NewLC_LcType.options[NewLC_LcType.selectedIndex];
    let NewLC_LcTypeText = NewLC_LcTypeOption.text;

    // Reference Number
    let NewLC_ReferenceNumber = document.getElementById(
      "NewLC_ReferenceNumber"
    ).value;

    // Invoice Number
    let NewLC_InvoiceNumber = document.getElementById(
      "NewLC_InvoiceNumber"
    ).value;

    // Invoice Date
    let NewLC_InvoiceDate = document.getElementById("NewLC_InvoiceDate").value;

    // Amount Of Draw
    let NewLC_AmountOfDraw =
      document.getElementById("NewLC_AmountOfDraw").value;
    // console.log('Sherrrryyyyyyyyyyyyyy Amount: ', newLCAmountOfDraw);
    // console.log('Sherrrryyyyyyyyyyyyyy Amount: ', typeof (newLCAmountOfDraw));

    // LC Currency
    let NewLC_Currency = document.getElementById("NewLC_Currency");
    let NewLC_CurrencyOption = NewLC_Currency.options[NewLC_Currency.selectedIndex];


    let NewLC_CurrencyValue = NewLC_CurrencyOption.value;

    // LC Country
    let NewLC_Country = document.getElementById("NewLC_Country");
    let NewLC_CountryOption =
      NewLC_Country.options[NewLC_Country.selectedIndex];
    let NewLC_CountryText = NewLC_CountryOption.value;

    // -----------------  2- NextStep LC -----------------------------------------------------

    // Customer / Bene Information
    const selectedValueOfReadCustomers = parseInt(
      nextStepLC_ShipperOrBene.value
    );

    // Issuing Bank Reference
    let nextStepLC_IssuingBankReference = document.getElementById(
      "nextStepLC_IssuingBankReference"
    ).value;

    // Issuing Bank
    const nextStepLC_IssuingBankName = document.getElementById(
      "nextStepLC_IssuingBankName"
    );
    const nextStepLC_IssuingBankNameValue = parseInt(
      nextStepLC_IssuingBankName.value
    );

    // Advising Bank Reference
    let nextStepLC_AdvisingBankReference = document.getElementById(
      "nextStepLC_AdvisingBankReference"
    ).value;

    // Advising Bank
    let nextStepLC_AdvisingBankName = document.getElementById(
      "nextStepLC_AdvisingBankName"
    );
    let nextStepLC_AdvisingBankNameOption =
      nextStepLC_AdvisingBankName.options[
        nextStepLC_AdvisingBankName.selectedIndex
      ];
    let nextStepLC_AdvisingBankNameText =
      nextStepLC_AdvisingBankNameOption.value;

    // Expiry Date LC
    let nextStepLC_ExpiryDate = document.getElementById(
      "nextStepLC_ExpiryDate"
    ).value;

    // Shipment Date
    let NextStepLc_LatestShipmentDateValue = document.getElementById(
      "NextStepLc_LatestShipmentDate"
    ).value;

    // LC Date Received
    // Get the year, month, and day
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = currentDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    let lcReceiveDate = formattedDate;
    let latestUpdate  = formattedDate;

    if (
      !Lvalue ||
      !Mvalue ||
      !selectedValueOfReadCustomers ||
      !nextStepLC_IssuingBankReference ||
      !nextStepLC_IssuingBankNameValue ||
      !nextStepLC_AdvisingBankReference ||
      !nextStepLC_AdvisingBankNameText ||
      !nextStepLC_ExpiryDate ||
      !NextStepLc_LatestShipmentDateValue ||
      !lcReceiveDate
    ) {
      alert("Some values are undefined or null. Filling the values.");
    } else {
      
      // Start Date Create row
      const postDataForDate = {

        date_date_received: lcReceiveDate,
        date_dte_snt_to_legalize: null,
        date_legalize_ret_dte: null,
        date_maturity_date: null,
        date_expiry_date: nextStepLC_ExpiryDate,
        date_latest_shipment_date: NextStepLc_LatestShipmentDateValue,
        date_date_sent_inspection: null,
        date_ship_date: NextStepLc_LatestShipmentDateValue,
        date_awb_bl_recv_date: null,
        date_date_paid: null,
        date_date_sent_to_bank: null,
        date_next_trace_dt: null,
        date_last_update: latestUpdate,
        date_issue_date: null,
        date_invoice_date: NewLC_InvoiceDate,
        date_1st_flight_date: null,
        date_2nd_flight_date: null
      };
      
      const requestOptionsForDate = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postDataForDate)
      };
      
      fetch(`${config.HOST}/date`, requestOptionsForDate)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Date created successfully:', data);
          // Handle success
        })
        .catch(error => {
          console.error('Error creating date:', error.message);
          // Handle error
        });


      // End Date Create Row
      
      // Start Courier Create row
      const postDataForCourier = {
        courier_no_of_days_to_present: "",
        courier_issuing_bank_courier: "",
        courier_issuing_bank_courier_courier_co: "",
        courier_latest_presentation_date:null,
        courier_domestic_bank_courier:"",
        courier_domestic_bank_courier_courier_co:"",
        courier_target_date_to_complete: null,
        courier_applicant_courier: "",
        courier_applicant_courier_courier_co: "",
        courier_actual_date_completed: null,
        courier_2nd_appt_courier: "",
        courier_2nd_appt_courier_courier_co: "",
        courier_pc_completed: null,
        courier_inbound_courier: "",
        courier_inbound_courier_courier_co: "",
        courier_date_reimbursement_filed: null,
        courier_inbound_rtn_courier: "",
        courier_inbound_rtn_courier_courier_co: "",
        courier_reimbursement_via: "",
        courier_outbound_rtn_courier: "",
        courier_outbound_rtn_courier_courier_co: "",
        courier_target_paid_date: null,
        courier_other_courier: "",
        courier_other_courier_courier_co: ""

      };
      
      const requestOptionsForCourier = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postDataForCourier)
      };
      
      fetch(`${config.HOST}/courier`, requestOptionsForCourier)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('courier created successfully:', data);
          // Handle success
        })
        .catch(error => {
          console.error('Error creating courier:', error.message);
          // Handle error
        });


      // End courier Create Row


      

      




      
      
      
      const postData = {
        // LC
        lc_location_code: parseInt(NewLC_LocationCodeText),
        lc_id: Lvalue,
        lc_preparer: getCookieValue("username"),
        lc_pk_preparer: getCookieValue("username"),
        lc_pc_prep: getCookieValue("username"),
        lc_pc_chker: getCookieValue("username"),
        lc_bill_to: "",
        lc_customer_id: selectedValueOfReadCustomers,
        lc_status: "",
        lc_special_instructions: "",
        lc_amount: null,
        lc_tolerance: "",
        lc_previous_lc_draws: "",
        lc_time_draft: "",
        lc_number_of_days: "",
        lc_country: NewLC_CountryText,
        lc_reference_number: NewLC_ReferenceNumber,
        lc_balance: "",
        lc_dp: "",
        lc_ip: "",
        lc_previous_lc_draws: "",
        lc_returning_balance: "",
        lc_currency: "",
        lc_fn: "",
        lc_charges: "",
        lc_add_charges: "",
        lc_fees_due: "",
        lc_cargo_ins_cost: "",
        lc_cargo_ins_sell_price: "",
        lc_rhdc_invoice_for_customer: "",
        lc_rhdc_invoice_for_fn_banks: "",
        lc_advising_bank_id: parseInt(nextStepLC_AdvisingBankNameText),
        lc_advising_bank_ref: nextStepLC_AdvisingBankReference,
        lc_issuing_bank_id: nextStepLC_IssuingBankNameValue,
        lc_issuing_bank_ref: nextStepLC_IssuingBankReference,
        lc_negotiating_bank_id: null,
        lc_commission_type: "",
        lc_tranche_count: "",
        lc_acceptan: "",
        lc_doc_prep: "",
        lc_confirm: "",
        lc_other: "",
        lc_discount: "",
        lc_phone_forwarder_shipper: "",
        lc_pending_inf_tracing_status_in_pc_or_void: "",
        lc_net_paid: "",
        lc_bank_charges: "",
        lc_negotiating_bank_reference: "",
        lc_applicant_name: "",
        lc_third_party_shipper_name: "",
        lc_applicant_address: "",
        lc_third_party_shipper_address: "",
        lc_applicant_fax: "",
        lc_drawee: "",
        lc_load_on_board: "",
        lc_for_transport_to: "",
        lc_tenor_of_draft: "",
        lc_drawn_under_statement_of_draft: "",
        lc_large_merchandise_description_invoice: "",
        lc_sales_terms: "",
        lc_location_of_sales_terms: "",
        lc_consign_to_party: "",
        lc_freight: "",
        lc_notify_party: "",
        lc_short_merchandise_description_for_bl: "",
        lc_short_merchandise_description_for_co: "",
        lc_global_field: "",
        lc_limited_certifications: "",
        lc_awd_or_bl_merchandise_description: "",
        lc_insurance_merchandise_description: "",
        lc_shipping_advice_merchandise_description: "",
        lc_value_for_carriage: "",
        lc_value_for_customers: "",
        lc_gross_weight: "",
        lc_measurements: "",
        lc_net_weight: "",
        lc_chargeable_weight: "",
        lc_weight_in_lbs: "",
        lc_other_charges_due_agent: "",
        lc_tl_forwarder_name: "",
        lc_forwarder_address: "",
        lc_partial_or_comp_shipment: "",
        lc_carrier_name: "",
        lc_vessel_name: "",
        lc_place_of_delivery_by: "",
        lc_for_transhipment_to: "",
        lc_type_of_move: "",
        lc_place_of_receipt_by: "",
        lc_other_chgs_due_carrier: "",
        lc_freight_charge: "",
        lc_freight_charge: "",
        lc_insurance_chg: "",
        lc_insurance_percentage: "",
        lc_insurance_amt: "",
        lc_invoice_num: parseInt(NewLC_InvoiceNumber),
        lc_mawb_no: "",
        lc_mobl_no: "",
        lc_hawb_hobl_no: "",
        lc_marks_and_numbers: "",
        lc_no_of_pieces: "",
        lc_dimensions: "",
        lc_po_no: "",
        lc_city_state_of_origin: "",
        lc_country_of_origin: "",
        lc_1st_flight_number: "",
        lc_2nd_flight_number: "",
        lc_1st_to_city_code: "",
        lc_1st_to_city_code_value: "",
        lc_insurance_company_name: "",
        lc_insurance_company_address: "",
        lc_insurance_company_fax: "",
        lc_other_receipt_name: "",
        lc_other_receipt_address: "",
        lc_other_receipt_fax: "",
        lc_other_courier_name: "",
        lc_other_courier_add: "",
        lc_type: NewLC_LcTypeText,
        lc_amount_of_draw: NewLC_AmountOfDraw,
        lc_master_id: Mvalue,
        lc_secondapplicant_header: "",
        lc_secondapplicant_name: "",
        lc_secondapplicant_address: "",
        lc_date_id: null,
        lc_courier_id: null,
        lc_information_currency: NewLC_CurrencyValue,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      // Make the API request to create a new LC
      const lcResponse = await fetch(`${config.HOST}/lcs`, requestOptions);

      if (!lcResponse.ok) {
        throw new Error(`Request failed with status: ${lcResponse.status}`);
      }

      const lcData = await lcResponse.json();
      // console.log("Response data: ");
      // console.log(lcData);
      alert("LC created successfully");
      location.reload();
    }
  }



  function getCookieValue(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
    // Cookie not found
  }
}