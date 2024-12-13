export function DHLFormFunction2(
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

  // ! Start Check Box
  // DCS
  
  let longText1 = "";
  if (
    document.getElementById("printPageDestinationControlStatementCheck").checked
  ) {
    longText1 =
      "THESE COMMODITIES, TECHNOLOGY OR SOFTWARE WERE EXPORTED FROM THE UNITED STATES IN ACCORDANCE WITH THE EXPORT ADMINISTRATION REGULATIONS. DIVERSION CONTRARY TO U. S. LAW IS PROHIBITED. ";
      longText(pdf, longText1, 0.65, 5.2, 6.9, 8, false, false);
    
  }


  // Lc Number Check
  let text6 = "";
  if (document.getElementById("other2_LCNumberCheck").checked) {
    printText(pdf, 5.0, 1.6, "LC#", true, 10);
    text6 = document.getElementById('lcInformationPageLcNumber').value;
    printText(pdf, 5.35, 1.6, text6, false, 10);

  }




  // ! End Check Box

  pdf.setFont("helvetica");
  pdf.setFontType("bold");

  const text1 = "EXPRESS WORLDWIDE";
  const text2 = "DHL Online";
  const text3 = "XPD";
  const text4 = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
  const text7 = document.getElementById("LCInformation_BENEFICIARYName").value;
  const text8 = document.getElementById("LCInformation_BENEFICIARYAddress").value;
  const text9 = "TW-TXG-TXW";


  let text12 = document.getElementById('DhlFormOther2_ChangeDate').value ? document.getElementById('DhlFormOther2_ChangeDate').value : document.getElementById("Homepage_ShipDate").value;           
  text12 = formatDate(text12);
  const text10 = ""; // DayValue
  const text11 = ""; // TimeValue

  const text13 = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;
  const text14 = document.getElementById("TransportInformation_NumberOfPieces").value;
  const text15 = "(2L)TW407+32000000";
  const text16 = "(J)JD01 2061 3830 8033 2660";
  const text17 = text12;





  
  let LongText2 = document.getElementById('DhlFormOther2_FreeText').value ? document.getElementById('DhlFormOther2_FreeText').value : "";           
  let LongText3 = document.getElementById('DhlFormOther2_WayBill').value ? document.getElementById('DhlFormOther2_WayBill').value : "";           

  mylongText(pdf, LongText2, 5.45, 6.0, 2.20, 7, true, true);
  mylongText(pdf, LongText3, 1.85, 7.21, 4.20, 10, true, true);


  printText(pdf, 5.45, 5.9, "Content: ", false, 10);
  printText(pdf, 1.15, 7.35, "WAYBILL", true, 10);




  // Structure of the page
  createCell(pdf, 0.6, 0.7, 7.1, 10.0);

  // Row 1
  // Vertical
  drawLine(pdf, 4.0, 0.7, 4.0, 1.4);
  drawLine(pdf, 5.2, 0.7, 5.2, 1.4);

  // Horizontal
  drawLine(pdf, 0.6, 1.4, 7.7, 1.4);

  // Row 2
  // Horizontal
  drawLine(pdf, 0.6, 2.2, 7.7, 2.2);

  // Row 3
  // Horizontal
  drawLine(pdf, 0.6, 3.7, 7.7, 3.7);

  // Row 4
  // Horizontal
  drawLine(pdf, 0.6, 4.2, 7.7, 4.2);

  // Row 5
  // Horizontal
  drawLine(pdf, 0.6, 4.75, 7.7, 4.75);

  // Row 6
  // Horizontal
  drawLine(pdf, 0.6, 5.2, 7.7, 5.2);

  // Text Placement
  printText(pdf, 0.65, 0.92, text1, true, 12);
  printText(pdf, 0.65, 1.1, text2, false, 10);

  printText(pdf, 4.25, 1.0, text3, true, 22);

  // Image 1
  var DHL_Logo = new Image();
  DHL_Logo.src = "./Images/DHLLogo.png";
  pdf.addImage(DHL_Logo, "png", 5.7, 0.5, 1.5, 1.1);

  printText(pdf, 0.65, 1.6, "From: ", true, 10);
  printText(pdf, 1.15, 1.6, text4, false, 10);


  printText(pdf, 0.67, 2.4, "To: ", true, 10);
  printText(pdf, 1.15, 2.4, text7, false, 10);
  printText(pdf, 1.15, 2.65, text8, false, 10);

  printText(pdf, 3.25, 4.05, text9, true, 22);

  printText(pdf, 5.4, 4.45, "Day", true, 10);
  printText(pdf, 5.4, 4.63, text10, false, 10);

  printText(pdf, 6.4, 4.45, "Time: ", true, 10);
  printText(pdf, 6.4, 4.63, text11, false, 10);

  printText(pdf, 4.1, 4.9, "Date:", true, 10);
  printText(pdf, 4.1, 5.1, text12, false, 10);

  printText(pdf, 5.2, 4.9, "Shpt Weight: ", true, 10);
  printText(pdf, 5.2, 5.1, text13, false, 10);

  printText(pdf, 6.4, 4.9, "Piece: ", true, 10);
  printText(pdf, 6.4, 5.1, text14, false, 10);

  // Image 2
  var DHLBarcode1 = new Image();
  DHLBarcode1.src = "./Images/DHLBarcode1.png";
  pdf.addImage(DHLBarcode1, "png", 1.15, 5.8, 4.2, 1.4);

  printText(pdf, 5.45, 5.9, "Content: ", false, 10);
  
  // image 3
  var DHLBarcode2 = new Image();
  DHLBarcode2.src = "./Images/DHLBarcode2.png";
  pdf.addImage(DHLBarcode2, "png", 1.15, 7.41, 3.75, 1.45);

  printText(pdf, 1.15, 7.35, "WAYBILL", true, 10);
  printText(pdf, 1.15, 9.0, text15, true, 10);
  
  // image 4
  var DHLBarcode2i = new Image();
  DHLBarcode2i.src = "./Images/DHLBarcode2.png";
  pdf.addImage(DHLBarcode2i, "png", 1.6, 9.05, 3.75, 1.4);

  printText(pdf, 1.15, 10.587, text16, true, 10);

  printText(pdf, 0.63, 10.85, "THE LC NUMBER: " + text6, false, 8);
  printText(pdf, 0.65, 11.0, "DATE OF LC ISSUANCE " + text17, false, 8);

  pdf.setFillColor(0, 0, 0);
  pdf.rect(0.6, 4.19, 4.75, 0.56, "F");


  // 3. Global Check
  let LongText1 = "";
  var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
  if (other2_GlobalCheck.checked) {
    LongText1 = document.getElementById('LC_Information_Global_Certification').value;
    mylongText(pdf, LongText1, 2.70, 10.75, 5.20, 7, true, true);

  }

}
