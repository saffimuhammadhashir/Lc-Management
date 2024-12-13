export function FaxActivityFunction7(
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
    pdf.setTextColor(128, 128, 128 );
// Dynamic Text Data
let text1 = "FAX ACTIVITY/TRANSMISSION REPORT";
let text2 = "";
if(document.getElementById('FaxActivity7_FaxDate').value){
  text2 = document.getElementById('FaxActivity7_FaxDate').value ? document.getElementById('FaxActivity7_FaxDate').value : "";
} else {
  text2 = document.getElementById('FaxActivity7_PrintTime').value ? document.getElementById('FaxActivity7_PrintTime').value : "";

}

if(text2){
  text2 = formatDate(text2);

}

let text3 = document.getElementById('FaxActivity7_PrintTime2').value ? document.getElementById('FaxActivity7_PrintTime2').value : "";
let text4 = "ID";
let text5 = ""

if(document.getElementById('FaxActivity7_NoOfPages').value){
  text5 = document.getElementById('FaxActivity7_NoOfPages').value ? document.getElementById('FaxActivity7_NoOfPages').value : "";
} else {
  text5 = document.getElementById('FaxActivity7_TxTotalPages').value ? document.getElementById('FaxActivity7_TxTotalPages').value : "";

}


let text6 = document.getElementById('FaxActivity7_RXPage').value ? document.getElementById('FaxActivity7_RXPage').value : "";
let text7 = "00";
let text8 = document.getElementById('FaxActivity7_FileNo').value ? document.getElementById('FaxActivity7_FileNo').value : ""; 

let text9 = document.getElementById('FaxActivity7_StartTime').value ? document.getElementById('FaxActivity7_StartTime').value : ""; 
if(text9){
  text9 = formatDate(text9);

}
let text10 = document.getElementById('FaxActivity7_Mode').value ? document.getElementById('FaxActivity7_Mode').value : ""; 
let text11 = "RX";
let text12 = document.getElementById('FaxActivity7_Location').value ? document.getElementById('FaxActivity7_Location').value : ""; 
let text13 = document.getElementById('FaxActivity7_StorePage').value ? document.getElementById('FaxActivity7_StorePage').value : ""; 
let text14 = document.getElementById('FaxActivity7_TXPage').value ? document.getElementById('FaxActivity7_TXPage').value : ""; 
let text15 = document.getElementById('FaxActivity7_RXPage').value ? document.getElementById('FaxActivity7_RXPage').value : ""; 
let text16 = document.getElementById('FaxActivity7_TotalTime').value ? document.getElementById('FaxActivity7_TotalTime').value : "";              
let text17 = "Sec";
let text18 = document.getElementById('FaxActivity7_Code').value ? document.getElementById('FaxActivity7_Code').value : "";              
let text19 = document.getElementById("lcInformationPageLcNumber").value;

let Other7_SecondApplicantCheck = document.getElementById("Other7_SecondApplicantCheck");
if (Other7_SecondApplicantCheck.checked) {
    let n1 = document.getElementById("lcInformationSecondApplicantHeader").value;
    let n2 = document.getElementById("lcInformationSecondApplicantName").value;
    let n3 = document.getElementById("lcInformationSecondApplicantAddress").value;
    printText(pdf, 0.54, 7.50, n1, true, 8);
    printText(pdf, 0.54, 7.65, n2, true, 8);
    printText(pdf, 0.54, 7.80, n3, true, 8);

}
   

    // 3. Global Check
    let LongText1 = "";
    var other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
    if (other7_GlobalCheck.checked) {
      LongText1 = document.getElementById('LC_Information_Global_Certification').value;
      mylongText(pdf, LongText1, 0.54, 5.35, 5.75, 8, true, true);

    }
    
    // Structure of the page
    printText(pdf, 2.30, 0.78, "***", true, 12);
    printText(pdf, 2.60, 0.75, text1, true, 10);
    printText(pdf, 5.38, 0.78, "****", true, 12);


    printText(pdf, 0.54, 1.60, "PRINT TIME: ", true, 8);
    printText(pdf, 0.54, 1.75, text2, true, 8);
    printText(pdf, 2.40, 1.60, text3, true, 8);
    printText(pdf, 2.80, 1.60, text4, true, 8);
    printText(pdf, 6.10, 1.60, "TX TOTAL PAGES " + text5, true, 8);
    printText(pdf, 5.60, 1.75, "RX TOTAL PAGES " + text6, true, 8);

    
    printText(pdf, 0.54, 2.35, "D- ", true, 8);
    printText(pdf, 0.80, 2.35, "File ", true, 8);
    printText(pdf, 1.10, 2.35, "START ", true, 8);

    printText(pdf, 2.30, 2.35, "MODE ", true, 8);
    printText(pdf, 3.40, 2.35, "LOCATION ", true, 8);

    printText(pdf, 4.80, 2.35, "STORE ", true, 8);
    printText(pdf, 5.60, 2.35, "TX ", true, 8);
    printText(pdf, 6.10, 2.35, "RX ", true, 8);
    printText(pdf, 6.60, 2.35, "TOTAL ", true, 8);
    printText(pdf, 7.30, 2.35, "CODE ", true, 8);


    printText(pdf, 0.54, 2.50, "No. ", true, 8);
    printText(pdf, 0.80, 2.50, "No. ", true, 8);
    printText(pdf, 1.10, 2.50, "TIME ", true, 8);


    printText(pdf, 4.80, 2.50, "PAGE ", true, 8);
    printText(pdf, 5.60, 2.50, "PAGE ", true, 8);
    printText(pdf, 6.10, 2.50, "PAGE ", true, 8);
    printText(pdf, 6.60, 2.50, "TIME ", true, 8);


    // Dynamic
    printText(pdf, 0.54, 2.65, text7, true, 8);
    printText(pdf, 0.80, 2.65, text8, true, 8);
    printText(pdf, 1.10, 2.65, text9, true, 8);

    printText(pdf, 2.30, 2.65, text10 + " " + text11, true, 8);
    printText(pdf, 3.40, 2.65, text12, true, 8);

    printText(pdf, 4.80, 2.65, text13, true, 8);
    printText(pdf, 5.60, 2.65, text14, true, 8);
    printText(pdf, 6.10, 2.65, text15, true, 8);
    printText(pdf, 6.60, 2.65, text16 + " " +text17, true, 8);
    printText(pdf, 7.30, 2.65, text18, true, 8);



    
    // Lc Number Check
    if (document.getElementById("other7_LCNumberCheck").checked) {
      printText(pdf, 0.54, 7.00, "L/C NUMBER: " + text19, true, 8);
    }
  


}
