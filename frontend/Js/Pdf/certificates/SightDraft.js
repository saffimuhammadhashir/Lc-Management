export function sightDraftFunction(
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
    currency,
    DraftNumber
  
  
  ) {
       
      //! Check
      // Global Check

      let LongText1 = "";
      var sightDraftGlobal = document.getElementById("sightDraftGlobal");
      if (sightDraftGlobal.checked) {
        LongText1 = document.getElementById('LC_Information_Global_Certification').value;

      }


      //! Buttons

      // Radio Button For Collection or For Payment/ Negotiation under L/C
      if(document.querySelector('input[name="sightDraftForCollectionorPayment"]:checked').value === "sightDraftForCollection") {
        radioButtonpdf(pdf, 5.4, 5.1, 0.1, true);
        radioButtonpdf(pdf, 5.4, 5.5, 0.1, false);

      }
      else {
        radioButtonpdf(pdf, 5.4, 5.1, 0.1, false);
        radioButtonpdf(pdf, 5.4, 5.5, 0.1, true);
      }


      // checkbox
      checkbox(pdf, 0.7, 6.47, 0.1, 0.1, !document.getElementById("sightDraftDeliverAllDocuments1Mailing").checked);
      checkbox(pdf, 0.7, 6.62, 0.1, 0.1, !document.getElementById("sightDraftDeliverAllDocuments2Mailings").checked);
      checkbox(pdf, 0.7, 6.77, 0.1, 0.1, !document.getElementById("sightDraftDeliverDocumentsAgainstPayment").checked);
      checkbox(pdf, 0.7, 6.92, 0.1, 0.1, !document.getElementById("sightDraftAllChargesForAccount").checked);
      checkbox(pdf, 0.7, 7.07, 0.1, 0.1, !document.getElementById("sightDraftWaiveCharges").checked);
      checkbox(pdf, 0.7, 7.22, 0.1, 0.1, !document.getElementById("sightDraftProtestForNonPayment").checked);
      checkbox(pdf, 0.7, 7.37, 0.1, 0.1, !document.getElementById("sightDraftDoNotProtest").checked);
      checkbox(pdf, 0.7, 7.52, 0.1, 0.1, !document.getElementById("sightDraftPresentArrivalGoods").checked);
      checkbox(pdf, 0.7, 7.67, 0.1, 0.1, !document.getElementById("sightDraftNonPaymentAirmailGivingReasons").checked);
      checkbox(pdf, 0.7, 7.82, 0.1, 0.1, !document.getElementById("sightDraftPaymentAirmail").checked);


      checkbox(pdf, 4.40, 7.72, 0.1, 0.1, !document.getElementById("sightDraftToActFully").checked);
      checkbox(pdf, 4.40, 8.02, 0.1, 0.1, !document.getElementById("sightDraftToAssistIn").checked);



      //! Text
      let Homepage_AmtOfDraw = document.getElementById('Homepage_AmtOfDraw').value;
      let amountWithCommas = parseFloat(Homepage_AmtOfDraw).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      let text1 =  currency.currency_symbol + "  " + amountWithCommas;
      printText(pdf, 0.7, 1.1, text1.toUpperCase(), true, 8);
  
      const words = convertCurrencyToWords(Homepage_AmtOfDraw, currency.currency_name_singular, currency.currency_name_plural, currency.currency_fraction_name_singular, currency.currency_fraction_name_plural);
      console.log(`${Homepage_AmtOfDraw} in words: ${words}`);
      let text5 = words + " " + "(" + currency.currency_description + ")";
  
      longText(pdf, text5.toUpperCase(), 0.7, 2.20, 6, 8, true, true);



      let text2 = "";
      if(document.getElementById('DraftChangeDate').value){
        text2 = document.getElementById('DraftChangeDate').value;              
      } else{
        text2 = document.getElementById('Homepage_ShipDate').value;              
      }


      text2 = formatDate(text2);



      // TOD
      console.log("TOD" + DraftNumber);
      
      let TenorOfDraftElement = document.getElementById("lcInformationPageTenorOfDraft");
      let TenorOfDraftElementOption = TenorOfDraftElement.options[TenorOfDraftElement.selectedIndex];
      let TenorOfDraftElementOptionext = TenorOfDraftElementOption.text;

      let TOS_Date =  document.getElementById("Homepage_ShipDate").value;
      let dateParts = TOS_Date.split("-");
      let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;

      let text3 = "";
      if(document.getElementById('sightDraftOriginalNumber').value == 2){
        if(DraftNumber == 0){
          text3 = `AT ${TenorOfDraftElementOptionext} FROM FCR DATE ${formattedDate} OF THIS SECOND EXCHANGE (FIRST UNPAID)`;

        }

        if(DraftNumber == 1){
          text3 = `AT ${TenorOfDraftElementOptionext} FROM FCR DATE ${formattedDate} OF THIS FIRST EXCHANGE (SECOND UNPAID)`;

        }
      }

      if(document.getElementById('sightDraftOriginalNumber').value == 1){
        text3 = `AT ${TenorOfDraftElementOptionext} FROM FCR DATE ${formattedDate} OF THIS SOLE EXCHANGE`;

      }


      const text4 = "PAY TO THE ORDER OF" + " " + (document.getElementById("LCInformation_BENEFICIARYName").value).toUpperCase();
      
 
      const text8 = "FOR VALUE RECEIVED AND CHARGE THE SAME TO THE ACCOUNT OF";
      const text9 = document.getElementById("lcInformationPageApplicantName").value;
      const text10 = document.getElementById("lcInformationPageLcDrawee").value;
    
      
      const text13 = document.getElementById("LCInformation_BENEFICIARYName").value;
      const text14 = "Invoice No.";
      const text15 = document.getElementById('TransportInformation_InvoiceNumber').value;

      const text16 = "Authorized Signature";

      // let text18 = "PNC BANK N.A. EAST BRUNSWICK";
      // let text19 = "2 TOWER CENTER BLVD., 9TH FLOOR";
      // let text20 = "MAIL STOP NO. J3-JTTC-09-B 08816,";
      // let text21 = "Rawalpindi";
      // let text22 = ",";
      // let text23 = "";

      
      let sentence =  "";
      let text18 = "";
      let text19 = "";
      let text20 = "";
      let text21 = "";
      let text22 = "";
      let text23 = "";

      if(document.getElementById('sightDraftModelNegoBank').value){
        let temp  =  document.getElementById('sightDraftModelNegoBank').value
        sentence = temp.split(',')[0];

        text21 = temp.split(',')[1] + ",";              
        text22 = temp.split(',')[2] + ",";             
        text23 = temp.split(',')[3] + ",";  


        console.log('Sentence in Dialog: ', sentence);
        
            
      } else{
        sentence =  document.getElementById('storecustomer_nego_address').value      
        text21 = document.getElementById('storecustomer_nego_city').value + ",";              
        text22 = document.getElementById('storecustomer_nego_state').value + ",";              
        text23 = document.getElementById('storecustomer_nego_country').value;   
        console.log('Direct Sentence: ', sentence);
                
      }

      let sentenceToWords = sentence.split(/\s+/);
      text18 = sentenceToWords.slice(0, 4).join(" ");
      text19 = sentenceToWords.slice(4, 8).join(" ");
      text20 = sentenceToWords.slice(8).join(" ");

   


     

      
      const text25 = "Dear Sir or Madam:";
      const text26 = "We enclose the above draft and documents enclosed";
      const text27 = "with this package: ";
      const text29 = "For Collection";
      const text30 = "For Payment / Negotiation under L/C";


      
      const text31 =
      "PLEASE HANDLE IN ACCORDANCE WITH INSTRUCTIONS LISTED BELOW";
    const c1 = "Deliver all documents in one mailing.";
    const c2 = "Deliver documents in two mailings.";
    const c3 = "Deliver documents against payment if sight draft, or acceptance if time draft.";
    const c4 = "All charges for account of drawee.";
    const c5 = "Do not waive charges.";
    const c6 = "Protest for non-payment or non-acceptance.";
    const c7 = "Do not protest.";
    const c8 = "Present on arrival of goods.";
    const c9 = "Advise non-payment/non-acceptance by airmail/cable giving reasons.";
    const c10 = "Advise payment/acceptance by airmail/cable";


    const c11 = "To act fully on our behalf, i.e., authorize reductions, extensions, free delivery, waiving of protest, etc";
    const c12 = "To assist in obtaining acceptance or payment of draft, as drawn, but not to alter its terms in any way.";



    const text38 = "Authorized Signature";
    const text39 = "IN CASE OF NEED REFER TO:";
    const text40 = "SAM SADAAT";
    const text41 = "(713)863-8080";
    const text42 = "(713)863-748";
    const text43 = "Sam@gmail.com";



     let text45 = document.getElementById('storecustomer_CUSTOMER_PAYEE_NAME').value;
     let text46 = document.getElementById('storecustomer_CUSTOMER_BANK_NAME').value;
     let text47 = document.getElementById('storecustomer_CUSTOMER_ACCOUNT_NUMBER').value;
     let text48 = document.getElementById('storecustomer_CUSTOMER_ABA').value;


     let freeTextForDraft = ""
     freeTextForDraft = document.getElementById("sightDraftFreeText").value

     longText(pdf, freeTextForDraft.toUpperCase(), 3.6, 9.13, 3.40, 8, true, true);


      //! Structure
      createCell(pdf, 0.57, 0.7, 7.1, 3.25);
      createCell(pdf, 0.57, 6.0, 7.1, 2.5);
      createCell(pdf, 0.57, 9.0, 7.1, 1.2);
      drawLine(pdf, 0.57, 1.2, 2.2, 1.2);
      drawLine(pdf, 6.8, 1.2, 7.67, 1.2);
      drawLine(pdf, 5.4, 3.35, 7.3, 3.35);
      drawLine(pdf, 1.4, 3.7, 2.50, 3.7);
      drawLine(pdf, 4.3, 6.35, 4.3, 8.5);
      drawLine(pdf, 0.7, 8.2, 4.1, 8.2);
      drawLine(pdf, 5.2, 10.9, 7.2, 10.9);

    

      printText(pdf, 6.9, 1.1, text2, true, 8);


      printText(pdf, 0.7, 1.90, text3.toUpperCase(), true, 8);
      printText(pdf, 0.7, 2.10, text4.toUpperCase(), true, 8);
      printText(pdf, 0.7, 2.55, text8.toUpperCase(), true, 8);
      printText(pdf, 5.25, 2.55, text9.toUpperCase(), true, 8);
      printText(pdf, 0.7, 2.9, "TO", true, 8);
      printText(pdf, 1.1, 2.9, text10.toUpperCase(), true, 8);
     
      printText(pdf, 5.1, 2.90, text13.toUpperCase(), true, 7);
      printText(pdf, 0.7, 3.65, text14.toUpperCase(), true, 8);
      printText(pdf, 1.5, 3.65, text15.toUpperCase(), true, 8);
      printText(pdf, 5.4, 3.44, text16.toUpperCase(), false, 5);

      mylongText(pdf, LongText1.toUpperCase(), 2.35, 0.74, 4.2, 7, true, true);




      printText(pdf, 0.7, 4.35, text18.toUpperCase(), true);
      printText(pdf, 0.7, 4.5, text19.toUpperCase(), true);
      printText(pdf, 0.7, 4.65, text20.toUpperCase(), true);
      printText(pdf, 0.7, 4.8, text21.toUpperCase(), true);
      printText(pdf, 0.7, 4.95, text22.toUpperCase(), true);
      printText(pdf, 0.7, 5.10, text23.toUpperCase(), true);
      printText(pdf, 0.7, 5.40, text25.toUpperCase(), true);
      printText(pdf, 0.7, 5.55, text26.toUpperCase(), true);
      printText(pdf, 0.7, 5.7, text27.toUpperCase(), true);
      printText(pdf, 5.6, 5.125, text29.toUpperCase(), true);
      printText(pdf, 5.6, 5.525, text30.toUpperCase(), true);



      printText(pdf, 2.5, 6.2, text31.toUpperCase(), true);


      printText(pdf, 0.9, 6.55, c1, true);
      printText(pdf, 0.9, 6.70, c2, true);
      printText(pdf, 0.9, 6.85, c3, true);
      printText(pdf, 0.9, 7.00, c4, true);
      printText(pdf, 0.9, 7.15, c5, true);
      printText(pdf, 0.9, 7.30, c6, true);
      printText(pdf, 0.9, 7.45, c7, true);
      printText(pdf, 0.9, 7.60, c8, true);
      printText(pdf, 0.9, 7.75, c9, true);
      printText(pdf, 0.9, 7.90, c10, true);


      printText(pdf, 4.40, 7.57, "Who is empowered by us", true);


      longText(pdf, c11, 4.60, 7.60, 2.90, 6, true, true);
      longText(pdf, c12, 4.60, 7.90, 2.90, 6, true, true);











      printText(pdf, 0.7, 8.29, text38.toUpperCase(), false, 5);
      printText(pdf, 4.7, 6.55, text39.toUpperCase(), true, 7);


      var selectElement = document.getElementById('referToTypeSightDraft');
      var selectedIndex = selectElement.selectedIndex;
      if (selectedIndex === 1) {
        printText(pdf, 6.0, 6.20, "(Forwarder)", true, 7);
        printText(pdf, 4.7, 6.85, "Forwarder Name:", true, 7);
        printText(pdf, 5.7, 6.85, text40.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.00, "Company Name: ", true, 7);
        printText(pdf, 5.7, 7.00, text41.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.15, "Reference No: ", true, 7);
        printText(pdf, 5.7, 7.15, text42.toUpperCase(), true, 7);
      } 

      else if (selectedIndex === 2) {
        printText(pdf, 6.0, 6.20, "(Shipper)", true, 7);
        printText(pdf, 4.7, 6.85, "Shipper Name:", true, 7);
        printText(pdf, 5.7, 6.85, text40.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.00, "Company Name: ", true, 7);
        printText(pdf, 5.7, 7.00, text41.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.15, "Reference No: ", true, 7);
        printText(pdf, 5.7, 7.15, text42.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.30, "EMAIL: ", true, 7);
        printText(pdf, 5.7, 7.30, text43.toUpperCase(), true, 7);
      } 
            
      else {
        printText(pdf, 6.0, 6.20, "(Default)", true, 7);
        printText(pdf, 4.7, 6.85, "NAME:", true, 7);
        printText(pdf, 5.3, 6.85, text40.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.00, "PHONE: ", true, 7);
        printText(pdf, 5.3, 7.00, text41.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.15, "FAX: ", true, 7);
        printText(pdf, 5.3, 7.15, text42.toUpperCase(), true, 7);
        printText(pdf, 4.7, 7.30, "EMAIL: ", true, 7);
        printText(pdf, 5.3, 7.30, text43.toUpperCase(), true, 7);
      }   

     
      printText(pdf, 0.6, 8.8, "OTHER INSTRUCTIONS:", true, 7);   
      printText(pdf, 0.7, 9.15, "REMIT PAYMENT TO: ", true);
      printText(pdf, 0.7, 9.45, text45.toUpperCase(), true, 7);
      printText(pdf, 0.7, 9.6, text46.toUpperCase(), true, 7);
      printText(pdf, 0.7, 9.75, "ACCOUNT N0.", true, 7);
      printText(pdf, 1.5, 9.75, text47.toUpperCase(), true, 7);
      printText(pdf, 0.7, 9.9, "ABA No.", true, 7);
      printText(pdf, 1.5, 9.9, text48.toUpperCase(), true, 7);

      printText(pdf, 5.2, 11.0, text38.toUpperCase(), true);
      
    }

