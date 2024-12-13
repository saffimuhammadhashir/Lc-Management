export function display_lc_function(config, convertLCID, reverseConvertLCID) {
  // console.log('Main Module - Display LC on Home Screen');
  let lcIds = []; 
  let currentRecordIndex = 0;
  let lcIdslenght = lcIds.length;


  document.addEventListener('DOMContentLoaded', function() {
    (async () => {
      document.getElementById("BottomNav_CurrentResult").innerText = 1;
      await fetchAllLcIds(); 
      console.log('LC IDs: ' + lcIds); 
      document.getElementById("BottomNav_TotalResult").innerText = lcIds.length;
      await displayHomepageLC(lcIds[currentRecordIndex]);
    })();
  });
  async function fetchAllLcIds() {
    const apiUrl = `${config.HOST}/get_all_ids`; // Updated API endpoint
    try {
      const response = await fetch(apiUrl); // Wait for the fetch call to resolve
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Wait for the response to be converted to JSON
      lcIds = data.map(item => item.lc_id); // Extract lc_id values and store them
      // console.log('Fetched LC IDs:', lcIds);
    } catch (error) {
      console.error('Failed to fetch LC IDs:', error);
    }
  }


  function displayHomepageLC(currentRecordId) {
    // currentRecordId = 20;
    
    const apiUrl = `${config.HOST}/get_lc_bank_customer_by_id/${currentRecordId}`;
    // Additional code for your function
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      // console.log("Sherry ka Data ", data);
      console.log("4- Courier: ", data[3]);
      console.log("3- Date: ", data[3]);
      console.log("2- Customer: ", data[2]);
      console.log("1- Bank: ", data[1]);
      console.log("0- LC: ", data[0]);

    
      // ! Start Date Table
      {
        // Homepage
        document.getElementById('Homepage_DateReceived').value = data[3].date_date_received;
        document.getElementById('Homepage_DteSntToLegalize').value = data[3].date_dte_snt_to_legalize;
        document.getElementById('Homepage_LegalizeRetDte').value = data[3].date_legalize_ret_dte;
        document.getElementById('Homepage_MaturityDate').value = data[3].date_maturity_date;
        document.getElementById('HomepageLCExpiryDate').value = data[3].date_expiry_date;
        document.getElementById('editlc_expiry_date').value = data[3].date_expiry_date;
        document.getElementById('Homepage_LatestShipmentDate').value = data[3].date_latest_shipment_date;
        document.getElementById('editlc_latest_shipment_date').value = data[3].date_latest_shipment_date;
        document.getElementById('HomePage_DateSentInspection').value = data[3].date_date_sent_inspection;
        document.getElementById('Homepage_ShipDate').value = data[3].date_ship_date;
        document.getElementById('HomePage_AWBorBLDate').value = data[3].date_awb_bl_recv_date;
        document.getElementById('Homepage_DatePaid').value = data[3].date_date_paid;
        document.getElementById('Homepage_DataSentToBank').value = data[3].date_date_sent_to_bank;
        document.getElementById('Homepage_NextTraceDt').value = data[3].date_next_trace_dt;
        document.getElementById('Homepage_LatestUpdate').value = data[3].date_last_update;
  
        // LcInformation Page
        document.getElementById('lcInformationPageLcIssueDate').value = data[3].date_issue_date;
        document.getElementById('lcInformationLatestUpdate').value = data[3].date_last_update;
  
        // Transport Page
        document.getElementById('TransportInformation_InvoiceDate').value = data[3].date_invoice_date;
        document.getElementById('TransportInformation_1stFlightDate').value = data[3].date_1st_flight_date;
        document.getElementById('TransportInformation_2ndFlightDate').value = data[3].date_2nd_flight_date;
  
        // Transport Page
        document.getElementById('PrintPage_LastUpdate').value = data[3].date_last_update;
      }
      // ! End Date Table


      // ! Start Courier Table
      {
      // Homepage
        document.getElementById("Homepage_NoOfDaysToPresent").value = data[4].courier_no_of_days_to_present;
        document.getElementById("Homepage_IssuingBankCourier").value = data[4].courier_issuing_bank_courier;
        // document.querySelector('#Homepage_IssuingBankCourierCo option[value="' + data[4].courier_issuing_bank_courier_courier_co + '"]').selected = true;
        document.getElementById("Homepage_LatestPresentationDate").value = data[4].courier_latest_presentation_date; 
        document.getElementById("Homepage_DomesticBankCourier").value = data[4].courier_domestic_bank_courier;
        // document.querySelector('#Homepage_DomesticBankCourierCo option[value="' + data[4].courier_domestic_bank_courier_courier_co + '"]').selected = true;
        document.getElementById("Homepage_TargetDateToComplete").value = data[4].courier_target_date_to_complete;
        document.getElementById("Homepage_ApplicantCourier").value = data[4].courier_applicant_courier;
        // document.querySelector('#Homepage_ApplicantCourierCo option[value="' + data[4].courier_applicant_courier_courier_co + '"]').selected = true;
        document.getElementById("Homepage_ActualDateCompleted").value = data[4].courier_actual_date_completed;
        document.getElementById("Homepage_SecondApplicantCourier").value = data[4].courier_2nd_appt_courier;
        // document.querySelector('#Homepage_SecondApplicantCourierCo option[value="' + data[4].courier_2nd_appt_courier_courier_co + '"]').selected = true;
        document.getElementById("Homepage_PCCompleted").value = data[4].courier_pc_completed;
        document.getElementById("Homepage_InboundCourier").value = data[4].courier_inbound_courier;
        // document.querySelector('#Homepage_InboundCourierCo option[value="' + data[4].courier_inbound_courier_courier_co + '"]').selected = true;
        document.getElementById("Homepage_DateReimbursmentFiled").value = data[4].courier_date_reimbursment_filed;
        document.getElementById("Homepage_InboundRTNCourier").value = data[4].courier_inbound_rtn_courier;
        // document.querySelector('#Homepage_InboundRTNCourierCo option[value="' + data[4].courier_inbound_rtn_courier_courier_co + '"]').selected = true;
        // document.querySelector('#Homepage_ReimbursmentVia option[value="' + data[4].courier_reimbursment_via + '"]').selected = true;
        document.getElementById("Homepage_OutboundRTNCourier").value = data[4].courier_outbound_rtn_courier;
        // document.querySelector('#Homepage_OutboundRTNCourierCo option[value="' + data[4].courier_outbound_rtn_courier_courier_co + '"]').selected = true;
        document.getElementById("Homepage_TargetPaidDate").value = data[4].courier_target_paid_date;
        document.getElementById("Homepage_OtherCourier").value = data[4].courier_other_courier;
        // document.querySelector('#Homepage_OtherCourierCo option[value="' + data[4].courier_other_courier_courier_co + '"]').selected = true;
      }
      // ! End Courier Table

      
      // ! Start LC Table
      {
      // 1st
      // Homepage
      document.getElementById('Homepage_LID').value = data[0].lc_location_code;
      let locationCode = data[0].lc_location_code;
      const id = data[0].lc_id;
      const convertedID = convertLCID(locationCode, id);
      document.getElementById('Homepage_ID').value = convertedID;
      document.getElementById('Homepage_ID').value = convertedID;

      document.getElementById('editlc_id').value = convertedID;
      document.getElementById('editlc_lc_master_id').value = convertedID;
      // document.querySelector('#Homepage_Preparer option[value="' + data[0].lc_preparer + '"]').selected = true;
      // document.querySelector('#Homepage_PkPreparer option[value="' + data[0].lc_pk_preparer + '"]').selected = true;
      // document.querySelector('#Homepage_PcPrep option[value="' + data[0].lc_pc_prep + '"]').selected = true;
      // document.querySelector('#Homepage_PcChker option[value="' + data[0].lc_pc_chker + '"]').selected = true;
      // document.querySelector('#Homepage_BillTo option[value="' + data[0].lc_bill_to + '"]').selected = true;
      document.getElementById("storecustomer_CUSTOMER_ID").value = data[0].lc_customer_id;
      document.getElementById('Homepage_Status').value = data[0].lc_status;
      document.getElementById('HomePage_SpecialInstructions').value = data[0].lc_special_instructions;
      
      // 2nd
      document.getElementById('Homepage_LcAmount').value = data[0].lc_amount;
      document.getElementById('editlc_lc_amount').value = data[0].lc_amount;
      document.getElementById("HomePage_Tolerance").value = data[0].lc_tolerance;
      document.getElementById("HomePage_PreviousLcDraws").value = data[0].lc_previous_lc_draws;
      // document.querySelector('#Homepage_TimeDraft option[value="' + data[0].lc_time_draft + '"]').selected = true;
      // document.querySelector('#Homepage_NumberOfDays option[value="' + data[0].lc_number_of_days + '"]').selected = true;
      // document.querySelector('#Homepage_LcCountry option[value="' + data[0].lc_country + '"]').selected = true; (Nechy given ha yaa)
      document.getElementById('Homepage_ReferenceNumber').value = data[0].lc_reference_number;
      var lc_balance = parseInt(data[0].lc_balance, 10) || 0; // Default to 0 if null, undefined, or NaN
      var lc_amount = parseInt(data[0].lc_amount, 10) || 0; // Default to 0 if null, undefined, or NaN
      var lc_amount_of_draw = parseInt(data[0].lc_amount_of_draw, 10) || 0; // Default to 0 if null, undefined, or NaN
      

      var homepage_balance =  (lc_amount - lc_amount_of_draw);
      
      // Update Homepage_Balance field
      document.getElementById("Homepage_Balance").value = homepage_balance;
      console.log("Balance: "+homepage_balance);
      console.log("lc_amount_of_draw: "+lc_amount_of_draw);
      console.log("lc_amount: "+lc_amount);
            document.getElementById("Homepage_DP").value = data[0].lc_dp;
      document.getElementById("Homepage_IP").value = data[0].lc_ip;
      
      // 3rd
      document.getElementById("Homepage_PreviousLcDrawsRunning").value  = data[0].lc_previous_lc_draws_running;
      document.getElementById("Homepage_ReturningBalance").value  = data[0].lc_returning_balance;
      document.getElementById("Homepage_FN").value = data[0].lc_fn; 
      document.getElementById("Homepage_Charges").value = data[0].lc_charges;            
      document.getElementById("Homepage_AddCharges").value = data[0].lc_add_charges;            
      document.getElementById("Homepage_FeesDue").value = data[0].lc_fees_due;            
      document.getElementById("Homepage_CargoInsCost").value = data[0].lc_cargo_ins_cost;          
      document.getElementById("Homepage_CargoInsSellPrice").value = data[0].lc_cargo_ins_sell_price;            
      document.getElementById("Homepage_RhdcInvoiceForCustomer").value = data[0].lc_rhdc_invoice_for_customer;            
      
      // 4th
      document.getElementById("Homepage_RhdcInvoiceForFnBanks").value  = data[0].lc_rhdc_invoice_for_fn_banks;    
      // document.querySelector('#Homepage_AdvisingBank option[value="' + data[0].lc_advising_bank_id + '"]').selected = true; (Nechy given ha yaa)
      document.getElementById('Homepage_AdvisingBankRef').value = data[0].lc_advising_bank_ref;
      document.getElementById('editlc_advising_bank_ref').value = data[0].lc_advising_bank_ref;
      // document.querySelector('#Homepage_IssuingBank option[value="' + data[0].lc_issuing_bank_id + '"]').selected = true; (Nechy given ha yaa)
      document.getElementById('Homepage_IssuingBankRef').value = data[0].lc_issuing_bank_ref;
      document.getElementById('editlc_issuing_bank_reference').value = data[0].lc_issuing_bank_ref;
      // document.querySelector('#Homepage_NegotiatingBank option[value="' + data[0].lc_negotiating_bank_id + '"]').selected = true; (Nechy given ha yaa)
      // document.querySelector('#Homepage_CommissionType option[value="' + data[0].lc_commission_type + '"]').selected = true;
      document.getElementById("Homepage_TrancheCount").value = data[0].lc_tranche_count;
      document.getElementById("Homepage_Acceptan").value = data[0].lc_acceptan;
      document.getElementById("Homepage_DocPrep").value = data[0].lc_doc_prep;
      
      // 5th
      document.getElementById("Homepage_Confirm").value = data[0].lc_confirm;
      document.getElementById("Homepage_Other").value = data[0].lc_other;
      document.getElementById("Homepage_Discount").value = data[0].lc_discount;
      var Homepage_ForwarderOrShipper_RadioButton = document.querySelectorAll('input[name="Homepage_ForwarderOrShipper_RadioButton"]');
      for (var i = 0; i < Homepage_ForwarderOrShipper_RadioButton.length; i++) {
          if (Homepage_ForwarderOrShipper_RadioButton[i].value === data[0].lc_phone_forwarder_shipper) {
            Homepage_ForwarderOrShipper_RadioButton[i].checked = true;
              break;
          }
      }
      document.getElementById("HomePage_pending_inf_tracing_status_in_pc_or_void").value = data[0].lc_pending_inf_tracing_status_in_pc_or_void;
      document.getElementById("Homepage_NetPaid").value = data[0].lc_net_paid;
      document.getElementById("Homepage_BankCharges").value = data[0].lc_bank_charges;
      document.getElementById("Homepage_NegBankReference").value = data[0].lc_negotiating_bank_reference;
      // LC Information Page
      document.getElementById("lcInformationPageApplicantName").value = data[0].lc_applicant_name;
      document.getElementById('lcInformationPageThirdPartyShipperName').value = data[0].lc_third_party_shipper_name;
      
      // 6th
      document.getElementById("lcInformationPageApplicantAddress").value  = data[0].lc_applicant_address;
      document.getElementById('lcInformationPageThirdPartyShipperAddress').value = data[0].lc_third_party_shipper_address;
      document.getElementById('lcInformationPageApplicantFax').value = data[0].lc_applicant_fax;
      document.getElementById('lcInformationPageLcDrawee').value = data[0].lc_drawee;
      document.getElementById('lcInformationPageLoadOnBoard').value = data[0].lc_load_on_board;
      document.getElementById('lcInformationPageForTransportTo').value = data[0].lc_for_transport_to;
      // document.querySelector('#lcInformationPageTenorOfDraft option[value="' + data[0].lc_tenor_of_draft + '"]').selected = true;
      document.getElementById('lcInformationPageDrawnUnderStatement').value = data[0].lc_drawn_under_statement_of_draft;
      document.getElementById('lcInformationPageLargeMerchadiseDescriptionInvoice').value = data[0].lc_large_merchandise_description_invoice;
      // document.querySelector('#lcInformationPageSalesTerms option[value="' + data[0].lc_sales_terms + '"]').selected = true;
      
      
      // 7th 
      document.getElementById("lcInformationPageLocationOfSalesTerms").value = data[0].lc_location_of_sales_terms;
      document.getElementById("lcInformationPageConsignToParty").value = data[0].lc_consign_to_party;
      // document.querySelector('#lcInformationPageFreight option[value="' + data[0].lc_freight + '"]').selected = true;
      document.getElementById("lcInformationPageNotifyParty").value = data[0].lc_notify_party;
      document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value = data[0].lc_short_merchandise_description_for_bl;
      document.getElementById("lcInformationPageShortShortMerchadiseDescriptionForCO").value = data[0].lc_short_merchandise_description_for_co;
      document.getElementById("LC_Information_Global_Certification").value = data[0].lc_global_field;
      document.getElementById("lcInformationPageLimitedCertifications").value = data[0].lc_limited_certifications;
      document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value = data[0].lc_awd_or_bl_merchandise_description;
      document.getElementById("lcInformationPageInsurranceMerchadiseDescription").value = data[0].lc_insurance_merchandise_description;



      // 8th
      document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value = data[0].lc_shipping_advice_merchandise_description;
      // Transport Information Page
      // document.querySelector('#TransportInformation_ValueForCarriage option[value="' + data[0].lc_value_for_carriage + '"]').selected = true;
      // document.querySelector('#TransportInformation_ValueForCustomers option[value="' + data[0].lc_value_for_customers + '"]').selected = true;
      document.getElementById("TransportInformation_GrossWeight").value = data[0].lc_gross_weight;
      // document.querySelector('#TransportInformation_Measurements option[value="' + data[0].lc_measurements + '"]').selected = true;
      document.getElementById("TransportInformation_NetWeight").value = data[0].lc_net_weight;
      document.getElementById("TransportInformation_ChargableWeight").value = data[0].lc_chargeable_weight;
      document.getElementById("TransportInformation_WeightInLBS").value = data[0].lc_weight_in_lbs;
      document.getElementById("TransportInformation_OtherChargesDueAgent").value = data[0].lc_other_charges_due_agent;
      document.getElementById("TransportInformation_TlForwarderName").value = data[0].lc_tl_forwarder_name;


      // 9th
      document.getElementById("TransportInformation_ForwarderAddress").value = data[0].lc_forwarder_address;
      // document.querySelector('#TransportInformation_PartialOrCompShippment option[value="' + data[0].lc_partial_or_comp_shipment + '"]').selected = true;
      document.getElementById("TransportInformation_CarrierName").value = data[0].lc_carrier_name;
      document.getElementById("TransportInformation_VesselName").value = data[0].lc_vessel_name;
      document.getElementById("TransportInformation_PlaceOfDeliveryBy").value = data[0].lc_place_of_delivery_by;
      document.getElementById("TransportInformation_ForTranshipmentTo").value = data[0].lc_for_transhipment_to;
      document.getElementById("TransportInformation_TypeOfMove").value = data[0].lc_type_of_move;
      document.getElementById("TransportInformation_PlaceOfReceiptBy").value = data[0].lc_place_of_receipt_by;
      document.getElementById("TransportInformation_OtherChgsDueCarrier").value = data[0].lc_other_chgs_due_carrier;
      document.getElementById("TransportInformation_FreightCharge").value = data[0].lc_freight_charge;


      // 10th
      document.getElementById("TransportInformation_InsuranceChg").value = data[0].lc_insurance_chg;      
      document.getElementById("TransportInformation_InsuranceAmt").value = data[0].lc_insurance_amt;
      document.getElementById("TransportInformation_InvoiceNumber").value = data[0].lc_invoice_num;
      document.getElementById("TransportInformation_MAWBNumber").value = data[0].lc_mawb_no;
      document.getElementById("TransportInformation_MOBLNumber").value = data[0].lc_mobl_no;
      document.getElementById("TransportInformation_HAWBOrHOBLNumber").value = data[0].lc_hawb_hobl_no;
      document.getElementById("TransportInformation_MarksAndNumber").value = data[0].lc_marks_and_numbers;
      document.getElementById("TransportInformation_NumberOfPieces").value = data[0].lc_no_of_pieces;
      document.getElementById("TransportInformation_Dimensions").value = data[0].lc_dimensions;


      // 11th
      document.getElementById("TransportInformation_PONumber").value  = data[0].lc_po_no;
      document.getElementById("TransportInformation_CityStateOfOrigin").value = data[0].lc_city_state_of_origin;
      // document.querySelector('#TransportInformation_CountryOfOrigin option[value="' + data[0].lc_country_of_origin + '"]').selected = true;
      document.getElementById("TransportInformation_1stFlightNumber").value = data[0].lc_1st_flight_number;
      document.getElementById("TransportInformation_2ndFlightNumber").value = data[0].lc_2nd_flight_number;
      // document.querySelector('#TransportInformation_1stToCityCode option[value="' + data[0].lc_1st_to_city_code + '"]').selected = true;
      // document.getElementById("TransportInformation_1stToCityCodeValue").value = data[0].lc_1st_to_city_code_value;
      document.getElementById("TransportInformation_InsuranceCompanyName").value = data[0].lc_insurance_company_name;
      document.getElementById("TransportInformation_InsuranceCompanyAddress").value = data[0].lc_insurance_company_address;
      document.getElementById("TransportInformation_InsuranceCompanyFax").value = data[0].lc_insurance_company_fax;


      // 12th
      document.getElementById("TransportInformation_OtherReceiptName").value = data[0].lc_other_receipt_name;
      document.getElementById("TransportInformation_OtherReceiptAddress").value = data[0].lc_other_receipt_address;
      document.getElementById("TransportInformation_OtherReceiptFax").value = data[0].lc_other_receipt_fax;
      document.getElementById("TransportInformation_OtherCourierName").value = data[0].lc_other_courier_name;
      document.getElementById("TransportInformation_OtherCourierAdd").value = data[0].lc_other_courier_add;
      document.getElementById("storecustomer_LC_LC_Type").value = data[0].lc_type;
      document.getElementById('Homepage_AmtOfDraw').value = data[0].lc_amount_of_draw;
      document.getElementById('store_LC_MasterID').value = data[0].lc_master_id;
      document.getElementById('lcInformationSecondApplicantHeader').value = data[0].lc_secondapplicant_header;
      document.getElementById('lcInformationSecondApplicantName').value = data[0].lc_secondapplicant_name;


      //  13th
      document.getElementById('lcInformationSecondApplicantAddress').value = data[0].lc_secondapplicant_address;
      document.getElementById('store_DateID').value = data[0].lc_date_id;
      document.getElementById('store_CourierID').value = data[0].lc_courier_id;
      

      }
      // ! End LC Table


      // ! Start Customer Table 
      {

            var address = data[2].customer_address ? data[2].customer_address : '';
            var city = data[2].customer_city ? data[2].customer_city : '';
            var state = data[2].customer_states ? data[2].customer_states : '';
            var country = data[2].customer_country ? data[2].customer_country : '';
            var zipcode = data[2].customer_zipcode ? data[2].customer_zipcode : '';
            var fullAddress = [address, city, state, country].filter(Boolean).join(", ");
            var fullAddressWithZip = [address, city, state, country, zipcode].filter(Boolean).join(", ");
            
            
            document.getElementById("storecustomer_CUSTOMER_FAX").value = data[2].customer_fax;
            document.getElementById("LCInformation_BENEFICIARYName").value = data[2].customer_full_name;
            document.getElementById("LCInformation_BENEFICIARYAddress").value = fullAddress;
            document.getElementById("editlc_shipper_bene_address").value = fullAddress;
            document.getElementById("Homepage_ShipperOrBene").value = data[2].customer_full_name;
            document.getElementById("editlc_shipper_bene").value = data[2].customer_full_name;
            document.getElementById("LCInformation_BENEFICIARYAddressStore").value = fullAddressWithZip;
            document.getElementById("storecustomer_CUSTOMER_CODE").value = data[2].customer_code;
            document.getElementById("storecustomer_CUSTOMER_COUNTRY").value = data[2].customer_country;
            document.getElementById("storecustomer_CUSTOMER_STATES").value = data[2].customer_states;
            document.getElementById("storecustomer_CUSTOMER_CITY").value = data[2].customer_city;
            document.getElementById("storecustomer_CUSTOMER_FORWARDER_SHIPPER_BANK").value = data[2].customer_forwarder_shipper_bank;
            document.getElementById("storecustomer_CUSTOMER_DEFAULT_PREPARER").value = data[2].customer_default_preparer;
            document.getElementById("storecustomer_CUSTOMER_CUSTOMER_PROCEDURES").value = data[2].customer_customer_procedures;
            document.getElementById("storecustomer_CUSTOMER_ZIPCODE").value = data[2].customer_zipcode;
            document.getElementById("storecustomer_CUSTOMER_PHONE").value = data[2].customer_phone;
            document.getElementById("storecustomer_CUSTOMER_MAILTO").value = data[2].customer_mailto;
            document.getElementById("storecustomer_CUSTOMER_TYPE").value = data[2].customer_type;
            document.getElementById("storecustomer_CUSTOMER_CURRENCY").value = data[2].customer_currency;
            document.getElementById("storecustomer_CUSTOMER_TOLL_FREE").value = data[2].customer_toll_free;
            document.getElementById("storecustomer_CUSTOMER_AFFILIATED_WITH").value = data[2].customer_affiliated_with;
            document.getElementById("storecustomer_CUSTOMER_UAN").value = data[2].customer_uan;
            document.getElementById("storecustomer_CUSTOMER_CHARGES").value = data[2].customer_charges;
            document.getElementById("storecustomer_CUSTOMER_FEDEX_ACCOUNT_NO").value = data[2].customer_fedex_account_no;
            document.getElementById("storecustomer_CUSTOMER_DHL_ACCOUNT_NO").value = data[2].customer_dhl_account_no;
            document.getElementById("storecustomer_CUSTOMER_UPS_ACCOUNT_NO").value = data[2].customer_ups_account_no;
            document.getElementById("storecustomer_CUSTOMER_ACCOUNT_NUMBER").value = data[2].customer_account_number;
            document.getElementById("storecustomer_CUSTOMER_ABA").value = data[2].customer_aba;
            document.getElementById("storecustomer_CUSTOMER_BANK_NAME").value = data[2].customer_bank_name;
            document.getElementById("storecustomer_CUSTOMER_PAYEE_NAME").value = data[2].customer_payee_name;
            document.getElementById("storecustomer_CUSTOMER_REMARKS").value = data[2].customer_remarks;
            document.getElementById("storecustomer_CUSTOMER_CONTACT_NAME").value = data[2].customer_contact_name;
            document.getElementById("storecustomer_CUSTOMER_CONTACT_PHONE").value = data[2].customer_contact_phone;
            document.getElementById("storecustomer_CUSTOMER_CONTACT_EMAIL").value = data[2].customer_contact_email;
            
      }

      // ! End Customer Table 


      // ! Start Issuing Bank Table
      {
            document.getElementById("storeissuingbank_bank_id").value = data[1].bank_id;
            document.getElementById("lcInformationPageIssuingBankName").value = data[1].bank_name;
            document.getElementById("lcInformationPageIssuingBankFax").value = data[1].bank_fax_number;
            document.getElementById("lcInformationPageIssuingBankAddress").value = data[1].bank_address;
            document.getElementById("storeissuingbank_bank_main_bank").value = data[1].bank_main_bank;
            document.getElementById("storeissuingbank_bank_country").value = data[1].bank_country;
            document.getElementById("storeissuingbank_bank_state").value = data[1].bank_state;
            document.getElementById("storeissuingbank_bank_city").value = data[1].bank_city;
            document.getElementById("storeissuingbank_bank_zipcode").value = data[1].bank_zipcode;
            document.getElementById("storeissuingbank_bank_email").value = data[1].bank_email;
            document.getElementById("storeissuingbank_bank_phone").value = data[1].bank_phone;
      }

      // ! End Issuing Bank Table

    

      // ! Start Advising Bank Table (No Join So Fetch)
      {     
            const url = `${config.HOST}/banks/1`;
            fetch(url)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              })
              .then(data => {
                document.getElementById("storeAdvisingbank_bank_id").value = data.bank_id;
                document.getElementById("storeAdvisingbank_bank_name").value = data.bank_name;
                document.getElementById("storeAdvisingbank_bank_fax_number").value = data.bank_fax_number;
                document.getElementById("storeAdvisingbank_bank_address").value = data.bank_address;
                document.getElementById("editlc_advising_bank_address").value = data.bank_address;
                document.getElementById("storeAdvisingbank_bank_main_bank").value = data.bank_main_bank;
                document.getElementById("storeAdvisingbank_bank_country").value = data.bank_country;
                document.getElementById("storeAdvisingbank_bank_state").value = data.bank_state;
                document.getElementById("storeAdvisingbank_bank_city").value = data.bank_city;
                document.getElementById("storeAdvisingbank_bank_zipcode").value = data.bank_zipcode;
                document.getElementById("storeAdvisingbank_bank_email").value = data.bank_email;
                document.getElementById("storeAdvisingbank_bank_phone").value = data.bank_phone;
                // console.log(data);
              })
              .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
              });
        
      }

      // ! End Advising Bank Table


      // ! Start Nego Bank Table (No Join So Fetch)
      {     
      fetch(`${config.HOST}/banks/1`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          document.getElementById("storecustomer_nego_name").value = data.bank_name;
          document.getElementById("storecustomer_nego_fax_number").value = data.bank_fax_number;
          document.getElementById("storecustomer_nego_address").value = data.bank_address;
          document.getElementById("storecustomer_nego_main_bank").value = data.bank_main_bank;
          document.getElementById("storecustomer_nego_country").value = data.bank_country;
          document.getElementById("storecustomer_nego_state").value = data.bank_state;
          document.getElementById("storecustomer_nego_city").value = data.bank_city;
          document.getElementById("storecustomer_nego_zipcode").value = data.bank_zipcode;
          document.getElementById("storecustomer_nego_email").value = data.bank_email;
          document.getElementById("storecustomer_nego_phone").value = data.bank_phone;
          // console.log(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
  
      }




     // ! Start ID's 
      {
        document.getElementById("store_LC_ID").value = data[0].lc_id;
        document.getElementById("storecustomer_CUSTOMER_ID").value = data[0].lc_customer_id;
        document.getElementById("storeAdvisingbank_bank_id").value = data[0].lc_advising_bank_id;
        document.getElementById("storeissuingbank_bank_id").value = data[0].lc_issuing_bank_id;
        document.getElementById("storecustomer_nego_BankID").value = data[0].lc_negotiating_bank_id;
        document.getElementById("store_LC_MasterID").value = data[0].lc_master_id;
        document.getElementById("store_DateID").value = data[0].lc_date_id;
        document.getElementById("store_CourierID").value = data[0].lc_courier_id;
        
      }

    // ! End Advising Bank Table


    // ! Start Other
      {
        document.getElementById('lcInformationPageLcNumber').value = data[0].lc_issuing_bank_ref;
        document.getElementById('AWB_LcNumber').value = data[0].lc_issuing_bank_ref;
        document.getElementById('lcInformationPageID').value = document.getElementById("Homepage_ID").value;
        document.getElementById('printPageID').value = document.getElementById("Homepage_ID").value;
      }
    
    // ! End Other

    // ! End of Propogation

    //! Start Setting Configure

    //! Start Setting Advising Bank, Issuing Bank and Nego Bank Select Field
      {
      const AllBankURL = `${config.HOST}/banks`;
      Homepage_AdvisingBank_edit=document.getElementById("Homepage_AdvisingBank_edit");
      let Homepage_AdvisingBank = document.getElementById("Homepage_AdvisingBank");
      Homepage_AdvisingBank.innerHTML = '';
      fetch(AllBankURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          return response.json();
        })
        .then((bankData) => {
          if (bankData && Array.isArray(bankData)) {
            for (const bank of bankData) {
              const optionBank = document.createElement('option');
              const optionBank2 = document.createElement('option');
              optionBank.value = bank.bank_id;
              optionBank.textContent = bank.bank_name;
              optionBank2.value = bank.bank_id;
              optionBank2.textContent = bank.bank_name;
              Homepage_AdvisingBank.appendChild(optionBank);
              Homepage_AdvisingBank_edit.appendChild(optionBank2);
            }

            for (var i = 0; i < Homepage_AdvisingBank.options.length; i++) {
              if (parseInt(Homepage_AdvisingBank.options[i].value) === data[0].lc_advising_bank_id) {
                Homepage_AdvisingBank.options[i].selected = true;
                break;
              }
            }
            for (var i = 0; i < Homepage_AdvisingBank_edit.options.length; i++) {
              if (parseInt(Homepage_AdvisingBank_edit.options[i].value) === data[0].lc_advising_bank_id) {
                Homepage_AdvisingBank_edit.options[i].selected = true;
                break;
              }
            }

          } else {
            console.error('Invalid data format received from the server.');
          }
        })
        .catch((error) => {
          console.error('Error during fetch operation:', error);
        });



        Homepage_IssuingBank_edit=document.getElementById("Homepage_IssuingBank_edit");
      let Homepage_IssuingBank = document.getElementById("Homepage_IssuingBank");
      Homepage_IssuingBank.innerHTML = '';
      fetch(AllBankURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok (${response.status})`);
          }
          return response.json();
        })
        .then((bankData) => {
          if (bankData && Array.isArray(bankData)) {
            for (const bank of bankData) {
              const optionBank = document.createElement('option');
              optionBank.value = bank.bank_id;
              optionBank.textContent = bank.bank_name;
              const optionBank2 = document.createElement('option');
              optionBank2.value = bank.bank_id;
              optionBank2.textContent = bank.bank_name;
              Homepage_IssuingBank.appendChild(optionBank);
              Homepage_IssuingBank_edit.appendChild(optionBank2);
            }

            for (var i = 0; i < Homepage_IssuingBank.options.length; i++) {
              if (parseInt(Homepage_IssuingBank.options[i].value) === data[0].lc_issuing_bank_id) {
                Homepage_IssuingBank.options[i].selected = true;
                break;
              }
            }

            for (var i = 0; i < Homepage_IssuingBank_edit.options.length; i++) {
              if (parseInt(Homepage_IssuingBank_edit.options[i].value) === data[0].lc_issuing_bank_id) {
                Homepage_IssuingBank_edit.options[i].selected = true;
                break;
              }
            }

          } else {
            console.error('Invalid data format received from the server.');
          }
        })
        .catch((error) => {
          console.error('Error during fetch operation:', error);
        });


        let Homepage_NegotiatingBank = document.getElementById("Homepage_NegotiatingBank");
        Homepage_NegotiatingBank.innerHTML = '';
        fetch(AllBankURL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok (${response.status})`);
            }
            return response.json();
          })
          .then((bankData) => {
            if (bankData && Array.isArray(bankData)) {
              for (const bank of bankData) {
                const optionBank = document.createElement('option');
                optionBank.value = bank.bank_id;
                optionBank.textContent = bank.bank_name;
                Homepage_NegotiatingBank.appendChild(optionBank);
              }

              for (var i = 0; i < Homepage_NegotiatingBank.options.length; i++) {
                if (parseInt(Homepage_NegotiatingBank.options[i].value) === data[0].lc_negotiating_bank_id) {            
                  Homepage_NegotiatingBank.options[i].selected = true;
                  break;
                }
              }

            } else {
              console.error('Invalid data format received from the server.');
            }
          })
          .catch((error) => {
            console.error('Error during fetch operation:', error);
          });

      }
        
    //! End Setting Advising Bank, Issuing Bank and Nego Bank Select Field

    //! Start Setting Country and Currency Select Field and Country of Origin
      {
        let Homepage_LcCountry = document.getElementById("Homepage_LcCountry");
        const requestUrlCountry = `${config.HOST}/CSCCountryNameAll`;

        fetch(requestUrlCountry, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((countryData) => {
            // console.log('Success:', countryData);
            for (const country of countryData) {
              const optionCountry = document.createElement('option');
              optionCountry.value = country.id;
              optionCountry.textContent = country.name;
              Homepage_LcCountry.appendChild(optionCountry);
            }

            for (var i = 0; i < Homepage_LcCountry.options.length; i++) {
              if (Homepage_LcCountry.options[i].value === data[0].lc_country) {
                Homepage_LcCountry.options[i].selected = true;
                break;
              }
            }

          })
          .catch((error) => {
            console.log('Error:', error);

          });


        let TransportInformation_CountryOfOrigin = document.getElementById("TransportInformation_CountryOfOrigin");
        fetch(requestUrlCountry, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((countryData) => {
            for (const country of countryData) {
              const optionCountry = document.createElement('option');
              optionCountry.value = country.id;
              optionCountry.textContent = country.name;
              TransportInformation_CountryOfOrigin.appendChild(optionCountry);
            }

            for (var i = 0; i < TransportInformation_CountryOfOrigin.options.length; i++) {
              if (TransportInformation_CountryOfOrigin.options[i].value === data[0].lc_country_of_origin) {
                TransportInformation_CountryOfOrigin.options[i].selected = true;
                break;
              }
            }

          })
          .catch((error) => {
            console.log('Error:', error);

          });

        let Homepage_Currency = document.getElementById("Homepage_Currency");
        const requestUrlCurrency = `${config.HOST}/CurrencyList`;

        fetch(requestUrlCurrency, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((response) => response.json())
          .then((currencyData) => {
            Homepage_Currency.innerHTML = "";

            for (const currency of currencyData) {
              const optionCurrency = document.createElement('option');
              optionCurrency.value = currency.currency_id;
              optionCurrency.textContent = currency.currency_name_singular;
              Homepage_Currency.appendChild(optionCurrency);
            }
            for (var i = 0; i < Homepage_Currency.options.length; i++) {

              if (Homepage_Currency.options[i].value === data[0].lc_currency) {
                Homepage_Currency.options[i].selected = true;
                break;
              }
            }

           

             
            


          })
          .catch((error) => {
            console.log('Error:', error);

          });



          let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
  
          fetch(requestUrlCurrency, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          })
            .then((response) => response.json())
            .then((currencyData) => {
              lcInformationPageCurrency.innerHTML = "";
  
              for (const currency of currencyData) {
                const optionCurrency = document.createElement('option');
                optionCurrency.value = currency.currency_id;
                optionCurrency.textContent = currency.currency_name_singular;
                lcInformationPageCurrency.appendChild(optionCurrency);
              }
              for (var i = 0; i < lcInformationPageCurrency.options.length; i++) {
  
                if (lcInformationPageCurrency.options[i].value === data[0].lc_information_currency) {
                  lcInformationPageCurrency.options[i].selected = true;
                  break;
                }
              }
  
             
  
               
              
  
  
            })
            .catch((error) => {
              console.log('Error:', error);
  
            });

      }
    //! End Setting Country and Currency Select Field





     //! Start Setting Airport Select Field
     {
      let TransportInformation_1stToCityCode = document.getElementById("TransportInformation_1stToCityCode");
      const requestUrlAirport = `${config.HOST}/AirportList`;

      fetch(requestUrlAirport, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then((response) => response.json())
        .then((airportData) => {
          for (const airport of airportData) {
            const optionAirport = document.createElement('option');
            optionAirport.value = airport.airport_code;
            optionAirport.textContent = airport.city_name + ", " + airport.country_name;
            TransportInformation_1stToCityCode.appendChild(optionAirport);
          }

          for (var i = 0; i < TransportInformation_1stToCityCode.options.length; i++) {
            if (TransportInformation_1stToCityCode.options[i].value === data[0].lc_1st_to_city_code) {
              TransportInformation_1stToCityCode.options[i].selected = true;
              document.getElementById("TransportInformation_1stToCityCodeValue").value = TransportInformation_1stToCityCode.options[i].value;
              break;
            }
          }

        })
        .catch((error) => {
          console.log('Error:', error);

        });


    }

    TransportInformation_1stToCityCode.addEventListener("change", function(event) {
      document.getElementById("TransportInformation_1stToCityCodeValue").value = event.target.value;;
    });



   //! End Setting Airport Select Field

  
    //! Start Select Select Field All

    // ! Start Courier Select
      {
        let Homepage_IssuingBankCourierCo = document.getElementById("Homepage_IssuingBankCourierCo");
        for (var i = 0; i < Homepage_IssuingBankCourierCo.options.length; i++) {
          if (Homepage_IssuingBankCourierCo.options[i].text === data[4].courier_issuing_bank_courier_courier_co) {
            Homepage_IssuingBankCourierCo.options[i].selected = true;
            break;
          }
        }

        let Homepage_DomesticBankCourierCo = document.querySelector('#Homepage_DomesticBankCourierCo');
        for (var i = 0; i < Homepage_DomesticBankCourierCo.options.length; i++) {
          if (Homepage_DomesticBankCourierCo.options[i].value === data[4].courier_domestic_bank_courier_courier_co) {
            Homepage_DomesticBankCourierCo.options[i].selected = true;
            break;
          }
        }

        let Homepage_ApplicantCourierCo = document.querySelector('#Homepage_ApplicantCourierCo');
        for (var i = 0; i < Homepage_ApplicantCourierCo.options.length; i++) {
          if (Homepage_ApplicantCourierCo.options[i].value === data[4].courier_applicant_courier_courier_co) {
            Homepage_ApplicantCourierCo.options[i].selected = true;
            break;
          }
        }


        let Homepage_SecondApplicantCourierCo = document.querySelector('#Homepage_SecondApplicantCourierCo');
        for (var i = 0; i < Homepage_SecondApplicantCourierCo.options.length; i++) {
          if (Homepage_SecondApplicantCourierCo.options[i].value === data[4].courier_2nd_appt_courier_courier_co) {
            Homepage_SecondApplicantCourierCo.options[i].selected = true;
            break;
          }
        }


        let Homepage_InboundCourierCo = document.querySelector('#Homepage_InboundCourierCo');
        for (var i = 0; i < Homepage_InboundCourierCo.options.length; i++) {
          if (Homepage_InboundCourierCo.options[i].value === data[4].courier_inbound_courier_courier_co) {
            Homepage_InboundCourierCo.options[i].selected = true;
            break;
          }
        }


        let Homepage_InboundRTNCourierCo = document.querySelector('#Homepage_InboundRTNCourierCo');
        for (var i = 0; i < Homepage_InboundRTNCourierCo.options.length; i++) {
          if (Homepage_InboundRTNCourierCo.options[i].value === data[4].courier_inbound_rtn_courier_courier_co) {
            Homepage_InboundRTNCourierCo.options[i].selected = true;
            break;
          }
        }


        let Homepage_ReimbursmentVia = document.querySelector('#Homepage_ReimbursmentVia');
        for (var i = 0; i < Homepage_ReimbursmentVia.options.length; i++) {
          if (Homepage_ReimbursmentVia.options[i].value === data[4].courier_reimbursment_via) {
            Homepage_ReimbursmentVia.options[i].selected = true;
            break;
          }
        }

        
        let Homepage_OutboundRTNCourierCo = document.querySelector('#Homepage_OutboundRTNCourierCo');
        for (var i = 0; i < Homepage_OutboundRTNCourierCo.options.length; i++) {
          if (Homepage_OutboundRTNCourierCo.options[i].value === data[4].courier_outbound_rtn_courier_courier_co) {
            Homepage_OutboundRTNCourierCo.options[i].selected = true;
            break;
          }
        }

        
        let Homepage_OtherCourierCo = document.querySelector('#Homepage_OtherCourierCo');
        for (var i = 0; i < Homepage_OtherCourierCo.options.length; i++) {
          if (Homepage_OtherCourierCo.options[i].value === data[4].courier_other_courier_courier_co) {
            Homepage_OtherCourierCo.options[i].selected = true;
            break;
          }
        }

      }
    // ! End Courier Select


    // ! Start LC Select
      {
        let Homepage_Preparer = document.querySelector('#Homepage_Preparer');
        for (var i = 0; i < Homepage_Preparer.options.length; i++) {
          if (Homepage_Preparer.options[i].value === data[0].lc_preparer) {
            Homepage_Preparer.options[i].selected = true;
            break;
          }
        }


        let Homepage_PkPreparer = document.querySelector('#Homepage_PkPreparer');
        for (var i = 0; i < Homepage_PkPreparer.options.length; i++) {
          if (Homepage_PkPreparer.options[i].value === data[0].lc_pk_preparer) {
            Homepage_PkPreparer.options[i].selected = true;
            break;
          }
        }


        let Homepage_PcPrep = document.querySelector('#Homepage_PcPrep');
        for (var i = 0; i < Homepage_PcPrep.options.length; i++) {
          if (Homepage_PcPrep.options[i].value === data[0].lc_pc_prep) {
            Homepage_PcPrep.options[i].selected = true;
            break;
          }
        }


        let Homepage_PcChker = document.querySelector('#Homepage_PcChker');
        for (var i = 0; i < Homepage_PcChker.options.length; i++) {
          if (Homepage_PcChker.options[i].value === data[0].lc_pc_chker) {
            Homepage_PcChker.options[i].selected = true;
            break;
          }
        }


        let Homepage_BillTo = document.querySelector('#Homepage_BillTo');
        for (var i = 0; i < Homepage_BillTo.options.length; i++) {
          if (Homepage_BillTo.options[i].value === data[0].lc_bill_to) {
            Homepage_BillTo.options[i].selected = true;
            break;
          }
        }


        let Homepage_TimeDraft = document.querySelector('#Homepage_TimeDraft');
        for (var i = 0; i < Homepage_TimeDraft.options.length; i++) {
          if (Homepage_TimeDraft.options[i].value === data[0].lc_time_draft) {
            Homepage_TimeDraft.options[i].selected = true;
            break;
          }
        }


        let Homepage_NumberOfDays = document.querySelector('#Homepage_NumberOfDays');
        for (var i = 0; i < Homepage_NumberOfDays.options.length; i++) {
          if (Homepage_NumberOfDays.options[i].value === data[0].lc_number_of_days) {
            Homepage_NumberOfDays.options[i].selected = true;
            break;
          }
        }


        let Homepage_CommissionType = document.querySelector('#Homepage_CommissionType');
        for (var i = 0; i < Homepage_CommissionType.options.length; i++) {
          if (Homepage_CommissionType.options[i].value === data[0].lc_commission_type) {
            Homepage_CommissionType.options[i].selected = true;
            break;
          }
        }

        let lcInformationPageTenorOfDraft = document.querySelector('#lcInformationPageTenorOfDraft');
        for (var i = 0; i < lcInformationPageTenorOfDraft.options.length; i++) {
          if (lcInformationPageTenorOfDraft.options[i].value === data[0].lc_tenor_of_draft) {
            lcInformationPageTenorOfDraft.options[i].selected = true;
            break;
          }
        }


        let lcInformationPageSalesTerms = document.querySelector('#lcInformationPageSalesTerms');
        for (var i = 0; i < lcInformationPageSalesTerms.options.length; i++) {
          if (lcInformationPageSalesTerms.options[i].value === data[0].lc_sales_terms) {
            lcInformationPageSalesTerms.options[i].selected = true;
            break;
          }
        }


        let lcInformationPageFreight = document.querySelector('#lcInformationPageFreight');
        for (var i = 0; i < lcInformationPageFreight.options.length; i++) {
          if (lcInformationPageFreight.options[i].value === data[0].lc_freight) {
            lcInformationPageFreight.options[i].selected = true;
            break;
          }
        }


        let TransportInformation_ValueForCarriage = document.querySelector('#TransportInformation_ValueForCarriage');
        TransportInformation_ValueForCarriage.value=data[0].lc_value_for_carriage;


        
        let TransportInformation_ValueForCustomers = document.querySelector('#TransportInformation_ValueForCustomers');
        TransportInformation_ValueForCustomers.value=data[0].lc_value_for_customers;



        let TransportInformation_Measurements = document.querySelector('#TransportInformation_Measurements');
        for (var i = 0; i < TransportInformation_Measurements.options.length; i++) {
          if (TransportInformation_Measurements.options[i].value === data[0].lc_measurements) {
            TransportInformation_Measurements.options[i].selected = true;
            break;
          }
        }


        let TransportInformation_PartialOrCompShippment = document.querySelector('#TransportInformation_PartialOrCompShippment');
        for (var i = 0; i < TransportInformation_PartialOrCompShippment.options.length; i++) {
          if (TransportInformation_PartialOrCompShippment.options[i].value === data[0].lc_partial_or_comp_shipment) {
            TransportInformation_PartialOrCompShippment.options[i].selected = true;
            break;
          }
        }


        let TransportInformation_InsurancePercentage = document.querySelector('#TransportInformation_InsurancePercentage');
        for (var i = 0; i < TransportInformation_InsurancePercentage.options.length; i++) {
          if (TransportInformation_InsurancePercentage.options[i].value === data[0].lc_insurance_percentage) {
            TransportInformation_InsurancePercentage.options[i].selected = true;
            break;
          }
        }

        // ! START Insurance Amount
        let Homepage_AmtOfDraw = document.getElementById('Homepage_AmtOfDraw');    
        let store_Insurance_Percentage = document.getElementById('store_Insurance_Percentage');
    
        function updateInsuranceChg() {
            let Homepage_AmtOfDrawValue = Homepage_AmtOfDraw.value.trim();
            let TransportInformation_InsurancePercentageOption = TransportInformation_InsurancePercentage.options[TransportInformation_InsurancePercentage.selectedIndex];
            let TransportInformation_InsurancePercentageValue = TransportInformation_InsurancePercentageOption.value;

    
            if (Homepage_AmtOfDrawValue !== '' && TransportInformation_InsurancePercentageValue !== '0') {
                let value = (TransportInformation_InsurancePercentageValue / 100) * Homepage_AmtOfDrawValue;
                store_Insurance_Percentage.value = value;
                console.log('');
                
                store_Insurance_Percentage.dispatchEvent(new Event("change"));

            } else {
              store_Insurance_Percentage.value = '';
            }
        }
        
    
        // Add event listeners
        Homepage_AmtOfDraw.addEventListener('input', updateInsuranceChg);
        TransportInformation_InsurancePercentage.addEventListener('change', updateInsuranceChg);


        let TransportInformation_CountryOfOrigin = document.querySelector('#TransportInformation_CountryOfOrigin');
        for (var i = 0; i < TransportInformation_CountryOfOrigin.options.length; i++) {
          if (TransportInformation_CountryOfOrigin.options[i].value === data[0].lc_country_of_origin) {
            TransportInformation_CountryOfOrigin.options[i].selected = true;
            break;
          }
        }


        let TransportInformation_1stToCityCode = document.querySelector('#TransportInformation_1stToCityCode');
        for (var i = 0; i < TransportInformation_1stToCityCode.options.length; i++) {
          if (TransportInformation_1stToCityCode.options[i].value === data[0].lc_1st_to_city_code) {
            TransportInformation_1stToCityCode.options[i].selected = true;
            break;
          }
        }




        









      }
     // ! End LC Select


    //! End Select Select Field All




    })
    .catch(error => {
      console.error('Error fetching main Homepage data:', error);
      // alert("No LC on this Id   -------------------");
      // window.location.reload();
      // currentRecordId = document.getElementById("HomepageTotalRecords").value;
      // displayHomepageLC(currentRecordId);

    });

  }

  // End

  // ! Buttons at buttom nav 
  {
  var nextButton = document.getElementById("BottomNavbar_Next_Button");
  nextButton.addEventListener("click", handleNextButtonClick);
  function handleNextButtonClick(event) {
      event.preventDefault();
      currentRecordIndex = currentRecordIndex < lcIds.length - 1 ? currentRecordIndex + 1 : 0;
      document.getElementById("BottomNav_CurrentResult").innerText = currentRecordIndex + 1;

      displayHomepageLC(lcIds[currentRecordIndex]);
  }

  var previousButton = document.getElementById("BottomNavbar_Previous_Button");
  previousButton.addEventListener("click", handlePreviousButtonClick);
  function handlePreviousButtonClick(event) {
      event.preventDefault();
      currentRecordIndex = currentRecordIndex > 0 ? currentRecordIndex - 1 : lcIds.length - 1;
      document.getElementById("BottomNav_CurrentResult").innerText = currentRecordIndex + 1;

      displayHomepageLC(lcIds[currentRecordIndex]);
  }


  var StartButton = document.getElementById("BottomNavbar_StartLC_Button");
  StartButton.addEventListener("click", handleStartButtonClick);
  function handleStartButtonClick(event) {
      event.preventDefault();
      document.getElementById("BottomNav_CurrentResult").innerText = 1;
      currentRecordIndex = 0;
      displayHomepageLC(lcIds[currentRecordIndex]);
  }

  var endButton = document.getElementById("BottomNavbar_EndLC_Button");
  endButton.addEventListener("click", handleEndButtonClick);
  function handleEndButtonClick(event) {
      event.preventDefault();
      document.getElementById("BottomNav_CurrentResult").innerText = lcIds.length;

      displayHomepageLC(lcIds[lcIds.length - 1]);
  }

  var BottomNav_GotoRecNo = document.getElementById("BottomNav_GotoRecNo");
  BottomNav_GotoRecNo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      let record = BottomNav_GotoRecNo.value;
      displayHomepageLC(record);
    }
  });

  }


  {
  // Search All
  var Search_Find_Button = document.getElementById("Search_Find_Button");
  const searchBox = document.getElementById('Search_Inputfield');
  const Search_Row_Name = document.getElementById('Search_Row_Name');
 
  Search_Find_Button.addEventListener("click", async function(event) {
      event.preventDefault();
      console.log('Clicked Search');


      var Search_Row_NameselectedIndex = Search_Row_Name.selectedIndex;
      var Search_Row_NameselectedIndexselectedValue = Search_Row_Name.options[Search_Row_NameselectedIndex].value;
      
      let querry = document.getElementById("Search_Inputfield").value;

      if(Search_Row_NameselectedIndexselectedValue == "default") {
        console.log('Search All');
        
        const apiUrl = `${config.HOST}/global_search_all/${querry}`;


        try {
          const response = await fetch(apiUrl); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
  
          const data = await response.json(); 
          lcIds = [];
          lcIds = data.map(item => item.lc_id);
          lcIds.sort();
          // console.log('Fetched LC IDs:', lcIds);
          document.getElementById("BottomNav_TotalResult").innerText = lcIds.length;
          currentRecordIndex = 0;
          // document.getElementById("BottomNav_CurrentResult").innerText = currentRecordId;
          document.getElementById("BottomNav_CurrentResult").innerText = 1;
          displayHomepageLC(lcIds[currentRecordIndex]);
  
  
  
  
  
        } catch (error) {
          console.error('Failed to fetch LC IDs:', error);
        }
      
      } else {
        console.log('Search Any');

        let querrycol = Search_Row_NameselectedIndexselectedValue;
        if (querrycol == "Homepage_ID") {
          querry = reverseConvertLCID(querry);
        }
        const apiUrl = `${config.HOST}/HomepageSearch/${querrycol}/${querry}`;


        try {
          const response = await fetch(apiUrl); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
  
          const data = await response.json(); 
          lcIds = [];
          lcIds = data.map(item => item.lc_id);
          lcIds.sort();
          console.log('Fetched LC IDs:', lcIds);
          document.getElementById("BottomNav_TotalResult").innerText = lcIds.length;
          currentRecordIndex = 0;
          // document.getElementById("BottomNav_CurrentResult").innerText = currentRecordId;
          document.getElementById("BottomNav_CurrentResult").innerText = 1;
          displayHomepageLC(lcIds[currentRecordIndex]);
  
  
  
  
  
        } catch (error) {
          console.error('Failed to fetch LC IDs:', error);
        }
      }
     


      




      document.getElementById("Homepage_SearchModal").classList.remove("show");
      document.getElementById("Homepage_SearchModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");


  });

  }


  //! Search Any
  let Search_Inputfield = document.getElementById("Search_Inputfield");
{

  // Input Field
  let SearchAnyInputField = document.querySelectorAll('.SearchAnyInputField');
  SearchAnyInputField.forEach(label => {
    label.addEventListener('click', function(event) {
      const selectedRow = label.value.trim();
      Search_Inputfield.value = selectedRow;


      let optionToSelect;

      if (event.target.tagName === 'INPUT') {
        console.log('Clicked input ID:', event.target);
        
        if(event.target.id == "Homepage_LID") {
          optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_LID"]');
        }

        if(event.target.id == "Homepage_ID") {
          optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_ID"]');     
        }


        if(event.target.id == "Homepage_AdvisingBankRef") {
          optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_AdvisingBankRef"]');
        }


        if(event.target.id == "Homepage_IssuingBankRef") {
          optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_IssuingBankRef"]');
        }


      }


      if (optionToSelect) {
        optionToSelect.selected = true;
      }

     

    });
  });

  // Select Field
  const selectInput = document.querySelectorAll('.SearchAnySelectField');
  selectInput.forEach(label => {
    label.addEventListener('click', function(event) {
      const selectedOption = label.options[label.selectedIndex];
      console.log('value:', selectedOption);
      Search_Inputfield.value = selectedOption.text;


      let optionToSelect;      
      if(event.target.id == "Homepage_Preparer") {
        optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_Preparer"]');
      }


      if(event.target.id == "Homepage_PkPreparer") {
        optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_PkPreparer"]');
      }


      if(event.target.id == "Homepage_PcPrep") {
        optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_PcPrep"]');
      }


      if(event.target.id == "Homepage_PcChker") {
        optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_PcChker"]');
      }

      if(event.target.id == "Homepage_BillTo") {
        optionToSelect = Search_Row_Name.querySelector('option[value="Homepage_BillTo"]');
      }


      if (optionToSelect) {
        optionToSelect.selected = true;
      }

     

    });
  });




  document.getElementById('Homepage_Search_Close_Button').addEventListener('click', function() {
    document.getElementById('Search_Inputfield').value = '';
    document.getElementById('Search_Row_Name').value = 'default';
});

}





}
