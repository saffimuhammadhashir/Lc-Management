export default function UpdateLcTableFunction(config, reverseConvertLCID) {
    // console.log("Main Module - UpdateLcTableFunction  😊");

    let elements = document.getElementsByClassName("UpdateLcField");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("change", handleInputChange(i));
    }

    function handleInputChange(index) {
        return async function () {
            console.log('Sherry ', index);

            // !Homepage
            // 1st
            let Homepage_LID = parseInt(document.getElementById("Homepage_LID").value);

            let Homepage_ID = parseInt(document.getElementById("Homepage_ID").value);
            let id = reverseConvertLCID(Homepage_ID);
            console.log('reverseConvertLCID: ', reverseConvertLCID(Homepage_ID));


            // Preparer Select
            let Homepage_Preparer = document.getElementById("Homepage_Preparer");
            let Homepage_PreparerOption = Homepage_Preparer.options[Homepage_Preparer.selectedIndex];
            let Homepage_PreparerValue = Homepage_PreparerOption.value;
            let Homepage_PkPreparer = document.getElementById("Homepage_PkPreparer");
            let Homepage_PkPreparerOption = Homepage_PkPreparer.options[Homepage_PkPreparer.selectedIndex];
            let Homepage_PkPreparerValue = Homepage_PkPreparerOption.value;
            let Homepage_PcPrep = document.getElementById("Homepage_PcPrep");
            let Homepage_PcPrepOption = Homepage_PcPrep.options[Homepage_PcPrep.selectedIndex];
            let Homepage_PcPrepValue = Homepage_PcPrepOption.value;
            let Homepage_PcChker = document.getElementById("Homepage_PcChker");
            let Homepage_PcChkerOption = Homepage_PcChker.options[Homepage_PcChker.selectedIndex];
            let Homepage_PcChkerValue = Homepage_PcChkerOption.value;
            let Homepage_BillTo = document.getElementById("Homepage_BillTo");
            let Homepage_BillToOption = Homepage_BillTo.options[Homepage_BillTo.selectedIndex];
            let Homepage_BillToValue = Homepage_BillToOption.value;
            let storecustomer_CUSTOMER_ID = parseInt(document.getElementById("storecustomer_CUSTOMER_ID").value);
            let Homepage_Status = document.getElementById("Homepage_Status").value;
            let HomePage_SpecialInstructions = document.getElementById("HomePage_SpecialInstructions").value;

            // 2nd
            let Homepage_LcAmount = parseFloat(document.getElementById("Homepage_LcAmount").value);
            let HomePage_Tolerance = document.getElementById("HomePage_Tolerance").value;
            let HomePage_PreviousLcDraws = document.getElementById("HomePage_PreviousLcDraws").value;
            let Homepage_TimeDraft = document.getElementById("Homepage_TimeDraft");
            let Homepage_TimeDraftOption = Homepage_TimeDraft.options[Homepage_TimeDraft.selectedIndex];
            let Homepage_TimeDraftValue = Homepage_TimeDraftOption.value;
            let Homepage_NumberOfDays = document.getElementById("Homepage_NumberOfDays");
            let Homepage_NumberOfDaysOption = Homepage_NumberOfDays.options[Homepage_NumberOfDays.selectedIndex];
            let Homepage_NumberOfDaysValue = Homepage_NumberOfDaysOption.value;
            let Homepage_LcCountry = document.getElementById("Homepage_LcCountry");
            let Homepage_LcCountryOption = Homepage_LcCountry.options[Homepage_LcCountry.selectedIndex];
            let Homepage_LcCountryValue = Homepage_LcCountryOption.value;
            let Homepage_ReferenceNumber = document.getElementById("Homepage_ReferenceNumber").value;
            let Homepage_Balance = document.getElementById("Homepage_Balance").value;
            let Homepage_DP = document.getElementById("Homepage_DP").value;
            let Homepage_IP = document.getElementById("Homepage_IP").value;

            // 3rd
            let Homepage_PreviousLcDrawsRunning = document.getElementById("Homepage_PreviousLcDrawsRunning").value;
            let Homepage_ReturningBalance = document.getElementById("Homepage_ReturningBalance").value;
            let Homepage_Currency = document.getElementById("Homepage_Currency");
            let Homepage_CurrencyOption = Homepage_Currency.options[Homepage_Currency.selectedIndex];
            let Homepage_CurrencyValue = Homepage_CurrencyOption.value;
            let Homepage_FN = document.getElementById("Homepage_FN").value;
            let Homepage_Charges = document.getElementById("Homepage_Charges").value;
            let Homepage_AddCharges = document.getElementById("Homepage_AddCharges").value;
            let Homepage_FeesDue = document.getElementById("Homepage_FeesDue").value;
            let Homepage_CargoInsCost = document.getElementById("Homepage_CargoInsCost").value;
            let Homepage_CargoInsSellPrice = document.getElementById("Homepage_CargoInsSellPrice").value;
            let Homepage_RhdcInvoiceForCustomer = document.getElementById("Homepage_RhdcInvoiceForCustomer").value;

            // 4th
            let Homepage_RhdcInvoiceForFnBanks = document.getElementById("Homepage_RhdcInvoiceForFnBanks").value;
            let Homepage_AdvisingBank = document.getElementById("Homepage_AdvisingBank");
            let Homepage_AdvisingBankOption = Homepage_AdvisingBank.options[Homepage_AdvisingBank.selectedIndex];
            let Homepage_AdvisingBankValue = parseInt(Homepage_AdvisingBankOption.value);
            let Homepage_AdvisingBankRef = document.getElementById("Homepage_AdvisingBankRef").value;
            let Homepage_IssuingBank = document.getElementById("Homepage_IssuingBank");
            let Homepage_IssuingBankOption = Homepage_IssuingBank.options[Homepage_IssuingBank.selectedIndex];
            let Homepage_IssuingBankkValue = parseInt(Homepage_IssuingBankOption.value);
            let Homepage_IssuingBankRef = document.getElementById("Homepage_IssuingBankRef").value;
            let Homepage_NegotiatingBank = parseInt(document.getElementById("Homepage_NegotiatingBank").value);
            let Homepage_CommissionType = document.getElementById("Homepage_CommissionType");
            let Homepage_CommissionTypeOption = Homepage_CommissionType.options[Homepage_CommissionType.selectedIndex];
            let Homepage_CommissionTypeValue = Homepage_CommissionTypeOption.value;
            let Homepage_TrancheCount = document.getElementById("Homepage_TrancheCount").value;
            let Homepage_Acceptan = document.getElementById("Homepage_Acceptan").value;
            let Homepage_DocPrep = document.getElementById("Homepage_DocPrep").value;

            // 5th
            let Homepage_Confirm = document.getElementById("Homepage_Confirm").value;
            let Homepage_Other = document.getElementById("Homepage_Other").value;
            let Homepage_Discount = document.getElementById("Homepage_Discount").value;
            let Homepage_ForwarderOrShipper_RadioButton = document.querySelectorAll('input[name="Homepage_ForwarderOrShipper_RadioButton"]:checked');
            let Homepage_ForwarderOrShipper_RadioButtonselectedValue = Homepage_ForwarderOrShipper_RadioButton.length > 0 ? Homepage_ForwarderOrShipper_RadioButton[0].value : null;
            let HomePage_pending_inf_tracing_status_in_pc_or_void = document.getElementById("HomePage_pending_inf_tracing_status_in_pc_or_void").value;
            let Homepage_NetPaid = document.getElementById("Homepage_NetPaid").value;
            let Homepage_BankCharges = document.getElementById("Homepage_BankCharges").value;
            let Homepage_NegBankReference = document.getElementById("Homepage_NegBankReference").value;
            // !Lc Information Page
            let lcInformationPageApplicantName = document.getElementById("lcInformationPageApplicantName").value;
            let lcInformationPageThirdPartyShipperName = document.getElementById("lcInformationPageThirdPartyShipperName").value;

            // 6th
            let lcInformationPageApplicantAddress = document.getElementById("lcInformationPageApplicantAddress").value;
            let lcInformationPageThirdPartyShipperAddress = document.getElementById("lcInformationPageThirdPartyShipperAddress").value;
            let lcInformationPageApplicantFax = document.getElementById("lcInformationPageApplicantFax").value;
            let lcInformationPageLcDrawee = document.getElementById("lcInformationPageLcDrawee").value;
            let lcInformationPageLoadOnBoard = document.getElementById("lcInformationPageLoadOnBoard").value;
            let lcInformationPageForTransportTo = document.getElementById("lcInformationPageForTransportTo").value;
            let lcInformationPageTenorOfDraft = document.getElementById("lcInformationPageTenorOfDraft");
            let lcInformationPageTenorOfDraftOption = lcInformationPageTenorOfDraft.options[lcInformationPageTenorOfDraft.selectedIndex];
            let lcInformationPageTenorOfDraftValue = lcInformationPageTenorOfDraftOption.value;
            let lcInformationPageDrawnUnderStatement = document.getElementById("lcInformationPageDrawnUnderStatement").value;
            let lcInformationPageLargeMerchadiseDescriptionInvoice = document.getElementById("lcInformationPageLargeMerchadiseDescriptionInvoice").value;
            let lcInformationPageSalesTerms = document.getElementById("lcInformationPageSalesTerms");
            let lcInformationPageSalesTermsOption = lcInformationPageSalesTerms.options[lcInformationPageSalesTerms.selectedIndex];
            let lcInformationPageSalesTermsValue = lcInformationPageSalesTermsOption.value;


            // 7th
            let lcInformationPageLocationOfSalesTerms = document.getElementById("lcInformationPageLocationOfSalesTerms").value;
            let lcInformationPageConsignToParty = document.getElementById("lcInformationPageConsignToParty").value;
            let lcInformationPageFreight = document.getElementById("lcInformationPageFreight");
            let lcInformationPageFreightOption = lcInformationPageFreight.options[lcInformationPageFreight.selectedIndex];
            let lcInformationPageFreightValue = lcInformationPageFreightOption.value;
            let lcInformationPageNotifyParty = document.getElementById("lcInformationPageNotifyParty").value;
            let lcInformationPageShortMerchadiseDescriptionForBL = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
            let lcInformationPageShortShortMerchadiseDescriptionForCO = document.getElementById("lcInformationPageShortShortMerchadiseDescriptionForCO").value;
            let LC_Information_Global_Certification = document.getElementById("LC_Information_Global_Certification").value;
            let lcInformationPageLimitedCertifications = document.getElementById("lcInformationPageLimitedCertifications").value;
            let lcInformationPageAWDorBLMerchadiseDescription = document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value;
            let lcInformationPageInsurranceMerchadiseDescription = document.getElementById("lcInformationPageInsurranceMerchadiseDescription").value;


            // 8th
            let lcInformationPageShippingAdviceMerchadiseDescription = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
            // !Lc Information Page
            let TransportInformation_ValueForCarriage = document.getElementById("TransportInformation_ValueForCarriage");
            let TransportInformation_ValueForCarriageValue = document.getElementById("TransportInformation_ValueForCarriage").value;
            let TransportInformation_ValueForCustomers = document.getElementById("TransportInformation_ValueForCustomers");
            let TransportInformation_ValueForCustomersValue = document.getElementById("TransportInformation_ValueForCustomers").value;
            let TransportInformation_GrossWeight = document.getElementById("TransportInformation_GrossWeight").value;
            let TransportInformation_Measurements = document.getElementById("TransportInformation_Measurements");
            let TransportInformation_MeasurementsOption = TransportInformation_Measurements.options[TransportInformation_Measurements.selectedIndex];
            let TransportInformation_MeasurementsValue = TransportInformation_MeasurementsOption.value;
            let TransportInformation_NetWeight = document.getElementById("TransportInformation_NetWeight").value;
            let TransportInformation_ChargableWeight = document.getElementById("TransportInformation_ChargableWeight").value;
            let TransportInformation_WeightInLBS = document.getElementById("TransportInformation_WeightInLBS").value;
            let TransportInformation_OtherChargesDueAgent = document.getElementById("TransportInformation_OtherChargesDueAgent").value;
            let TransportInformation_TlForwarderName = document.getElementById("TransportInformation_TlForwarderName").value;



            // 9th
            let TransportInformation_ForwarderAddress = document.getElementById("TransportInformation_ForwarderAddress").value;
            let TransportInformation_PartialOrCompShippment = document.getElementById("TransportInformation_PartialOrCompShippment");
            let TransportInformation_PartialOrCompShippmentOption = TransportInformation_PartialOrCompShippment.options[TransportInformation_PartialOrCompShippment.selectedIndex];
            let TransportInformation_PartialOrCompShippmentValue = TransportInformation_PartialOrCompShippmentOption.value;
            let TransportInformation_CarrierName = document.getElementById("TransportInformation_CarrierName").value;
            let TransportInformation_VesselName = document.getElementById("TransportInformation_VesselName").value;
            let TransportInformation_PlaceOfDeliveryBy = document.getElementById("TransportInformation_PlaceOfDeliveryBy").value;
            let TransportInformation_ForTranshipmentTo = document.getElementById("TransportInformation_ForTranshipmentTo").value;
            let TransportInformation_TypeOfMove = document.getElementById("TransportInformation_TypeOfMove").value;
            let TransportInformation_PlaceOfReceiptBy = document.getElementById("TransportInformation_PlaceOfReceiptBy").value;
            let TransportInformation_OtherChgsDueCarrier = document.getElementById("TransportInformation_OtherChgsDueCarrier").value;
            let TransportInformation_FreightCharge = document.getElementById("TransportInformation_FreightCharge").value;


            // 10th
            let TransportInformation_InsuranceChg = document.getElementById("TransportInformation_InsuranceChg").value;
            let TransportInformation_InsurancePercentage = document.getElementById("TransportInformation_InsurancePercentage");
            let TransportInformation_InsurancePercentageOption = TransportInformation_InsurancePercentage.options[TransportInformation_InsurancePercentage.selectedIndex];
            let TransportInformation_InsurancePercentageValue = TransportInformation_InsurancePercentageOption.value;
            let TransportInformation_InsuranceAmt = document.getElementById("TransportInformation_InsuranceAmt").value;
            let TransportInformation_InvoiceNumber = parseInt(document.getElementById("TransportInformation_InvoiceNumber").value);
            let TransportInformation_MAWBNumber = document.getElementById("TransportInformation_MAWBNumber").value;
            let TransportInformation_MOBLNumber = document.getElementById("TransportInformation_MOBLNumber").value;
            let TransportInformation_HAWBOrHOBLNumber = document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;
            let TransportInformation_MarksAndNumber = document.getElementById("TransportInformation_MarksAndNumber").value;
            let TransportInformation_NumberOfPieces = document.getElementById("TransportInformation_NumberOfPieces").value;
            let TransportInformation_Dimensions = document.getElementById("TransportInformation_Dimensions").value;


            // 11th
            let TransportInformation_PONumber = document.getElementById("TransportInformation_PONumber").value;
            let TransportInformation_CityStateOfOrigin = document.getElementById("TransportInformation_CityStateOfOrigin").value;
            let TransportInformation_CountryOfOrigin = document.getElementById("TransportInformation_CountryOfOrigin");
            let TransportInformation_CountryOfOriginOption = TransportInformation_CountryOfOrigin.options[TransportInformation_CountryOfOrigin.selectedIndex];
            let TransportInformation_CountryOfOriginValue = TransportInformation_CountryOfOriginOption.value;
            let TransportInformation_1stFlightNumber = document.getElementById("TransportInformation_1stFlightNumber").value;
            let TransportInformation_2ndFlightNumber = document.getElementById("TransportInformation_2ndFlightNumber").value;
            let TransportInformation_1stToCityCode = document.getElementById("TransportInformation_1stToCityCode");
            let TransportInformation_1stToCityCodeOption = TransportInformation_1stToCityCode.options[TransportInformation_1stToCityCode.selectedIndex];
            let TransportInformation_1stToCityCodeValue = TransportInformation_1stToCityCodeOption.value;
            let TransportInformation_1stToCityCodeValueInput = document.getElementById("TransportInformation_1stToCityCodeValue").value;
            let TransportInformation_InsuranceCompanyName = document.getElementById("TransportInformation_InsuranceCompanyName").value;
            let TransportInformation_InsuranceCompanyAddress = document.getElementById("TransportInformation_InsuranceCompanyAddress").value;
            let TransportInformation_InsuranceCompanyFax = document.getElementById("TransportInformation_InsuranceCompanyFax").value;


            // 12th
            let TransportInformation_OtherReceiptName = document.getElementById("TransportInformation_OtherReceiptName").value;
            let TransportInformation_OtherReceiptAddress = document.getElementById("TransportInformation_OtherReceiptAddress").value;
            let TransportInformation_OtherReceiptFax = document.getElementById("TransportInformation_OtherReceiptFax").value;
            let TransportInformation_OtherCourierName = document.getElementById("TransportInformation_OtherCourierName").value;
            let TransportInformation_OtherCourierAdd = document.getElementById("TransportInformation_OtherCourierAdd").value;
            let storecustomer_LC_LC_Type = document.getElementById("storecustomer_LC_LC_Type").value;
            let Homepage_AmtOfDraw = document.getElementById('Homepage_AmtOfDraw').value;
            let storecustomer_LC_MasterID = parseInt(document.getElementById('store_LC_MasterID').value);
            let lcInformationSecondApplicantHeader = document.getElementById('lcInformationSecondApplicantHeader').value;
            let lcInformationSecondApplicantName = document.getElementById('lcInformationSecondApplicantName').value;

            // 13th   
            let lcInformationSecondApplicantAddress = document.getElementById('lcInformationSecondApplicantAddress').value;
            let store_DateID = parseInt(document.getElementById('store_DateID').value);
            let store_CourierID = parseInt(document.getElementById('store_CourierID').value);


            //    extra
            let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
            let lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
            let lcInformationPageCurrencyValue = lcInformationPageCurrencyOption.value;







            const updatedData = {
                // 1st
                "lc_location_code": Homepage_LID,
                "lc_id": Homepage_ID,
                "lc_preparer": Homepage_PreparerValue,
                "lc_pk_preparer": Homepage_PkPreparerValue,
                "lc_pc_prep": Homepage_PcPrepValue,
                "lc_pc_chker": Homepage_PcChkerValue,
                "lc_bill_to": Homepage_BillToValue,
                "lc_customer_id": storecustomer_CUSTOMER_ID,
                "lc_status": Homepage_Status,
                "lc_special_instructions": HomePage_SpecialInstructions,

                // 2nd
                "lc_amount": Homepage_LcAmount,
                "lc_tolerance": HomePage_Tolerance,
                "lc_previous_lc_draws": HomePage_PreviousLcDraws,
                "lc_time_draft": Homepage_TimeDraftValue,
                "lc_number_of_days": Homepage_NumberOfDaysValue,
                "lc_country": Homepage_LcCountryValue,
                "lc_reference_number": Homepage_ReferenceNumber,
                "lc_balance": Homepage_Balance,
                "lc_dp": Homepage_DP,
                "lc_ip": Homepage_IP,

                // 3rd
                "lc_previous_lc_draws_running": Homepage_PreviousLcDrawsRunning,
                "lc_returning_balance": Homepage_ReturningBalance,
                "lc_currency": Homepage_CurrencyValue,
                "lc_fn": Homepage_FN,
                "lc_charges": Homepage_Charges,
                "lc_add_charges": Homepage_AddCharges,
                "lc_fees_due": Homepage_FeesDue,
                "lc_cargo_ins_cost": Homepage_CargoInsCost,
                "lc_cargo_ins_sell_price": Homepage_CargoInsSellPrice,
                "lc_rhdc_invoice_for_customer": Homepage_RhdcInvoiceForCustomer,


                // 4th
                "lc_rhdc_invoice_for_fn_banks": Homepage_RhdcInvoiceForFnBanks,
                "lc_advising_bank_id": Homepage_AdvisingBankValue,
                "lc_advising_bank_ref": Homepage_AdvisingBankRef,
                "lc_issuing_bank_id": Homepage_IssuingBankkValue,
                "lc_issuing_bank_ref": Homepage_IssuingBankRef,
                "lc_negotiating_bank_id": Homepage_NegotiatingBank,
                "lc_commission_type": Homepage_CommissionTypeValue,
                "lc_tranche_count": Homepage_TrancheCount,
                "lc_acceptan": Homepage_Acceptan,
                "lc_doc_prep": Homepage_DocPrep,


                // 5th
                "lc_confirm": Homepage_Confirm,
                "lc_other": Homepage_Other,
                "lc_discount": Homepage_Discount,
                "lc_phone_forwarder_shipper": Homepage_ForwarderOrShipper_RadioButtonselectedValue,
                "lc_pending_inf_tracing_status_in_pc_or_void": HomePage_pending_inf_tracing_status_in_pc_or_void,
                "lc_net_paid": Homepage_NetPaid,
                "lc_bank_charges": Homepage_BankCharges,
                "lc_negotiating_bank_reference": Homepage_NegBankReference,
                "lc_applicant_name": lcInformationPageApplicantName,
                "lc_third_party_shipper_name": lcInformationPageThirdPartyShipperName,


                // 6th
                "lc_applicant_address": lcInformationPageApplicantAddress,
                "lc_third_party_shipper_address": lcInformationPageThirdPartyShipperAddress,
                "lc_applicant_fax": lcInformationPageApplicantFax,
                "lc_drawee": lcInformationPageLcDrawee,
                "lc_load_on_board": lcInformationPageLoadOnBoard,
                "lc_for_transport_to": lcInformationPageForTransportTo,
                "lc_tenor_of_draft": lcInformationPageTenorOfDraftValue,
                "lc_drawn_under_statement_of_draft": lcInformationPageDrawnUnderStatement,
                "lc_large_merchandise_description_invoice": lcInformationPageLargeMerchadiseDescriptionInvoice,
                "lc_sales_terms": lcInformationPageSalesTermsValue,


                // 7th
                "lc_location_of_sales_terms": lcInformationPageLocationOfSalesTerms,
                "lc_consign_to_party": lcInformationPageConsignToParty,
                "lc_freight": lcInformationPageFreightValue,
                "lc_notify_party": lcInformationPageNotifyParty,
                "lc_short_merchandise_description_for_bl": lcInformationPageShortMerchadiseDescriptionForBL,
                "lc_short_merchandise_description_for_co": lcInformationPageShortShortMerchadiseDescriptionForCO,
                "lc_global_field": LC_Information_Global_Certification,
                "lc_limited_certifications": lcInformationPageLimitedCertifications,
                "lc_awd_or_bl_merchandise_description": lcInformationPageAWDorBLMerchadiseDescription,
                "lc_insurance_merchandise_description": lcInformationPageInsurranceMerchadiseDescription,

                // 8th
                "lc_shipping_advice_merchandise_description": lcInformationPageShippingAdviceMerchadiseDescription,
                "lc_value_for_carriage": TransportInformation_ValueForCarriageValue,
                "lc_value_for_customers": TransportInformation_ValueForCustomersValue,
                "lc_gross_weight": TransportInformation_GrossWeight,
                "lc_measurements": TransportInformation_MeasurementsValue,
                "lc_net_weight": TransportInformation_NetWeight,
                "lc_chargeable_weight": TransportInformation_ChargableWeight,
                "lc_weight_in_lbs": TransportInformation_WeightInLBS,
                "lc_other_charges_due_agent": TransportInformation_OtherChargesDueAgent,
                "lc_tl_forwarder_name": TransportInformation_TlForwarderName,

                // 9th
                "lc_forwarder_address": TransportInformation_ForwarderAddress,
                "lc_partial_or_comp_shipment": TransportInformation_PartialOrCompShippmentValue,
                "lc_carrier_name": TransportInformation_CarrierName,
                "lc_vessel_name": TransportInformation_VesselName,
                "lc_place_of_delivery_by": TransportInformation_PlaceOfDeliveryBy,
                "lc_for_transhipment_to": TransportInformation_ForTranshipmentTo,
                "lc_type_of_move": TransportInformation_TypeOfMove,
                "lc_place_of_receipt_by": TransportInformation_PlaceOfReceiptBy,
                "lc_other_chgs_due_carrier": TransportInformation_OtherChgsDueCarrier,
                "lc_freight_charge": TransportInformation_FreightCharge,

                // 10th
                "lc_insurance_chg": TransportInformation_InsuranceChg,
                "lc_insurance_percentage": TransportInformation_InsurancePercentageValue,
                "lc_insurance_amt": TransportInformation_InsuranceAmt,
                "lc_invoice_num": TransportInformation_InvoiceNumber,
                "lc_mawb_no": TransportInformation_MAWBNumber,
                "lc_mobl_no": TransportInformation_MOBLNumber,
                "lc_hawb_hobl_no": TransportInformation_HAWBOrHOBLNumber,
                "lc_marks_and_numbers": TransportInformation_MarksAndNumber,
                "lc_no_of_pieces": TransportInformation_NumberOfPieces,
                "lc_dimensions": TransportInformation_Dimensions,

                // 11th
                "lc_po_no": TransportInformation_PONumber,
                "lc_city_state_of_origin": TransportInformation_CityStateOfOrigin,
                "lc_country_of_origin": TransportInformation_CountryOfOriginValue,
                "lc_1st_flight_number": TransportInformation_1stFlightNumber,
                "lc_2nd_flight_number": TransportInformation_2ndFlightNumber,
                "lc_1st_to_city_code": TransportInformation_1stToCityCodeValue,
                "lc_1st_to_city_code_value": TransportInformation_1stToCityCodeValueInput,
                "lc_insurance_company_name": TransportInformation_InsuranceCompanyName,
                "lc_insurance_company_address": TransportInformation_InsuranceCompanyAddress,
                "lc_insurance_company_fax": TransportInformation_InsuranceCompanyFax,

                // 12th
                "lc_other_receipt_name": TransportInformation_OtherReceiptName,
                "lc_other_receipt_address": TransportInformation_OtherReceiptAddress,
                "lc_other_receipt_fax": TransportInformation_OtherReceiptFax,
                "lc_other_courier_name": TransportInformation_OtherCourierName,
                "lc_other_courier_add": TransportInformation_OtherCourierAdd,
                "lc_type": storecustomer_LC_LC_Type,
                "lc_amount_of_draw": Homepage_AmtOfDraw,
                "lc_master_id": storecustomer_LC_MasterID,
                "lc_secondapplicant_header": lcInformationSecondApplicantHeader,
                "lc_secondapplicant_name": lcInformationSecondApplicantName,


                // 13th
                "lc_secondapplicant_address": lcInformationSecondApplicantAddress,
                "lc_date_id": store_DateID,
                "lc_courier_id": store_CourierID,


                "lc_information_currency": lcInformationPageCurrencyValue

            };

            try {
                const response = await fetch(`${config.HOST}/update_lc_table/${id}`, {
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


    let lcInformationPageDrawnUnderStatement = document.getElementById("lcInformationPageDrawnUnderStatement");
    lcInformationPageDrawnUnderStatement.addEventListener("dblclick", function (event) {
        event.preventDefault();
        var numberOfSpaces = 5;
        var spaces = ' '.repeat(numberOfSpaces);
        lcInformationPageDrawnUnderStatement.value = "DRAWN UNDER " + spaces + document.getElementById("lcInformationPageIssuingBankName").value + spaces + "LC NUMBER: " + document.getElementById("lcInformationPageLcNumber").value;
        lcInformationPageDrawnUnderStatement.dispatchEvent(new Event("change"));

    });

    let lcInformationPageLocationOfSalesTerms = document.getElementById("lcInformationPageLocationOfSalesTerms");
    lcInformationPageLocationOfSalesTerms.addEventListener("dblclick", function (event) {
        event.preventDefault();
        lcInformationPageLocationOfSalesTerms.value = document.getElementById("lcInformationPageLoadOnBoard").value;
        lcInformationPageLocationOfSalesTerms.dispatchEvent(new Event("change"));

    });


    lcInformationPageLocationOfSalesTerms.addEventListener("click", function (event) {
        event.preventDefault();
        lcInformationPageLocationOfSalesTerms.value = document.getElementById("lcInformationPageForTransportTo").value;
        lcInformationPageLocationOfSalesTerms.dispatchEvent(new Event("change"));
    });


    let lcInformationPageConsignToParty = document.getElementById("lcInformationPageConsignToParty");
    lcInformationPageConsignToParty.addEventListener("dblclick", function (event) {
        event.preventDefault();
        var numberOfSpaces = 5;
        var spaces = ' '.repeat(numberOfSpaces);
        lcInformationPageConsignToParty.value = document.getElementById("lcInformationPageIssuingBankName").value + spaces + document.getElementById("lcInformationPageIssuingBankAddress").value;
        lcInformationPageConsignToParty.dispatchEvent(new Event("change"));

    });


    let lcInformationPageNotifyParty = document.getElementById("lcInformationPageNotifyParty");
    lcInformationPageNotifyParty.addEventListener("dblclick", function (event) {
        event.preventDefault();
        var numberOfSpaces = 5;
        var spaces = ' '.repeat(numberOfSpaces);
        lcInformationPageNotifyParty.value = document.getElementById("lcInformationPageApplicantName").value + spaces + document.getElementById("lcInformationPageApplicantAddress").value;
        lcInformationPageNotifyParty.dispatchEvent(new Event("change"));

    });







    let lcInformationPageShortMerchadiseDescriptionForBL = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL");
    lcInformationPageShortMerchadiseDescriptionForBL.addEventListener("dblclick", function (event) {
        event.preventDefault();

        lcInformationPageShortMerchadiseDescriptionForBL.value = document.getElementById("lcInformationPageLargeMerchadiseDescriptionInvoice").value;
        lcInformationPageShortMerchadiseDescriptionForBL.dispatchEvent(new Event("change"));

    });

    let lcInformationPageShortShortMerchadiseDescriptionForCO = document.getElementById("lcInformationPageShortShortMerchadiseDescriptionForCO");
    lcInformationPageShortShortMerchadiseDescriptionForCO.addEventListener("dblclick", function (event) {
        event.preventDefault();

        lcInformationPageShortShortMerchadiseDescriptionForCO.value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
        lcInformationPageShortShortMerchadiseDescriptionForCO.dispatchEvent(new Event("change"));

    });

    let lcInformationPageLimitedCertifications = document.getElementById("lcInformationPageLimitedCertifications");
    lcInformationPageLimitedCertifications.addEventListener("dblclick", function (event) {
        event.preventDefault();

        lcInformationPageLimitedCertifications.value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
        lcInformationPageLimitedCertifications.dispatchEvent(new Event("change"));

    });

    let lcInformationPageAWDorBLMerchadiseDescription = document.getElementById("lcInformationPageAWDorBLMerchadiseDescription");
    lcInformationPageAWDorBLMerchadiseDescription.addEventListener("dblclick", function (event) {
        event.preventDefault();

        lcInformationPageAWDorBLMerchadiseDescription.value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
        lcInformationPageAWDorBLMerchadiseDescription.dispatchEvent(new Event("change"));

    });

    let lcInformationPageInsurranceMerchadiseDescription = document.getElementById("lcInformationPageInsurranceMerchadiseDescription");
    lcInformationPageInsurranceMerchadiseDescription.addEventListener("dblclick", function (event) {
        event.preventDefault();

        lcInformationPageInsurranceMerchadiseDescription.value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
        lcInformationPageInsurranceMerchadiseDescription.dispatchEvent(new Event("change"));

    });

    let lcInformationPageShippingAdviceMerchadiseDescription = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription");
    lcInformationPageShippingAdviceMerchadiseDescription.addEventListener("dblclick", function (event) {
        event.preventDefault();

        lcInformationPageShippingAdviceMerchadiseDescription.value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
        lcInformationPageShippingAdviceMerchadiseDescription.dispatchEvent(new Event("change"));

    });





    //  SAVE BUTTON MANUALLY
    {
        let Homepage_Save_Button = document.getElementById("Homepage_Save_Button");
        Homepage_Save_Button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Information Saved")

        });


        let Homepage_Save_Button_edit = document.getElementById("postchanges");
        Homepage_Save_Button_edit.addEventListener("click", function (event) {
            event.preventDefault();


        });
        let lcInformationSaveButton = document.getElementById("lcInformationSaveButton");
        lcInformationSaveButton.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Information Saved")

        });


        let TransportInformation_SaveButton = document.getElementById("TransportInformation_SaveButton");
        TransportInformation_SaveButton.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Information Saved")

        });


        let PrintPage_Save = document.getElementById("PrintPage_Save");
        PrintPage_Save.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Information Saved")

        });

    }

}




