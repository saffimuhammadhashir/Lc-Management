export function BillOfLadingFunction(
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
       
      //! Text

      pdf.setFont("helvetica");
      pdf.setFontType("bold");


     
      //! Start Check Box

      // DCS
      let longText6 = ``;

      if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
          longText6 = `THESE COMMODITIES, TECHNOLOGY OR SOFTWARE WERE EXPORTED FROM THE UNITED STATES IN ACCORDANCE WITH THE EXPORT ADMINISTRATION REGULATIONS. DIVERSION CONTRARY TO U. S. LAW IS PROHIBITED. `; // DOS 
      }
      
      // LC Check
      let text4 = document.getElementById("lcInformationPageLcNumber").value;
      let text5 = document.getElementById("Homepage_ShipDate").value;

      printText(pdf, 3.25, 0.18, document.getElementById('BL_ModalTitle').value, true, 12);
      if (document.getElementById("BL_LCNumberCheck").checked) {
        printText(pdf, 4.25, 1.10, "L/C NUMBER: " + text4 + " AND DATE. "  + text5, true, 8);

      } else {
        printText(pdf, 4.50, 1.10, "DATE. "  + text5, true, 8);

      }

    
      // 3. Global Check
      let LongText3 = "";
      var BL_GlobalCheck = document.getElementById("BL_GlobalCheck");
      if (BL_GlobalCheck.checked) {
          LongText3 = document.getElementById('LC_Information_Global_Certification').value;
          mylongText(pdf, LongText3, 4.00, 2.50, 3.20, 6, true, false);

      }


      // 4. Limited Certification
      let LongTextLC = "";
      var lcInformationPageLimitedCertifications_BLcheckbox = document.getElementById("lcInformationPageLimitedCertifications_BLcheckbox");
      if (lcInformationPageLimitedCertifications_BLcheckbox.checked) {
          LongTextLC = document.getElementById('lcInformationPageLimitedCertifications').value;
          mylongText(pdf, LongTextLC, 4.00, 2.50, 3.20, 6, true, false);

      }

      //! End Check Box


      // Description
      let longTestDescription = document.getElementById('BL_Description').value ? document.getElementById('BL_Description').value : document.getElementById("lcInformationPageShortMerchadiseDescriptionForBL").value;              

      // mylongText(pdf, longTestDescription.toUpperCase(), 5.65,  6.40, 1.8, 5, true, true);
      mylongText(pdf, longTestDescription.toUpperCase(), 2.80, 4.53, 3.20, 8, true, false);

      

      let text1 = document.getElementById('LCInformation_BENEFICIARYName').value
      printText(pdf, 0.25, 0.50, text1, true, 8);
      mylongText(pdf, document.getElementById('LCInformation_BENEFICIARYAddress').value, 0.25, 0.50, 3.8, 8, true, false);

      printText(pdf, 4.25, 0.50, "DOCUMENT NO: " + document.getElementById('TransportInformation_MOBLNumber').value, true, 8);
      let text1t = document.getElementById('BL_ExportReference').value ? "EXPORT REFERENCE: " + document.getElementById('BL_ExportReference').value : "";              

      printText(pdf, 4.25, 0.80, text1t, true, 8);
      
      
      let text3 = document.getElementById('BL_ForwardingAgentReference').value ? document.getElementById('BL_ForwardingAgentReference').value : "";              
      
      let TransportInformation_CountryOfOrigin = document.getElementById("TransportInformation_CountryOfOrigin");
      let TransportInformation_CountryOfOriginOption = TransportInformation_CountryOfOrigin.options[TransportInformation_CountryOfOrigin.selectedIndex];
      let TransportInformation_CountryOfOriginText = TransportInformation_CountryOfOriginOption.text;

      let text8 = TransportInformation_CountryOfOriginText;

      let text9t = document.getElementById('TransportInformation_PlaceOfReceiptBy').value
      let text9 = document.getElementById('TransportInformation_VesselName').value
      let text10 = document.getElementById('lcInformationPageLoadOnBoard').value
      let text11 = document.getElementById('lcInformationPageForTransportTo').value
      let text11t = document.getElementById('TransportInformation_ForTranshipmentTo').value
    
      let text12 = document.getElementById("TransportInformation_NumberOfPieces").value;

      let text13 = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;
      let text13t = document.getElementById("TransportInformation_NetWeight").value + document.getElementById("TransportInformation_Measurements").value ;

      let text14 = document.getElementById('lcInformationPageFreight').value;



      let longText1 = document.getElementById("lcInformationPageConsignToParty").value;
      let longText2 = document.getElementById("lcInformationPageNotifyParty").value;

      
      
      let longText3 = ""; // GLOBAL


        
      let TOS_Date = document.getElementById("Homepage_ShipDate").value;
      let dateParts = TOS_Date.split("-");
      let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
      
    
      let longText7 = document.getElementById('BL_SpecialInstruction').value ? document.getElementById('BL_SpecialInstruction').value : "";  

      let BL_CleanShippedButton = document.getElementById("BL_CleanShippedButton");
      if (!BL_CleanShippedButton.checked) {
        let longText5 = `'CLEAN SHIPPED ONBOARD' ${document.getElementById("TransportInformation_VesselName").value} At ${document.getElementById("lcInformationPageLoadOnBoard").value} On ${formattedDate}`;
        mylongText(pdf, longText5, 5.40, 5.90, 2.00, 8, true, false);
      
      }

      




      printText(pdf, 4.25, 1.65, "FORWARDER REF.: " + text3, true, 8);


      mylongText(pdf, longText1, 0.25, 1.30, 3.20, 8, true, false);
      mylongText(pdf, longText2, 0.25, 2.30, 3.20, 8, true, false);


      printText(pdf, 4.00, 2.40, text8, true, 9);

      mylongText(pdf, longText3, 4.00, 2.65, 3.20, 8, true, false);

      printText(pdf, 0.25, 3.35, text9t, true, 8);
      printText(pdf, 0.25, 3.75, text9, true, 8);
      printText(pdf, 3.00, 3.75, text10, true, 8);
      printText(pdf, 0.25, 4.15, text11, true, 8);
      printText(pdf, 3.00, 4.15, text11t, true, 8);


      printText(pdf, 2.00, 4.70, text12, true, 8);



      printText(pdf, 6.30, 4.62, text13, true, 8);
      printText(pdf, 6.30, 5.22, text13t, true, 8);



      printText(pdf, 0.25, 6.55, "FREIGHT: " + text14, true, 8);


      mylongText(pdf, longText6, 0.25, 7.30, 5.75, 8, true, true);

      printText(pdf, 0.25, 8.50, "Special Instructions", false, 8);
      mylongText(pdf, longText7, 0.25, 8.51, 5.75, 8, true, true);


     
      

    }
