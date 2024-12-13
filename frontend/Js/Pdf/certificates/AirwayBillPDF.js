export function airwaybillFunction(
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
  formatDate,
  currency
) {

  //! Text
  //! Start Check Box

  // DCS
  let overlaytext = "";
  if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
    overlaytext = "THESE COMMODITIES, TECHNOLOGY OR SOFTWARE WERE EXPORTED FROM THE UNITED STATES IN ACCORDANCE WITH THE EXPORT ADMINISTRATION REGULATIONS. DIVERSION CONTRARY TO U. S. LAW IS PROHIBITED.";
  }

  longText(pdf, overlaytext, 0.58, 7.40, 4.5, 6, true);

  // LC Check

  let text1 = "";
  if (document.getElementById("AWB_LCNumberCheck").checked) {
    printText(pdf, 2.00, 5.1, "L/C Number: ", true, 6);
    text1 = document.getElementById('AWB_LcNumber').value;
    printText(pdf, 2.90, 5.1, text1, true, 6);

  }


  // 3. Global Check
  let LongText3 = "";
  var AWB_GlobalCheck = document.getElementById("AWB_GlobalCheck");
  if (AWB_GlobalCheck.checked) {
    LongText3 = document.getElementById('LC_Information_Global_Certification').value;
    mylongText(pdf, LongText3, 4.30, 5.00, 3.0, 5, true);
  }




  // 3. Limited Certifications
  let LongText4 = "";
  var lcInformationPageLimitedCertifications_AWBcheckbox = document.getElementById("lcInformationPageLimitedCertifications_AWBcheckbox");
  if (lcInformationPageLimitedCertifications_AWBcheckbox.checked) {
    LongText4 = document.getElementById('lcInformationPageLimitedCertifications').value;
    mylongText(pdf, LongText4, 3.30, 7.95, 4.30, 5, true);

  }

  //! End Check Box



  printText(pdf, 0.6, 0.4, "MAWB No.: " + document.getElementById('TransportInformation_MAWBNumber').value, true);



  printText(pdf, 4.6, 0.4, "HAWB No.: " + document.getElementById('TransportInformation_HAWBOrHOBLNumber').value, true);











  //row 1 start --------------------------------------
  // column 1
  createCell(pdf, 0.5, 0.5);
  // inside column 1
  createCell(pdf, 2.62, 0.5, 1.5, 0.20);
  printText(pdf, 2.7, 0.6, "Shipper's Account Number");


  printText(pdf, 0.6, 0.6, "SHIPPER'S NAME AND ADDRESS");


  printText(pdf, 0.6, 0.9, document.getElementById('LCInformation_BENEFICIARYName').value, true, 6);
  mylongText(pdf, document.getElementById('LCInformation_BENEFICIARYAddress').value, 0.6, 0.9, 3.5, 8, true, false);



  // column 2
  createCell(pdf, 4.12, 0.5);
  // inside column 2

  printText(pdf, 4.20, 0.6, "NOT NEGOTIABLE");
  printText(pdf, 4.20, 0.90, "AIR WAYBILL");
  printText(pdf, 4.20, 1.05, "(Air Consignment");
  printText(pdf, 4.20, 1.20, "Note)");
  printText(pdf, 4.20, 1.35, "Issued By:");

  let text1t = document.getElementById('AWB_AirConsignmentNote').value ? document.getElementById('AWB_AirConsignmentNote').value : "";
  mylongText(pdf, text1t, 5.20, 0.55, 2.60, 8, true, false);

  printText(pdf, 4.70, 1.38, "_________________________________________________________________", true);


  // row 1 end --------------------------------------


  // row 2 start --------------------------------------
  // column 1
  createCell(pdf, 0.5, 1.5);
  // inside column 1
  createCell(pdf, 2.62, 1.5, 1.5, 0.20);
  printText(pdf, 2.7, 1.6, "Consignee's Account Number");
  printText(pdf, 0.6, 1.6, "Consignee's Name and Address");



  let text2t = document.getElementById("lcInformationPageConsignToParty").value;
  mylongText(pdf, text2t, 0.6, 1.70, 3.5, 6, true, false);




  // column 2
  createCell(pdf, 4.12, 1.5);
  // inside column 2
  let textr2c2 = "It is agreed that the goods described herein are accepted in apparent good order and condition (except as noted) for carriage SUBJECT TO THE CONDITIONS OF CONTRACT ON THE REVERSE HEREOF. THE SHIPPER'S ATTENTION IS DRAWN TO THE NOTICE CONCERNING CARRIER'S LIMITATION OF LIABILITY. Shipper may increase such limitation of liability by declaring a higher value for carriage and paying a supplemental charge if required.";
  mylongText(pdf, textr2c2, 4.20, 1.6, 3.1);


  //row 2 end --------------------------------------


  // row 3 start --------------------------------------
  // column 1
  createCell(pdf, 0.5, 2.5, 3.63, 1.6);
  printText(pdf, 0.6, 2.6, "Issuing Carrier's Agent Name and Address");


  let text3t = document.getElementById("TransportInformation_TlForwarderName").value + "\n" + document.getElementById("TransportInformation_ForwarderAddress").value;
  mylongText(pdf, text3t, 0.6, 2.65, 3.60, 6, true, false);

  drawLine(pdf, 0.5, 3.25, 4.12, 3.25);
  drawLine(pdf, 2.4, 3.25, 2.4, 3.72); // vertical line

  let text3t1 = document.getElementById('AWB_AgentIATACode').value ? document.getElementById('AWB_AgentIATACode').value : "";
  let text3t2 = document.getElementById('AWB_AccountInformation').value ? document.getElementById('AWB_AccountInformation').value : "";

  printText(pdf, 0.6, 3.35, "Agent's IATA Code");
  printText(pdf, 0.6, 3.50, text3t1);
  printText(pdf, 2.5, 3.35, "Account No.");
  printText(pdf, 2.5, 3.50, text3t2);

  // sub column
  drawLine(pdf, 0.5, 3.72, 4.12, 3.72);
  printText(pdf, 0.6, 3.82, "Airport of Departure (Addr. of first carrier) and requrested Routing");

  let text3t3 = document.getElementById("lcInformationPageLoadOnBoard").value;

  mylongText(pdf,text3t3 ,0.6, 3.87,3.2 ,6, true,false);




  // column 2
  createCell(pdf, 4.12, 2.5, 3.63, 1.6);
  // inside column 2
  printText(pdf, 4.20, 2.6, "Accounting Information");

  let text3t4 = document.getElementById('AWB_NotifyParty').value ? document.getElementById('AWB_NotifyParty').value : document.getElementById("lcInformationPageNotifyParty").value;
  mylongText(pdf, text3t4, 4.20, 2.80, 3.20, 6, true, false);


  // row 3 end --------------------------------------    

  // row 4 start --------------------------------------
  // column 1
  createCell(pdf, 0.5, 4.1, 3.63, 0.8);
  // inside column 1
  drawLine(pdf, 0.9, 4.1, 0.9, 4.5);
  drawLine(pdf, 2.2, 4.1, 2.2, 4.5);
  drawLine(pdf, 2.7, 4.1, 2.7, 4.5);
  drawLine(pdf, 3.2, 4.1, 3.2, 4.5);
  drawLine(pdf, 3.7, 4.1, 3.7, 4.5);

  // inside colume 1 text
  printText(pdf, 0.6, 4.2, "to");
  let text4t1 = document.getElementById("TransportInformation_1stToCityCodeValue").value;
  printText(pdf, 0.6, 4.40, text4t1);

  printText(pdf, 0.95, 4.2, "By first Carrier \ Routing and Destination /", false, 4);
  let text4t2 = document.getElementById("TransportInformation_CarrierName").value;

  printText(pdf, 1.20, 4.40, text4t2);
  printText(pdf, 2.3, 4.2, "to");
  printText(pdf, 2.8, 4.2, "by");
  printText(pdf, 3.3, 4.2, "to");
  printText(pdf, 3.8, 4.2, "by");




  // column 2
  createCell(pdf, 4.12, 4.1, 3.63, 0.8);
  // inside column 2
  drawLine(pdf, 4.45, 4.1, 4.45, 4.5);
  drawLine(pdf, 4.75, 4.1, 4.75, 4.5);
  // horizontal line
  drawLine(pdf, 4.75, 4.26, 5.8, 4.26);
  // inside horizontal line
  drawLine(pdf, 5.03, 4.26, 5.03, 4.5);
  drawLine(pdf, 5.56, 4.26, 5.56, 4.5);

  drawLine(pdf, 5.3, 4.1, 5.3, 4.5);
  drawLine(pdf, 5.8, 4.1, 5.8, 4.5);
  drawLine(pdf, 6.75, 4.1, 6.75, 4.5);

  // inside colume 2 text
  printText(pdf, 4.15, 4.2, "Currency", false, 5);
  let text4t3 = currency.currency_code;

  printText(pdf, 4.20, 4.40, text4t3, true);


  printText(pdf, 4.475, 4.2, "CHGS");
  printText(pdf, 4.50, 4.3, "Code");
  printText(pdf, 4.90, 4.2, "Wt/Val");
  printText(pdf, 5.45, 4.2, "Other");
  printText(pdf, 4.80, 4.35, "PPD");
  printText(pdf, 4.85, 4.45, "X", true);
  printText(pdf, 5.06, 4.35, "COLL");
  printText(pdf, 5.35, 4.35, "PPD");
  printText(pdf, 5.40, 4.45, "X", true);
  printText(pdf, 5.57, 4.35, "COLL");

  printText(pdf, 5.90, 4.2, "Declared Value for Carriage", false, 4);

  let TransportInformation_ValueForCarriage = document.getElementById("TransportInformation_ValueForCarriage");
  let TransportInformation_ValueForCarriageText = TransportInformation_ValueForCarriage.value;

  printText(pdf, 6.20, 4.40, TransportInformation_ValueForCarriageText, true);
  printText(pdf, 6.85, 4.2, "Declared Value for Customs", false, 4);

  let TransportInformation_ValueForCustomers = document.getElementById("TransportInformation_ValueForCustomers");
  let TransportInformation_ValueForCustomersText = document.getElementById("TransportInformation_ValueForCustomers").value;

  printText(pdf, 7.15, 4.40, TransportInformation_ValueForCustomersText, true);



  // divider 
  drawLine(pdf, 0.5, 4.5, 7.75, 4.5);

  // inside column 1 divider row 4
  drawLine(pdf, 2.2, 4.5, 2.2, 4.9);
  drawLine(pdf, 3.2, 4.65, 3.2, 4.9);

  // inside colume 1 text
  printText(pdf, 0.95, 4.62, "Airport of Destination");
  let text5t1 = document.getElementById("lcInformationPageForTransportTo").value;


  printText(pdf, 0.70, 4.75, text5t1, true);

  let text5t2 = document.getElementById("TransportInformation_1stFlightNumber").value ? document.getElementById("TransportInformation_1stFlightNumber").value : "";
  let text5t3 = document.getElementById("TransportInformation_2ndFlightNumber").value ? document.getElementById("TransportInformation_2ndFlightNumber").value : "";

  let TransportInformation_1stFlightDate = document.getElementById("TransportInformation_1stFlightDate").value;
  let TransportInformation_1stFlightDateParts = TransportInformation_1stFlightDate ? TransportInformation_1stFlightDate.split("-") : ["", "", ""];
  let TransportInformation_1stFlightDatePartsformattedDate = (TransportInformation_1stFlightDateParts[0] && TransportInformation_1stFlightDateParts[1] && TransportInformation_1stFlightDateParts[2])
    ? `${TransportInformation_1stFlightDateParts[1]}/${TransportInformation_1stFlightDateParts[2]}/${TransportInformation_1stFlightDateParts[0]}`
    : "";

  let TransportInformation_2ndFlightDate = document.getElementById("TransportInformation_2ndFlightDate").value;
  let TransportInformation_2ndFlightDateParts = TransportInformation_2ndFlightDate ? TransportInformation_2ndFlightDate.split("-") : ["", "", ""];
  let TransportInformation_2ndFlightDatePartsformattedDate = (TransportInformation_2ndFlightDateParts[0] && TransportInformation_2ndFlightDateParts[1] && TransportInformation_2ndFlightDateParts[2])
    ? `${TransportInformation_2ndFlightDateParts[1]}/${TransportInformation_2ndFlightDateParts[2]}/${TransportInformation_2ndFlightDateParts[0]}`
    : "";

  printText(pdf, 2.3, 4.62, "Flight/Date");
  printText(pdf, 2.85, 4.62, "Carrier Use Only");
  printText(pdf, 3.63, 4.62, "Flight/Date");

  printText(pdf, 2.30, 4.80, text5t2, true);
  printText(pdf, 2.59, 4.82, "/", true, 13);
  printText(pdf, 2.71, 4.80, TransportInformation_1stFlightDatePartsformattedDate?TransportInformation_1stFlightDatePartsformattedDate:"", true);

  printText(pdf, 3.25, 4.80, text5t3, true);
  printText(pdf, 3.55, 4.82, "/", true, 13);
  printText(pdf, 3.63, 4.80, TransportInformation_2ndFlightDatePartsformattedDate, true);

  // inside column 2 divider row 4
  printText(pdf, 4.20, 4.62, "Amount of Insurance", false, 5);


  let TransportInformation_InsurancePercentage = document.getElementById("TransportInformation_InsurancePercentage");
  let TransportInformation_InsurancePercentageOption = TransportInformation_InsurancePercentage.options[TransportInformation_InsurancePercentage.selectedIndex];
  let TransportInformation_InsurancePercentageText = TransportInformation_InsurancePercentageOption.text;
  let text5t4 = "0"

  let Homepage_AmtOfDraw = document.getElementById('Homepage_AmtOfDraw');
  let Homepage_AmtOfDrawValue = Homepage_AmtOfDraw.value.trim();

  if (Homepage_AmtOfDrawValue !== '' && TransportInformation_InsurancePercentageText !== '0') {
    let value = (TransportInformation_InsurancePercentageText / 100) * Homepage_AmtOfDrawValue;
    let amountWithCommas = parseFloat(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    text5t4 = value;


  } else {
    let TransportInformation_InsuranceAmt = document.getElementById("TransportInformation_InsuranceAmt").value ? document.getElementById("TransportInformation_InsuranceAmt").value : "0";
    let amountWithCommas = parseFloat(TransportInformation_InsuranceAmt).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    text5t4 = TransportInformation_InsuranceAmt;
  }

  text5t4 = currency.currency_code + " " + currency.currency_symbol + " " + text5t4;
  printText(pdf, 4.20, 4.77, text5t4, true, 6);




  let textd1r4c2 = "INSURANCE-If carrier offers insurance and such insurance is requested in accordance with conditions on reverse hereof, indicate amount to be insured in figures in box marked 'Amount of Insurance";
  longText(pdf, textd1r4c2, 5.00, 4.45, 2.6, 5);


  // row 4 end --------------------------------------

  // row 5 start (It has only 1 column) --------------------------------------
  // column 1
  createCell(pdf, 0.5, 4.9, 7.25, 1);

  printText(pdf, 0.6, 5.0, "Handling Information");
  let text5t5 = document.getElementById("lcInformationPageFreight").options[document.getElementById("lcInformationPageFreight").selectedIndex].innerText;

  printText(pdf, 0.6, 5.25, "Freight: ", true, 6);
  printText(pdf, 1.2, 5.25, text5t5, true, 6);

  printText(pdf, 2.00, 5.50, "Flight Number (s): ", true, 5);
  printText(pdf, 3.00, 5.50, text5t2, true, 5);
  printText(pdf, 2.00, 5.65, "Flight Date (s): ", true, 5);
  printText(pdf, 3.00, 5.65, TransportInformation_1stFlightDatePartsformattedDate, true, 5);


  // row 5 end --------------------------------------

  // column 1
  createCell(pdf, 0.5, 5.9, 7.25, 2.0);
  //vertical line
  drawLine(pdf, 1.1, 5.9, 1.10, 7.90);
  // drawLine(pdf, 1.78, 5.90, 1.78 ,7.90);
  drawLine(pdf, 1.85, 5.90, 1.85, 7.90);
  drawLine(pdf, 1.95, 5.90, 1.95, 7.90);
  drawLine(pdf, 2.70, 5.90, 2.70, 7.90);
  drawLine(pdf, 2.80, 5.90, 2.80, 7.90);
  drawLine(pdf, 3.55, 5.90, 3.55, 7.90);
  drawLine(pdf, 3.65, 5.90, 3.65, 7.90);
  drawLine(pdf, 4.40, 5.90, 4.40, 7.90);
  drawLine(pdf, 4.50, 5.90, 4.50, 7.90);
  drawLine(pdf, 5.50, 5.90, 5.50, 7.90);
  drawLine(pdf, 5.60, 5.90, 5.60, 7.90);

  // vertical line inside vertical line
  drawLine(pdf, 2.10, 6.07, 2.10, 7.90);



  // horizontal line inside horizontal line
  drawLine(pdf, 0.5, 6.30, 1.85, 6.30);
  drawLine(pdf, 2.10, 6.30, 2.70, 6.30);
  drawLine(pdf, 2.80, 6.30, 3.55, 6.30);
  drawLine(pdf, 3.65, 6.30, 4.40, 6.30);
  drawLine(pdf, 4.50, 6.30, 5.50, 6.30);
  drawLine(pdf, 5.60, 6.30, 7.75, 6.30);

  // block 3 horizontal line
  drawLine(pdf, 2.10, 6.07, 2.70, 6.07);


  // row 6 column 1 text
  printText(pdf, 0.55, 6.10, "No. of Pieces");
  printText(pdf, 0.7, 6.20, "RCP");
  printText(pdf, 0.6, 6.45, document.getElementById("TransportInformation_NumberOfPieces").value, true, 6);

  printText(pdf, 1.2, 6.10, "Gross Weight");
  printText(pdf, 1.3, 6.45, document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value, true, 6);
  printText(pdf, 1.3, 7.00, document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value, true, 6);

  printText(pdf, 2.0, 5.98, "Rate Class", false, 5);
  printText(pdf, 2.13, 6.15, "Commodity Item", false, 5);
  printText(pdf, 2.26, 6.23, "No.", false, 5);


  printText(pdf, 2.87, 6.10, "Chargeable Weight", false, 5);
  printText(pdf, 3.0, 6.45, document.getElementById("TransportInformation_ChargableWeight").value + document.getElementById("TransportInformation_Measurements").value, true, 6);

  printText(pdf, 3.70, 6.10, "Rate Charge", false, 5);
  printText(pdf, 3.80, 7.00, document.getElementById("TransportInformation_FreightCharge").value, true, 6);


  printText(pdf, 4.54, 6.10, "Total", false, 5);
  printText(pdf, 4.64, 7.00, document.getElementById("TransportInformation_FreightCharge").value, true, 6);

  longText(pdf, "Nature and Quantity of Goods (include Dimensions or Volume)", 5.90, 5.90, 1.3, 6, false);




  let longTestDescription = document.getElementById('AWB_Description').value ? document.getElementById('AWB_Description').value : document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value;
  lcInformationPageShortShortMerchadiseDescriptionForCO
  mylongText(pdf, longTestDescription.toUpperCase(), 5.65, 6.40, 1.5, 5, true, true);








  drawLine(pdf, 3.20, 7.9, 3.20, 11.25);

  // inside column 1
  drawLine(pdf, 3.2, 9.00, 7.75, 9.00);
  drawLine(pdf, 3.2, 10.2, 7.75, 10.2);

  function wrapTextForPdf(text, maxLineWidth, pdf, fontSize) {
    const words = text.split(" ");
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      let word = words[i];
      let testLine = currentLine + " " + word;
      let testWidth = pdf.getTextWidth(testLine, fontSize); // You might need a method from your PDF library to get text width

      if (testWidth > maxLineWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }

    lines.push(currentLine);
    return lines;
  }
  let yPosition = 9.60;


  // Maximum width for the text (based on your PDF layout and font size)
  let maxLineWidth = 3.00; // Adjust this value to fit within the desired area on the PDF
  let fontSize = 6; // Your font size

  let textr7col1d2 = "Shipper certifies that the particulars on the face hereof are correct and that insofar as any part of the consignment contains dangerous goods, such part is properly described by name and is in proper condition for carriage by air according to the applicable Dangerous Goods Regulations. It is agreed that claims for overcharge must be made in writing to the carrier within 180 days from the date of issue of the air waybill."
  longText(pdf, textr7col1d2, 3.30, 8.95, 4.3, 5, false);
  let combinedText= document.getElementById("TransportInformation_TlForwarderName").value + "as agents for " + document.getElementById("LCInformation_BENEFICIARYName").value; 
  let wrappedTextLines = wrapTextForPdf(combinedText, maxLineWidth, pdf, fontSize);
  wrappedTextLines.forEach(function (line) {
    printText(pdf, 4.10, yPosition, line, true, fontSize);
    yPosition += 0.20; // Adjust this value to control line spacing
  });
  printText(pdf, 3.30, 9.85, "______________________________________________________________________________________________", true);
  printText(pdf, 4.94, 10.00, "Signature or Shipper or his Agent", false, 6);


  // last row and last column
  // Function to wrap text to fit within a certain width


  // Text elements
  let forwarderName = document.getElementById("TransportInformation_TlForwarderName").value;
  let carrierName = document.getElementById("TransportInformation_CarrierName").value;
  combinedText = forwarderName + " as authorized agent for the carrier: " + carrierName;



  // Wrap the text to fit within the specified width
  wrappedTextLines = wrapTextForPdf(combinedText, maxLineWidth, pdf, fontSize);

  // Initial Y-coordinate for the text
   yPosition = 10.40;

  // Print each line of the wrapped text to the PDF
  wrappedTextLines.forEach(function (line) {
    printText(pdf, 4.30, yPosition, line, true, fontSize);
    yPosition += 0.20; // Adjust this value to control line spacing
  });

  let TOS_Date = document.getElementById("Homepage_ShipDate").value;
  let dateParts = TOS_Date.split("-");
  let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


  yPosition = 10.80;
  combinedText=document.getElementById("AWB_EndText2").value;
  wrappedTextLines=wrapTextForPdf(combinedText, maxLineWidth+1, pdf, fontSize);
  wrappedTextLines.forEach(function (line) {
    printText(pdf, 3.50, yPosition, line, true, fontSize);
    yPosition += 0.20; // Adjust this value to control line spacing
  });

  printText(pdf, 3.30, 10.90, ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ", true, 6);
  printText(pdf, 3.30, 11.00, "Executed", false, 6);
  printText(pdf, 4.70, 11.00, "(Date)", false, 6);
  printText(pdf, 5.00, 11.00, "at", false, 6);
  printText(pdf, 5.30, 11.00, "(Place)", false, 6);
  printText(pdf, 6.00, 11.00, "Signature of Issuing Carrier or its Agent", false, 6);




  // // last row column 2
  drawLine(pdf, 0.5, 8.30, 3.2, 8.30);
  drawLine(pdf, 0.5, 8.65, 3.2, 8.65);
  drawLine(pdf, 0.5, 9.00, 3.2, 9.00);
  drawLine(pdf, 0.5, 9.40, 3.2, 9.40);
  drawLine(pdf, 0.5, 9.80, 3.2, 9.80);
  drawLine(pdf, 0.5, 10.18, 3.2, 10.18);
  drawLine(pdf, 0.5, 10.50, 3.2, 10.50);
  drawLine(pdf, 0.5, 10.85, 3.2, 10.85);


  // text inside last tow column 2
  printText(pdf, 0.70, 8.05, "Prepaid", false, 6);
  printText(pdf, 1.50, 8.05, "Weight Charge", false, 6);
  printText(pdf, 2.40, 8.05, "Collect", false, 6);
  drawLine(pdf, 1.78, 8.30, 1.78, 8.10);

  printText(pdf, 1.50, 8.42, "Valuation Charge", false, 6);
  drawLine(pdf, 1.78, 8.65, 1.78, 8.48);


  printText(pdf, 1.70, 8.77, "Tax", false, 6);
  drawLine(pdf, 1.78, 9.00, 1.78, 8.83);


  printText(pdf, 1.28, 9.12, "Total Other Charges Due Agent", false, 6);
  drawLine(pdf, 1.78, 9.40, 1.78, 9.20);


  printText(pdf, 1.28, 9.52, "Total Other Charges Due Carrier", false, 6);
  drawLine(pdf, 1.78, 11.25, 1.78, 9.60); // last row divider

  printText(pdf, 0.60, 9.95, "Total Prepaid", false, 6);
  printText(pdf, 0.60, 10.32, "Currency Conversion Rates", false, 6);
  printText(pdf, 0.60, 10.67, "Charges at Destination", false, 6);



  printText(pdf, 2.20, 9.95, "Total Collect", false, 6);
  printText(pdf, 1.88, 10.32, "CC charges in Dest. Currency", false, 6);
  printText(pdf, 1.90, 10.67, "Total Collect Charges", false, 6);


  printText(pdf, 2.05, 11.00, "For Carrier Use only at", false, 6);
  printText(pdf, 2.20, 11.10, "Destination", false, 6);

  let textLast1 = document.getElementById('AWBLast_labelForOrigional').textContent ? document.getElementById('AWBLast_labelForOrigional').textContent : "ORIGINAL 3 (FOR SHIPPER)";
  printText(pdf, 3.20, 11.50, textLast1, true, 10);







  let lcInformationPageFreight = document.getElementById("lcInformationPageFreight");
  let selectedElement = lcInformationPageFreight.options[lcInformationPageFreight.selectedIndex];
  let selectedOption = selectedElement.text;

  let TransportInformation_FreightCharge = document.getElementById("TransportInformation_FreightCharge");

  if (selectedOption === 'PREPAID' || selectedOption === 'PAID' || selectedOption === 'TO BE PREPAID') {
    console.log('Console prepaid');
    printText(pdf, 0.70, 8.18, document.getElementById('TransportInformation_FreightCharge').value, true, 6);
    printText(pdf, 0.70, 10.10, document.getElementById('TransportInformation_FreightCharge').value, true, 6);



  } else if (selectedOption === 'TO PAY' || selectedOption === 'PAYABLE AT DESTINATION' || selectedOption === 'TO BE PAID' || selectedOption === 'TO COLLECT' || selectedOption === 'COLLECT') {
    printText(pdf, 2.00, 8.18, document.getElementById('TransportInformation_FreightCharge').value, true, 6);
    printText(pdf, 2.00, 10.10, document.getElementById('TransportInformation_FreightCharge').value, true, 6);
  } else {
    console.log('Error AWB Freight');
  }




  // // row 7 end --------------------------------------


  // fixing border
  drawLine(pdf, 7.75, 7.9, 7.75, 11.25);
  drawLine(pdf, 0.5, 7.9, 0.5, 10.85);

  drawLine(pdf, 1.78, 11.25, 7.75, 11.25);




  pdf.addPage();
  printText(pdf, 2.2, 0.5, "NOTICE CONCERNING CARRIERS LIMITATION OF LIABILITY", true, 10);
  let textpage2head = "If the carriage involves an ultimate destination or stop in a country of departure, the Warsaw Convention or the Montreal Convention may be applicable and in most cases limit the liability of the Carrier in respect of loss of, damage or delay to cargo. Depending on the applicable regime, and unless a higher value is declared, liability of the Carrier may be limited to 17 Special Drawing Rights per kilogram or 250 French gold francs per kilogram, converted into national currency under applicable law. Carrier will treat 250 French gold francs to be the conversion equivalent of 17 Special Drawing Rights unless a greater amount is specified in the Carrier's conditions of carriage.";
  longText(pdf, textpage2head, 0.5, 0.6, 7, 9, true);
  printText(pdf, 3.1, 1.80, "CONDITIONS OF CONTRACT", true, 10);
  let textpage2body = "1. In this contract and the notices appearing hereon:\nCARRIER includes the air carrier issuing this air waybill and all carriers that carry or undertake to carry the cargo or perform any other services related to such carriage.\nSPECIAL DRAWING RIGHT (SRL) is a Special Drawing Right as definedby the International Monetary Fund.\nWARSAW CONVENTION means which of the following instrument is applicable to the contract of carriage;\nThe Conventions for the unification of Certain Rules relating to Internation Carriage by Air, signed at Warsaw, 12 October 1929; that Convention amended at The Hague on 28 September 1955; that Convention amended at The Hague 1955 and by Montreal Protocol  No. 1, 2, or 4 (1975) as the case may be.\nMONTREAL CONVENTION means the Convention for the Unification of Certain Rules for International Carriage by Air, done at Montreal on 28th May 1999.2.2.1 Carriage is subject to the rules relating to liability established by the Warsaw Convention or the Montreal Convention unless such carriage is not \"International Carriage\" as defined by the Applicable Conventions.\n2  2.1  Carriage is subject to the rules relating to liability established by the Warsaw Convention or the Montreal Convention unless such carriage is not \"International Carriage\" as defined by the Applicable Conventions.\n2.2  To the extent not in conflict with the foregoing, carriage and other related services performed by each carrier are subject\n2.2.1  to: \n2.2.2  Applicable laws and government regulations;\nProvisions contained in the air waybill, Carrier's conditions of & carriage and related rules, regulations, and timetables (but not the times of departure and arrival stated herein) and applicable tariffs of such Carrier, which are made part hereof, and which may be inspected at any airports or other cargo sales offices from which it operates regular services. When : carriage is to/from the USA, the shipper and the consignee are entitled, upon request, to receive a free copy of the Carrier’s & conditions of carriage. The Carrier’s conditions of carriage\n2.2.2.1 include, but are not limited to: \nLimits on the Carrier’s liability for loss, damage or delay of\n2.2.2.2 goods, including fragile or perishable goods. Claims restrictions, including time periods within which shippers or consignees must file a claim or bring an action\n2.2.2.3 against the Carrier for its acts or omissions, or those of its\n2.2.2.4 agents;\n2.2.2.5 Rights, if any, of the Carriers to change the terms of the contract. Rules about Carriers right to refuse to carry;\nRights of the carrier and limitations concerning delay or failure to perform service, including schedule changes,substitution of alternate Carrier or aircraft and rerouting. \n3 The agreed stopping places (which may be altered by Carrier in case of necessity) are those places, except the place of departure and the place of destination, set forth on the face hereof or shown in Carrier’s timetables as scheduled stopping places for the route. Carriage to be performed hereunder by several successive Carriers is regarded as a single operation.\n4 For carriage in which the Warsaw Convention nor the Montreal Convention applies, Carrier’s liability limitation shall not be less than the per kilogram monetary limit set out in Carrier’s tariff or general conditions of carriage for cargo lost, damaged or delayed provided that any such limitation of liability in an amount less than 17 SDR per kilogram will not apply for carriage to or from the United States.\n5  5.1 Except when the Carrier has extended credit to the consignee without the written consent of the shipper, the shipper guarantee's payment of all charges for the carriage due in accordance with Carrier's tariff, conditions of carriage and related regulations, applicable laws (including nation laws implementing the Warsaw Convention and the Montreal Convention), government regulations, orders and requirements.\n5.2 When no part of the consignment is delivered, a claim with respect to such consignment will be considered even though transportation charges thereon are unpaid.\n6 6.1 For cargo accepted for carriage, the Warsaw Convention and the Montreal Convention permit shipper to increase the limitation of liability by declaring a higher value for carriage and paying a supplemental charge if required.\n6.2 In carriage to which neither the Warsaw Convention not the Montreal Convention applies Carrier shall in accordance with the procedures set forth in its general conditions of carriage and applicable tariffs, permit shipper to increase the limitation of liability by declaring a higher value for carriage and paying a supplemental charge if so required.";
  longText(pdf, textpage2body, 0.5, 1.95, 3.4, 8);
  let textpage2bodyside2 = "7 7.1 In cases of loss of, damage or delay to part of the cargo, the weight to be taken into account in determining Carrier’s limit of liability shall only be the weight of the package or packages concerned.\n7.2 Notwithstanding and other provisions, for ‘foreign air transportation’ as defined by the U.S. transportation Code:\n7.2.1 In the case of loss of, damage or delay to a shipment, the weight to be used in determining Carrier’s limit of liability in determining Carrier’s limit of liability shall be the weight which is used to determine the charges for carriage of such shipment; and\n7.2.2 In case of loss of, damage or delay to a part of a shipment, the shipment weight in 7.2.1 shall be prorated to the packages covered by the same air waybill whose value is affected by the loss, damage or delay. The weight applicable in the case of loss or damage to one or more articles in a package shall be the weight of the entire package. \n\n\n 8 Any exclusion or limitation of liability applicable to Carrier shall apply to Carrier’s agents, employees, and representatives and to any person whose aircraft or equipment is used by Carrier for carriage and such person’s agents, employees and representatives.\n9 Any exclusion or limitation of liability applicable to Carrier shall apply to Carrier’s agents, employees, and representatives and to any person whose aircraft or equipment is used by Carrier for carriage and such person’s agents, employees and representatives.\n10.1 Receipt by the person entitled to delivery of the cargo without complaint shall be prima facie evidence the cargo has been delivered in good condition and in accordance with the contract of carriage.\n10.1.1 In case of loss of, damage or delay to cargo a written complaint must be made to Carrier by the person entitled to delivery. Such complaint must be made: \n10.1.2 In the case of damage to the cargo, immediately after discovery of the damage and at latest within 14 days from the date or receipt of the cargo.\n10.1.3 In the case of delay, within 21 days from the date on which the cargo was placed at the disposal of the person entitled to delivery.\nIn the cases of non-delivery of the cargo, within 120 days from the date of issue of the air waybill, or if an air waybill has not been issued, with 120 days from the date of receipt of the cargo for transportation by the Carrier.\n\n\n10.2 Such complaint may be made to the Carrier whose air waybill was used, or to the first Carrier or to the last Carrier, which performed the carriage during which the loss, damage or delay took place\n10.3 Unless a written complaint is made within the time limits specified in 10.1 no action may be brought against Carrier.\n10.4 Any rights to damages against Carrier shall be extinguished unless an action is brought within two years from the date of arrival at destination, or from the date on which the aircraft ought to have arrived, or from the date on which the carriage stopped. \n11 Shipper shall comply with all applicable laws and government regulation of any county to or from which the cargo may be carried, including those relating to the packing, carriage, or delivery of the cargo, and shall furnish such information and attach such documents to the air waybill as may be necessary to comply with such laws and regulations. Carrier is not liable to shipper and shipper shall indemnify Carrier for loss or expense due to shipper’s failure to comply with this provision. \n\n\n12 No agent, employee or representative of Carrier has authority to alter, modify or waive any provisions of this contract.";
  longText(pdf, textpage2bodyside2, 4.2, 1.95, 3.4, 8);




}