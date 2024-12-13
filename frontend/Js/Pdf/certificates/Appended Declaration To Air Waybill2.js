export function AppendedDeclarationToAirWaybillFunction2(
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
            // const text1 = "APPENDED DECLARATION TO AIR WAYBILL";
            const text1 = document.getElementById("AppendedDeclarationToAirWaybillother2ModalTitle").value ? document.getElementById("AppendedDeclarationToAirWaybillother2ModalTitle").value : "APPENDED DECLARATION TO AIR WAYBILL";
            let text2 = " ";
            let text2t = " ";

            if (document.getElementById('other2_LCNumberCheck').checked) {
                text2 = "L/C NUMBER: ";
                text2t = document.getElementById('lcInformationPageLcNumber').value;
            }


            let LongText3 = "";
            var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
            if (other2_GlobalCheck.checked) {
              LongText3 = document.getElementById('LC_Information_Global_Certification').value;
            }

            const text4 = "(1) NAME OF PLANE/FLIGHT NO.: ";

            const text4t1 = document.getElementById("TransportInformation_CarrierName").value ? document.getElementById("TransportInformation_CarrierName").value : "";
            const text4t2 = document.getElementById("TransportInformation_1stFlightNumber").value ? document.getElementById("TransportInformation_1stFlightNumber").value : "";


            const text5 = "(2) NATIONALITY OF PLANE: ";
            const text5t = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_NationalityOfPlane").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_NationalityOfPlane").value : "";


            const text6 = "(3) OWNER OF PLANE: ";
            const text6t = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_OwnerOfPlane").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_OwnerOfPlane").value : "";


            const text7 = "(4) PLANE WILL CALL AT OR PASS THRU THE FOLLOWING AIRPORTS ENROUTE TO: ";
            const text7t = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute").value : document.getElementById("Homepage_LcCountry").options[document.getElementById("Homepage_LcCountry").selectedIndex].textContent;

            
            // Dynamic Text Data
            const text8 = text7t;
            const text9 = "1.";
            const text9t = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute1").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute1").value : "";

            const text10 = "2. ";
            const text10t = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute2").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute2").value : "";

            const text11 = "3. ";
            const text11t = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute3").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute3").value : "";

            const text12 = "4. ";
            const text12t = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute4").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute4").value : "";
            
            
            const text13t1 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Day").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Day").value : "___";
            const text13t2 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Month").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Month").value : "___";
            const text13t3 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Year").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Year").value : "2024";

            const text13 = `WRITTEN ON THE ${text13t1} DAY OF ${text13t2} ${text13t3} `;


            const text14t1 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_SwornToDay").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_SwornToDay").value : "___";
            const text14t2 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_SwornToMonth").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_SwornToMonth").value : "___";
            const text14t3 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_SwornToYear").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_SwornToYear").value : "2024";



            const text14 = `SWORN TO BEFORE ME, ON THE ${text14t1} DAY OF ${text14t2} ${text14t3}`;

            
            const text15 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_PortOfLoading").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_PortOfLoading").value : document.getElementById("lcInformationPageLoadOnBoard").value;




            const LongText1 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Description").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Description").value : `THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO ${text8}.`;
            
            const LongText2 = document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Remarks").value ? document.getElementById("AppendedDeclarationToAirWaybillother2Modal_Remarks").value : "";

            
            // Structure of the page
            printText(pdf, 2.00, 2.50, text1.toUpperCase(), true, 16);

            printText(pdf, 1.00, 3.25, text2.toUpperCase(), true, 12);
            printText(pdf, 3.00, 3.25, text2t.toUpperCase(), true, 12);


            printText(pdf, 0.70, 4.00, text4.toUpperCase(), true, 8);
            printText(pdf, 2.70, 4.00, text4t1.toUpperCase(), true, 8);
            printText(pdf, 3.90, 4.00, text4t2.toUpperCase(), true, 8);


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