// Propogation Here for dialog box

// console.log("Propogation  of printing page - preprint");
var DCSText = "THESE COMMODITIES, TECHNOLOGY OR SOFTWARE WERE EXPORTED FROM THE UNITED STATES IN ACCORDANCE WITH THE EXPORT ADMINISTRATION REGULATIONS. DIVERSION CONTRARY TO U. S. LAW IS PROHIBITED.";

// Reusable Functions
import { convertCurrencyToWords } from "../Modules/reusableFunctions.js";

export default function prePrintFunction(config) {
  // console.log("Main Module - Pre Print Function");

  //! Airway Bill
  const AWB_HomeTitle = document.getElementById("AWB_HomeTitle");

  let isDialogPopulated_AWB = false;

  AWB_HomeTitle.addEventListener("dblclick", function (event) {
    event.preventDefault();

    console.log("Populate Airway Bill Here");

    var focusArea = document.getElementById("AWB_BeneNameAndAddress");
    focusArea.focus();
    focusArea.scrollIntoView();

    // ! Check Box Check
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("AWB_DCSText").textContent = DCSText;
    } else {
      document.getElementById("AWB_DCSText").textContent = "";
    }

    if (!isDialogPopulated_AWB) {
      document.getElementById("AWB_Description").value = document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value;
      document.getElementById("AWB_NotifyParty").value = document.getElementById("lcInformationPageNotifyParty").value;

      isDialogPopulated_AWB = true;
    }

    function onDescriptionChange() {
      document.getElementById("AWB_Description").value = document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value;
    }
    document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").addEventListener("input", onDescriptionChange);

    // ! End Check Boxes

    document.getElementById("AWB_MAWB").value = document.getElementById("TransportInformation_MAWBNumber").value;

    document.getElementById("AWB_HAWB").value = document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

    let AWBBeneAddress = document.getElementById("LCInformation_BENEFICIARYAddressStore").value;
    let AWBBeneComponents = AWBBeneAddress.split(", ");
    let AWBBeneFormattedAddress = AWBBeneComponents.join(",\n");
    document.getElementById("AWB_BeneNameAndAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + AWBBeneFormattedAddress;


    document.getElementById("AWB_ConsigneeNameAddress").value = document.getElementById("lcInformationPageConsignToParty").value;

    document.getElementById("AWB_AgentName").value = document.getElementById("TransportInformation_TlForwarderName").value + "\n" + document.getElementById("TransportInformation_ForwarderAddress").value;

    document.getElementById("AWB_To").value = document.getElementById("TransportInformation_1stToCityCodeValue").value;


    document.getElementById("AWB_AirportOfDeparture").value = document.getElementById("lcInformationPageLoadOnBoard").value;

    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("AWB_EndText2").value = formattedDate + " " + document.getElementById("lcInformationPageLoadOnBoard").value;

    let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
    let lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
    let lcInformationPageCurrencyValue = lcInformationPageCurrencyOption.value;

    const requestUrlCurrency = `${config.HOST}/getCurrency/${lcInformationPageCurrencyValue}`;
    fetch(requestUrlCurrency, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((currencyData) => {

        let currency = currencyData;

        document.getElementById("AWB_Currency").value = currency.currency_code;
      })
      .catch((error) => {
        console.log("Error:", error);
      });




    let TransportInformation_ValueForCarriageText = document.getElementById("TransportInformation_ValueForCarriage").value;
    // let TransportInformation_ValueForCarriageOption = TransportInformation_ValueForCarriage.options[TransportInformation_ValueForCarriage.selectedIndex];
    // let TransportInformation_ValueForCarriageText = TransportInformation_ValueForCarriageOption.text;


    let TransportInformation_ValueForCustomersText = document.getElementById("TransportInformation_ValueForCustomers").value;
    // let TransportInformation_ValueForCustomersOption = TransportInformation_ValueForCustomers.options[TransportInformation_ValueForCustomers.selectedIndex];
    // let TransportInformation_ValueForCustomersText = TransportInformation_ValueForCustomersOption.text;

    document.getElementById("AWB_ValueOfCarriage").value = TransportInformation_ValueForCarriageText;
    document.getElementById("AWB_ValueOfCustom").value = TransportInformation_ValueForCustomersText;


    document.getElementById("AWB_AirportOfDestination").value = document.getElementById("lcInformationPageForTransportTo").value;


    document.getElementById("AWB_FlightNumber").value = document.getElementById("TransportInformation_1stFlightNumber").value;
    document.getElementById("AWB_FlightNumber1").value = document.getElementById("TransportInformation_1stFlightNumber").value;
    document.getElementById("AWB_FlightNumber2").value = document.getElementById("TransportInformation_2ndFlightNumber").value;


    let TransportInformation_1stFlightDate = document.getElementById("TransportInformation_1stFlightDate").value;
    let TransportInformation_1stFlightDateParts = TransportInformation_1stFlightDate.split("-");
    let TransportInformation_1stFlightDatePartsformattedDate = `${TransportInformation_1stFlightDateParts[1]}/${TransportInformation_1stFlightDateParts[2]}/${TransportInformation_1stFlightDateParts[0]}`;


    let TransportInformation_2ndFlightDate = document.getElementById("TransportInformation_2ndFlightDate").value;
    let TransportInformation_2ndFlightDateParts = TransportInformation_2ndFlightDate.split("-");
    let TransportInformation_2ndFlightDatePartsformattedDate = `${TransportInformation_2ndFlightDateParts[1]}/${TransportInformation_2ndFlightDateParts[2]}/${TransportInformation_2ndFlightDateParts[0]}`;


    document.getElementById("AWB_FlightDate1").value = TransportInformation_1stFlightDatePartsformattedDate;
    document.getElementById("AWB_FlightDate2").value = TransportInformation_2ndFlightDatePartsformattedDate;
    document.getElementById('certificateOfOriginModalForTransshipmentTo').value =document.getElementById('TransportInformation_ForTranshipmentTo').value;  

    let TransportInformation_InsurancePercentage = document.getElementById("TransportInformation_InsurancePercentage");
    let TransportInformation_InsurancePercentageOption = TransportInformation_InsurancePercentage.options[TransportInformation_InsurancePercentage.selectedIndex];
    let TransportInformation_InsurancePercentageText = TransportInformation_InsurancePercentageOption.text;


    let Homepage_AmtOfDraw = document.getElementById('Homepage_AmtOfDraw');
    let Homepage_AmtOfDrawValue = Homepage_AmtOfDraw.value.trim();

    if (Homepage_AmtOfDrawValue !== '' && TransportInformation_InsurancePercentageText !== '0') {
      let value = (TransportInformation_InsurancePercentageText / 100) * Homepage_AmtOfDrawValue;
      let amountWithCommas = parseFloat(value).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      document.getElementById("AWB_InsuranceAmount").value =amountWithCommas;


    } else {
      let TransportInformation_InsuranceAmt = document.getElementById("TransportInformation_InsuranceAmt").value;
      let amountWithCommas = parseFloat(TransportInformation_InsuranceAmt).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      document.getElementById("AWB_InsuranceAmount").value =amountWithCommas;
    }
  // document.getElementById('AWB_InsuranceAmount').value = currency.currency_code + "  " + currency.currency_symbol + "  " +document.getElementById('TransportInformation_InsuranceAmt').value;






    document.getElementById("AWB_NumberOfPieces").value = document.getElementById("TransportInformation_NumberOfPieces").value;
    document.getElementById("AWB_GrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value +'\n'+ document.getElementById("TransportInformation_Measurements").value;
    document.getElementById("AWB_ChargeableWeight").value = document.getElementById("TransportInformation_ChargableWeight").value + document.getElementById("TransportInformation_Measurements").value;

    document.getElementById("AWB_RateCharge1").value = document.getElementById("TransportInformation_FreightCharge").value;
    document.getElementById("AWB_RateCharge").value = document.getElementById("TransportInformation_FreightCharge").value;
    document.getElementById("AWB_Total").value = document.getElementById("TransportInformation_FreightCharge").value;

    // document.getElementById('BL_ExportReference').value=document.getElementById('TransportInformation_TlForwarderName').value+'/n'+document.getElementById('TransportInformation_ForwarderAddress').value;


    let lcInformationPageFreight = document.getElementById("lcInformationPageFreight");
    let selectedElement = lcInformationPageFreight.options[lcInformationPageFreight.selectedIndex];
    let selectedOption = selectedElement.text;


    if (selectedOption === 'PREPAID' || selectedOption === 'PAID' || selectedOption === 'TO BE PREPAID') {
      console.log('Console prepaid');
      document.getElementById("AWB_Prepaid").value = document.getElementById("TransportInformation_FreightCharge").value;
      document.getElementById("AWB_Collect").value = "";
      document.getElementById("AWB_TotalPrepaid").value = document.getElementById("TransportInformation_FreightCharge").value;
      document.getElementById("AWB_TotalCollect").value = "";



    } else if (selectedOption === 'TO PAY' || selectedOption === 'PAYABLE AT DESTINATION' || selectedOption === 'TO BE PAID' || selectedOption === 'TO COLLECT' || selectedOption === 'COLLECT') {
      document.getElementById("AWB_Prepaid").value = "";
      document.getElementById("AWB_Collect").value = document.getElementById("TransportInformation_FreightCharge").value;
      document.getElementById("AWB_TotalPrepaid").value = "";
      document.getElementById("AWB_TotalCollect").value = document.getElementById("TransportInformation_FreightCharge").value;
    } else {
      console.log('Error AWB Freight');
    }




    document.getElementById("AWB_EndAgentName").value = document.getElementById("TransportInformation_TlForwarderName").value + " as agent for " + document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("AWB_EndText").value = document.getElementById("TransportInformation_TlForwarderName").value + " AS AUTHORIZED AGENT FOR THE CARRIER: " + document.getElementById("TransportInformation_CarrierName").value;










    // IATA CODE AIRLINE
    const AWB_firstThreeDigits = document.getElementById("TransportInformation_MAWBNumber").value.substring(0, 3);
    fetch(`${config.HOST}/getIataCode/${AWB_firstThreeDigits}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.getElementById("AWB_RoutingAndDestination").value = data.airline_name;
      })
      .catch((error) => {
        if (error.message === "Network response was not ok") {
          document.getElementById("AWB_RoutingAndDestination").value = "not found";
        } else {
          console.error("Error fetching data:", error);
        }
      });

    document.getElementById("AWB_Freight").value = document.getElementById("lcInformationPageFreight").options[document.getElementById("lcInformationPageFreight").selectedIndex].innerText;

    document.getElementById("AWB_FlightNumber").value = document.getElementById("TransportInformation_1stFlightNumber").value;



    // LC check
    var AWB_LCNumberCheck = document.getElementById("AWB_LCNumberCheck");
    var AWB_LcNumberContainer = document.getElementById("AWB_LcNumberContainer");
    if (AWB_LCNumberCheck.checked) {
      // AWB_LcNumberContainer.style.display = "flex";
      AWB_LcNumberContainer.classList.remove("hideThisItem");
      AWB_LcNumber;
      document.getElementById("AWB_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
    } else {
      // AWB_LcNumberContainer.style.display = "none";
      AWB_LcNumberContainer.classList.add("hideThisItem");
    }

    // Origional 3

    var radios = document.querySelectorAll('input[type=radio][name="AWBLast"]');
    var customOption = document.getElementById("AWBLastFreeTextOriginal");
    var selectedOptionLabel = document.getElementById("AWBLast_labelForOrigional");

    function updateSelectedOption() {
      console.log("updateSelectedOption");

      var selectedOption = Array.from(radios).find((radio) => radio.checked);
      var customText = customOption.value.trim();

      if (customText !== "") {
        selectedOptionLabel.textContent = customText;
      } else if (selectedOption) {
        selectedOptionLabel.textContent = selectedOption.value;
      } else {
        selectedOptionLabel.textContent = "No option selected";
      }
    }

    updateSelectedOption();

    radios.forEach((radio) => {
      radio.addEventListener("change", updateSelectedOption);
    });

    customOption.addEventListener("input", updateSelectedOption);

    // Global Check
    var AWB_GlobalCheck = document.getElementById("AWB_GlobalCheck");
    var AWB_GlobalCertification = document.getElementById("AWB_GlobalCertification");

    if (AWB_GlobalCheck.checked) {
      AWB_GlobalCertification.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      AWB_GlobalCertification.value = "";
    }

    // Limited Certification
    let lcInformationPageLimitedCertifications_AWBcheckbox = document.getElementById("lcInformationPageLimitedCertifications_AWBcheckbox");
    let AWB_LimitedCertifications = document.getElementById("AWB_LimitedCertifications");

    if (lcInformationPageLimitedCertifications_AWBcheckbox.checked) {
      console.log(document.getElementById("lcInformationPageLimitedCertifications"));
      let temp = document.getElementById("lcInformationPageLimitedCertifications").value;
      console.log(temp);
      document.getElementById("AWB_LimitedCertifications").value = temp;
    } else {
      AWB_LimitedCertifications.value = "";
    }
  });

  // ! Bill Of Lading
  const BL_HomeTitle = document.getElementById("BL_HomeTitle");
  let isDialogPopulated_BL = false;

  BL_HomeTitle.addEventListener("dblclick", function (event) {
    event.preventDefault();

    console.log("Populate Bill of Lading Here");

    var focusArea = document.getElementById("BL_BeneNameAndAddress");
    focusArea.focus();
    focusArea.scrollIntoView();

    // Check Box Check
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("BL_DCSText").value = DCSText;
    } else {
      document.getElementById("BL_DCSText").value = "";
    }

    if (!isDialogPopulated_BL) {
      document.getElementById("BL_Description").value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;

      isDialogPopulated_BL = true;
    }

    function onDescriptionChange() {
      document.getElementById("BL_Description").value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
    }
    document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").addEventListener("input", onDescriptionChange);

    // End Check Boxes

    let BL_BeneAddress = document.getElementById("LCInformation_BENEFICIARYAddressStore").value;
    let BL_BeneComponents = BL_BeneAddress.split(", ");
    let BL_BeneFormattedAddress = BL_BeneComponents.join(",\n");
    document.getElementById("BL_BeneNameAndAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + BL_BeneFormattedAddress;

    document.getElementById("BL_NotifyParty").value = document.getElementById("lcInformationPageNotifyParty").value;

    document.getElementById("BL_ConsigneeNameAddress").value = document.getElementById("lcInformationPageConsignToParty").value;

    // LC check
    var BL_LCNumberCheck = document.getElementById("BL_LCNumberCheck");
    var BL_LcNumberContainer = document.getElementById("BL_LcNumberContainer");

    if (BL_LCNumberCheck.checked) {
      BL_LcNumberContainer.style.display = "flex";
      BL_LcNumberContainer.classList.remove("hideThisItem");
      document.getElementById("BL_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
    } else {
      BL_LcNumberContainer.style.display = "none";
      BL_LcNumberContainer.classList.add("hideThisItem");
    }

    // Global Check
    var BL_GlobalCheck = document.getElementById("BL_GlobalCheck");
    var BL_GlobalCertification = document.getElementById("BL_GlobalCertification");

    if (BL_GlobalCheck.checked) {
      BL_GlobalCertification.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      BL_GlobalCertification.value = "";
    }

    // Limited Certifications
    function updateLimitedCertificationsBL() {
      var checkbox = document.getElementById("lcInformationPageLimitedCertifications_BLcheckbox");
      var textArea = document.getElementById("BL_LimitedCertifications");

      if (checkbox.checked) {
        textArea.value = document.getElementById("lcInformationPageLimitedCertifications").value;
        textArea.style.display = "block";
      } else {
        textArea.value = "";
        // textArea.style.display = "none"; // Hide the text area
      }
    }

    document.getElementById("lcInformationPageLimitedCertifications_BLcheckbox").addEventListener("change", updateLimitedCertificationsBL);

    updateLimitedCertificationsBL();

    document.getElementById("BL_Freight").value = "FREIGHT: \t" + document.getElementById("lcInformationPageFreight").options[document.getElementById("lcInformationPageFreight").selectedIndex].innerText;

    document.getElementById("BL_DocumentNo").value = document.getElementById("TransportInformation_MOBLNumber").value;

    document.getElementById("BL_PlaceOfReceipt").value = document.getElementById("TransportInformation_PlaceOfReceiptBy").value;

    document.getElementById("BL_ModalTitle").value = document.getElementById("BL_HomeTitle").value;


    let TransportInformation_CountryOfOrigin = document.getElementById("TransportInformation_CountryOfOrigin");
    let TransportInformation_CountryOfOriginOption = TransportInformation_CountryOfOrigin.options[TransportInformation_CountryOfOrigin.selectedIndex];
    let TransportInformation_CountryOfOriginText = TransportInformation_CountryOfOriginOption.text;

    document.getElementById("BL_CountryOfOrigion").value = TransportInformation_CountryOfOriginText;


    document.getElementById("BL_CarrierName").value = document.getElementById("TransportInformation_VesselName").value;
    document.getElementById("BL_PortOfLoading").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("BL_PortOfDischarge").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("BL_TransportTo").value = document.getElementById("TransportInformation_ForTranshipmentTo").value;
    document.getElementById("BL_MarksAndNumbers").value = document.getElementById("TransportInformation_MarksAndNumber").value;
    document.getElementById("BL_NoOfPackages").value = document.getElementById("TransportInformation_NumberOfPieces").value;
    document.getElementById("BL_GrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value;
    document.getElementById("BL_NetWeight").value = document.getElementById("TransportInformation_NetWeight").value;

    let TransportInformation_Measurements = document.getElementById("TransportInformation_Measurements");
    let TransportInformation_MeasurementsOption = TransportInformation_Measurements.options[TransportInformation_Measurements.selectedIndex];
    let TransportInformation_MeasurementsText = TransportInformation_MeasurementsOption.text;


    document.getElementById("BL_Measurements").value = document.getElementById("TransportInformation_Dimensions").value;


    // Weights
    if (document.getElementById("TransportInformation_GrossWeight").value) {
      document.getElementById("BL_GrossWeight").style.display = "flex";
      document.getElementById("BL_GrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      document.getElementById("BL_GrossWeight").style.display = "none";
    }


    if (document.getElementById("TransportInformation_NetWeight").value) {
      document.getElementById("BL_NetWeight").style.display = "flex";
      document.getElementById("BL_NetWeight").value = document.getElementById("TransportInformation_WeightInLBS").value + "LBS";

    } else {
      document.getElementById("BL_NetWeight").style.display = "none";
    }



    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;

    document.getElementById("BL_CleanShipped").value = `'CLEAN SHIPPED ONBOARD' ${document.getElementById("TransportInformation_VesselName").value} At ${document.getElementById("lcInformationPageLoadOnBoard").value} On ${formattedDate}`;







  });

  // !! Commercial Invoice Certificate
  const CommercialInvoiceHomeTitle = document.getElementById("CommercialInvoiceHomeTitle");

  let isDialogPopulated_CommercialInvoice = false;

  CommercialInvoiceHomeTitle.addEventListener("dblclick", function (event) {
    console.log("Invoice HomeTitle double clicked");
    event.preventDefault();

    // Check Box Check
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("CommercialInvoiceModalDCS").value = DCSText;
      document.getElementById("CommercialInvoiceModalDCSContainer").style.display = "flex";
    } else {
      document.getElementById("CommercialInvoiceModalDCS").value = "";
      document.getElementById("CommercialInvoiceModalDCSContainer").style.display = "none";
    }

    if (!isDialogPopulated_CommercialInvoice) {
      document.getElementById("CommercialInvoiceModalInvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;
      document.getElementById("CommercialInvoiceModalLargeMerchadiseDescription").value = document.getElementById("lcInformationPageLargeMerchadiseDescriptionInvoice").value;

      isDialogPopulated_CommercialInvoice = true;
    }

    function onDateChange() {
      document.getElementById("CommercialInvoiceModalInvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;
    }
    document.getElementById("TransportInformation_InvoiceDate").addEventListener("input", onDateChange);

    function onDescriptionChange() {
      document.getElementById("CommercialInvoiceModalLargeMerchadiseDescription").value = document.getElementById("lcInformationPageLargeMerchadiseDescriptionInvoice").value;
    }
    document.getElementById("lcInformationPageLargeMerchadiseDescriptionInvoice").addEventListener("input", onDescriptionChange);

    // LC check
    var CommercialInvoiceLCNumberCheck = document.getElementById("CommercialInvoiceLCNumberCheck");
    var CommercialInvoiceModalLCNumber = document.getElementById("CommercialInvoiceModalLCNumber");
    if (CommercialInvoiceLCNumberCheck.checked) {
      document.getElementById("CommercialInvoiceModalLCNumberContainer").style.display = "flex";
      CommercialInvoiceModalLCNumber.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      document.getElementById("CommercialInvoiceModalLCNumberContainer").style.display = "none";
    }

    // Second Applicant Check
    var CommercialInvoiceSecondApplicantCheck = document.getElementById("CommercialInvoiceSecondApplicantCheck");
    var CommercialInvoiceModallApplicantDetailsContainer = document.getElementById("CommercialInvoiceModallApplicantDetailsContainer");
    var CommercialInvoiceModall2ndApplicantDetailsContainer = document.getElementById("CommercialInvoiceModall2ndApplicantDetailsContainer");

    if (CommercialInvoiceSecondApplicantCheck.checked) {
      CommercialInvoiceModall2ndApplicantDetailsContainer.style.display = "flex";
      CommercialInvoiceModallApplicantDetailsContainer.style.display = "none";
      document.getElementById("CommercialInvoiceModall2ndApplicantDetails").value =
        document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      CommercialInvoiceModall2ndApplicantDetailsContainer.style.display = "none";
      CommercialInvoiceModallApplicantDetailsContainer.style.display = "block";
    }

    // Global Check
    var CommercialInvoiceGlobalCheck = document.getElementById("CommercialInvoiceGlobalCheck");
    var CommercialInvoiceModalGlobal = document.getElementById("CommercialInvoiceModalGlobal");
    if (CommercialInvoiceGlobalCheck.checked) {
      CommercialInvoiceModalGlobal.style.display = "flex";
      CommercialInvoiceModalGlobal.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      CommercialInvoiceModalGlobal.style.display = "none";
    }

    // End Check Boxes

    //Simple input Fields values
    document.getElementById("CommercialInvoiceModalTitle").value = document.getElementById("CommercialInvoiceHomeTitle").value;

    document.getElementById("CommercialInvoiceModalBeneNameEnd").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("CommercialInvoiceModalInvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;

    document.getElementById("CommercialInvoiceModalLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    // Currency
    let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
    let lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
    let lcInformationPageCurrencyOptionText = lcInformationPageCurrencyOption.text;

    if (lcInformationPageCurrencyOptionText == "Dollar") {
      document.getElementById("CommercialInvoiceModalCurrency").value = "USD";
    } else {
      document.getElementById("CommercialInvoiceModalCurrency").value = lcInformationPageCurrencyOptionText;
    }

    //  Bene and Applicant Boxes
    let beneAddress = document.getElementById("LCInformation_BENEFICIARYAddressStore").value;
    let beneComponents = beneAddress.split(", ");
    let beneFormattedAddress = beneComponents.join(",\n");

    document.getElementById("CommercialInvoiceModallBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + beneFormattedAddress;

    let ApplicantAddress = document.getElementById("lcInformationPageApplicantAddress").value;
    let ApplicantComponents = ApplicantAddress.split(", ");
    let ApplicantFormattedAddress = ApplicantComponents.join(",\n");

    document.getElementById("CommercialInvoiceModallApplicantDetails").value = document.getElementById("lcInformationPageApplicantName").value + "\n" + ApplicantFormattedAddress;

    // Transport Information Partial Or Compelete Shipment
    let TransportInformation_PartialOrCompShippment = document.getElementById("TransportInformation_PartialOrCompShippment");
    let TransportInformation_PartialOrCompShippmentOption = TransportInformation_PartialOrCompShippment.options[TransportInformation_PartialOrCompShippment.selectedIndex];
    let TransportInformation_PartialOrCompShippmentText = TransportInformation_PartialOrCompShippmentOption.text;
    let CommericalInvoiceModalPartialShipment = document.getElementById("CommericalInvoiceModalPartialShipment");
    CommericalInvoiceModalPartialShipment.innerText = TransportInformation_PartialOrCompShippmentText;

    //  Sale Terms
    let lcInformationPageSalesTerms = document.getElementById("lcInformationPageSalesTerms");
    let lcInformationPageSalesTermsOption = lcInformationPageSalesTerms.options[lcInformationPageSalesTerms.selectedIndex];
    let lcInformationPageSalesTermsText = lcInformationPageSalesTermsOption.text;
    let lcInformationPageLocationOfSalesTerms = document.getElementById("lcInformationPageLocationOfSalesTerms").value;

    console.log("lcInformationPageSalesTermsText: ", lcInformationPageSalesTermsText);

    if (lcInformationPageSalesTermsText === "Select Sales terms") {
      lcInformationPageSalesTermsText = "";
    }

    let CommericalInvoiceModalSalesTerm = document.getElementById("CommericalInvoiceModalSalesTerm");
    // CommericalInvoiceModalSalesTerm.innerText = lcInformationPageSalesTermsText + " " + " " + " " + " " + lcInformationPageLocationOfSalesTerms;
    CommericalInvoiceModalSalesTerm.innerText = lcInformationPageSalesTermsText + " " + " " + " " + " " + lcInformationPageLocationOfSalesTerms;



    // Amount
    let lcInformationPageCurrencySelect = document.getElementById("lcInformationPageCurrency");
    let lcInformationPageCurrencySelectOption = lcInformationPageCurrencySelect.options[lcInformationPageCurrencySelect.selectedIndex];
    let lcInformationPageCurrencySelectValue = lcInformationPageCurrencySelectOption.value;
    let Homepage_AmtOfDraw = document.getElementById("Homepage_AmtOfDraw");
    let CommericalInvoiceModalAmount = document.getElementById("CommericalInvoiceModalAmount");
    let CommericalInvoiceModalAmountFreight = document.getElementById("CommericalInvoiceModalAmountFreight");
    let CommericalInvoiceModalAmountInsuranceCharge = document.getElementById("CommericalInvoiceModalAmountInsuranceCharge");
    let CommericalInvoiceModalAmountRemaining = document.getElementById("CommericalInvoiceModalAmountRemaining");



    const requestUrlCurrency = `${config.HOST}/getCurrency/${lcInformationPageCurrencySelectValue}`;
    fetch(requestUrlCurrency, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((currencyData) => {



        if (document.getElementById('TransportInformation_ShowSeperate').checked) {

          let TransportInformation_FreightCharge = document.getElementById("TransportInformation_FreightCharge").value;
          let TransportInformation_InsuranceChg = document.getElementById("TransportInformation_InsuranceChg").value;

          let remaining = (Homepage_AmtOfDraw.value - TransportInformation_FreightCharge - TransportInformation_InsuranceChg);
          console.log('Remaining: ', remaining);
          console.log('TransportInformation_FreightCharge: ', TransportInformation_FreightCharge);
          console.log('TransportInformation_InsuranceChg: ', TransportInformation_InsuranceChg);
          console.log('Homepage_AmtOfDraw: ', Homepage_AmtOfDraw);


          if (TransportInformation_FreightCharge && !isNaN(TransportInformation_FreightCharge)) {
            console.log('I am Here');
            CommericalInvoiceModalAmountRemaining.style.display = 'block';
            CommericalInvoiceModalAmountFreight.style.display = 'block';
            CommericalInvoiceModalAmountInsuranceCharge.style.display = 'block';


            CommericalInvoiceModalAmountRemaining.innerText = currencyData.currency_symbol + " " + remaining;
            CommericalInvoiceModalAmountFreight.innerText = currencyData.currency_symbol + " " + TransportInformation_FreightCharge;
            CommericalInvoiceModalAmountInsuranceCharge.innerText = currencyData.currency_symbol + " " + TransportInformation_InsuranceChg;
            CommericalInvoiceModalAmount.innerText = currencyData.currency_symbol + " " + Homepage_AmtOfDraw.value;
          } else {
            console.log("TransportInformation FreightCharge Not Numerical")
          }


        } else {
          CommericalInvoiceModalAmount.innerText = currencyData.currency_symbol + " " + Homepage_AmtOfDraw.value;
          CommericalInvoiceModalAmountRemaining.style.display = 'none';
          CommericalInvoiceModalAmountFreight.style.display = 'none';
          CommericalInvoiceModalAmountInsuranceCharge.style.display = 'none';
        }





      })
      .catch((error) => {
        console.log("Error:", error);
      });

    // Limited Certifications
    function updateLimitedCertificationsCI() {
      var checkbox = document.getElementById("lcInformationPageLimitedCertifications_CIcheckbox");
      var textArea = document.getElementById("CI_LimitedCertifications");

      if (checkbox.checked) {
        textArea.value = document.getElementById("lcInformationPageLimitedCertifications").value;
        textArea.style.display = "block";
        document.getElementById("CI_LimitedCertificationsContainer").style.display = "block";
      } else {
        textArea.value = "";
        console.log(textArea);
        textArea.classList.remove("PrintTextAreaZoomButton"); // Remove the specific class
        textArea.style.display = "none"; // Hide the text area
        document.getElementById("CI_LimitedCertificationsContainer").style.display = "none"; // Hide the text area
      }
    }

    document.getElementById("lcInformationPageLimitedCertifications_BLcheckbox").addEventListener("change", updateLimitedCertificationsCI);

    updateLimitedCertificationsCI();
  });

  // ! PackingList Certificate
  const packingListHomeTitle = document.getElementById("packingListHomeTitle");
  let isDialogPopulated_PL = false;
  packingListHomeTitle.addEventListener("dblclick", function (event) {
    console.log("Packing List HomeTitle double clicked");
    event.preventDefault();

    // Check Box Check
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("packingListModalDCS").value = DCSText;
      document.getElementById("packingListModalDCSContainer").style.display = "flex";
    } else {
      document.getElementById("packingListModalDCS").value = "";
      document.getElementById("packingListModalDCSContainer").style.display = "none";
    }

    // LC check
    var packingListLCNumberCheck = document.getElementById("packingListLCNumberCheck");
    var packingListModalLCNumber = document.getElementById("packingListModalLCNumber");
    if (packingListLCNumberCheck.checked) {
      document.getElementById("packingListModalLCNumberContainer").style.display = "flex";
      packingListModalLCNumber.value = document.getElementById("lcInformationPageLcNumber").value;
    } else {
      document.getElementById("packingListModalLCNumberContainer").style.display = "none";
    }

    // Second Applicant Check
    var packingListSecondApplicantCheck = document.getElementById("packingListSecondApplicantCheck");
    var packingListModallApplicantDetailsContainer = document.getElementById("packingListModallApplicantDetailsContainer");
    var packingListModall2ndApplicantDetailsContainer = document.getElementById("packingListModall2ndApplicantDetailsContainer");

    if (packingListSecondApplicantCheck.checked) {
      packingListModall2ndApplicantDetailsContainer.style.display = "flex";
      packingListModallApplicantDetailsContainer.style.display = "none";
      document.getElementById("packingListModall2ndApplicantDetails").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      packingListModall2ndApplicantDetailsContainer.style.display = "none";
      packingListModallApplicantDetailsContainer.style.display = "block";
    }

    // Global Check
    var packingListGlobalCheck = document.getElementById("packingListGlobalCheck");
    var packingListModalGlobal = document.getElementById("packingListModalGlobal");
    if (packingListGlobalCheck.checked) {
      packingListModalGlobal.style.display = "flex";
      packingListModalGlobal.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      packingListModalGlobal.style.display = "none";
    }

    // End Check Boxes

    //Simple input Fields values
    document.getElementById("packingListModalBeneNameEnd").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("packingListModalInvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;

    document.getElementById("packingListModalLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    if (!isDialogPopulated_PL) {
      console.log("I am in PL Populated");

      document.getElementById("packingListModalInvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;

      isDialogPopulated_PL = true;

      document.getElementById("packingListModalShortMerchadiseDescription").value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;
    }

    const shortMerchandiseDescForBL = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL");
    const packingListModalShortDesc = document.getElementById("packingListModalShortMerchadiseDescription");

    // Function to update the packing list description
    function onDescriptionChange() {
      packingListModalShortDesc.value = shortMerchandiseDescForBL.value;
    }

    // Add an event listener for input changes
    shortMerchandiseDescForBL.addEventListener("input", onDescriptionChange);

    let packingListModalGrossWeightContainer = document.getElementById("packingListModalGrossWeightContainer");
    let packingListModalNetWeightContainer = document.getElementById("packingListModalNetWeightContainer");

    if (document.getElementById("TransportInformation_GrossWeight").value) {
      packingListModalGrossWeightContainer.style.display = "flex";
      document.getElementById("packingListModalGrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      packingListModalGrossWeightContainer.style.display = "none";
    }

    if (document.getElementById("TransportInformation_NetWeight").value) {
      packingListModalNetWeightContainer.style.display = "flex";
      document.getElementById("packingListModalNetWeight").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      packingListModalNetWeightContainer.style.display = "none";
    }

    document.getElementById("packingListModalNumberOfPieces").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    //  Bene and Applicant Boxes
    document.getElementById("packingListModallBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    document.getElementById("packingListModallApplicantDetails").value = document.getElementById("lcInformationPageApplicantName").value + "\n" + document.getElementById("lcInformationPageApplicantAddress").value;

    // Limited Certifications
    function updateLimitedCertificationsPL() {
      var checkbox = document.getElementById("lcInformationPageLimitedCertifications_PLcheckbox");
      var textArea = document.getElementById("PL_LimitedCertification");

      if (checkbox.checked) {
        textArea.value = document.getElementById("lcInformationPageLimitedCertifications").value;
        textArea.style.display = "block";
        document.getElementById("PL_LimitedCertificationContainer").style.display = "block";
      } else {
        textArea.value = "";
        console.log(textArea);
        textArea.classList.remove("PrintTextAreaZoomButton"); // Remove the specific class
        textArea.style.display = "none"; // Hide the text area
        document.getElementById("PL_LimitedCertificationContainer").style.display = "none";
      }
    }

    document.getElementById("lcInformationPageLimitedCertifications_BLcheckbox").addEventListener("change", updateLimitedCertificationsPL);

    updateLimitedCertificationsPL();
  });

  // ! Name Draft
  const DraftHomeTitle = document.getElementById("DraftHomeTitle");
  DraftHomeTitle.readOnly = true;
  DraftHomeTitle.addEventListener("dblclick", function (event) {
    console.log("draft double clicked");

    event.preventDefault();

    document.getElementById("simpleDraftModelIdNumber").value = document.getElementById("Homepage_ID").value;

    document.getElementById("simpleDraftModelShipperBene").value = document.getElementById("Homepage_ShipperOrBene").value;
    document.getElementById("simpleDraftModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("DraftChangeDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("simpleDraftModelShipperBene2").value = document.getElementById("Homepage_ShipperOrBene").value;
    document.getElementById("simpleDraftModelApplicantName").value = document.getElementById("lcInformationPageApplicantName").value;

    document.getElementById("DraftChangeDate").addEventListener("change", function (event) {
      document.getElementById("simpleDraftModelShippmentDate").value = document.getElementById("DraftChangeDate").value;
    });

    // Global Check
    var DraftGlobal = document.getElementById("DraftGlobal");
    var simpleDraftModelGlobal = document.getElementById("simpleDraftModelGlobal");
    if (DraftGlobal.checked) {
      simpleDraftModelGlobal.style.display = "flex";
      simpleDraftModelGlobal.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      simpleDraftModelGlobal.style.display = "none";
    }

    document.getElementById("simpleDraftModelDrawnUnder").value = document.getElementById("lcInformationPageDrawnUnderStatement").value;

    document.getElementById("simpleDraftModelInvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;

    document.getElementById("simpleDraftModelAdvisingBankRef").value = document.getElementById("Homepage_AdvisingBankRef").value;

    document.getElementById("simpleDraftModelLcDrawee").value = document.getElementById("lcInformationPageLcDrawee").value;

    document.getElementById("simpleDraftModelIdNumber1").value = document.getElementById("Homepage_ID").value;
    if (document.getElementById("simpleDraftModelIdNumber")) {
      document.getElementById("simpleDraftModelIdNumber").value = document.getElementById("Homepage_ID").value;
    }

    document.getElementById("simpleDraftModelRemitPaymentPayeeName").value = document.getElementById("storecustomer_CUSTOMER_PAYEE_NAME").value;
    document.getElementById("simpleDraftModelRemitPaymentBankName").value = document.getElementById("storecustomer_CUSTOMER_BANK_NAME").value;
    document.getElementById("simpleDraftModelRemitPaymentAccountNumber").value = document.getElementById("storecustomer_CUSTOMER_ACCOUNT_NUMBER").value;
    document.getElementById("simpleDraftModelRemitPaymentABANumber").value = document.getElementById("storecustomer_CUSTOMER_ABA").value;

    let negobankdrafttextarea = document.getElementById("simpleDraftModelNegoBank");
    negobankdrafttextarea.value = document.getElementById("storecustomer_nego_address").value + ",\n";
    negobankdrafttextarea.value = negobankdrafttextarea.value + document.getElementById("storecustomer_nego_city").value + ",\n";
    negobankdrafttextarea.value = negobankdrafttextarea.value + document.getElementById("storecustomer_nego_state").value + ",\n";
    negobankdrafttextarea.value = negobankdrafttextarea.value + document.getElementById("storecustomer_nego_country").value;

    // TOD
    // Ensure the element exists and has options
    let lcInformationPageTenorOfDraft = document.getElementById("lcInformationPageTenorOfDraft");

    if (lcInformationPageTenorOfDraft && lcInformationPageTenorOfDraft.options.length > 0) {
      let lcInformationPageTenorOfDraftOption = lcInformationPageTenorOfDraft.options[lcInformationPageTenorOfDraft.selectedIndex];
      let lcInformationPageTenorOfDraftText = lcInformationPageTenorOfDraftOption ? lcInformationPageTenorOfDraftOption.text : '';

      let TOS_Date = document.getElementById("simpleDraftModelShippmentDate").value;
      if (TOS_Date) {
        let dateParts = TOS_Date.split("-");
        if (dateParts.length === 3) {
          let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
          let TenorOfDraftElementOptionWords = "";

          let n = document.getElementById("DraftOriginalNumber").value;

          if (n == 1) {
            console.log("N = 1");
            TenorOfDraftElementOptionWords = `AT ${lcInformationPageTenorOfDraftText} OF THIS SOLE EXCHANGE`;
          } else if (n == 2) {
            console.log("N = 2");
            TenorOfDraftElementOptionWords = `AT ${lcInformationPageTenorOfDraftText} OF THIS FIRST EXCHANGE (SECOND UNPAID)`;
          } else {
            TenorOfDraftElementOptionWords = `N/A`;
          }

          // Update the value of the input field
          let simpleDraftModelTenorOfDraft = document.getElementById("simpleDraftModelTenorOfDraft");
          simpleDraftModelTenorOfDraft.removeAttribute('disabled');
          simpleDraftModelTenorOfDraft.value = TenorOfDraftElementOptionWords;

        } else {
          console.error('Invalid date format in TOS_Date.');
        }
      } else {
        console.error('TOS_Date is undefined or empty.');
      }

    } else {
      console.error('lcInformationPageTenorOfDraft element or its options are not available.');
    }

    let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
    let lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
    let lcInformationPageCurrencyValue = lcInformationPageCurrencyOption.value;

    const requestUrlCurrency = `${config.HOST}/getCurrency/${lcInformationPageCurrencyValue}`;
    fetch(requestUrlCurrency, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((currencyData) => {
        console.log("Success:", currencyData);
        let currency = currencyData;

        let Homepage_AmtOfDraw = document.getElementById("Homepage_AmtOfDraw").value;
        let amountWithCommas = parseFloat(Homepage_AmtOfDraw).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        document.getElementById("simpleDraftModelCurrencyCountrySymbolNumber").value = currency.currency_symbol + "  " + amountWithCommas;
      
        const words = convertCurrencyToWords(document.getElementById("Homepage_AmtOfDraw").value, currency.currency_name_singular, currency.currency_name_plural, currency.currency_fraction_name_singular, currency.currency_fraction_name_plural);

        document.getElementById("simpleDraftModelCurrencyInWords").value = words + " " + "(" + currency.currency_description + ")";
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    document.getElementById("simpleDraftModelShippmentDate").innerText = document.getElementById("Homepage_ShipDate").value;
  });

  // ! Sight Draft
  const sightDraftHomeTitle = document.getElementById("sightDraftHomeTitle");
  sightDraftHomeTitle.readOnly = true;
  sightDraftHomeTitle.addEventListener("dblclick", function (event) {
    console.log("sight draft double clicked");

    event.preventDefault();
    document.getElementById("sightDraftModelShipperBene").value = document.getElementById("Homepage_ShipperOrBene").value;
    document.getElementById("sightDraftModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("sightDraftChangeDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("sightDraftModelShipperBene2").value = document.getElementById("Homepage_ShipperOrBene").value;
    document.getElementById("sightDraftModelApplicantName").value = document.getElementById("lcInformationPageApplicantName").value;

    // Global Check
    var sightDraftGlobal = document.getElementById("sightDraftGlobal");
    var sightDraftModelGlobal = document.getElementById("sightDraftModelGlobal");
    if (sightDraftGlobal.checked) {
      sightDraftModelGlobal.style.display = "flex";
      sightDraftModelGlobal.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      sightDraftModelGlobal.style.display = "none";
    }

    document.getElementById("sightDraftModelInvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;
    document.getElementById("sightDraftModelLcDrawee").value = document.getElementById("lcInformationPageLcDrawee").value;

    if (document.getElementById("sightDraftModelIdNumber")) {
      document.getElementById("sightDraftModelIdNumber").value = document.getElementById("Homepage_ID").textContent;
    }

    document.getElementById("sightDraftModelRemitPaymentPayeeName").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("sightDraftModelRemitPaymentBankName").value = document.getElementById("storecustomer_CUSTOMER_BANK_NAME").value;
    document.getElementById("sightDraftModelRemitPaymentAccountNumber").value = document.getElementById("storecustomer_CUSTOMER_ACCOUNT_NUMBER").value;
    document.getElementById("sightDraftModelRemitPaymentABANumber").value = document.getElementById("storecustomer_CUSTOMER_ABA").value;

    let negobankSightdrafttextarea = document.getElementById("sightDraftModelNegoBank");
    negobankSightdrafttextarea.value = document.getElementById("storecustomer_nego_address").value + ",\n";
    negobankSightdrafttextarea.value = negobankSightdrafttextarea.value + document.getElementById("storecustomer_nego_city").value + ",\n";
    negobankSightdrafttextarea.value = negobankSightdrafttextarea.value + document.getElementById("storecustomer_nego_state").value + ",\n";
    negobankSightdrafttextarea.value = negobankSightdrafttextarea.value + document.getElementById("storecustomer_nego_country").value;

    // TOD
    let lcInformationPageTenorOfDraft = document.getElementById("lcInformationPageTenorOfDraft");
    let lcInformationPageTenorOfDraftOption = lcInformationPageTenorOfDraft.options[lcInformationPageTenorOfDraft.selectedIndex];
    let lcInformationPageTenorOfDraftText = lcInformationPageTenorOfDraftOption.text;
    let TOS_Date = document.getElementById("sightDraftModelShippmentDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    let TenorOfDraftElementOptionWords = "";

    let n = document.getElementById("sightDraftOriginalNumber").value;

    if (n == 1) {
      console.log("N = 1");

      TenorOfDraftElementOptionWords = `AT ${lcInformationPageTenorOfDraftText} FROM FCR DATE ${formattedDate} OF THIS SOLE EXCHANGE`;
    } else if (n == 2) {
      console.log("N = 2");
      TenorOfDraftElementOptionWords = `AT ${lcInformationPageTenorOfDraftText} FROM FCR DATE ${formattedDate} OF THIS FIRST EXCHANGE (SECOND UNPAID)`;
    } else {
      TenorOfDraftElementOptionWords = `N/A`;
    }
    document.getElementById("sightDraftModelTenorOfDraft").value = TenorOfDraftElementOptionWords;

    document.getElementById("sightDraftChangeDate").addEventListener("change", function (event) {
      document.getElementById("sightDraftModelShippmentDate").value = document.getElementById("sightDraftChangeDate").value;
    });

    let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
    let lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
    let lcInformationPageCurrencyValue = lcInformationPageCurrencyOption.value;

    const requestUrlCurrency = `${config.HOST}/getCurrency/${lcInformationPageCurrencyValue}`;
    fetch(requestUrlCurrency, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((currencyData) => {
        console.log("Success:", currencyData);
        let currency = currencyData;

        let Homepage_AmtOfDraw = document.getElementById("Homepage_AmtOfDraw").value;
        let amountWithCommas = parseFloat(Homepage_AmtOfDraw).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        document.getElementById("sightDraftModelCurrencyCountrySymbolNumber").value =  currency.currency_symbol + "  " + amountWithCommas;

        const words = convertCurrencyToWords(document.getElementById("Homepage_AmtOfDraw").value, currency.currency_name_singular, currency.currency_name_plural, currency.currency_fraction_name_singular, currency.currency_fraction_name_plural);
        document.getElementById("sightDraftModelCurrencyInWords").value = words + " " + "(" + currency.currency_description + ")";
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    document.getElementById("sightDraftModelShippmentDate").innerText = document.getElementById("Homepage_ShipDate").value;
  });

  // ! Back of Draft
  const backDraftHomeTitle = document.getElementById("backDraftHomeTitle");
  backDraftHomeTitle.readOnly = true;
  backDraftHomeTitle.addEventListener("dblclick", function (event) {
    console.log("Back of Draft double clicked");
    event.preventDefault();
    document.getElementById("backDraftModalBeneName").value = document.getElementById("Homepage_ShipperOrBene").value;
  });

  // ! Additional Draft
  const additionalDraftHomeTitle = document.getElementById("additionalDraftHomeTitle");
  additionalDraftHomeTitle.readOnly = true;
  additionalDraftHomeTitle.addEventListener("dblclick", function (event) {
    console.log("Additional Draft double clicked");

    event.preventDefault();
    document.getElementById("additionalDraftModelShipperBene").value = document.getElementById("Homepage_ShipperOrBene").value;
    document.getElementById("additionalDraftModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("additionalDraftChangeDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("additionalDraftModelShipperBene2").value = document.getElementById("Homepage_ShipperOrBene").value;
    document.getElementById("additionalDraftModelApplicantName").value = document.getElementById("lcInformationPageApplicantName").value;

    // Global Check
    var additionalDraftGlobal = document.getElementById("additionalDraftGlobal");
    var additionalDraftModelGlobal = document.getElementById("additionalDraftModelGlobal");
    if (additionalDraftGlobal.checked) {
      additionalDraftModelGlobal.style.display = "flex";
      additionalDraftModelGlobal.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      additionalDraftModelGlobal.style.display = "none";
    }

    document.getElementById("additionalDraftModelDrawnUnder").value = document.getElementById("lcInformationPageDrawnUnderStatement").value;
    document.getElementById("additionalDraftModelInvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;
    document.getElementById("additionalDraftModelAdvisingBankRef").value = document.getElementById("Homepage_AdvisingBankRef").value;
    document.getElementById("additionalDraftModelLcDrawee").value = document.getElementById("lcInformationPageLcDrawee").value;
    document.getElementById("additionalDraftModelIdNumber1").value = document.getElementById("Homepage_ID").value;

    document.getElementById("additionalDraftModelIdNumber").value = document.getElementById("Homepage_ID").value;

    if (document.getElementById("additionalDraftModelIdNumber")) {
      document.getElementById("additionalDraftModelIdNumber").value = document.getElementById("Homepage_ID").value;
    }

    document.getElementById("additionalDraftModelRemitPaymentPayeeName").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("additionalDraftModelRemitPaymentBankName").value = document.getElementById("storecustomer_CUSTOMER_BANK_NAME").value;
    document.getElementById("additionalDraftModelRemitPaymentAccountNumber").value = document.getElementById("storecustomer_CUSTOMER_ACCOUNT_NUMBER").value;
    document.getElementById("additionalDraftModelRemitPaymentABANumber").value = document.getElementById("storecustomer_CUSTOMER_ABA").value;

    let negobankdrafttextarea = document.getElementById("additionalDraftModelNegoBank");
    negobankdrafttextarea.value = document.getElementById("storecustomer_nego_address").value + ",\n";
    negobankdrafttextarea.value = negobankdrafttextarea.value + document.getElementById("storecustomer_nego_city").value + ",\n";
    negobankdrafttextarea.value = negobankdrafttextarea.value + document.getElementById("storecustomer_nego_state").value + ",\n";
    negobankdrafttextarea.value = negobankdrafttextarea.value + document.getElementById("storecustomer_nego_country").value;

    // TOD
    let lcInformationPageTenorOfDraft = document.getElementById("lcInformationPageTenorOfDraft");
    let lcInformationPageTenorOfDraftOption = lcInformationPageTenorOfDraft.options[lcInformationPageTenorOfDraft.selectedIndex];
    let lcInformationPageTenorOfDraftText = lcInformationPageTenorOfDraftOption.text;
    let TOS_Date = document.getElementById("additionalDraftModelShippmentDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    let TenorOfDraftElementOptionWords = "";

    let n = document.getElementById("additionalDraftOriginalNumber").value;

    if (n == 1) {
      console.log("N = 1");

      TenorOfDraftElementOptionWords = `AT ${lcInformationPageTenorOfDraftText} FROM FCR DATE ${formattedDate} OF THIS SOLE EXCHANGE`;
    } else if (n == 2) {
      console.log("N = 2");
      TenorOfDraftElementOptionWords = `AT ${lcInformationPageTenorOfDraftText} FROM FCR DATE ${formattedDate} OF THIS FIRST EXCHANGE (SECOND UNPAID)`;
    } else {
      TenorOfDraftElementOptionWords = `N/A`;
    }
    document.getElementById("additionalDraftModelTenorOfDraft").value = TenorOfDraftElementOptionWords;

    document.getElementById("additionalDraftChangeDate").addEventListener("change", function (event) {
      document.getElementById("additionalDraftModelShippmentDate").value = document.getElementById("additionalDraftChangeDate").value;
    });

    let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
    let lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
    let lcInformationPageCurrencyValue = lcInformationPageCurrencyOption.value;

    const requestUrlCurrency = `${config.HOST}/getCurrency/${lcInformationPageCurrencyValue}`;
    fetch(requestUrlCurrency, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((currencyData) => {
        let currency = currencyData;

        let Homepage_AmtOfDraw = document.getElementById("Homepage_AmtOfDraw").value;
        let amountWithCommas = parseFloat(Homepage_AmtOfDraw).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

        document.getElementById("additionalDraftModelCurrencyCountrySymbolNumber").value = currency.currency_symbol + "  " + amountWithCommas;

        const words = convertCurrencyToWords(document.getElementById("Homepage_AmtOfDraw").value, currency.currency_name_singular, currency.currency_name_plural, currency.currency_fraction_name_singular, currency.currency_fraction_name_plural);

        document.getElementById("additionalDraftModelCurrencyInWords").value = words + " " + "(" + currency.currency_description + ")";
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    document.getElementById("additionalDraftModelShippmentDate").innerText = document.getElementById("Homepage_ShipDate").value;
  });

  // ! Certificate of Origin
  const CertificateOfOriginHomeTitle = document.getElementById("CertificateOfOriginHomeTitle");

  let isDialogPopulated_CO = false;

  CertificateOfOriginHomeTitle.addEventListener("dblclick", function (event) {
    console.log("Certificate Of Origin HomeTitle double clicked");
    event.preventDefault();
    document.getElementById("CertificateOfOriginModalTitle").innerText = document.getElementById("CertificateOfOriginHomeTitle").value;

    // Checks

    if (!isDialogPopulated_CO) {
      document.getElementById("certificateOfOriginDescriptionOfGoods").value = document.getElementById("lcInformationPageShortShortMerchadiseDescriptionForCO").value;

      isDialogPopulated_CO = true;
    }

    function onDescriptionChange() {
      document.getElementById("certificateOfOriginDescriptionOfGoods").value = document.getElementById("lcInformationPageShortShortMerchadiseDescriptionForCO").value;
    }
    document.getElementById("lcInformationPageShortShortMerchadiseDescriptionForCO").addEventListener("input", onDescriptionChange);

    // LC check
    var CertificateOfOriginLCNumberCheck = document.getElementById("CertificateOfOriginLCNumberCheck");

    if (CertificateOfOriginLCNumberCheck.checked) {
      document.getElementById("certificateOfOriginLCNumberContainer").style.display = "flex";

      document.getElementById("certificateOfOriginLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;
    } else {
      document.getElementById("certificateOfOriginLCNumberContainer").style.display = "none";
      document.getElementById("certificateOfOriginLCNumberContainerLabel").style.display = "none";
    }

    // Second Applicant Check
    var CertificateOfOriginSecondApplicantCheck = document.getElementById("CertificateOfOriginSecondApplicantCheck");

    if (CertificateOfOriginSecondApplicantCheck.checked) {
      document.getElementById("certificateOfOriginSoldTo").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;

      document.getElementById("certificateOfOriginSoldToContainer").innerText = " ";
    } else {
      let applicantAddress = document.getElementById("lcInformationPageApplicantAddress").value;
      let applicantComponents = applicantAddress.split(", ");
      let applicantFormattedAddress = applicantComponents.join(",\n");

      document.getElementById("certificateOfOriginSoldTo").value = document.getElementById("lcInformationPageApplicantName").value + "\n" + applicantFormattedAddress;

      document.getElementById("certificateOfOriginSoldToContainer").innerText = "Sold To ";
    }

    // Global Check
    var CertificateOfOriginGlobalCheck = document.getElementById("CertificateOfOriginGlobalCheck");
    var certificateOfOriginModalGlobal = document.getElementById("certificateOfOriginModalGlobal");
    if (CertificateOfOriginGlobalCheck.checked) {
      certificateOfOriginModalGlobal.style.display = "flex";
      document.getElementById("certificateOfOriginModalGlobalContainer").style.visibility = "visible";

      certificateOfOriginModalGlobal.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      document.getElementById("certificateOfOriginModalGlobalContainer").style.visibility = "hidden";
    }

    1;

    //  Bene and Applicant Boxes
    let beneAddress = document.getElementById("LCInformation_BENEFICIARYAddressStore").value;
    let beneComponents = beneAddress.split(", ");
    let beneFormattedAddress = beneComponents.join(",\n");

    document.getElementById("certificateOfOriginShipperOrExporter").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + beneFormattedAddress;

    document.getElementById("packingListModallBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + beneFormattedAddress;

    document.getElementById("certificateOfOriginNumberOfPackages").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    // Weights
    if (document.getElementById("TransportInformation_GrossWeight").value) {
      document.getElementById("certificateOfOriginGrossWeight").style.display = "flex";
      document.getElementById("certificateOfOriginGrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      document.getElementById("certificateOfOriginGrossWeight").style.display = "none";
    }


    if (document.getElementById("TransportInformation_NetWeight").value) {
      document.getElementById("certificateOfOriginGrossWeight1").style.display = "flex";
      document.getElementById("certificateOfOriginGrossWeight1").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;

    } else {
      document.getElementById("certificateOfOriginGrossWeight1").style.display = "none";
    }


    // DCS
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("certificateOfOrigin_DCS").value = DCSText;
    } else {
      document.getElementById("certificateOfOrigin_DCS").value = "";
    }



    document.getElementById("certificateOfOrigin_EygptButton").addEventListener('click', function () {
      document.getElementById("certificateOfOrigin_FreeTextEnd").value = "THE GREATER HOUSTON CHAMBER OF COMMERCE, A RECOGNIZED CHAMBER OF COMMERCE UNDER THE LAWS OF THE STATE OF TEXAS, USA, HAS EXAMINED THE MANUFACTURER'S INVOICE OR SHIPPER's AFFIDAVIT CONCERNING THE ORIGIN OF THE MERCHANDISE AND, ACCORDING TO THE BEST OF ITS KNOWLEDGE AND BELIEF, FINDS THAT THE PRODUCTS NAMED ORIGINATED IN U.S.A."

    });

    document.getElementById("certificateOfOrigin_USAButton").addEventListener('click', function () {
      document.getElementById("certificateOfOrigin_FreeTextEnd").value = "The Des Plaines Chamber of Commerce, Illinois, USA, in reliance on the exporter's representation and not on the basis of independent verification attests that to the best of its knowledge and belief, the products named in this document originated  in the United States of America.";
    });

    document.getElementById("certificateOfOriginBottomFixText").value = "The undersigned , does hereby declare for the above named shipper, that the goods as described above are of USA origin.";
    document.getElementById("certificateOfOriginDate1").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("certificateOfOriginDate2").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("certificateOfOriginBottomBeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("certificateOfOriginModalPlaceOfReciept").value = document.getElementById("TransportInformation_PlaceOfReceiptBy").value;

    let airRadio = document.getElementById("PrintPage_SAAIR");

    if (airRadio.checked) {
      document.getElementById("certificateOfOriginModalVesselAirlineCarrier").value = document.getElementById("TransportInformation_CarrierName").value;
    } else {
      document.getElementById("certificateOfOriginModalVesselAirlineCarrier").value = document.getElementById("TransportInformation_VesselName").value;
    }

    document.getElementById("certificateOfOriginModalAirportPortOfLoading").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("certificateOfOriginModalVesselAirSeaPortOfDischarge").value = document.getElementById("lcInformationPageForTransportTo").value;
    // document.getElementById("certificateOfOriginModalForTransshipmentTo").value = document.getElementById("lcInformationPageForTransportTo").value;

    // Limited Certifications
    function updateLimitedCertificationsCO() {
      var checkbox = document.getElementById("lcInformationPageLimitedCertifications_COcheckbox");
      var textArea = document.getElementById("certificateOfOriginModal_LimitedCertification");

      if (checkbox.checked) {
        textArea.value = document.getElementById("lcInformationPageLimitedCertifications").value;
        textArea.style.display = "block";
      } else {
        textArea.value = "";
      }
    }

    document.getElementById("lcInformationPageLimitedCertifications_BLcheckbox").addEventListener("change", updateLimitedCertificationsCO);

    updateLimitedCertificationsCO();
  });

  // ! Bene 1
  const SimpleBENEFICIARYCertificateHomeTitle1 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle1");

  let isDialogPopulated_B1 = false;

  SimpleBENEFICIARYCertificateHomeTitle1.addEventListener("dblclick", function (event) {
    event.preventDefault();

    var textarea = document.getElementById("Bene1ModelAddress");
    console.log("Text Area to Focus", textarea);
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene1ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene1ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene1ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene1LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber1");
    var Bene1LCCheckInput = document.getElementById("Bene1ModelGlobal");
    var Bene1LCCheckInputContainer = document.getElementById("Bene1ModelLCNumberContainer");
    if (Bene1LCCheck.checked) {
      Bene1LCCheckInputContainer.style.display = "flex";
      Bene1LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene1LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant1 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant1");
    var Bene1ModelSecondApplicantHNAContainer = document.getElementById("Bene1ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant1.checked) {
      Bene1ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene1ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene1ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene1GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal1");
    var Bene1GlobalCheckInput = document.getElementById("Bene1ModelGlobal");
    if (Bene1GlobalCheck.checked) {
      Bene1GlobalCheckInput.style.display = "flex";
      Bene1GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene1GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B1) {
      document.getElementById("Bene1ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B1 = true;
    }

    function onDateChange() {
      document.getElementById("Bene1ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);
  });

  // ! Bene 2
  const SimpleBENEFICIARYCertificateHomeTitle2 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle2");

  let isDialogPopulated_B2 = false;

  SimpleBENEFICIARYCertificateHomeTitle2.addEventListener("dblclick", function (event) {
    event.preventDefault();
    var textarea = document.getElementById("Bene2ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene2ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene2ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene2ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene2LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber2");
    var Bene2LCCheckInput = document.getElementById("Bene2ModelGlobal");
    var Bene2LCCheckInputContainer = document.getElementById("Bene2ModelLCNumberContainer");
    if (Bene2LCCheck.checked) {
      Bene2LCCheckInputContainer.style.display = "flex";
      Bene2LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene2LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant2 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant2");
    var Bene2ModelSecondApplicantHNAContainer = document.getElementById("Bene2ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant2.checked) {
      Bene2ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene2ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene2ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene2GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal2");
    var Bene2GlobalCheckInput = document.getElementById("Bene2ModelGlobal");
    if (Bene2GlobalCheck.checked) {
      Bene2GlobalCheckInput.style.display = "flex";
      Bene2GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene2GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B2) {
      document.getElementById("Bene2ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B2 = true;
    }

    function onDateChange() {
      document.getElementById("Bene2ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);
  });

  // ! Bene 3
  const SimpleBENEFICIARYCertificateHomeTitle3 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle3");

  let isDialogPopulated_B3 = false;

  SimpleBENEFICIARYCertificateHomeTitle3.addEventListener("dblclick", function (event) {
    event.preventDefault();
    var textarea = document.getElementById("Bene3ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene3ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene3ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene3ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene3LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber3");
    var Bene3LCCheckInput = document.getElementById("Bene3ModelGlobal");
    var Bene3LCCheckInputContainer = document.getElementById("Bene3ModelLCNumberContainer");
    if (Bene3LCCheck.checked) {
      Bene3LCCheckInputContainer.style.display = "flex";
      Bene3LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene3LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant3 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant3");
    var Bene3ModelSecondApplicantHNAContainer = document.getElementById("Bene3ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant3.checked) {
      Bene3ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene3ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene3ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene3GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal3");
    var Bene3GlobalCheckInput = document.getElementById("Bene3ModelGlobal");
    if (Bene3GlobalCheck.checked) {
      Bene3GlobalCheckInput.style.display = "flex";
      Bene3GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene3GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B3) {
      document.getElementById("Bene3ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B3 = true;
    }

    function onDateChange() {
      document.getElementById("Bene3ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("Bene4ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("Bene5ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("Bene6ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("Bene7ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("Bene8ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("Bene9ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("Bene10ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);
  });

  // ! Bene 4
  const SimpleBENEFICIARYCertificateHomeTitle4 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle4");

  let isDialogPopulated_B4 = false;

  SimpleBENEFICIARYCertificateHomeTitle4.addEventListener("dblclick", function (event) {
    event.preventDefault();
    var textarea = document.getElementById("Bene4ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene4ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene4ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene4ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene4LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber4");
    var Bene4LCCheckInput = document.getElementById("Bene4ModelGlobal");
    var Bene4LCCheckInputContainer = document.getElementById("Bene4ModelLCNumberContainer");
    if (Bene4LCCheck.checked) {
      Bene4LCCheckInputContainer.style.display = "flex";
      Bene4LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene4LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant4 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant4");
    var Bene4ModelSecondApplicantHNAContainer = document.getElementById("Bene4ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant4.checked) {
      Bene4ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene4ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene4ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene4GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal4");
    var Bene4GlobalCheckInput = document.getElementById("Bene4ModelGlobal");
    if (Bene4GlobalCheck.checked) {
      Bene4GlobalCheckInput.style.display = "flex";
      Bene4GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene4GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B4) {
      document.getElementById("Bene4ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B4 = true;
    }
  });

  // ! Bene 5
  const SimpleBENEFICIARYCertificateHomeTitle5 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle5");

  let isDialogPopulated_B5 = false;

  SimpleBENEFICIARYCertificateHomeTitle5.addEventListener("dblclick", function (event) {
    event.preventDefault();

    var textarea = document.getElementById("Bene5ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene5ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene5ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene5ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene5LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber5");
    var Bene5LCCheckInput = document.getElementById("Bene5ModelGlobal");
    var Bene5LCCheckInputContainer = document.getElementById("Bene5ModelLCNumberContainer");
    if (Bene5LCCheck.checked) {
      Bene5LCCheckInputContainer.style.display = "flex";
      Bene5LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene5LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant5 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant5");
    var Bene5ModelSecondApplicantHNAContainer = document.getElementById("Bene5ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant5.checked) {
      Bene5ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene5ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene5ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene5GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal5");
    var Bene5GlobalCheckInput = document.getElementById("Bene5ModelGlobal");
    if (Bene5GlobalCheck.checked) {
      Bene5GlobalCheckInput.style.display = "flex";
      Bene5GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene5GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B5) {
      document.getElementById("Bene5ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B5 = true;
    }
  });

  // ! Bene 6
  const SimpleBENEFICIARYCertificateHomeTitle6 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle6");

  let isDialogPopulated_B6 = false;

  SimpleBENEFICIARYCertificateHomeTitle6.addEventListener("dblclick", function (event) {
    event.preventDefault();
    var textarea = document.getElementById("Bene6ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene6ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene6ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene6ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene6LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber6");
    var Bene6LCCheckInput = document.getElementById("Bene6ModelGlobal");
    var Bene6LCCheckInputContainer = document.getElementById("Bene6ModelLCNumberContainer");
    if (Bene6LCCheck.checked) {
      Bene6LCCheckInputContainer.style.display = "flex";
      Bene6LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene6LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant6 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant6");
    var Bene6ModelSecondApplicantHNAContainer = document.getElementById("Bene6ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant6.checked) {
      Bene6ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene6ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene6ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene6GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal6");
    var Bene6GlobalCheckInput = document.getElementById("Bene6ModelGlobal");
    if (Bene6GlobalCheck.checked) {
      Bene6GlobalCheckInput.style.display = "flex";
      Bene6GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene6GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B6) {
      document.getElementById("Bene6ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B6 = true;
    }
  });

  // ! Bene 7
  const SimpleBENEFICIARYCertificateHomeTitle7 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle7");

  let isDialogPopulated_B7 = false;

  SimpleBENEFICIARYCertificateHomeTitle7.addEventListener("dblclick", function (event) {
    event.preventDefault();

    var textarea = document.getElementById("Bene7ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene7ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene7ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene7ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene7LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber7");
    var Bene7LCCheckInput = document.getElementById("Bene7ModelGlobal");
    var Bene7LCCheckInputContainer = document.getElementById("Bene7ModelLCNumberContainer");
    if (Bene7LCCheck.checked) {
      Bene7LCCheckInputContainer.style.display = "flex";
      Bene7LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene7LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant7 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant7");
    var Bene7ModelSecondApplicantHNAContainer = document.getElementById("Bene7ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant7.checked) {
      Bene7ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene7ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene7ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene7GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal7");
    var Bene7GlobalCheckInput = document.getElementById("Bene7ModelGlobal");
    if (Bene7GlobalCheck.checked) {
      Bene7GlobalCheckInput.style.display = "flex";
      Bene7GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene7GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B7) {
      document.getElementById("Bene7ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B7 = true;
    }
  });

  // ! Bene 8
  const SimpleBENEFICIARYCertificateHomeTitle8 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle8");

  let isDialogPopulated_B8 = false;

  SimpleBENEFICIARYCertificateHomeTitle8.addEventListener("dblclick", function (event) {
    event.preventDefault();

    var textarea = document.getElementById("Bene8ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene8ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene8ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene8ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene8LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber8");
    var Bene8LCCheckInput = document.getElementById("Bene8ModelGlobal");
    var Bene8LCCheckInputContainer = document.getElementById("Bene8ModelLCNumberContainer");
    if (Bene8LCCheck.checked) {
      Bene8LCCheckInputContainer.style.display = "flex";
      Bene8LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene8LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant8 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant8");
    var Bene8ModelSecondApplicantHNAContainer = document.getElementById("Bene8ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant8.checked) {
      Bene8ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene8ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene8ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene8GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal8");
    var Bene8GlobalCheckInput = document.getElementById("Bene8ModelGlobal");
    if (Bene8GlobalCheck.checked) {
      Bene8GlobalCheckInput.style.display = "flex";
      Bene8GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene8GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B8) {
      document.getElementById("Bene8ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B8 = true;
    }
  });

  // ! Bene 9
  const SimpleBENEFICIARYCertificateHomeTitle9 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle9");

  let isDialogPopulated_B9 = false;

  SimpleBENEFICIARYCertificateHomeTitle9.addEventListener("dblclick", function (event) {
    event.preventDefault();

    var textarea = document.getElementById("Bene9ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene9ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene9ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene9ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene9LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber9");
    var Bene9LCCheckInput = document.getElementById("Bene9ModelGlobal");
    var Bene9LCCheckInputContainer = document.getElementById("Bene9ModelLCNumberContainer");
    if (Bene9LCCheck.checked) {
      Bene9LCCheckInputContainer.style.display = "flex";
      Bene9LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene9LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant9 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant9");
    var Bene9ModelSecondApplicantHNAContainer = document.getElementById("Bene9ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant9.checked) {
      Bene9ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene9ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene9ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene9GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal9");
    var Bene9GlobalCheckInput = document.getElementById("Bene9ModelGlobal");
    if (Bene9GlobalCheck.checked) {
      Bene9GlobalCheckInput.style.display = "flex";
      Bene9GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene9GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B9) {
      document.getElementById("Bene9ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B9 = true;
    }
  });

  // ! Bene 10
  const SimpleBENEFICIARYCertificateHomeTitle10 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle10");

  let isDialogPopulated_B10 = false;

  SimpleBENEFICIARYCertificateHomeTitle10.addEventListener("dblclick", function (event) {
    event.preventDefault();

    var textarea = document.getElementById("Bene10ModelAddress");
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById("Bene10ModelLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    document.getElementById("Bene10ModelBeneName").textContent = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("Bene10ModelAddress").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    // LC check
    var Bene10LCCheck = document.getElementById("SimpleBENEFICIARYCertificateLCNumber10");
    var Bene10LCCheckInput = document.getElementById("Bene10ModelGlobal");
    var Bene10LCCheckInputContainer = document.getElementById("Bene10ModelLCNumberContainer");
    if (Bene10LCCheck.checked) {
      Bene10LCCheckInputContainer.style.display = "flex";
      Bene10LCCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene10LCCheckInputContainer.style.display = "none";
    }

    // Second Applicant Check
    var SimpleBENEFICIARYCertificateSecondApplicant10 = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant10");
    var Bene10ModelSecondApplicantHNAContainer = document.getElementById("Bene10ModelSecondApplicantHNAContainer");

    if (SimpleBENEFICIARYCertificateSecondApplicant10.checked) {
      Bene10ModelSecondApplicantHNAContainer.style.display = "block";
      document.getElementById("Bene10ModelSecondApplicantHNA").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Bene10ModelSecondApplicantHNAContainer.style.display = "none";
    }

    // Global Check
    var Bene10GlobalCheck = document.getElementById("SimpleBENEFICIARYCertificateGlobal10");
    var Bene10GlobalCheckInput = document.getElementById("Bene10ModelGlobal");
    if (Bene10GlobalCheck.checked) {
      Bene10GlobalCheckInput.style.display = "flex";
      Bene10GlobalCheckInput.value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      Bene10GlobalCheckInput.style.display = "none";
    }

    if (!isDialogPopulated_B10) {
      document.getElementById("Bene10ModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;

      isDialogPopulated_B10 = true;
    }
  });

  // ! SHIPPING ADVICE APPLICANT
  const ShippingAdviceApplicant_HomeTitle = document.getElementById("ShippingAdviceApplicant_HomeTitle");

  let ShippingAdviceApplicant = false;

  ShippingAdviceApplicant_HomeTitle.addEventListener("dblclick", function (event) {
    console.log("Shipping Advice Applicant HomeTitle double clicked");
    event.preventDefault();

    if (!ShippingAdviceApplicant) {
      document.getElementById("ShippingAdviceApplicantModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceApplicantModel_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;

      ShippingAdviceApplicant = true;
    }

    function onDescriptionChange() {
      document.getElementById("ShippingAdviceApplicantModel_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
    }
    document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").addEventListener("input", onDescriptionChange);

    function onDateChange() {
      document.getElementById("ShippingAdviceApplicantModelShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceApplicantModelShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceApplicantModelShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);

    document.getElementById("ShippingAdviceApplicantModelShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("ShippingAdviceApplicantModelShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;

    let PrintPage_SAAIR = document.getElementById("PrintPage_SAAIR");
    let ShippingAdviceApplicantModelAWBVersion = document.getElementById("ShippingAdviceApplicantModelAWBVersion");
    let ShippingAdviceApplicantModelBOLVersion = document.getElementById("ShippingAdviceApplicantModelBOLVersion");

    if (PrintPage_SAAIR.checked) {
      console.log("AIR YES");
      ShippingAdviceApplicantModelAWBVersion.classList.remove("d-none");
      ShippingAdviceApplicantModelBOLVersion.classList.add("d-none");
    } else {
      console.log("SEA YES");
      ShippingAdviceApplicantModelBOLVersion.classList.remove("d-none");
      ShippingAdviceApplicantModelAWBVersion.classList.add("d-none");
    }

    document.getElementById("ShippingAdviceApplicantModallBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    document.getElementById("ShippingAdviceApplicantModelName").value = document.getElementById("lcInformationPageApplicantName").value;

    document.getElementById("ShippingAdviceApplicantModelAddress").value = document.getElementById("lcInformationPageApplicantAddress").value;

    document.getElementById("ShippingAdviceApplicantModelFaxNumber").value = document.getElementById("lcInformationPageApplicantFax").value;

    document.getElementById("ShippingAdviceApplicantModel_CarrierName").value = document.getElementById("TransportInformation_CarrierName").value;

    document.getElementById("ShippingAdviceApplicantModel_AWBNumber").value = document.getElementById("TransportInformation_MAWBNumber").value;

    document.getElementById("ShippingAdviceApplicantModel_HAWBNumber").value = document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

    document.getElementById("ShippingAdviceApplicantModel_FlightDate").value = document.getElementById("TransportInformation_1stFlightDate").value;

    document.getElementById("ShippingAdviceApplicantModel_FlightNumber").value = document.getElementById("TransportInformation_1stFlightNumber").value;

    document.getElementById("ShippingAdviceApplicantModel_InvoiceValue").value = document.getElementById("Homepage_AmtOfDraw").value;

    fetch(`${config.HOST}/getCurrency/${document.getElementById("lcInformationPageCurrency").value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("ShippingAdviceApplicantModel_Currency").value = data.currency_name_singular;
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });

    // Weight
    let ShippingAdviceApplicantModel_GrossWeightContainer1 = document.getElementById("ShippingAdviceApplicantModel_GrossWeightContainer1");
    let ShippingAdviceApplicantModel_GrossWeightContainer2 = document.getElementById("ShippingAdviceApplicantModel_GrossWeightContainer2");
    let ShippingAdviceApplicantModel_NetWeightContainer1 = document.getElementById("ShippingAdviceApplicantModel_NetWeightContainer1");
    let ShippingAdviceApplicantModel_NetWeightContainer2 = document.getElementById("ShippingAdviceApplicantModel_NetWeightContainer2");

    if (document.getElementById("TransportInformation_GrossWeight").value) {
      ShippingAdviceApplicantModel_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceApplicantModel_GrossWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceApplicantModel_GrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceApplicantModel_GrossWeightContainer1.style.display = "none";
      ShippingAdviceApplicantModel_GrossWeightContainer2.style.display = "none";
    }

    if (document.getElementById("TransportInformation_NetWeight").value) {
      ShippingAdviceApplicantModel_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceApplicantModel_GrossWeightContainer2.style.display = "flex";
      ShippingAdviceApplicantModel_NetWeightContainer1.style.display = "flex";
      ShippingAdviceApplicantModel_NetWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceApplicantModel_NetWeight").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceApplicantModel_NetWeightContainer1.style.display = "none";
      ShippingAdviceApplicantModel_NetWeightContainer2.style.display = "none";
    }

    document.getElementById("ShippingAdviceApplicantModel_InvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;

    document.getElementById("ShippingAdviceApplicantModel_InvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;

    // LC Check
    var ShippingAdviceApplicant_LCNumberCheck = document.getElementById("ShippingAdviceApplicant_LCNumberCheck");
    if (ShippingAdviceApplicant_LCNumberCheck.checked) {
      document.getElementById("ShippingAdviceApplicantModalLcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      document.getElementById("ShippingAdviceApplicantModalLcNumberContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceApplicantModalLcNumberContainer").style.display = "none";
    }

    // 2nd Applicant
    var ShippingAdviceApplicant_2ndApplicantCheck = document.getElementById("ShippingAdviceApplicant_2ndApplicantCheck");

    var ShippingAdviceApplicant_2ndApplicantContainer = document.getElementById("ShippingAdviceApplicant_2ndApplicantContainer");

    if (ShippingAdviceApplicant_2ndApplicantCheck.checked) {
      ShippingAdviceApplicant_2ndApplicantContainer.style.display = "flex";

      document.getElementById("ShippingAdviceApplicant_2ndApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      ShippingAdviceApplicant_2ndApplicantContainer.style.display = "none";
    }

    // Global Check
    var ShippingAdviceApplicant_GlobalCheck = document.getElementById("ShippingAdviceApplicant_GlobalCheck");
    if (ShippingAdviceApplicant_GlobalCheck.checked) {
      document.getElementById("ShippingAdviceApplicantModel_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      document.getElementById("ShippingAdviceApplicantModel_GlobalContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceApplicantModel_GlobalContainer").style.display = "none";
    }

    document.getElementById("ShippingAdviceApplicant_ModalBeneNameEnd").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("ShippingAdviceApplicantModel_VesselName").value = document.getElementById("TransportInformation_VesselName").value;

    document.getElementById("ShippingAdviceApplicantModel_BlNumber").value = document.getElementById("TransportInformation_MOBLNumber").value;

    document.getElementById("ShippingAdviceApplicantModel_NumberOfPackages").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    // From To
    document.getElementById("ShippingAdviceApplicantModel_AirFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceApplicantModel_AirTo").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("ShippingAdviceApplicantModel_OceanFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceApplicantModel_OceanTo").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("ShippingAdviceApplicantModel_BL_Date").value = document.getElementById("Homepage_ShipDate").value;

    var selectFieldIds = [
      "ShippingAdvice_Recipient1",
      "ShippingAdvice_Recipient2",
      "ShippingAdvice_Recipient3",
      "ShippingAdvice_Recipient4"
    ];

    let NameTemp = "";

    selectFieldIds.forEach(function (selectFieldId) {
      var selectField = document.getElementById(selectFieldId);
      if (selectField && selectField.value === "APPLICANT") {
        NameTemp = selectFieldId;
        ;
      }
    });

    if (NameTemp) {
      console.log("NameTemp: " + NameTemp);
      var convertedString = NameTemp.replace("Recipient", "Ship");
      console.log("convertedString: " + convertedString);
      var selectedValue = document.getElementById(convertedString).value;
      console.log("selectedValue:  " + selectedValue)
      document.getElementById("ShippingAdviceApplicant_Name").value = selectedValue;

    } else {
      document.getElementById("ShippingAdviceApplicant_Name").value = "";

    }



  });

  // ! SHIPPING ADVICE INSURANCE
  const ShippingAdviceInsurance_HomeTitle = document.getElementById("ShippingAdviceInsurance_HomeTitle");
  let ShippingAdviceInsurance = false;

  ShippingAdviceInsurance_HomeTitle.addEventListener("dblclick", function (event) {
    console.log("Shipping Advice Insurance HomeTitle double clicked");
    event.preventDefault();

    if (!ShippingAdviceInsurance) {
      document.getElementById("ShippingAdviceInsuranceModalShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceInsuranceModel_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
      ShippingAdviceInsurance = true;
    }

    function onDescriptionChange() {
      document.getElementById("ShippingAdviceInsuranceModel_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
    }
    document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").addEventListener("input", onDescriptionChange);

    function onDateChange() {
      document.getElementById("ShippingAdviceInsuranceModalShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceInsuranceModalShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceInsuranceModalShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);

    document.getElementById("ShippingAdviceInsuranceModalShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("ShippingAdviceInsuranceModalShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;

    document.getElementById("ShippingAdviceInsurance_ModalTitle").value = document.getElementById("ShippingAdviceInsurance_ModalTitle").value;

    let PrintPage_SAAIR = document.getElementById("PrintPage_SAAIR");
    let ShippingAdviceInsuranceModelAWBVersion = document.getElementById("ShippingAdviceInsuranceModelAWBVersion");
    let ShippingAdviceInsuranceModelBOLVersion = document.getElementById("ShippingAdviceInsuranceModelBOLVersion");

    if (PrintPage_SAAIR.checked) {
      console.log("AIR YES");
      ShippingAdviceInsuranceModelAWBVersion.classList.remove("d-none");
      ShippingAdviceInsuranceModelBOLVersion.classList.add("d-none");
    } else {
      console.log("SEA YES");
      ShippingAdviceInsuranceModelBOLVersion.classList.remove("d-none");
      ShippingAdviceInsuranceModelAWBVersion.classList.add("d-none");
    }

    document.getElementById("ShippingAdviceInsuranceModallBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    document.getElementById("ShippingAdviceInsuranceModel_InsuranceName").value = document.getElementById("TransportInformation_InsuranceCompanyName").value;

    document.getElementById("ShippingAdviceInsuranceModel_InsuranceAddress").value = document.getElementById("TransportInformation_InsuranceCompanyAddress").value;

    document.getElementById("ShippingAdviceInsuranceModalFaxNumber").value = document.getElementById("TransportInformation_InsuranceCompanyFax").value;

    document.getElementById("ShippingAdviceInsuranceModel_CarrierName").value = document.getElementById("TransportInformation_CarrierName").value;

    document.getElementById("ShippingAdviceInsuranceModel_AWBNumber").value = document.getElementById("TransportInformation_MAWBNumber").value;

    document.getElementById("ShippingAdviceInsuranceModel_HAWBNumber").value = document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

    document.getElementById("ShippingAdviceInsuranceModel_FlightDate").value = document.getElementById("TransportInformation_1stFlightDate").value;

    document.getElementById("ShippingAdviceInsuranceModel_FlightNumber").value = document.getElementById("TransportInformation_1stFlightNumber").value;

    document.getElementById("ShippingAdviceInsuranceModel_InvoiceValue").value = document.getElementById("Homepage_AmtOfDraw").value;

    fetch(`${config.HOST}/getCurrency/${document.getElementById("lcInformationPageCurrency").value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("ShippingAdviceInsuranceModel_Currency").value = data.currency_name_singular;
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });




    var selectFieldIds = [
      "ShippingAdvice_Recipient1",
      "ShippingAdvice_Recipient2",
      "ShippingAdvice_Recipient3",
      "ShippingAdvice_Recipient4"
    ];

    let NameTemp = "";

    selectFieldIds.forEach(function (selectFieldId) {
      var selectField = document.getElementById(selectFieldId);
      if (selectField && selectField.value === "INSURANCE") {
        NameTemp = selectFieldId;
        ;
      }
    });


    if (NameTemp) {
      console.log("NameTemp: " + NameTemp);
      var convertedString = NameTemp.replace("Recipient", "Ship");
      console.log("convertedString: " + convertedString);
      var selectedValue = document.getElementById(convertedString).value;
      console.log("selectedValue:  " + selectedValue)
      document.getElementById("ShippingAdviceInsurance_Name").value = selectedValue;

    } else {
      document.getElementById("ShippingAdviceInsurance_Name").value = "";

    }


    document.getElementById("ShippingAdviceInsuranceModel_BL_Date").value = document.getElementById("Homepage_ShipDate").value;




    // Weight
    let ShippingAdviceInsuranceModel_GrossWeightContainer1 = document.getElementById("ShippingAdviceInsuranceModel_GrossWeightContainer1");
    let ShippingAdviceInsuranceModel_GrossWeightContainer2 = document.getElementById("ShippingAdviceInsuranceModel_GrossWeightContainer2");
    let ShippingAdviceInsuranceModel_NetWeightContainer1 = document.getElementById("ShippingAdviceInsuranceModel_NetWeightContainer1");
    let ShippingAdviceInsuranceModel_NetWeightContainer2 = document.getElementById("ShippingAdviceInsuranceModel_NetWeightContainer2");

    if (document.getElementById("TransportInformation_GrossWeight").value) {
      ShippingAdviceInsuranceModel_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceInsuranceModel_GrossWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceInsuranceModel_GrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceInsuranceModel_GrossWeightContainer1.style.display = "none";
      ShippingAdviceInsuranceModel_GrossWeightContainer2.style.display = "none";
    }

    if (document.getElementById("TransportInformation_NetWeight").value) {
      ShippingAdviceInsuranceModel_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceInsuranceModel_GrossWeightContainer2.style.display = "flex";
      ShippingAdviceInsuranceModel_NetWeightContainer1.style.display = "flex";
      ShippingAdviceInsuranceModel_NetWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceInsuranceModel_NetWeight").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceInsuranceModel_NetWeightContainer1.style.display = "none";
      ShippingAdviceInsuranceModel_NetWeightContainer2.style.display = "none";
    }

    document.getElementById("ShippingAdviceInsuranceModel_InvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;

    document.getElementById("ShippingAdviceInsuranceModel_InvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;

    // LC Check
    var ShippingAdviceInsurance_LCNumberCheck = document.getElementById("ShippingAdviceInsurance_LCNumberCheck");
    if (ShippingAdviceInsurance_LCNumberCheck.checked) {
      document.getElementById("ShippingAdviceInsuranceModalLcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      document.getElementById("ShippingAdviceInsuranceModalLcNumberContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceInsuranceModalLcNumberContainer").style.display = "none";
    }

    // 2nd Applicant
    var ShippingAdviceInsurance_2ndApplicantCheck = document.getElementById("ShippingAdviceInsurance_2ndApplicantCheck");

    var ShippingAdviceInsurance_2ndApplicantContainer = document.getElementById("ShippingAdviceInsurance_2ndApplicantContainer");

    if (ShippingAdviceInsurance_2ndApplicantCheck.checked) {
      ShippingAdviceInsurance_2ndApplicantContainer.style.display = "flex";

      document.getElementById("ShippingAdviceInsurance_2ndApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      ShippingAdviceInsurance_2ndApplicantContainer.style.display = "none";
    }

    // Global
    var ShippingAdviceInsurance_GlobalCheck = document.getElementById("ShippingAdviceInsurance_GlobalCheck");
    if (ShippingAdviceInsurance_GlobalCheck.checked) {
      document.getElementById("ShippingAdviceInsuranceModel_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      document.getElementById("ShippingAdviceInsuranceModel_GlobalContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceInsuranceModel_GlobalContainer").style.display = "none";
    }

    document.getElementById("ShippingAdviceInsuranceModalBeneNameEnd").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("ShippingAdviceInsuranceModel_VesselName").value = document.getElementById("TransportInformation_VesselName").value;

    document.getElementById("ShippingAdviceInsuranceModel_BlNumber").value = document.getElementById("TransportInformation_MOBLNumber").value;

    document.getElementById("ShippingAdviceInsuranceModel_NumberOfPackages").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    // From To
    document.getElementById("ShippingAdviceInsuranceModel_AirFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceInsuranceModel_AirTo").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("ShippingAdviceInsuranceModel_OceanFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceInsuranceModel_OceanTo").value = document.getElementById("lcInformationPageForTransportTo").value;
  });

  // ! SHIPPING ADVICE ISSUING BANK
  const ShippingAdviceIssuingBank_HomeTitle = document.getElementById("ShippingAdviceIssuingBank_HomeTitle");

  let ShippingAdviceIssuingBank = false;

  ShippingAdviceIssuingBank_HomeTitle.addEventListener("dblclick", function (event) {
    console.log("Shipping Advice IssuingBank HomeTitle double clickeddddd");
    event.preventDefault();

    if (!ShippingAdviceIssuingBank) {
      document.getElementById("ShippingAdviceIssuingBankModalShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceIssuingBankModel_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
      ShippingAdviceIssuingBank = true;
    }

    function onDescriptionChange() {
      document.getElementById("ShippingAdviceIssuingBankModel_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
    }
    document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").addEventListener("input", onDescriptionChange);

    function onDateChange() {
      document.getElementById("ShippingAdviceIssuingBankModalShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceIssuingBankModalShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceIssuingBankModalShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);

    document.getElementById("ShippingAdviceIssuingBankModalShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("ShippingAdviceIssuingBankModalShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;

    let PrintPage_SAAIR = document.getElementById("PrintPage_SAAIR");
    let ShippingAdviceIssuingBankModelAWBVersion = document.getElementById("ShippingAdviceIssuingBankModelAWBVersion");
    let ShippingAdviceIssuingBankModelBOLVersion = document.getElementById("ShippingAdviceIssuingBankModelBOLVersion");

    if (PrintPage_SAAIR.checked) {
      console.log("AIR YES");
      ShippingAdviceIssuingBankModelAWBVersion.classList.remove("d-none");
      ShippingAdviceIssuingBankModelBOLVersion.classList.add("d-none");
    } else {
      console.log("SEA YES");
      ShippingAdviceIssuingBankModelBOLVersion.classList.remove("d-none");
      ShippingAdviceIssuingBankModelAWBVersion.classList.add("d-none");
    }

    document.getElementById("ShippingAdviceIssuingBankModalBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    document.getElementById("ShippingAdviceIssuingBankModalName").value = document.getElementById("lcInformationPageIssuingBankName").value;

    document.getElementById("ShippingAdviceIssuingBankModalAddress").value = document.getElementById("lcInformationPageIssuingBankAddress").value;

    document.getElementById("ShippingAdviceIssuingBankModalFaxNumber").value = document.getElementById("lcInformationPageIssuingBankFax").value;

    document.getElementById("ShippingAdviceIssuingBankModel_CarrierName").value = document.getElementById("TransportInformation_CarrierName").value;

    document.getElementById("ShippingAdviceIssuingBankModel_AWBNumber").value = document.getElementById("TransportInformation_MAWBNumber").value;

    document.getElementById("ShippingAdviceIssuingBankModel_HAWBNumber").value = document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

    document.getElementById("ShippingAdviceIssuingBankModel_FlightDate").value = document.getElementById("TransportInformation_1stFlightDate").value;

    document.getElementById("ShippingAdviceIssuingBankModel_FlightNumber").value = document.getElementById("TransportInformation_1stFlightNumber").value;

    document.getElementById("ShippingAdviceIssuingBankModel_InvoiceValue").value = document.getElementById("Homepage_AmtOfDraw").value;

    fetch(`${config.HOST}/getCurrency/${document.getElementById("lcInformationPageCurrency").value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("ShippingAdviceIssuingBankModel_Currency").value = data.currency_name_singular;
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });





    var selectFieldIds = [
      "ShippingAdvice_Recipient1",
      "ShippingAdvice_Recipient2",
      "ShippingAdvice_Recipient3",
      "ShippingAdvice_Recipient4"
    ];

    let NameTemp = "";

    selectFieldIds.forEach(function (selectFieldId) {
      var selectField = document.getElementById(selectFieldId);
      if (selectField && selectField.value === "ISSUING BANK") {
        NameTemp = selectFieldId;
        ;
      }
    });

    if (NameTemp) {
      console.log("NameTemp: " + NameTemp);
      var convertedString = NameTemp.replace("Recipient", "Ship");
      console.log("convertedString: " + convertedString);
      var selectedValue = document.getElementById(convertedString).value;
      console.log("selectedValue:  " + selectedValue)
      document.getElementById("ShippingAdviceIssuingBank_Name").value = selectedValue;

    } else {
      document.getElementById("ShippingAdviceIssuingBank_Name").value = "";

    }


    document.getElementById("ShippingAdviceIssuingBankModel_BL_Date").value = document.getElementById("Homepage_ShipDate").value;





    // Weight
    let ShippingAdviceIssuingBankModel_GrossWeightContainer1 = document.getElementById("ShippingAdviceIssuingBankModel_GrossWeightContainer1");
    let ShippingAdviceIssuingBankModel_GrossWeightContainer2 = document.getElementById("ShippingAdviceIssuingBankModel_GrossWeightContainer2");
    let ShippingAdviceIssuingBankModel_NetWeightContainer1 = document.getElementById("ShippingAdviceIssuingBankModel_NetWeightContainer1");
    let ShippingAdviceIssuingBankModel_NetWeightContainer2 = document.getElementById("ShippingAdviceIssuingBankModel_NetWeightContainer2");

    if (document.getElementById("TransportInformation_GrossWeight").value) {
      ShippingAdviceIssuingBankModel_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceIssuingBankModel_GrossWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceIssuingBankModel_GrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceIssuingBankModel_GrossWeightContainer1.style.display = "none";
      ShippingAdviceIssuingBankModel_GrossWeightContainer2.style.display = "none";
    }

    if (document.getElementById("TransportInformation_NetWeight").value) {
      ShippingAdviceIssuingBankModel_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceIssuingBankModel_GrossWeightContainer2.style.display = "flex";
      ShippingAdviceIssuingBankModel_NetWeightContainer1.style.display = "flex";
      ShippingAdviceIssuingBankModel_NetWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceIssuingBankModel_NetWeight").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceIssuingBankModel_NetWeightContainer1.style.display = "none";
      ShippingAdviceIssuingBankModel_NetWeightContainer2.style.display = "none";
    }

    document.getElementById("ShippingAdviceIssuingBankModel_InvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;

    document.getElementById("ShippingAdviceIssuingBankModel_InvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;

    // LC Check
    if (document.getElementById("ShippingAdviceIssuingBank_LCNumberCheck").checked) {
      document.getElementById("ShippingAdviceIssuingBankModel_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      document.getElementById("ShippingAdviceIssuingBankModel_LcNumberContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceIssuingBankModel_LcNumberContainer").style.display = "none";
    }

    // 2nd Applicant
    var ShippingAdviceIssuingBank_2ndApplicantCheck = document.getElementById("ShippingAdviceIssuingBank_2ndApplicantCheck");

    var ShippingAdviceIssuingBank_2ndApplicantContainer = document.getElementById("ShippingAdviceIssuingBank_2ndApplicantContainer");

    if (ShippingAdviceIssuingBank_2ndApplicantCheck.checked) {
      ShippingAdviceIssuingBank_2ndApplicantContainer.style.display = "flex";

      document.getElementById("ShippingAdviceIssuingBank_2ndApplicant").value =
        document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      ShippingAdviceIssuingBank_2ndApplicantContainer.style.display = "none";
    }

    // Global
    if (document.getElementById("ShippingAdviceIssuingBank_GlobalCheck").checked) {
      document.getElementById("ShippingAdviceIssuingBankModel_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      document.getElementById("ShippingAdviceIssuingBankModel_GlobalContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceIssuingBankModel_GlobalContainer").style.display = "none";
    }

    document.getElementById("ShippingAdviceIssuingBankModel_BeneNameEnd").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("ShippingAdviceIssuingBankModel_VesselName").value = document.getElementById("TransportInformation_VesselName").value;

    document.getElementById("ShippingAdviceIssuingBankModel_BlNumber").value = document.getElementById("TransportInformation_MOBLNumber").value;

    document.getElementById("ShippingAdviceIssuingBankModel_NumberOfPackages").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    // From To
    document.getElementById("ShippingAdviceIssuingBankModel_AirFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceIssuingBankModel_AirTo").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("ShippingAdviceIssuingBankModel_OceanFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceIssuingBankModel_OceanTo").value = document.getElementById("lcInformationPageForTransportTo").value;
  });

  // ! SHIPPING ADVICE Other Recipient
  const ShippingAdviceOtherRecipient_HomeTitle = document.getElementById("ShippingAdviceOtherRecipient_HomeTitle");

  let ShippingAdviceOtherRecipient = false;

  ShippingAdviceOtherRecipient_HomeTitle.addEventListener("dblclick", function (event) {
    console.log("Shipping Advice Other Recipient HomeTitle double clickeddddd");
    event.preventDefault();

    if (!ShippingAdviceOtherRecipient) {
      document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceOtherRecipientModal_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
      ShippingAdviceOtherRecipient = true;
    }

    function onDescriptionChange() {
      document.getElementById("ShippingAdviceOtherRecipientModal_MerchandiseDescription").value = document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;
    }
    document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").addEventListener("input", onDescriptionChange);

    function onDateChange() {
      document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);

    document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate2").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate3").value = document.getElementById("Homepage_ShipDate").value;

    let PrintPage_SAAIR = document.getElementById("PrintPage_SAAIR");
    let ShippingAdviceOtherRecipientModelAWBVersion = document.getElementById("ShippingAdviceOtherRecipientModelAWBVersion");
    let ShippingAdviceOtherRecipientModelBOLVersion = document.getElementById("ShippingAdviceOtherRecipientModelBOLVersion");

    if (PrintPage_SAAIR.checked) {
      console.log("AIR YES");
      ShippingAdviceOtherRecipientModelAWBVersion.classList.remove("d-none");
      ShippingAdviceOtherRecipientModelBOLVersion.classList.add("d-none");
    } else {
      console.log("SEA YES");
      ShippingAdviceOtherRecipientModelBOLVersion.classList.remove("d-none");
      ShippingAdviceOtherRecipientModelAWBVersion.classList.add("d-none");
    }

    document.getElementById("ShippingAdviceOtherRecipientModal_BeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_Name").value = document.getElementById("TransportInformation_OtherReceiptName").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_Address").value = document.getElementById("TransportInformation_OtherReceiptAddress").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_FaxNumber").value = document.getElementById("TransportInformation_OtherReceiptFax").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_CarrierName").value = document.getElementById("TransportInformation_CarrierName").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_AWBNumber").value = document.getElementById("TransportInformation_MAWBNumber").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_HAWBNumber").value = document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_FlightDate").value = document.getElementById("TransportInformation_1stFlightDate").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_FlightNumber").value = document.getElementById("TransportInformation_1stFlightNumber").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_InvoiceValue").value = document.getElementById("Homepage_AmtOfDraw").value;

    fetch(`${config.HOST}/getCurrency/${document.getElementById("lcInformationPageCurrency").value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        document.getElementById("ShippingAdviceOtherRecipientModal_Currency").value = data.currency_name_singular;
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });



    var selectFieldIds = [
      "ShippingAdvice_Recipient1",
      "ShippingAdvice_Recipient2",
      "ShippingAdvice_Recipient3",
      "ShippingAdvice_Recipient4"
    ];

    let NameTemp = "";

    selectFieldIds.forEach(function (selectFieldId) {
      var selectField = document.getElementById(selectFieldId);
      if (selectField && selectField.value === "OTHER RECIPIENT") {
        NameTemp = selectFieldId;
        ;
      }
    });

    if (NameTemp) {
      console.log("NameTemp: " + NameTemp);
      var convertedString = NameTemp.replace("Recipient", "Ship");
      console.log("convertedString: " + convertedString);
      var selectedValue = document.getElementById(convertedString).value;
      console.log("selectedValue:  " + selectedValue)
      document.getElementById("ShippingAdviceOtherRecipient_Name").value = selectedValue;

    } else {
      document.getElementById("ShippingAdviceOtherRecipient_Name").value = "";

    }



    document.getElementById("ShippingAdviceOtherRecipientModal_BL_Date").value = document.getElementById("Homepage_ShipDate").value;


    // Weight
    let ShippingAdviceOtherRecipientModal_GrossWeightContainer1 = document.getElementById("ShippingAdviceOtherRecipientModal_GrossWeightContainer1");
    let ShippingAdviceOtherRecipientModal_GrossWeightContainer2 = document.getElementById("ShippingAdviceOtherRecipientModal_GrossWeightContainer2");
    let ShippingAdviceOtherRecipientModal_NetWeightContainer1 = document.getElementById("ShippingAdviceOtherRecipientModal_NetWeightContainer1");
    let ShippingAdviceOtherRecipientModal_NetWeightContainer2 = document.getElementById("ShippingAdviceOtherRecipientModal_NetWeightContainer2");

    if (document.getElementById("TransportInformation_GrossWeight").value) {
      ShippingAdviceOtherRecipientModal_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceOtherRecipientModal_GrossWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceOtherRecipientModal_GrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceOtherRecipientModal_GrossWeightContainer1.style.display = "none";
      ShippingAdviceOtherRecipientModal_GrossWeightContainer2.style.display = "none";
    }

    if (document.getElementById("TransportInformation_NetWeight").value) {
      ShippingAdviceOtherRecipientModal_GrossWeightContainer1.style.display = "flex";
      ShippingAdviceOtherRecipientModal_GrossWeightContainer2.style.display = "flex";
      ShippingAdviceOtherRecipientModal_NetWeightContainer1.style.display = "flex";
      ShippingAdviceOtherRecipientModal_NetWeightContainer2.style.display = "flex";
      document.getElementById("ShippingAdviceOtherRecipientModal_NetWeight").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      ShippingAdviceOtherRecipientModal_NetWeightContainer1.style.display = "none";
      ShippingAdviceOtherRecipientModal_NetWeightContainer2.style.display = "none";
    }

    document.getElementById("ShippingAdviceOtherRecipientModal_InvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_InvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;

    // LC Check
    if (document.getElementById("ShippingAdviceOtherRecipient_LCNumberCheck").checked) {
      document.getElementById("ShippingAdviceOtherRecipientModal_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      document.getElementById("ShippingAdviceOtherRecipientModal_LcNumberContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceOtherRecipientModal_LcNumberContainer").style.display = "none";
    }

    // 2nd Applicant
    var ShippingAdviceOtherRecipient_2ndApplicantCheck = document.getElementById("ShippingAdviceOtherRecipient_2ndApplicantCheck");

    var ShippingAdviceOtherRecipient_2ndApplicantContainer = document.getElementById("ShippingAdviceOtherRecipient_2ndApplicantContainer");

    if (ShippingAdviceOtherRecipient_2ndApplicantCheck.checked) {
      ShippingAdviceOtherRecipient_2ndApplicantContainer.style.display = "flex";

      document.getElementById("ShippingAdviceOtherRecipient_2ndApplicant").value =
        document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      ShippingAdviceOtherRecipient_2ndApplicantContainer.style.display = "none";
    }

    // Global Check
    if (document.getElementById("ShippingAdviceOtherRecipient_GlobalCheck").checked) {
      document.getElementById("ShippingAdviceOtherRecipientModal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      document.getElementById("ShippingAdviceOtherRecipientModal_GlobalContainer").style.display = "block";
    } else {
      document.getElementById("ShippingAdviceOtherRecipientModal_GlobalContainer").style.display = "none";
    }

    document.getElementById("ShippingAdviceOtherRecipientModal_ModalBeneNameEnd").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_VesselName").value = document.getElementById("TransportInformation_VesselName").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_BlNumber").value = document.getElementById("TransportInformation_MOBLNumber").value;

    document.getElementById("ShippingAdviceOtherRecipientModal_NumberOfPackages").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    // From To
    document.getElementById("ShippingAdviceOtherRecipientModal_AirFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceOtherRecipientModal_AirTo").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("ShippingAdviceOtherRecipientModal_OceanFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("ShippingAdviceOtherRecipientModal_OceanTo").value = document.getElementById("lcInformationPageForTransportTo").value;
  });

  // ! WEIGHT LIST
  const WeightList_HomeTitle = document.getElementById("WeightList_HomeTitle");
  let isDialogPopulated_WL = false;

  WeightList_HomeTitle.addEventListener("dblclick", function (event) {
    console.log("Weight HomeTitle double clickeddddd");
    event.preventDefault();

    //! Start Check Box
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("WeightListModalDCS").value = DCSText;
      document.getElementById("WeightListModalDCSContainer").style.display = "flex";
    } else {
      document.getElementById("WeightListModalDCS").value = "";
      document.getElementById("WeightListModalDCSContainer").style.display = "none";
    }

    // LC check
    var WeightList_LCNumberCheck = document.getElementById("WeightList_LCNumberCheck");

    if (WeightList_LCNumberCheck.checked) {
      document.getElementById("WeightListModalLCNumberContainer").style.display = "flex";
      document.getElementById("WeightListModalLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;
    } else {
      document.getElementById("WeightListModalLCNumberContainer").style.display = "none";
    }

    // Second Applicant Check
    var WeightList_2ndApplicantCheck = document.getElementById("WeightList_2ndApplicantCheck");
    var WeightListModallApplicantDetailsContainer = document.getElementById("WeightListModallApplicantDetailsContainer");
    var WeightListModall2ndApplicantDetailsContainer = document.getElementById("WeightListModall2ndApplicantDetailsContainer");

    if (WeightList_2ndApplicantCheck.checked) {
      WeightListModall2ndApplicantDetailsContainer.style.display = "flex";
      WeightListModallApplicantDetailsContainer.style.display = "none";
      document.getElementById("WeightListModall2ndApplicantDetails").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      WeightListModall2ndApplicantDetailsContainer.style.display = "none";
      WeightListModallApplicantDetailsContainer.style.display = "block";
    }

    // Global Check
    var WeightList_GlobalCheck = document.getElementById("WeightList_GlobalCheck");
    if (WeightList_GlobalCheck.checked) {
      WeightListModalGlobalContainer;
      document.getElementById("WeightListModalGlobalContainer").style.display = "flex";
      document.getElementById("WeightListModalGlobal").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      document.getElementById("WeightListModalGlobalContainer").style.display = "none";
    }

    //! End Check Box

    document.getElementById("WeightList_ModalTitle").value = document.getElementById("WeightList_HomeTitle").value;
    //Simple input Fields values
    document.getElementById("WeightListModalBeneNameEnd").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("WeightListModalInvoiceNumber").value = document.getElementById("TransportInformation_InvoiceNumber").value;
    document.getElementById("WeightListModalLCNumber").value = document.getElementById("lcInformationPageLcNumber").value;

    if (!isDialogPopulated_WL) {
      document.getElementById("WeightListModalInvoiceDate").value = document.getElementById("TransportInformation_InvoiceDate").value;
      document.getElementById("WeightListModalShortMerchadiseDescription").value = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;

      isDialogPopulated_WL = true;
    }

    const shortMerchandiseDescForBL = document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL");
    const WeightListModalShortMerchadiseDescription = document.getElementById("WeightListModalShortMerchadiseDescription");

    // Function to update the packing list description
    function onDescriptionChange() {
      WeightListModalShortMerchadiseDescription.value = shortMerchandiseDescForBL.value;
    }

    // Add an event listener for input changes
    shortMerchandiseDescForBL.addEventListener("input", onDescriptionChange);

    let WeightListModalGrossWeightContainer = document.getElementById("WeightListModalGrossWeightContainer");
    let WeightListModalNetWeightContainer = document.getElementById("WeightListModalNetWeightContainer");

    if (document.getElementById("TransportInformation_GrossWeight").value) {
      WeightListModalGrossWeightContainer.style.display = "flex";
      document.getElementById("WeightListModalGrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      WeightListModalGrossWeightContainer.style.display = "none";
    }

    if (document.getElementById("TransportInformation_NetWeight").value) {
      WeightListModalNetWeightContainer.style.display = "flex";
      document.getElementById("WeightListModalNetWeight").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      WeightListModalNetWeightContainer.style.display = "none";
    }

    document.getElementById("WeightListModalNumberOfPieces").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    //  Bene and Applicant Boxes
    document.getElementById("WeightListModallBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + document.getElementById("LCInformation_BENEFICIARYAddress").value;

    document.getElementById("WeightListModallApplicantDetails").value = document.getElementById("lcInformationPageApplicantName").value + "\n" + document.getElementById("lcInformationPageApplicantAddress").value;

    // Limited Certifications
    function updateLimitedCertificationsWeightList() {
      var checkbox = document.getElementById("lcInformationPageLimitedCertifications_PLcheckbox");
      var textArea = document.getElementById("Weightlist_LimitedCertification");

      if (checkbox.checked) {
        textArea.value = document.getElementById("lcInformationPageLimitedCertifications").value;
        textArea.style.display = "block";
        document.getElementById("Weightlist_LimitedCertificationContainer").style.display = "block";
      } else {
        textArea.value = "";
        textArea.classList.remove("PrintTextAreaZoomButton"); // Remove the specific class
        textArea.style.display = "none"; // Hide the text area
        document.getElementById("Weightlist_LimitedCertificationContainer").style.display = "none";
      }
    }

    document.getElementById("lcInformationPageLimitedCertifications_PLcheckbox").addEventListener("change", updateLimitedCertificationsWeightList);

    updateLimitedCertificationsWeightList();
  });

  // Insurance Form Certificate
  const InsuranceForm_HomeTitle = document.getElementById("InsuranceForm_HomeTitle");

  let isDialogPopulated_Insurance = false;
  InsuranceForm_HomeTitle.addEventListener("dblclick", function (event) {
    console.log("Shipping Advice Other Recipient HomeTitle double clickeddddd");
    event.preventDefault();

    if (!isDialogPopulated_Insurance) {
      document.getElementById("InsuranceForm_Shipdate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("InsuranceForm_Description").value = document.getElementById("lcInformationPageInsurranceMerchadiseDescription").value;
      document.getElementById("InsuranceForm_SignatureLine").value = "AS AGENT FOR THE BENEFICIARY " + document.getElementById("LCInformation_BENEFICIARYName").value;

      isDialogPopulated_Insurance = true;
    }

    function onDescriptionChange() {
      document.getElementById("InsuranceForm_Description").value = document.getElementById("lcInformationPageInsurranceMerchadiseDescription").value;
    }
    document.getElementById("lcInformationPageInsurranceMerchadiseDescription").addEventListener("input", onDescriptionChange);

    function onDateChange() {
      document.getElementById("InsuranceForm_Shipdate").value = document.getElementById("Homepage_ShipDate").value;
    }
    document.getElementById("Homepage_ShipDate").addEventListener("input", onDateChange);

    document.getElementById("InsuranceForm_Shipdate").addEventListener("input", function () {
      document.getElementById("InsuranceForm_Shipdate2").value = document.getElementById("InsuranceForm_Shipdate").value;
    });

    document.getElementById("InsuranceForm_Shipdate2").value = document.getElementById("InsuranceForm_Shipdate").value;

    // LC check
    var printLcNumberInsuranceForm = document.getElementById("printLcNumberInsuranceForm");

    if (printLcNumberInsuranceForm.checked) {
      document.getElementById("InsuranceForm_LcNumberContainer1").style.display = "flex";
      document.getElementById("InsuranceForm_LcNumberContainer2").style.display = "flex";
      document.getElementById("InsuranceForm_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
    } else {
      document.getElementById("InsuranceForm_LcNumberContainer1").style.display = "none";
      document.getElementById("InsuranceForm_LcNumberContainer2").style.display = "none";
    }

    // Global Check
    var printGlobalInsuranceForm = document.getElementById("printGlobalInsuranceForm");
    if (printGlobalInsuranceForm.checked) {
      document.getElementById("InsuranceForm_GlobalCertificationContainer").style.display = "flex";
      document.getElementById("InsuranceForm_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      document.getElementById("InsuranceForm_GlobalCertificationContainer").style.display = "none";
    }

    //Simple input Fields values
    var TransportInformation_InsuranceChg = document.getElementById("TransportInformation_InsuranceChg").value;
    let lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
    let lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
    let lcInformationPageCurrencyValue = lcInformationPageCurrencyOption.value;

    const requestUrlCurrency = `${config.HOST}/getCurrency/${lcInformationPageCurrencyValue}`;
    fetch(requestUrlCurrency, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((currencyData) => {
        console.log("Success:", currencyData);
        let currency = currencyData;



        let TransportInformation_InsurancePercentage = document.getElementById("TransportInformation_InsurancePercentage");
        let TransportInformation_InsurancePercentageOption = TransportInformation_InsurancePercentage.options[TransportInformation_InsurancePercentage.selectedIndex];
        let TransportInformation_InsurancePercentageText = TransportInformation_InsurancePercentageOption.text;

        console.log('TransportInformation_InsurancePercentageText:' + TransportInformation_InsurancePercentageText);

        let Homepage_AmtOfDraw = document.getElementById('Homepage_AmtOfDraw');
        let Homepage_AmtOfDrawValue = Homepage_AmtOfDraw.value.trim();

        if (Homepage_AmtOfDrawValue !== '' && TransportInformation_InsurancePercentageText !== '0') {

          console.log('I am Here');

          let value = (TransportInformation_InsurancePercentageText / 100) * Homepage_AmtOfDrawValue;


          let amountWithCommas = parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
          document.getElementById("InsuranceForm_AmtOfInsurance").value = currency.currency_code + "  " + currency.currency_symbol + "  " + amountWithCommas;

          const words = convertCurrencyToWords(value, currency.currency_name_singular, currency.currency_name_plural, currency.currency_fraction_name_singular, currency.currency_fraction_name_plural);
          document.getElementById("InsuranceForm_AmtInWords").value = words + " " + "(" + currency.currency_description + ")";


        } else {
          console.log('I am There');

          let TransportInformation_InsuranceAmt = document.getElementById("TransportInformation_InsuranceAmt").value;
          let amountWithCommas = parseFloat(TransportInformation_InsuranceAmt).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
          document.getElementById("InsuranceForm_AmtOfInsurance").value = currency.currency_code + "  " + currency.currency_symbol + "  " + amountWithCommas;

          const words = convertCurrencyToWords(TransportInformation_InsuranceAmt, currency.currency_name_singular, currency.currency_name_plural, currency.currency_fraction_name_singular, currency.currency_fraction_name_plural);

          document.getElementById("InsuranceForm_AmtInWords").value = words + " " + "(" + currency.currency_description + ")";
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });

    document.getElementById("InsuranceForm_ShipperOrBene").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    document.getElementById("InsuranceForm_LoadPoint").value = document.getElementById("lcInformationPageLoadOnBoard").value;

    let airRadio = document.getElementById("PrintPage_SAAIR");

    if (airRadio.checked) {
      document.getElementById("InsuranceForm_VesselNameLabel").textContent = "CARRIER NAME";

      document.getElementById("InsuranceForm_VesselName").value = document.getElementById("TransportInformation_CarrierName").value;
    } else {
      document.getElementById("InsuranceForm_VesselNameLabel").textContent = "VESSEL NAME";
      document.getElementById("InsuranceForm_VesselName").value = document.getElementById("TransportInformation_VesselName").value;
    }

    document.getElementById("InsuranceForm_LoadDispatch").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("InsuranceForm_TransportTo").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("InsuranceForm_MarksAndNumbers").value = document.getElementById("TransportInformation_MarksAndNumber").value;

    let WeightListModalGrossWeightContainer = document.getElementById("WeightListModalGrossWeightContainer");
    let WeightListModalNetWeightContainer = document.getElementById("WeightListModalNetWeightContainer");

    if (document.getElementById("TransportInformation_GrossWeight").value) {
      WeightListModalGrossWeightContainer.style.display = "flex";
      document.getElementById("WeightListModalGrossWeight").value = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      WeightListModalGrossWeightContainer.style.display = "none";
    }

    if (document.getElementById("TransportInformation_NetWeight").value) {
      WeightListModalNetWeightContainer.style.display = "flex";
      document.getElementById("WeightListModalNetWeight").value = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value;
    } else {
      WeightListModalNetWeightContainer.style.display = "none";
    }

    document.getElementById("WeightListModalNumberOfPieces").value = document.getElementById("TransportInformation_NumberOfPieces").value;

    //  Bene and Applicant Boxes
    let beneAddress = document.getElementById("LCInformation_BENEFICIARYAddressStore").value;
    let beneComponents = beneAddress.split(", ");
    let beneFormattedAddress = beneComponents.join(",\n");

    document.getElementById("WeightListModallBeneDetails").value = document.getElementById("LCInformation_BENEFICIARYName").value + "\n" + beneFormattedAddress;

    let ApplicantAddress = document.getElementById("lcInformationPageApplicantAddress").value;
    let ApplicantComponents = ApplicantAddress.split(", ");
    let ApplicantFormattedAddress = ApplicantComponents.join(",\n");

    document.getElementById("WeightListModallApplicantDetails").value = document.getElementById("lcInformationPageApplicantName").value + "\n" + ApplicantFormattedAddress;

    // Limited Certifications
    function updateLimitedCertificationsWeightList() {
      var checkbox = document.getElementById("lcInformationPageLimitedCertifications_PLcheckbox");
      var textArea = document.getElementById("Weightlist_LimitedCertification");

      if (checkbox.checked) {
        textArea.value = document.getElementById("lcInformationPageLimitedCertifications").value;
        textArea.style.display = "block";
        document.getElementById("Weightlist_LimitedCertificationContainer").style.display = "block";
      } else {
        textArea.value = "";
        textArea.classList.remove("PrintTextAreaZoomButton"); // Remove the specific class
        textArea.style.display = "none"; // Hide the text area
        document.getElementById("Weightlist_LimitedCertificationContainer").style.display = "none";
      }
    }

    document.getElementById("lcInformationPageLimitedCertifications_PLcheckbox").addEventListener("change", updateLimitedCertificationsWeightList);

    updateLimitedCertificationsWeightList();
  });
}
