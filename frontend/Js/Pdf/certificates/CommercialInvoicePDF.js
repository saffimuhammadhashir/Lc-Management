export function commercialInvoiceFunction(
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
    formatDate,
    currency
) {
      
            console.log('Commercial Invoice Certificate 1');
            
            pdf.setFont('courier', 'bold');
            console.log(pdf.getFontList());
            


            // ! There are 4 Checks DCS, LC Number, 2nd Applicant,
            // DCS
            let longTest2 = ``;
            if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
                longTest2 = `THESE COMMODITIES, TECHNOLOGY OR SOFTWARE WERE EXPORTED FROM THE UNITED STATES IN ACCORDANCE WITH THE EXPORT ADMINISTRATION REGULATIONS. DIVERSION CONTRARY TO U. S. LAW IS PROHIBITED. `; // DOS 
            }
            longText(pdf, longTest2, 3.57, 10.50, 4.00, 8, true, true, "courier");


            pdf.setFont('courier', 'bold');


            // LC Number
            let text11 = document.getElementById("lcInformationPageLcNumber").value;
            let CommercialInvoiceLCNumberCheck = document.getElementById("CommercialInvoiceLCNumberCheck");
            if (CommercialInvoiceLCNumberCheck.checked) {
                pdf.setFont('helvetica', 'bold');
                printText(pdf, 4.25, 2.00, "L/C NUMBER: ", true, 8);
                printText(pdf, 5.50, 2.00, text11, true, 8); 
            }

            // 2nd Applicant
            let CommercialInvoiceSecondApplicantCheck = document.getElementById("CommercialInvoiceSecondApplicantCheck");
            if (CommercialInvoiceSecondApplicantCheck.checked) {
                let text5 = document.getElementById("lcInformationSecondApplicantHeader").value;
                let text6 = document.getElementById("lcInformationSecondApplicantName").value;
                let text7 = document.getElementById("lcInformationSecondApplicantAddress").value;
                printText(pdf, 0.57, 1.70, text5, true, 8);
                printText(pdf, 0.57, 1.85, text6, true, 8);
                printText(pdf, 0.57, 2.00, text7, true, 8);

            } else {
                printText(pdf, 0.50, 1.70, document.getElementById('lcInformationPageApplicantName').value, true, 8);
                mylongText(pdf, document.getElementById('lcInformationPageApplicantAddress').value,0.50, 1.70, 5.0, 8, true, false);
    

            }

            // Global
            let LongText1 = "";
            let CommercialInvoiceGlobalCheck = document.getElementById("CommercialInvoiceGlobalCheck");
            if (CommercialInvoiceGlobalCheck.checked) {
                LongText1 = document.getElementById('LC_Information_Global_Certification').value;
                mylongText(pdf, LongText1, 0.57, 9.35, 7.00, 7, true, true, "courier");
            }


            // 4. Limited Certification
            let LongTextLC = "";
            var lcInformationPageLimitedCertifications_CIcheckbox = document.getElementById("lcInformationPageLimitedCertifications_CIcheckbox");
            if (lcInformationPageLimitedCertifications_CIcheckbox.checked) {
                LongTextLC = document.getElementById('lcInformationPageLimitedCertifications').value;
                mylongText(pdf, LongTextLC, 0.57, 8.65, 7.00, 7, true, true, "courier");

            }

            // Description
            let longTestDescription = document.getElementById('CommercialInvoiceModalLargeMerchadiseDescription').value ? document.getElementById('CommercialInvoiceModalLargeMerchadiseDescription').value : document.getElementById("lcInformationPageLargeMerchadiseDescriptionInvoice").value;              
            mylongText(pdf, longTestDescription.toUpperCase(), 0.57, 3.45, 7.0, 7, true, false);


            let text10 = document.getElementById('CommercialInvoiceModalInvoiceDate').value ? document.getElementById('CommercialInvoiceModalInvoiceDate').value : document.getElementById('TransportInformation_InvoiceDate').value;              
            text10 = formatDate(text10);
            




            // TEXT DATA
            printText(pdf, 0.50, 0.50, document.getElementById('LCInformation_BENEFICIARYName').value, true, 10);
            mylongText(pdf, document.getElementById('LCInformation_BENEFICIARYAddress').value,0.50, 0.50, 4.0, 10, true, false);


            const text4 = document.getElementById('CommercialInvoiceModalTitle').value;
            const text9 = document.getElementById("TransportInformation_InvoiceNumber").value;


            // Currency
            let Homepage_Currency = document.getElementById("lcInformationPageCurrency");
            let Homepage_CurrencyOption =
            Homepage_Currency.options[Homepage_Currency.selectedIndex];
            let Homepage_CurrencyOptionText = Homepage_CurrencyOption.text;
            let text12 = "";

            if (Homepage_CurrencyOptionText == "Dollar") {
                text12 = "USD";
            } else {
                text12 = Homepage_CurrencyOptionText;
            }
            const text13 =  OriginalOrCopy;

            let text14 = "";

            let TransportInformation_PartialOrCompShippment = document.getElementById("TransportInformation_PartialOrCompShippment");
            let TransportInformation_PartialOrCompShippmentOption = TransportInformation_PartialOrCompShippment.options[TransportInformation_PartialOrCompShippment.selectedIndex];
            let TransportInformation_PartialOrCompShippmentText = TransportInformation_PartialOrCompShippmentOption.text;
            if (TransportInformation_PartialOrCompShippmentText === "Complete Shipment" ) {
                text14 = "COMPLETE SHIPMENT";
            } else {
                text14 = "PARTIAL SHIPMENT";

            }
 
            const text15 = "COVERING:";


          

            let lcInformationPageSalesTerms = document.getElementById("lcInformationPageSalesTerms");
            let lcInformationPageSalesTermsOption = lcInformationPageSalesTerms.options[lcInformationPageSalesTerms.selectedIndex];
            let lcInformationPageSalesTermsText = lcInformationPageSalesTermsOption.text;

            let text38 = lcInformationPageSalesTermsText + " " + document.getElementById("lcInformationPageLocationOfSalesTerms").value;
            
            

            let Homepage_AmtOfDraw = document.getElementById("Homepage_AmtOfDraw");


            if(document.getElementById('TransportInformation_ShowSeperate').checked) {

                let TransportInformation_FreightCharge = document.getElementById("TransportInformation_FreightCharge").value;
                let TransportInformation_InsuranceChg = document.getElementById("TransportInformation_InsuranceChg").value;
      
                let remaining = (Homepage_AmtOfDraw.value - TransportInformation_FreightCharge - TransportInformation_InsuranceChg);
               
    
                if (TransportInformation_FreightCharge && !isNaN(TransportInformation_FreightCharge)) {
                  let AmountRemaining =  currency.currency_symbol + " " + remaining;
                  let AmountFreight = currency.currency_symbol + " " + TransportInformation_FreightCharge;
                  let AmountInsuranceCharge = currency.currency_symbol + " " + TransportInformation_InsuranceChg;
                  let InvoiceModalAmount = currency.currency_symbol + " " + Homepage_AmtOfDraw.value;
                  printText(pdf, 7.00, 8.05, AmountRemaining, true, 8);
                  printText(pdf, 7.00, 8.20, AmountFreight, true, 8);
                  printText(pdf, 7.00, 8.35, AmountInsuranceCharge, true, 8);
                  const amount = InvoiceModalAmount ? InvoiceModalAmount : document.getElementById("Homepage_AmtOfDraw").value;

                  
                  printText(pdf, 7.00, 8.50, InvoiceModalAmount, true, 8);

                } else {
                  console.log("TransportInformation FreightCharge Not Numerical")
                }
      
      
              } else {
                let InvoiceModalAmount = currency.currency_symbol + " " + Homepage_AmtOfDraw.value;
                printText(pdf, 7.00, 8.50, InvoiceModalAmount, true, 8);

              }




            

            
            const text40 = "WE CERTIFY INVOICE TO BE TRUE AND CORRECT";
            const text41 = document.getElementById("LCInformation_BENEFICIARYName").value;
            ;
            const text42 = "Authorized Signature";


            //Printing Text
          
            printText(pdf, 5.150, 0.65, text4, true, 14);

            
            printText(pdf, 4.25, 1.70, "INVOICE NUMBER: ", true, 8);
            printText(pdf, 5.50, 1.70, text9, true, 8);
            printText(pdf, 4.25, 1.85, "DATE: ", true, 8);
            printText(pdf, 5.50, 1.85, text10, true, 8);
           
            printText(pdf, 4.25, 2.15, "CURRENCY: ", true, 8);
            printText(pdf, 5.50, 2.15, text12, true, 8);


            if(text13 == "ORIGINAL"){
                createCell(pdf, 3.00, 2.62, 1.5, 0.4);
            } else {
                createCell(pdf, 3.00, 2.62, 1.0, 0.4);
            }

            printText(pdf, 3.24, 2.87, text13, true, 15);

            printText(pdf, 3.35, 3.13, text14, true);
            printText(pdf, 0.57, 3.13, text15, true);





            printText(pdf, 4.25, 8.50, text38, true, 8);


            printText(pdf, 0.57, 10.30, text40, true, 8);
            printText(pdf, 0.57, 10.45, text41, true, 8);

            drawLine(pdf, 0.57, 11.20, 2.50, 11.20);
            printText(pdf, 0.57, 11.33, text42, true, 8);



}