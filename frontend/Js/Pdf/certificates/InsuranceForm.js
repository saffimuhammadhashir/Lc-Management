export function InsuranceFormFunction(
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

    console.log('Insurance Form');

    // Dynamic Text Data
    
    let text5 = document.getElementById('InsuranceForm_LoadPoint').value ? document.getElementById('InsuranceForm_LoadPoint').value : document.getElementById("lcInformationPageLoadOnBoard").value;              

    const text6 = document.getElementById('LCInformation_BENEFICIARYName').value;
    
    const VesselName = document.getElementById('TransportInformation_VesselName').value;
    const CarrierName = document.getElementById('TransportInformation_CarrierName').value;
    let text9 = "";

    let airRadio = document.getElementById("PrintPage_SAAIR");

    if (airRadio.checked) {
      text9 = CarrierName;
      
    } else {
      text9 = VesselName;

    }

    printText(pdf, 5.10, 3.20, text9, true, 8);

    const text10 = text5;
    const text11 = document.getElementById('lcInformationPageForTransportTo').value;

    

    let text12 = document.getElementById('InsuranceForm_LossPayeeOnPolicy').value ? document.getElementById('InsuranceForm_LossPayeeOnPolicy').value : "";              
    let text13 = document.getElementById('InsuranceForm_SignatureLine').value ? document.getElementById('InsuranceForm_SignatureLine').value : "";              
    

    //! Start Check Box
      // LC Check
      let text3 = document.getElementById("lcInformationPageLcNumber").value;
      let text4 = document.getElementById("Homepage_ShipDate").value;

      if (document.getElementById("printLcNumberInsuranceForm").checked) {
        printText(pdf, 3.00, 0.80, "L/C NUMBER: " + text3 + " AND DATE: " + text4, true, 8);
        

      } else {
        printText(pdf, 3.00, 0.80, "DATE. "  + text4, true, 8);
        

      }    

      // 3. Global Check
      let LongText1 = "";
      var printGlobalInsuranceForm = document.getElementById("printGlobalInsuranceForm");
      if (printGlobalInsuranceForm.checked) {
        LongText1 = document.getElementById('LC_Information_Global_Certification').value;

      }


      // Description
      let longTestDescription = document.getElementById('InsuranceForm_Description').value;
      mylongText(pdf, longTestDescription.toUpperCase(), 1.10, 2.90, 10, 7, true, true,);  



      //! End Check Box


    
    
    // Long Text
    
    let LongText2 = document.getElementById('InsuranceForm_FreeTextField').value ? document.getElementById('InsuranceForm_FreeTextField').value : "";              
    let LongText3 = document.getElementById("TransportInformation_MarksAndNumber").value;
    let LongText4 = document.getElementById('InsuranceForm_FreeText2').value ? document.getElementById('InsuranceForm_FreeText2').value : "";              
    


    mylongText(pdf, LongText2, 1.10, 7.10, 3.50, 8, true, true);
    mylongText(pdf, LongText3, 5.00, 7.10, 2.00, 8, true, true);
    mylongText(pdf, LongText4, 4.80, 7.90, 2.00, 8, true, true);


    //! Currency
    var TransportInformation_InsuranceChg = document.getElementById('TransportInformation_InsuranceChg').value;
    let text1 = "";
    let text7 = ""

    if (TransportInformation_InsuranceChg) {    
      let TransportInformation_InsuranceChg = document.getElementById('TransportInformation_InsuranceChg').value;
      let amountWithCommas = parseFloat(TransportInformation_InsuranceChg).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      text1 = currency.currency_code + "  " + currency.currency_symbol + "  " + amountWithCommas;

      const words = convertCurrencyToWords(
        TransportInformation_InsuranceChg,  
        currency.currency_name_singular,
        currency.currency_name_plural,
        currency.currency_fraction_name_singular,
        currency.currency_fraction_name_plural
      );

      text7  = words + " " + "(" + currency.currency_description + ")";

    
    } else {
    let TransportInformation_InsuranceAmt = document.getElementById('TransportInformation_InsuranceAmt').value;
    let amountWithCommas = parseFloat(TransportInformation_InsuranceAmt).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    text1= currency.currency_code + "  " + currency.currency_symbol + "  " + amountWithCommas;
    


    const words = convertCurrencyToWords(
      TransportInformation_InsuranceAmt,
      currency.currency_name_singular,
      currency.currency_name_plural,
      currency.currency_fraction_name_singular,
      currency.currency_fraction_name_plural
    );

    text7 = words + " " + "(" + currency.currency_description + ")";

    }









    // Structure of the page
    printText(pdf, 1.10, 0.80, text1, true, 8);




    let Date1 = document.getElementById('InsuranceForm_Shipdate').value ? document.getElementById('InsuranceForm_Shipdate').value : document.getElementById("Homepage_ShipDate").value;              
    Date1 = formatDate(Date1);
    let Date2 = Date1 ;


    // Dates
    printText(pdf, 7.00, 1.80, Date1, true, 8);
    printText(pdf, 7.00, 3.20, Date2, true, 8);

    


    // printText(pdf, 3.70, 1.80, text5, true, 8);
    mylongText(pdf, text5, 3.50, 1.70, 3.5, 8, true, true);
    printText(pdf, 3.00, 2.30, text6, true, 8);

    printText(pdf, 1.50, 2.80, text7, true, 8);
    printText(pdf, 1.50, 3.40, text10, true, 8);
    printText(pdf, 1.10, 3.70, text11, true, 8);


    mylongText(pdf, text12, 1.50, 4.00, 5.75, 8, true, true);
    printText(pdf, 3.00, 5.80, text13.toUpperCase(), true, 8);




    mylongText(pdf, LongText1, 1.10, 4.60, 5.75, 8, true, true);

  


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


