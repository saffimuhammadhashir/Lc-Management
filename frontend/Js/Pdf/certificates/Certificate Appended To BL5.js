export function CertificateAppendedToBLFunction5(
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
  
        // Static Text Data
            const text1 = document.getElementById("CertificateAppendedToBLother5ModalTitle").value ? document.getElementById("CertificateAppendedToBLother5ModalTitle").value : "CERTIFICATE APPENDED TO B/L";
           
            let text2 = " ";
            let text2t = " ";
            if (document.getElementById('other5_LCNumberCheck').checked) {
                text2 = "L/C NUMBER: ";
                text2t = document.getElementById('lcInformationPageLcNumber').value;
            }
  
            let LongText3 = "";
            var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
            if (other5_GlobalCheck.checked) {
              LongText3 = document.getElementById('LC_Information_Global_Certification').value;
            }
  
            
            const text4 = "(1) NAME OF VESSEL.: ";
            const text4t1 = document.getElementById("TransportInformation_VesselName").value ? document.getElementById("TransportInformation_VesselName").value : "";
            const text18 = "PREVIOUS NAME: ";
            const text4t2 = document.getElementById("CertificateAppendedToBLother5Modal_PreviousName").value ? document.getElementById("CertificateAppendedToBLother5Modal_PreviousName").value : "";
  
            
            const text5 = "(2) NATIONALITY OF VESSEL: ";
            const text5t = document.getElementById("CertificateAppendedToBLother5Modal_NationalityOfVessel").value ? document.getElementById("CertificateAppendedToBLother5Modal_NationalityOfVessel").value : "";
  
  
            const text6 = "(3) OWNER OF VESSEL: ";
            const text6t = document.getElementById("CertificateAppendedToBLother5Modal_OwnerOfVessel").value ? document.getElementById("CertificateAppendedToBLother5Modal_OwnerOfVessel").value : "";
  
  
            const text7 = "(4) VESSEL WILL CALL AT OR PASS THROU FOLLOWING PORTS ENROUTE TO: ";
            const text7t = document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute").value ? document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute").value : document.getElementById("Homepage_LcCountry").options[document.getElementById("Homepage_LcCountry").selectedIndex].textContent;
  
            
            // Dynamic Text Data
            const text8 = text7t;
            const text9 = "1.";
            const text9t = document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute1").value ? document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute1").value : "";
  
            const text10 = "2. ";
            const text10t = document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute2").value ? document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute2").value : "";
  
            const text11 = "3. ";
            const text11t = document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute3").value ? document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute3").value : "";
  
            const text12 = "4. ";
            const text12t = document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute4").value ? document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute4").value : "";
  
  
            const text13t1 = document.getElementById("CertificateAppendedToBLother5Modal_Day").value ? document.getElementById("CertificateAppendedToBLother5Modal_Day").value : "___";
            const text13t2 = document.getElementById("CertificateAppendedToBLother5Modal_Month").value ? document.getElementById("CertificateAppendedToBLother5Modal_Month").value : "___";
            const text13t3 = document.getElementById("CertificateAppendedToBLother5Modal_Year").value ? document.getElementById("CertificateAppendedToBLother5Modal_Year").value : "2024";
  
            const text13 = `WRITTEN ON THE ${text13t1} DAY OF ${text13t2} ${text13t3} `;
  
  
            const text14t1 = document.getElementById("CertificateAppendedToBLother5Modal_SwornToDay").value ? document.getElementById("CertificateAppendedToBLother5Modal_SwornToDay").value : "___";
            const text14t2 = document.getElementById("CertificateAppendedToBLother5Modal_SwornToMonth").value ? document.getElementById("CertificateAppendedToBLother5Modal_SwornToMonth").value : "___";
            const text14t3 = document.getElementById("CertificateAppendedToBLother5Modal_SwornToYear").value ? document.getElementById("CertificateAppendedToBLother5Modal_SwornToYear").value : "2024";
  
  
  
            const text14 = `SWORN TO BEFORE ME, ON THE ${text14t1} DAY OF ${text14t2} ${text14t3}`;
  
  
            const text15 = document.getElementById("CertificateAppendedToBLother5Modal_PortOfLoading").value ? document.getElementById("CertificateAppendedToBLother5Modal_PortOfLoading").value : document.getElementById("lcInformationPageLoadOnBoard").value;
  
  
  
  
            const LongText1 = document.getElementById("CertificateAppendedToBLother5Modal_Description").value ? document.getElementById("CertificateAppendedToBLother5Modal_Description").value : `THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO ${text8}.`;
  
            const LongText2 = document.getElementById("CertificateAppendedToBLother5Modal_Remarks").value ? document.getElementById("CertificateAppendedToBLother5Modal_Remarks").value : "";
            
  
            // Structure of the page
            printText(pdf, 2.00, 2.50, text1.toUpperCase(), true, 16);
  
            printText(pdf, 1.00, 3.25, text2.toUpperCase(), true, 12);
            printText(pdf, 3.00, 3.25, text2t.toUpperCase(), true, 12);
  
  
            printText(pdf, 0.70, 4.00, text4.toUpperCase(), true, 8);
            printText(pdf, 2.70, 4.00, text4t1.toUpperCase(), true, 8);
            printText(pdf, 4.30, 4.00, text18.toUpperCase(), true, 8);
            printText(pdf, 5.90, 4.00, text4t2.toUpperCase(), true, 8);
  
  
            printText(pdf, 0.70, 4.30, text5.toUpperCase(), true, 8);
            printText(pdf, 2.70, 4.30, text5t.toUpperCase(), true, 8);
            printText(pdf, 0.70, 4.60, text6.toUpperCase(), true, 8);
            printText(pdf, 2.70, 4.60, text6t.toUpperCase(), true, 8);
  
  
            printText(pdf, 0.70, 4.90, text7.toUpperCase(), true, 8);
            printText(pdf, 6.20, 4.90, text7t.toUpperCase(), true, 8);
  
  
            printText(pdf, 0.70, 5.70, text9.toUpperCase(), true, 8);
            printText(pdf, 0.85, 5.70, text9t.toUpperCase(), true, 8);
            printText(pdf, 2.70, 5.70, text10.toUpperCase(), true, 8);
            printText(pdf, 2.85, 5.70, text10t.toUpperCase(), true, 8);
            printText(pdf, 4.70, 5.70, text11.toUpperCase(), true, 8);
            printText(pdf, 4.85, 5.70, text11t.toUpperCase(), true, 8);
            printText(pdf, 6.70, 5.70, text12.toUpperCase(), true, 8);
            printText(pdf, 6.85, 5.70, text12t.toUpperCase(), true, 8);
            
            
            longText(pdf, LongText1.toUpperCase(), 0.70, 6.00, 7.00, 8, true, false);
            
            
            printText(pdf, 0.70, 7.20, text13.toUpperCase(), true, 8);
            printText(pdf, 0.70, 7.50, text14.toUpperCase(), true, 8);
            printText(pdf, 0.70, 7.80, text15.toUpperCase(), true, 8);
  
  
            drawLine(pdf, 5.15, 7.80, 7.75, 7.80, 0.004);
  
            longText(pdf, LongText2.toUpperCase(), 5.20, 7.95, 2.00, 7, true, false);
            mylongText(pdf, LongText3.toUpperCase(), 0.70, 10.00, 7.00, 7, true, false);
  
  
  
  
  }