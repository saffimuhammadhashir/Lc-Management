export function SteamshipFunction6(
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
  let text1 = document.getElementById('Steamship6_BeneName').value ? document.getElementById('Steamship6_BeneName').value : "STEAMSHIP CERTIFICATE";              
  let text2 = document.getElementById('Steamship6_ShipDate').value ? document.getElementById('Steamship6_ShipDate').value : document.getElementById('Homepage_ShipDate').value;              
  text2 = formatDate(text2);
  const text3 = document.getElementById('lcInformationPageLcNumber').value;
  const text4 = document.getElementById("TransportInformation_VesselName").value;
  
  
  let LongText1 = document.getElementById('Steamship6_FreeText2').value ? document.getElementById('Steamship6_FreeText2').value : "";              
  let LongText2 = document.getElementById('Steamship6_SignatureLine').value ? document.getElementById('Steamship6_SignatureLine').value : "";


  // Lc Number Check
  if (document.getElementById("Other1_LCNumberCheck").checked) {
    printText(pdf, 1.25, 2.90, "L/C NUMBER: ", true, 8);
    printText(pdf, 3.00, 2.90, text3, true, 8);

  }

   //  Global Check
   let LongText3 = "";
   var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
   if (Other1_GlobalCheck.checked) {
    LongText3 = document.getElementById('LC_Information_Global_Certification').value;

   }

 
  
  // Structure of the page
  printText(pdf, 3.00, 1.85, text1, false, 16);


  printText(pdf, 1.25, 2.60, "DATE: ", true, 8);
  printText(pdf, 3.00, 2.60, text2, true, 8);


  

  printText(pdf, 1.25, 3.20, "Vessel Name: ", true, 8);
  printText(pdf, 3.00, 3.20, text4.toUpperCase(), true, 8);


  drawLine(pdf, 4.30, 6.50, 6.50, 6.50);


  mylongText(pdf, LongText1, 1.25, 3.60, 5.75, 8, true, true);
  mylongText(pdf, LongText2, 4.30, 6.55, 2.35, 8, true, true);
  mylongText(pdf, LongText3, 1.25, 7.40, 5.75, 8, true, true);



  let Other6_SecondApplicantCheck = document.getElementById("Other6_SecondApplicantCheck");
  if (Other6_SecondApplicantCheck.checked) {
      let n1 = document.getElementById("lcInformationSecondApplicantHeader").value;
      let n2 = document.getElementById("lcInformationSecondApplicantName").value;
      let n3 = document.getElementById("lcInformationSecondApplicantAddress").value;
      printText(pdf, 1.25, 1.25, n1, true, 8);
      printText(pdf, 1.25, 1.40, n2, true, 8);
      printText(pdf, 1.25, 1.55, n3, true, 8);

  }



}
