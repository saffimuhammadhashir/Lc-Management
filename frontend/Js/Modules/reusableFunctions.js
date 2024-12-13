export function createShortcode(customer) {
  let firstFourCharactersOfFullName = customer.full_name
    ? customer.full_name.substring(0, 4)
    : "";
  let lastFourDigitsOfPhone = customer.phone
    ? customer.phone.substring(customer.phone.length - 4)
    : "";
  let firstFourCharactersOfAddress = customer.address
    ? customer.address.substring(0, 4)
    : "";

  let shortcode =
    firstFourCharactersOfFullName +
    firstFourCharactersOfAddress +
    lastFourDigitsOfPhone;

  return shortcode;
}

export function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export function removeAllOptions(selectId) {
  var selectElement = document.getElementById(selectId);
  while (selectElement.options.length > 0) {
    selectElement.remove(0);
  }
}

export function convertLCID(locationCode, id) {
  let result = 0;

  if (locationCode === 10) {
    result = 1000000 + id;
  } else if (locationCode === 15) {
    result = 1500000 + id;
  } else {
    // Handle other location codes here if needed
    console.log("Unsupported location code - Convert LC");
  }

  return result;
}

export function reverseConvertLCID(number) {
  // Convert the number to a string
  let numberString = number.toString();

  // Get the first two characters of the string
  let firstTwoDigitsString = numberString.slice(0, 2);

  // Convert the extracted string back to a number
  let locationCode = parseInt(firstTwoDigitsString, 10);

  console.log(locationCode); // This will output the number 12

  let id = 0;

  if (locationCode === 10) {
    id = number - 1000000;
  } else if (locationCode === 15) {
    id = number - 1500000;
  } else {
    // Handle other location codes here if needed
    console.log("Unsupported location code - Reverse Convert ID");
  }
  console.log("id:", id);

  return id;
}

export function extractValuesFromSecondParentheses(text) {
  // Split the text by parentheses
  var parts = text.split(/\(|\)/);

  // Check if there are enough parts
  if (parts.length >= 4) {
    // Value inside the second set of parentheses
    var valueInsideSecond = parts[3].trim();
    return valueInsideSecond;
  } else {
    return "Text does not have enough parentheses.";
  }
}

export function convertCurrencyToWords(
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
      if(FractionalValueSorP="Cents" && (IntergerValueSorP=="Euros" || IntergerValueSorP=="Euro"))
        result = `${IntegerValueInWords} ${IntergerValueSorP} and ${FractionalValueInWords} ${"Euro Cents"} `;
      else if(FractionalValueSorP="Cent" && (IntergerValueSorP=="Euros" || IntergerValueSorP=="Euro"))
        result = `${IntegerValueInWords} ${IntergerValueSorP} and ${FractionalValueInWords} ${"Euro Cent"} `;
      else
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
