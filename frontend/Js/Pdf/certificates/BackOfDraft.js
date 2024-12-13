export function BackOfDraft(
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
      let BeneName = document.getElementById("LCInformation_BENEFICIARYName").value;
      let AuthorizedSignature = "Authorized Signature";

      printText(pdf, 0.7, 2.0, BeneName.toUpperCase(), true, 8);
      printText(pdf, 0.7, 3.0, AuthorizedSignature.toUpperCase(), true);
      drawLine(pdf, 0.7, 2.87, 3.50, 2.87);
      

    }
