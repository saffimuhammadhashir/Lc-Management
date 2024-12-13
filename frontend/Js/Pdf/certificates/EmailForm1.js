export function EmailFormFunction1(
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

    pdf.setFontType("bold");
    
    let text1 = document.getElementById('LCInformation_BENEFICIARYName').value ? document.getElementById('LCInformation_BENEFICIARYName').value : "";              
    let text2 = document.getElementById('EmailForm1_From').value ? document.getElementById('EmailForm1_From').value : "";              
    let text3 = document.getElementById('EmailForm1_Sent').value ? document.getElementById('EmailForm1_Sent').value : "";              
    let text4 = document.getElementById('EmailForm1_To').value ? document.getElementById('EmailForm1_To').value : "";              
    let text5 = document.getElementById('EmailForm1_Subject').value ? document.getElementById('EmailForm1_Subject').value : "";              
    let text6 = document.getElementById('EmailForm1_Attachment').value ? document.getElementById('EmailForm1_Attachment').value : "";              

    let text8 = formatDate(document.getElementById("Homepage_ShipDate").value);

    
   
    let longText1 = document.getElementById('EmailForm1_FreeText').value ? document.getElementById('EmailForm1_FreeText').value : "";              
    const longText2 = ``;
    // const longText3 = `IN THE NAME AND ADDRESS OF \nVAPI DIVISION AS UNDER: \nRAYMOND LIMITED N.H. NO 8, KHADRI \nUDWARA, TAH. PARDI, DIST. VALSAD \n396185 GUJARAT, INDIA\n\nANODYNE INC.\nP.O.BOX 2237, SAN ANGELO, TEXAS 76902, UNITED STATES`;
    // mylongText(pdf, longText2, 0.65, 5.25, 6.90, 10, true, false);
    // mylongText(pdf, longText3, 0.65, 6.50, 6.90, 10, true, false);




   
  // Lc Number Check
  if (document.getElementById("Other1_LCNumberCheck").checked) {
    printText(pdf, 0.65, 6.10, "L/C NUMBER: " + document.getElementById('lcInformationPageLcNumber').value + " AND L/C DATE: " + text8 , true, 10);
  } else {
    printText(pdf, 0.65, 6.10, "L/C DATE: " + text8 , true, 10);

  }
  
   // 3. Global Check
   let LongText4 = "";
   var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
   if (Other1_GlobalCheck.checked) {
       LongText4 = document.getElementById('LC_Information_Global_Certification').value;
       mylongText(pdf, LongText4, 0.70, 9.00, 7.00, 8, true, false);

   }


    // Text Placement
    printText(pdf, 0.65, 0.90, text1, false, 10);
    drawLine(pdf, 0.60, 0.97, 7.70, 0.97, 1/35);



    printText(pdf, 0.65, 1.30, "From: ", true, 10);
    printText(pdf, 1.65, 1.30, text2, false, 10);


    printText(pdf, 0.65, 1.50, "Sent: ", true, 10);
    printText(pdf, 1.65, 1.50, text3, false, 10);


    printText(pdf, 0.65, 1.70, "To: ", true, 10);
    printText(pdf, 1.65, 1.70, text4, false, 10);


    printText(pdf, 0.65, 1.90, "Subject: ", true, 10);
    printText(pdf, 1.65, 1.90, text5, false, 10);


    printText(pdf, 0.65, 2.10, "Attachment: ", true, 10);
    printText(pdf, 1.65, 2.10, text6, false, 10);



  

    mylongText(pdf, longText1, 0.65, 2.50, 6.90, 8, false, false);


    // new
     let Other1_SecondApplicantCheck = document.getElementById("Other1_SecondApplicantCheck");
     if (Other1_SecondApplicantCheck.checked) {
         let n1 = document.getElementById("lcInformationSecondApplicantHeader").value;
         let n2 = document.getElementById("lcInformationSecondApplicantName").value;
         let n3 = document.getElementById("lcInformationSecondApplicantAddress").value;
         printText(pdf, 0.65, 10.50, n1, true, 8);
         printText(pdf, 0.65, 10.65, n2, true, 8);
         printText(pdf, 0.65, 10.80, n3, true, 8);

     }

     let n4 = document.getElementById("LCInformation_BENEFICIARYName").value
     let n5 = document.getElementById("LCInformation_BENEFICIARYAddress").value
     printText(pdf, 0.65, 11.10, n4, false, 10);
     printText(pdf, 0.65, 11.25, n5, false, 10);


}


