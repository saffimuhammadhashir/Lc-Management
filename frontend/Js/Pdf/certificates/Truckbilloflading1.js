export function TruckBillofladingFunction1(
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

  // Dynamic Text Data
  let text1 = document.getElementById('TruckBillOfLadingCertificateOther1ModalTitle').value ? document.getElementById('TruckBillOfLadingCertificateOther1ModalTitle').value : "TRUCK BILL OF LADING";              
  let text2 = document.getElementById('Homepage_ShipDate').value;  
  text2 = formatDate(text2)       
  
  let text3 =  document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

  let text4 =  document.getElementById("lcInformationPageLcNumber").value;
  let text5 =  document.getElementById("lcInformationPageLoadOnBoard").value;
  let text6 =  document.getElementById("lcInformationPageForTransportTo").value;

  let text7 = document.getElementById("TransportInformation_GrossWeight").value +document.getElementById("TransportInformation_Measurements").value ;
  let text8 = document.getElementById("TransportInformation_NumberOfPieces").value;
  let text9 = document.getElementById('Homepage_ShipDate').value;  
  text9 = formatDate(text9)  

  let text10 = document.getElementById('lcInformationPageFreight').value;
  let text11 = document.getElementById("LCInformation_BENEFICIARYName").value;
  let text12 = document.getElementById("lcInformationPageConsignToParty").value;;

       

  let text13 =  document.getElementById("TransportInformation_TlForwarderName").value;
  let text14 =  document.getElementById("TransportInformation_ForwarderAddress").value;
  let text15 =  document.getElementById("TransportInformation_CarrierName").value;


  let text16 =  document.getElementById("lcInformationPageNotifyParty").value;
  printText(pdf, 0.54, 5.00, "NOTIFY: ", true, 8);
  mylongText(pdf, text16, 0.54, 5.00, 7.00, 8, true, true);


  let text17 = `ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON ${text2}.`;
  let text18 = `ISSUED IN ONE (1) ORIGINAL.`;

  // Long Text 
  let LongText1 = document.getElementById('TruckBillOfLading1_FreeText1').value ? document.getElementById('TruckBillOfLading1_FreeText1').value : document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;

  let Other1_SecondApplicantCheck = document.getElementById("Other1_SecondApplicantCheck");
  if (Other1_SecondApplicantCheck.checked) {
      let n1 = document.getElementById("lcInformationSecondApplicantHeader").value;
      let n2 = document.getElementById("lcInformationSecondApplicantName").value;
      let n3 = document.getElementById("lcInformationSecondApplicantAddress").value;
      printText(pdf, 5.30, 4.10, n1, true, 8);
      printText(pdf, 5.30, 4.25, n2, true, 8);
      printText(pdf, 5.30, 4.40, n3, true, 8);

  }
   
  // 3. Global Check
  let LongText3 = "";
  var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
  if (Other1_GlobalCheck.checked) {
    LongText3 = document.getElementById('LC_Information_Global_Certification').value;
    mylongText(pdf, LongText3, 0.54, 10.50, 7.00, 7, true, true);


  }

  // 4. Limited Certification
  let LongText2 = " ";
  var lcInformationPageLimitedCertifications_BLcheckbox = document.getElementById("lcInformationPageLimitedCertifications_BLcheckbox");
  if (lcInformationPageLimitedCertifications_BLcheckbox.checked) {
    LongText2 = document.getElementById('lcInformationPageLimitedCertifications').value;
    mylongText(pdf, LongText2, 0.54, 9.45, 5.75, 7, false, true);


  }



  // Lc Number Check
  if (document.getElementById("Other1_LCNumberCheck").checked) {
    printText(pdf, 0.54, 2.00, "L/C NUMBER: ", true, 8);
    printText(pdf, 2.40, 2.00, text4, false, 8);
  }

  // Structure of the page
  printText(pdf, 2.40, 0.75, text1, true, 18);

  printText(pdf, 0.54, 1.70, "DATE:", true, 8);
  printText(pdf, 2.40, 1.70, text2, false, 8);

  printText(pdf, 5.00, 1.70, "BL NUMBER: ", true, 8);
  printText(pdf, 6.00, 1.70, text3, false, 8);

  printText(pdf, 0.54, 2.30, "SHIPMENT FROM: ", true, 8);
  printText(pdf, 2.40, 2.30, text5, false, 8);


  printText(pdf, 5.00, 2.30, "TO: ", true, 8);
  printText(pdf, 5.80, 2.30, text6, false, 8);

  printText(pdf, 0.54, 2.60, "GROSS WEIGHT: ", true, 8);
  printText(pdf, 2.40, 2.60, text7, false, 8);


  printText(pdf, 5.00, 2.65, "NO. OF PIECES: ", true, 8);
  printText(pdf, 6.10, 2.65, text8, false, 8);


  printText(pdf, 0.54, 3.15, "SHIP DATE:: ", true, 8);
  printText(pdf, 2.30, 3.15, text9, false, 8);


  printText(pdf, 3.20, 3.15, "FREIGHT: ", true, 8);
  printText(pdf, 3.90, 3.15, text10, false, 8);


  printText(pdf, 0.54, 3.60, "SHIPPER/EXPORTER: ", true, 8);
  printText(pdf, 2.65, 3.60, text11, false, 8);


  printText(pdf, 0.54, 4.10, "CONSIGNED TO: ", true, 8);
  printText(pdf, 2.30, 4.10, text12, false, 8);





  mylongText(pdf, LongText1, 0.54, 6.05, 3.75, 8, false, true);


  printText(pdf, 0.54, 7.80, text17, false, 8);
  printText(pdf, 0.54, 7.95, text18, false, 8);


  printText(pdf, 0.54, 8.45, text13, false, 8);
  printText(pdf, 0.54, 8.60, text14, false, 8);
  
  printText(pdf, 0.54, 9.25, "CARRIER: " + text15, false, 8);





}