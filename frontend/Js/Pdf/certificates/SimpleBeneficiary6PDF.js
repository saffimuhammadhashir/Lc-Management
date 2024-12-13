export function SimpleBeneficiaryFuction6(
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
            let text2 = "";
            let text3 = "";
            let SimpleBENEFICIARYCertificateLCNumber6 = document.getElementById("SimpleBENEFICIARYCertificateLCNumber6");
            if (SimpleBENEFICIARYCertificateLCNumber6.checked) {
              text2 = "L/C NUMBER: ";
              text3 = document.getElementById('lcInformationPageLcNumber').value;
            }

            // 2. Second Applicant
            var text12 = "";
            var text13 = "";
            var text14 = "";
            var SimpleBENIFICIARYCertificate2ndAppli = document.getElementById("SimpleBENEFICIARYCertificateSecondApplicant6");
            if (SimpleBENIFICIARYCertificate2ndAppli.checked) {
                console.log('2nd Applicant Clicked');
                text12 = document.getElementById('lcInformationSecondApplicantHeader').value;
                text13 = document.getElementById('lcInformationSecondApplicantName').value;
                text14 = document.getElementById('lcInformationSecondApplicantAddress').value;
            }

            // 3. Global Check
            let LongText3 = "";
            var SimpleBENEFICIARYCertificateGlobal6 = document.getElementById("SimpleBENEFICIARYCertificateGlobal6");
            if (SimpleBENEFICIARYCertificateGlobal6.checked) {
                LongText3 = document.getElementById('LC_Information_Global_Certification').value;

            }

            // Text Data
            let text4 = "DATE: ";

            let text5 = document.getElementById('Bene6ModelShippmentDate').value ? document.getElementById('Bene6ModelShippmentDate').value : document.getElementById('Homepage_ShipDate').value;              
            text5 = formatDate(text5);
            
            let text6 = document.getElementById("SimpleBENEFICIARYCertificateHomeTitle6").value;


            let text7 = "CERTIFIED TRUE AND CORRECT";
            let text8 = document.getElementById('LCInformation_BENEFICIARYName').value;
            let text9 = "Authorized Signature";
            let text10 = "______________________";
            let LongText2 = document.getElementById('Bene6ModelFreeText').value;
            
            
            let text11 = document.getElementById('LCInformation_BENEFICIARYAddress').value;
            var address = text11;
            var parts = address.split(', ');
            var beforeFirstComma = parts[0];
            var afterFirstComma = parts.slice(1).join(', ');

            // structure
            printText(pdf, 5.20, 1.53, text2, true, 10);
            printText(pdf, 6.20, 1.53, text3, true, 10);
            printText(pdf, 0.7, 2.13, text4, true, 10);
            printText(pdf, 1.20, 2.13, text5, true, 10);
            printText(pdf, 2.80, 2.88, text6, true, 14);
            printText(pdf, 0.7, 9.05, text7, true, 8);
            printText(pdf, 0.7, 9.30, text8, true, 8);
            printText(pdf, 0.7, 10.35, text9, false);
            printText(pdf, 0.7, 1.90, text10, true, 40);

           
            // address of bene
            printText(pdf, 0.7, 0.60, document.getElementById('LCInformation_BENEFICIARYName').value, true, 10);
            // printText(pdf, 0.7, 0.75, beforeFirstComma, true, 10);
            // printText(pdf, 0.7, 0.90, afterFirstComma, true, 10);
            mylongText(pdf, document.getElementById('LCInformation_BENEFICIARYAddress').value, 0.7, 0.60, 5.0, 10, true, false);




            // longText(pdf, LongText2, 0.7, 4.10, 6.7, 10, true, false);
            // longText(pdf, LongText3, 0.7, 7.40, 6.7, 10, true, false);

            mylongText(pdf, LongText2, 0.7, 4.10, 6.7, 10, true, false);
            mylongText(pdf, LongText3, 0.7, 7.40, 6.7, 10, true, false);


            


            //   2nd applicant
            printText(pdf, 0.7, 3.50, text12, true, 10);
            printText(pdf, 0.7, 3.65, text13, true, 10);
            printText(pdf, 0.7, 3.80, text14, true, 10);



            printText(pdf, 0.7, 10.20, "_______________________________________________", true);
            
            if(String(OriginalOrCopy).toUpperCase() == "ORIGINAL"){
              createCell(pdf, 3.5, 1.12, 1.30, 0.4);
              printText(pdf, 3.65, 1.40, String(OriginalOrCopy).toUpperCase(), true, 15);

              
            } else {
              createCell(pdf, 3.5, 1.12, 1.0, 0.4);
              printText(pdf, 3.72, 1.40, String(OriginalOrCopy).toUpperCase(), true, 15);

            }

            createCell(pdf, 0.73, 2.5, 6.75, 0.6, 2.5);




}