function convertCurrencyToWords(
      amount,
      IntergerNameSingular,
      IntergerNameplural,
      DecimalNameSingular,
      DecimalNamePlural
    ) {
      var integerPart = Math.floor(amount);
      var fractionalPart = (amount - integerPart).toFixed(2);
      let fractionalPartValue = (fractionalPart % 1).toFixed(2).substring(2);
    
      let IntegerValueInWords = convertNumberToWords(parseInt(integerPart));
      let FractionalValueInWords = convertNumberToWords(
        parseInt(fractionalPartValue)
      );
    
      if (
        IntegerValueInWords ==
        "Number is too large. Conversion supports up to 12 digits."
      ) {
        alert("Number is too large. Conversion supports up to 12 digits.");
        return 0;
      } else {
        let IntergerValueSorP = IntergerNameplural;
        if (integerPart < 1) {
          IntergerValueSorP = IntergerNameSingular;
        }
    
        let FractionalValueSorP = DecimalNameSingular;
        if (fractionalPartValue > 1) {
          FractionalValueSorP = DecimalNamePlural;
        }
    
        let result =  "";
        console.log('fractionalPartValue', fractionalPartValue);
        
        if(fractionalPartValue == 0){
          result = `${IntegerValueInWords} ${IntergerValueSorP}`;
        }
        else{
          result = `${IntegerValueInWords} ${IntergerValueSorP} and ${FractionalValueInWords} ${FractionalValueSorP} `;
        }
        return result;
      }
    }
    
