export function shippingAdviceOtherRecipientFunction(
    pdf,
    printText,
    OriginalOrCopy,
    createCell,
    createBorder,
    longText,
    drawLine,
    checkbox,
    radioButtonpdf,
    mylongText,
    formatDate
  ) {
  
  
    // 1. LC Check
    let text4 = "";
    if (document.getElementById("ShippingAdviceOtherRecipient_LCNumberCheck").checked) {
      printText(pdf, 5.0, 1.7, "LC Number: ", true, 10);
      text4 = document.getElementById("lcInformationPageLcNumber").value;
      printText(pdf, 6.0, 1.7, text4, true, 10);
    }
  
  
    // 2. Second Applicant
    var SA1 = "";
    var SA2 = "";
    var SA3 = "";
    var ShippingAdviceOtherRecipient_2ndApplicantCheck = document.getElementById("ShippingAdviceOtherRecipient_2ndApplicantCheck");
    if (ShippingAdviceOtherRecipient_2ndApplicantCheck.checked) {
        console.log('2nd Applicant Clicked');
        SA1 = document.getElementById('lcInformationSecondApplicantHeader').value;
        SA2 = document.getElementById('lcInformationSecondApplicantName').value;
        SA3 = document.getElementById('lcInformationSecondApplicantAddress').value;
        printText(pdf, 0.57, 3.30, SA1, true, 8);
        printText(pdf, 0.57, 3.45, SA2, true, 8);
        printText(pdf, 0.57, 3.60, SA3, true, 8);
  
    }
  
  
    // 3. Global Check
    let LongText3 = "";
    var ShippingAdviceOtherRecipient_GlobalCheck = document.getElementById("ShippingAdviceOtherRecipient_GlobalCheck");
    if (ShippingAdviceOtherRecipient_GlobalCheck.checked) {
      LongText3 = document.getElementById("LC_Information_Global_Certification").value;
      mylongText(pdf, LongText3, 0.57, 9.15, 7.0, 8, true, false);
    }
  
  
    //! End Check Box
  
    var selectFieldIds = [
      "ShippingAdvice_Recipient1",
      "ShippingAdvice_Recipient2",
      "ShippingAdvice_Recipient3",
      "ShippingAdvice_Recipient4"
    ];
  
    let NameTemp = "";
    let selectedValue = ""
    selectFieldIds.forEach(function(selectFieldId) {
      var selectField = document.getElementById(selectFieldId);
      if (selectField && selectField.value === "OTHER RECIPIENT") {
        NameTemp = selectFieldId;
        ;
      }
    });
  
    if(NameTemp) {
      var convertedString = NameTemp.replace("Recipient", "Ship");
      selectedValue = document.getElementById(convertedString).value;
    }
  
    selectedValue = selectedValue || "";
    let text7 = document.getElementById("ShippingAdviceOtherRecipient_Name").value ? document.getElementById("ShippingAdviceOtherRecipient_Name").value : selectedValue;              
  
    printText(pdf, 1.5, 3.1, text7, true, 8, { align: "left" });
  
  
  
  
    //! Text Data
  
    printText(pdf, 0.57, 1.0, document.getElementById("LCInformation_BENEFICIARYName").value, true, 8);
    mylongText(pdf, document.getElementById("LCInformation_BENEFICIARYAddress").value, 0.57, 1.0, 5.0, 8, true, false);
  
    let text6 = document.getElementById("ShippingAdviceOtherRecipient_HomeTitle").value;
    printText(pdf, 2.70, 2.68, text6, true, 16);
  
  
  
  
    let text8 = document.getElementById("TransportInformation_OtherReceiptName").value;
    printText(pdf, 3.7, 3.1, text8, true, 8);
  
    mylongText(pdf, document.getElementById('TransportInformation_OtherReceiptAddress').value, 3.7, 3.2, 4.0, 8, true, false);
  
  
    printText(pdf, 0.57, 3.90, "FAX NUMBER: " + document.getElementById('ShippingAdviceOtherRecipientModal_FaxNumber').value, true, 8);
  
    let FreeText1 = document.getElementById('ShippingAdviceOtherRecipientModel_FreeText1').value ? document.getElementById('ShippingAdviceOtherRecipientModel_FreeText1').value : "";              
    let FreeText2 = document.getElementById('ShippingAdviceOtherRecipientModel_FreeText2').value ? document.getElementById('ShippingAdviceOtherRecipientModel_FreeText2').value : "";              
    
    mylongText(pdf, FreeText1, 0.57, 4.10, 7.0, 8, true, false);
    mylongText(pdf, FreeText2, 0.57, 4.40, 7.0, 8, true, false);
  
  
   let text5 = document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate").value ? document.getElementById("ShippingAdviceOtherRecipientModal_ShippmentDate").value: document.getElementById("Homepage_ShipDate").value;
    text5 = formatDate(text5);
  
    printText(pdf, 0.57, 2.2, "DATE: ", true, 8);
    printText(pdf, 1.1, 2.2, text5, true, 8);
    printText(pdf, 2.17, 5.0, "DATE OF SHIPMENT: ", true, 8);
    printText(pdf, 4.0, 5.0, text5, true, 8);
  
  
  
    let airRadio = document.getElementById("PrintPage_SAAIR");
    let text15 = "";
    let text16 = "";
    let text17 = "";
    let text18 = "";
    let text19 = "";
    let text20 = "";
    let text21 = "";
  
    if (airRadio.checked) {
      console.log("air");
      text15 = document.getElementById("ShippingAdviceOtherRecipientModal_CarrierName").value;
      text16 = document.getElementById("ShippingAdviceOtherRecipientModal_AWBNumber").value;
      text17 = document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;
      text18 = document.getElementById("TransportInformation_1stFlightDate").value;
      text18 = formatDate(text18);
      text19 = document.getElementById("ShippingAdviceOtherRecipientModal_FlightNumber").value;
      text20 = document.getElementById("ShippingAdviceOtherRecipientModal_AirFrom").value;
      text21 = document.getElementById("ShippingAdviceOtherRecipientModal_AirTo").value;
  
      printText(pdf, 2.397, 5.2, "CARRIER NAME: ", true, 8);
      printText(pdf, 4.00, 5.2, text15, true, 8);
  
      printText(pdf, 2.49, 5.4, "AWB NUMBER: ", true, 8);
      printText(pdf, 4.00, 5.4, text16, true, 8);
  
      printText(pdf, 5.10, 5.4, "HOUSE AIRWAY BILL NO.: ", true, 8);
      printText(pdf, 6.60, 5.4, text17, true, 8);
  
      printText(pdf, 2.55, 5.6, "FLIGHT DATE: ", true, 8);
      printText(pdf, 4.00, 5.6, text18, true, 8);
  
      printText(pdf, 2.38, 5.8, "FLIGHT NUMBER: ", true, 8);
      printText(pdf, 4.00, 5.8, text19, true, 8);
  
      printText(pdf, 2.97, 6.0, "FROM: ", true, 8);
      printText(pdf, 4.00, 6.0, text20, true, 8);
  
      printText(pdf, 3.16, 6.2, "TO: ", true, 8);
      printText(pdf, 4.00, 6.2, text21, true, 8);
  
    } else{
      text15 = document.getElementById("TransportInformation_VesselName").value;
      text17 = document.getElementById("TransportInformation_MOBLNumber").value;
      text20 = document.getElementById("lcInformationPageLoadOnBoard").value;
      text21 = document.getElementById("lcInformationPageForTransportTo").value;
      text18 = document.getElementById("Homepage_ShipDate").value;
      text18 = formatDate(text18);
  
  
  
      printText(pdf, 2.475, 5.2, "VESSEL NAME: ", true, 8);
      printText(pdf, 4.00, 5.2, text15, true, 8);
  
      printText(pdf, 2.58, 5.4, "B/L NUMBER: ", true, 8);
      printText(pdf, 4.00, 5.4, text17, true, 8);
  
      printText(pdf, 2.96, 5.6, "FROM: ", true, 8);
      printText(pdf, 4.00, 5.6, text20, true, 8);
      
      printText(pdf, 3.12, 5.8, "TO:", true, 8);
      printText(pdf, 4.00, 5.8, text21, true, 8);
  
      printText(pdf, 2.80, 6.0, "BL DATE: ", true, 8);
      printText(pdf, 4.00, 6.0, text18, true, 8);
  
    }
  
    printText(pdf, 1.71, 6.5, "MERCHANDISE DESCRIPTION: ", true, 8);
  
    let longTestDescription = document.getElementById('ShippingAdviceOtherRecipientModal_MerchandiseDescription').value ? document.getElementById('ShippingAdviceOtherRecipientModal_MerchandiseDescription').value : document.getElementById("lcInformationPageShippingAdviceMerchadiseDescription").value;              
    mylongText(pdf, longTestDescription.toUpperCase(), 4.00, 6.38, 4.0, 7.5, true, true, "courier");  
    pdf.setFont("helvetica", "bold");
  
  
    let text22 = document.getElementById("ShippingAdviceOtherRecipientModal_InvoiceValue").value;
    let text23 = "";
    var lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
    var lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
    let lcInformationPageCurrencyOptionText = lcInformationPageCurrencyOption.text;
    
    if (lcInformationPageCurrencyOptionText == "DOLLAR") {
      text23 = "USD";
    } else {
      text23 = lcInformationPageCurrencyOptionText.toUpperCase();
    }
  
    let amountWithCommas = parseFloat(text22).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  
    printText(pdf, 2.41, 7.40, "INVOICE VALUE: ", true, 8);
    printText(pdf, 4.00, 7.40, amountWithCommas, true, 8);
  
    printText(pdf, 5.82, 7.40, "CURRENCY: ", true, 8);
    printText(pdf, 6.80, 7.40, text23, true, 8);
  
    printText(pdf, 1.77, 7.60, "NO. OF PKGS/PCS SHIPPED: ", true, 8);
    let text24 = document.getElementById("ShippingAdviceOtherRecipientModal_NumberOfPackages").value;
    printText(pdf, 4.00, 7.60, text24, true, 8);
  
    
    printText(pdf, 2.41, 7.90, "GROSS WEIGHT: ", true, 8);
    let text25 = document.getElementById("ShippingAdviceOtherRecipientModal_GrossWeight").value ;
    printText(pdf, 4.00, 7.90, text25, true, 8);
  
    if (document.getElementById("TransportInformation_NetWeight").value) {
      let tempNetWeight = document.getElementById("ShippingAdviceOtherRecipientModal_NetWeight").value;
      printText(pdf, 5.82, 7.90, "NET WEIGHT: ", true, 8);
      printText(pdf, 6.80, 7.90, tempNetWeight.toUpperCase(), true, 8);
    }
  
    printText(pdf, 2.31, 8.10, "INVOICE NUMBER: ", true, 8);
    let text26 =  document.getElementById("ShippingAdviceOtherRecipientModal_InvoiceNumber").value;
    printText(pdf, 4.0, 8.10, text26, true, 8);
  
  
    printText(pdf, 2.52, 8.30, "INVOICE DATE: ", true, 8);
    let text27 = document.getElementById("TransportInformation_InvoiceDate").value;
    text27 = formatDate(text27);
    printText(pdf, 4.0, 8.30, text27, true, 8);
  
  
    let FreeText3 = document.getElementById('ShippingAdviceOtherRecipientModel_FreeText3').value ? document.getElementById('ShippingAdviceOtherRecipientModel_FreeText3').value : "";              
    mylongText(pdf, FreeText3, 0.57, 8.55, 7.0, 8, true, false);
  
  
  
    
  
  
  
  
    drawLine(pdf, 0.55, 2.0, 7.58, 2.0, 0.04);
    createCell(pdf, 0.57, 2.4, 7.0, 0.4, 2.5);
  
   
    
  
   
  
  
  
    let text29 = document.getElementById("ShippingAdviceOtherRecipientModal_ModalBeneNameEnd").value;
    printText(pdf, 0.57, 12.42, text29, true, 8);
    let text28 = "CERTIFIED TRUE AND CORRECT";
    printText(pdf, 0.57, 11.22, text28, true, 8);
  
    let text31 = OriginalOrCopy;
    if (String(OriginalOrCopy).toUpperCase() == "ORIGINAL") {
      createCell(pdf, 3.75, 11.02, 1.5, 0.4);
      printText(pdf, 3.97, 11.3, text31, true, 15);
    } else {
      createCell(pdf, 3.75, 11.02, 1.2, 0.4);
      printText(pdf, 4.04, 11.3, text31, true, 15);
    }
    
  
    printText(pdf, 0.57, 11.0, "____________________________________________________________", true);
    let text30 = "Authorized Signature";
    printText(pdf, 0.57, 12.2, text30, false, 8);
  
  
}
  