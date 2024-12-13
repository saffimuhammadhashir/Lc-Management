export function CertificateAppendedToInsuranceCertificateFunction5(
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
  
            const text1 = document.getElementById("CertificateAppendedToInsuranceCertificateother5ModalTitle").value ? document.getElementById("CertificateAppendedToInsuranceCertificateother5ModalTitle").value : "CERTIFICATE APPENDED TO INSURANCE CERTIFICATE";
  
  
            let text2 = " ";
            let text2t = " ";
            if (document.getElementById('other5_LCNumberCheck').checked) {
                text2 = "L/C NUMBER: ";
                text2t = document.getElementById('lcInformationPageLcNumber').value;
            }
  
  
            const text4 = "ISSUED BY: ";
            const text4t1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_IssuedBy").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_IssuedBy").value : "";
  
            
            const text5 = "1.NAME OF INSURANCE COMPANY: ";
            const text5t1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_NameOfInsuranceCompany").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_NameOfInsuranceCompany").value : document.getElementById("TransportInformation_InsuranceCompanyName").value;
  
  
            const text6 = "2.ADDRESS OF ITS PRINCIPAL ";
            const text7 = "OFFICE: ";
            const text6t1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_AddressOfItsPrincipalOffice").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_AddressOfItsPrincipalOffice").value : "";
  
            const text8 = "3.COUNTRY OF ITS INCORPORATION: ";
            const text8t1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_CountryOfItsIncorporation").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_CountryOfItsIncorporation").value : "";
  
  
            const text10 = "NAME OF AGENT/REPRESENTATIVE: ";
            const text10t1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_NameOfAgent").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_NameOfAgent").value : "";
  
            const text11 = "ADDRESS IN: ";
            const text11t1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_AddressIn").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_AddressIn").value : "";
  
            
            const text12 = "DATED " + (document.getElementById("CertificateAppendedToInsuranceother5Modal_DateAt").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_DateAt").value : document.getElementById("lcInformationPageLoadOnBoard").value);
  
  
            const text13t1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_SwornToDay").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_SwornToDay").value : "___";
            const text13t2 = document.getElementById("CertificateAppendedToInsuranceother5Modal_SwornToMonth").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_SwornToMonth").value : "___";
            const text13t3 = document.getElementById("CertificateAppendedToInsuranceother5Modal_SwornToYear").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_SwornToYear").value : "2024";
            
            
            const text13 = `SWORN TO BEFORE ME, ON THE ${text13t1} DAY OF ${text13t2} ${text13t3}`;
            
            
            // Dynamic Text Data
            const text7t = document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute").value ? document.getElementById("CertificateAppendedToBLother5Modal_VesselEnroute").value : document.getElementById("Homepage_LcCountry").options[document.getElementById("Homepage_LcCountry").selectedIndex].textContent;
  
            const text9 = text7t;
  
  
            const LongText1 = document.getElementById("CertificateAppendedToInsuranceother5Modal_Description").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_Description").value : `THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE ${text9}`;
  
            const LongText2 = document.getElementById("CertificateAppendedToInsuranceother5Modal_Remarks").value ? document.getElementById("CertificateAppendedToInsuranceother5Modal_Remarks").value : "";
  
              // Global Check
              let LongText3 = " ";
              if (document.getElementById('other5_GlobalCheck').checked) {
                  LongText3 = document.getElementById("LC_Information_Global_Certification").value;
              }
  
            // Structure of the page
            printText(pdf, 1.10, 1.50, text1.toUpperCase(), true, 16);
            printText(pdf, 1.10, 3.30, text2.toUpperCase(), true, 12);
            printText(pdf, 3.00, 3.30, text2t.toUpperCase(), true, 12);
  
            printText(pdf, 1.10, 3.80, text4.toUpperCase(), true, 8);
            printText(pdf, 3.50, 3.80, text4t1.toUpperCase(), true, 8);
  
  
            printText(pdf, 1.10, 4.20, text5.toUpperCase(), true, 8);
            printText(pdf, 3.50, 4.20, text5t1.toUpperCase(), true, 8);
  
  
            printText(pdf, 1.10, 4.60, text6.toUpperCase(), true, 8);
            printText(pdf, 3.50, 4.60, text6t1.toUpperCase(), true, 8);
            printText(pdf, 1.10, 4.75, text7.toUpperCase(), true, 8);
  
  
            printText(pdf, 1.10, 5.10, text8.toUpperCase(), true, 8);
            printText(pdf, 3.50, 5.10, text8t1.toUpperCase(), true, 8);
  
            longText(pdf, LongText1.toUpperCase(), 1.10, 5.60, 5.75, 8, true, true);
  
            printText(pdf, 1.10, 6.50, text10.toUpperCase(), true, 8);
            printText(pdf, 3.50, 6.50, text10t1.toUpperCase(), true, 8);
  
            printText(pdf, 1.10, 6.90, text11.toUpperCase(), true, 8);
            printText(pdf, 3.50, 6.90, text11t1.toUpperCase(), true, 8);
  
  
            printText(pdf, 1.10, 8.50, text12.toUpperCase(), true, 8);
  
            printText(pdf, 1.10, 8.80, text13.toUpperCase(), true, 8);
          
  
  
            drawLine(pdf, 1.10, 9.50, 3.70, 9.50, 0.03);
  
            longText(pdf, LongText2.toUpperCase(), 1.12, 9.65, 4.20, 8, true, true);
            mylongText(pdf, LongText3.toUpperCase(), 1.12, 10.30, 5.75, 7, true, false);
  
  }