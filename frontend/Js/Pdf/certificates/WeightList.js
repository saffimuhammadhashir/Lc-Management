export function WeightListFunction(
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

  // ! There are 4 Checks DCS, LC Number, 2nd Applicant,
 // DCS
 let longTest2 = "";
 if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
     longTest2 = "THESE COMMODITIES, TECHNOLOGY OR SOFTWARE WERE EXPORTED FROM THE UNITED STATES IN ACCORDANCE WITH THE EXPORT ADMINISTRATION REGULATIONS. DIVERSION CONTRARY TO U. S. LAW IS PROHIBITED. ";
     longText(pdf, longTest2.toUpperCase(), 3.57, 10.35, 4.0, 8, true, true);

 }

  // LC Number
  let text11 = document.getElementById("lcInformationPageLcNumber").value;
  let WeightList_LCNumberCheck = document.getElementById(
    "WeightList_LCNumberCheck"
  );
  if (WeightList_LCNumberCheck.checked) {
    printText(pdf, 4.25, 2.0, "L/C NUMBER: ", true, 8);
    printText(pdf, 5.5, 2.0, text11.toUpperCase(), true, 8);
  }

  // 2nd Applicant
  let WeightList_2ndApplicantCheck = document.getElementById("WeightList_2ndApplicantCheck");
  if (WeightList_2ndApplicantCheck.checked) {
      let text5 = document.getElementById("lcInformationSecondApplicantHeader").value;
      let text6 = document.getElementById("lcInformationSecondApplicantName").value;
      let text7 = document.getElementById("lcInformationSecondApplicantAddress").value;
      
      printText(pdf, 0.57, 1.7, text5, true, 8);
      printText(pdf, 0.57, 1.85, text6, true, 8);
      printText(pdf, 0.57, 2.0,  text7, true, 8);
      
      
    } else {               
      printText(pdf, 0.57, 1.50, "SOLID TO: ", true, 8);
      printText(pdf, 0.57, 1.7, document.getElementById("lcInformationPageApplicantName").value, true, 8);
      mylongText(pdf, document.getElementById('lcInformationPageApplicantAddress').value, 0.57, 1.7, 5.0, 8, true, false);

  }




















  // 3. Global Check
  let LongText1 = " ";
  var WeightList_GlobalCheck = document.getElementById(
    "WeightList_GlobalCheck"
  );
  if (WeightList_GlobalCheck.checked) {
    LongText1 = document.getElementById(
      "LC_Information_Global_Certification"
    ).value;
    mylongText(pdf, LongText1.toUpperCase(), 0.57, 8.7, 7.0, 7, true, true);


  }

  // 4. Limited Certification
  let LongText3 = " ";
  var lcInformationPageLimitedCertifications_PLcheckbox = document.getElementById("lcInformationPageLimitedCertifications_PLcheckbox");
  if (lcInformationPageLimitedCertifications_PLcheckbox.checked) {
    LongText3 = document.getElementById('lcInformationPageLimitedCertifications').value;
    mylongText(pdf, LongText3.toUpperCase(), 0.57, 7.50, 7.0, 7, true, true);


  }


  

    // Name and address of bene
    printText(pdf, 0.57, 0.50,  document.getElementById('LCInformation_BENEFICIARYName').value.toUpperCase(), true, 8);
    mylongText(pdf, document.getElementById('LCInformation_BENEFICIARYAddress').value, 0.57, 0.50, 5.0, 8, true, false);
  
  
  
  

    

  let text4 = document.getElementById("WeightList_HomeTitle").value;

  const text9 = document.getElementById(
    "TransportInformation_InvoiceNumber"
  ).value;
  let text10 = document.getElementById('WeightListModalInvoiceDate').value ? document.getElementById('WeightListModalInvoiceDate').value : document.getElementById('TransportInformation_InvoiceDate').value;              
  text10 = formatDate(text10);

  // const text13 = "3 BOXES";
  let TransportInformation_NumberOfPieces = document.getElementById(
    "TransportInformation_NumberOfPieces"
  ).value;
  let TransportInformation_NumberOfPiecesComponents =
    TransportInformation_NumberOfPieces.split(", ");
  let TransportInformation_NumberOfPiecesAll =
    TransportInformation_NumberOfPiecesComponents.join(",\n");
  const text13 = TransportInformation_NumberOfPiecesAll;
  const text15 = "COVERING:";

  // let longTestfree = document.getElementById(
  //   "lcInformationPageShortMerchadiseDescriptionForBL"
  // ).value;

  let longTestfree = document.getElementById('WeightListModalShortMerchadiseDescription').value ? document.getElementById('WeightListModalShortMerchadiseDescription').value : document.getElementById('lcInformationPageShortMerchadiseDescriptionForBL').value;              


  const text25 = "WE CERTIFY INVOICE TO BE TRUE AND CORRECT";
  const text26 = document.getElementById("LCInformation_BENEFICIARYName").value;
  const text27 = "Authorized Signature";

  pdf.setFont("helvetica");
  pdf.setFontType("bold");

  //Printing Text


  printText(pdf, 5.5, 0.65, text4.toUpperCase(), true, 14);

  printText(pdf, 4.25, 1.7, "INVOICE NUMBER: ", true, 8);
  printText(pdf, 5.5, 1.7, text9.toUpperCase(), true, 8);
  printText(pdf, 4.25, 1.85, "DATE: ", true, 8);
  printText(pdf, 5.5, 1.85, text10.toUpperCase(), true, 8);

  if (document.getElementById("TransportInformation_GrossWeight").value) {
    let text12 = document.getElementById(
      "TransportInformation_GrossWeight"
    ).value + document.getElementById("TransportInformation_Measurements").value ;;
    printText(pdf, 4.25, 2.15, "GROSS WEIGHT: ", true, 8);
    printText(pdf, 5.5, 2.15, text12.toUpperCase(), true, 8);
  }

  if (document.getElementById("TransportInformation_NetWeight").value) {
    let tempNetWeight = document.getElementById(
      "TransportInformation_NetWeight"
    ).value + document.getElementById("TransportInformation_Measurements").value ;;
    printText(pdf, 4.25, 2.3, "NET WEIGHT: ", true, 8);
    printText(pdf, 5.5, 2.3, tempNetWeight.toUpperCase(), true, 8);
  }

  printText(pdf, 0.57, 2.75, "QUANTITY OR NO. OF PACKAGES/PIECES:", true, 8);
  printText(pdf, 3.1, 2.76, text13.toUpperCase(), true, 8);


  
  if(String(OriginalOrCopy).toUpperCase() == "ORIGINAL"){
    createCell(pdf, 3.0, 4.0, 1.2, 0.4);
    printText(pdf, 3.10, 4.28, String(OriginalOrCopy).toUpperCase(), true, 15);

    
  } else {
    createCell(pdf, 3.0, 4.00, 1.0, 0.4);
    printText(pdf, 3.22, 4.28, String(OriginalOrCopy).toUpperCase(), true, 15);

  }


  printText(pdf, 0.57, 4.6, text15.toUpperCase(), true, 8);
  pdf.setFont("courier", "bold");
  console.log(pdf.getFontList());

  // longText(pdf, longTestfree.toUpperCase(), 0.57, 4.7, 7.0, 8, true, true);
  mylongText(pdf, longTestfree.toUpperCase(), 0.57, 4.7, 7.0, 8, true, true);


  pdf.setFont("helvetica");
  pdf.setFontType("bold");

  pdf.setFont("helvetica");
  pdf.setFontType("bold");

  printText(pdf, 0.57, 10.3, text25.toUpperCase(), true, 8);
  printText(pdf, 0.57, 10.45, text26.toUpperCase(), true, 8);

  pdf.setFont("helvetica");
  pdf.setFontType("bold");

  drawLine(pdf, 0.57, 11.2, 2.5, 11.2);
  printText(pdf, 0.57, 11.33, text27.toUpperCase(), true, 8);

}