function convertNumberToWords(number) {
  const ones = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertToWords(num) {
    if (num === 0) {
      return "Zero";
    }

    function convertTwoDigitNumber(num) {
      if (num < 10) {
        return ones[num];
      } else if (num >= 11 && num <= 19) {
        return teens[num - 11];
      } else {
        const tenDigit = Math.floor(num / 10);
        const oneDigit = num % 10;
        return tens[tenDigit] + (oneDigit !== 0 ? " " + ones[oneDigit] : "");
      }
    }

    function convertThreeDigitNumber(num) {
      const hundredDigit = Math.floor(num / 100);
      const twoDigitNumber = num % 100;

      let result = "";
      if (hundredDigit !== 0) {
        result += ones[hundredDigit] + " Hundred";
        if (twoDigitNumber !== 0) {
          result += " and ";
        }
      }

      if (twoDigitNumber !== 0) {
        result += convertTwoDigitNumber(twoDigitNumber);
      }

      return result;
    }

    const billion = Math.floor(num / 1000000000);
    const million = Math.floor((num % 1000000000) / 1000000);
    const thousand = Math.floor((num % 1000000) / 1000);
    const remainder = num % 1000;

    let result = "";

    if (billion !== 0) {
      result += convertThreeDigitNumber(billion) + " Billion";
    }

    if (million !== 0) {
      if (result !== "") {
        result += " ";
      }
      result += convertThreeDigitNumber(million) + " Million";
    }

    if (thousand !== 0) {
      if (result !== "") {
        result += " ";
      }
      result += convertThreeDigitNumber(thousand) + " Thousand";
    }

    if (remainder !== 0) {
      if (result !== "") {
        result += " ";
      }
      result += convertThreeDigitNumber(remainder);
    }

    return result;
  }

  // Check if the number has more than 13 digits
  if (number.toString().length > 12) {
    return "Number is too large. Conversion supports up to 12 digits.";
  }

  return convertToWords(number);
}
    
