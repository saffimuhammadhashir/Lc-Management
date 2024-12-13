export function certificateOfOriginFunction(
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

    pdf.setFont("helvetica");
    pdf.setFontType("bold");

    //! Start Check Box

    // LC Check
    let text7 = "";
    let text21 = "",text21t="",text6="",text5="";
    let lcNumberCheck = document.getElementById("CertificateOfOriginLCNumberCheck");
    if (lcNumberCheck && lcNumberCheck.checked) {
        printText(pdf, 4.17, 1.85, "LC Number: ", true, 8);
        let lcNumber = document.getElementById('lcInformationPageLcNumber');
        text7 = lcNumber ? lcNumber.value : "";
        printText(pdf, 5.17, 1.85, text7, true, 8);
    }

    // 2nd Applicant
    let CertificateOfOriginSecondApplicantCheck = document.getElementById("CertificateOfOriginSecondApplicantCheck");
    if (CertificateOfOriginSecondApplicantCheck && CertificateOfOriginSecondApplicantCheck.checked) {
        let secondApplicantHeader = document.getElementById("lcInformationSecondApplicantHeader");
        let secondApplicantName = document.getElementById("lcInformationSecondApplicantName");
        let secondApplicantAddress = document.getElementById("lcInformationSecondApplicantAddress");
        let text5 = secondApplicantHeader ? secondApplicantHeader.value : "";
        let text6 = secondApplicantName ? secondApplicantName.value : "";
        let text7 = secondApplicantAddress ? secondApplicantAddress.value : "";
        printText(pdf, 0.57, 2.40, text5, true, 8);
        printText(pdf, 0.57, 2.55, text6, true, 8);
        printText(pdf, 0.57, 2.70, text7, true, 8);
    } else {
        let applicantName = document.getElementById('lcInformationPageApplicantName');
        let applicantAddress = document.getElementById('lcInformationPageApplicantAddress');
        printText(pdf, 0.57, 2.40, applicantName ? applicantName.value : "", true, 8);
        mylongText(pdf, applicantAddress ? applicantAddress.value : "", 0.57, 2.40, 5.0, 8, true, false);
    }

    // 3. Global Check
    let LongText1 = "";
    let CertificateOfOriginGlobalCheck = document.getElementById("CertificateOfOriginGlobalCheck");
    if (CertificateOfOriginGlobalCheck && CertificateOfOriginGlobalCheck.checked) {
        let globalCertification = document.getElementById('LC_Information_Global_Certification');
        LongText1 = globalCertification ? globalCertification.value : "";
    }

    // 4. Limited Certification
    let LongTextLC = "";
    let limitedCertificationsCheck = document.getElementById("lcInformationPageLimitedCertifications_COcheckbox");
    if (limitedCertificationsCheck && limitedCertificationsCheck.checked) {
        let limitedCertifications = document.getElementById('lcInformationPageLimitedCertifications');
        LongTextLC = limitedCertifications ? limitedCertifications.value : "";
        mylongText(pdf, LongTextLC, 4.17, 4.67, 3.50, 6, true, false);
    }

    // Description
    let descriptionOfGoods = document.getElementById('certificateOfOriginDescriptionOfGoods');
    let shortMerchadiseDescription = document.getElementById("lcInformationPageShortShortMerchadiseDescriptionForCO");
    let longTestDescription = descriptionOfGoods ? descriptionOfGoods.value : (shortMerchadiseDescription ? shortMerchadiseDescription.value : "");
    mylongText(pdf, longTestDescription.toUpperCase(), 1.85, 7.45, 4.30, 7, true, false);

    // More text variables with checks
    let shipperOrExporterLabel = document.getElementById('certificateOfOriginShipperOrExporterLabel');
    let text3 = shipperOrExporterLabel ? shipperOrExporterLabel.textContent : "Shipper/Exporter";

    let homeTitle = document.getElementById('CertificateOfOriginHomeTitle');
    let text1 = homeTitle ? homeTitle.value : "CERTIFICATE OF ORIGIN";

    let modalSubTitle = document.getElementById('CertificateOfOriginModalSubTitle');
    let text2 = modalSubTitle ? modalSubTitle.value : "ISSUED BY THE HUMBLE AREA CHAMBER OF COMMERCE";

    let beneficiaryName = document.getElementById('LCInformation_BENEFICIARYName');
    printText(pdf, 0.57, 1.25, beneficiaryName ? beneficiaryName.value : "", true, 8);

    let beneficiaryAddress = document.getElementById('LCInformation_BENEFICIARYAddress');
    mylongText(pdf, beneficiaryAddress ? beneficiaryAddress.value : "", 0.57, 1.30, 3.0, 8, true, false);

    let text3t = "";
    let text12 = "";
    let text13 = "";
    let text14 = "";
    let text14t = "";
    let text15 = "";

    let airRadio = document.getElementById("PrintPage_SAAIR");
    let carrierName = document.getElementById("TransportInformation_CarrierName");
    let vesselName = document.getElementById("TransportInformation_VesselName");

    if (airRadio && airRadio.checked) {
        text12 = carrierName ? carrierName.value : "";
    } else {
        text12 = vesselName ? vesselName.value : "";
    }

    let loadOnBoard = document.getElementById("lcInformationPageLoadOnBoard");
    text13 = loadOnBoard ? loadOnBoard.value : "";

    let forTransportTo = document.getElementById("lcInformationPageForTransportTo");
    text14 = forTransportTo ? forTransportTo.value : "";

    let forTranshipmentTo = document.getElementById("TransportInformation_ForTranshipmentTo");
    text14t = forTranshipmentTo ? forTranshipmentTo.value : "";

    let numberOfPieces = document.getElementById("TransportInformation_NumberOfPieces");
    text15 = numberOfPieces ? numberOfPieces.value : "";

    let placeOfReceiptBy = document.getElementById("TransportInformation_PlaceOfReceiptBy");
    text3t = placeOfReceiptBy ? placeOfReceiptBy.value : "";

    let grossWeight = document.getElementById("TransportInformation_GrossWeight");
    let measurements = document.getElementById("TransportInformation_Measurements");
    text21 = (grossWeight ? grossWeight.value : "") + (measurements ? measurements.value : "");

    let netWeight = document.getElementById("TransportInformation_NetWeight");
    text21t = (netWeight ? netWeight.value : "") + (measurements ? measurements.value : "");

    let shipDate = document.getElementById("Homepage_ShipDate");
    let text23 = shipDate ? formatDate(shipDate.value) : "";
    let text24 = shipDate ? formatDate(shipDate.value) : "";

    let text25 = OriginalOrCopy;

    let modalSubTitle2 = document.getElementById('CertificateOfOriginModalSubTitle');
    let text26 = modalSubTitle2 ? modalSubTitle2.value : "ISSUED BY THE HUMBLE AREA CHAMBER OF COMMERCE";

    let text27 = "Authorized Signature";

    // Structure of the page

    // Row 1
    createCell(pdf, 0.50, 1.00, 3.60, 1.00);
    createCell(pdf, 4.10, 1.00, 3.60, 1.00);
    
    drawLine(pdf, 5.50, 1.0, 5.50, 1.35);
    drawLine(pdf, 4.10, 1.35, 7.70, 1.35);
    
    // Row 2
    createCell(pdf, 0.50, 2.00, 3.60, 1.00);
    createCell(pdf, 4.10, 2.00, 3.60, 1.00);
    
    // Row 3
    createCell(pdf, 4.10, 1.7, 3.60, 1.50);
    // drawLine(pdf, 0.5, 4.15, 4.10, 4.15);
    createCell(pdf, 4.10, 3.00, 3.60, 1.80);

    createCell(pdf, 0.50, 3.0, 3.60, 1.80);
    // drawLine(pdf, 4.10, 3.35, 7.70, 3.35);

    // Row 4
    createCell(pdf, 0.50, 4.8, 3.60, 0.50);
    createCell(pdf, 0.50, 5.3, 1.90, 0.70);
    createCell(pdf, 4.10, 4.8, 3.60, 1.20);
    
    // createCell(pdf, 0.50, 5.0, 3.60, 1.50);
    // Row 5
    createCell(pdf, 0.50, 6.0, 1.90, 0.90);
    createCell(pdf, 2.40, 6.0, 1.70, 0.90);
    createCell(pdf, 4.10, 6.0, 3.60, 0.90);
    //Row 6
    drawLine(pdf, 0.5, 7.05, 7.7, 7.05);
    drawLine(pdf, 0.5, 7.4, 7.7, 7.4);
    drawLine(pdf, 0.5, 9.4, 7.7, 9.4);
    createCell(pdf, 1.80, 7.05, 4.80, 2.350);


    drawLine(pdf, 5.6, 11, 7.6, 11);
    // drawLine(pdf, 4.10, 3.35, 7.70, 3.35);
    // drawLine(pdf, 0.5, 5.00, 4.10, 5.00);
    // drawLine(pdf, 2.40, 4.50, 2.40, 5.00);

    // createCell(pdf, 4.10, 4.50, 3.60, 1.00);
    // drawLine(pdf, 5.50, 4.50, 5.50, 5.00);

    // // Row 5
    // createCell(pdf, 0.50, 5.50, 7.20, 3.00);
    // drawLine(pdf, 4.4, 5.50, 4.4, 8.50);

    // // Row 6
    // createCell(pdf, 0.50, 9.00, 3.60, 1.00);
    // createCell(pdf, 4.10, 9.00, 3.60, 1.00);

    // Global Check & Certification
    mylongText(pdf, LongText1, 4.17, 3.40, 2.0, 8, true, false);
    mylongText(pdf, "Instructions", 4.17, 3.0, 2.0, 8, true, false);

    // Drawing checkboxes
    checkbox(pdf, 6.57, 9.80, 0.10, 0.10);

    // Beneficiary details
    // mylongText(pdf, text7, 4.17, 2.40, 3.50, 6, true, false);
    mylongText(pdf, text6, 4.17, 2.55, 3.50, 6, true, false);
    mylongText(pdf, text5, 4.17, 2.70, 3.50, 6, true, false);
    mylongText(pdf, text3, 0.57, 1.0, 4.0, 8, true, false);
    mylongText(pdf, text2,2.6, 0.7, 5.50, 8, true, false);
    mylongText(pdf, text1, 2.8, 0.30, 4.0, 16, true, false);
    mylongText(pdf, "Sold to", 0.57, 2.0, 4.0, 10, true, false);
    mylongText(pdf, "PARTICULARS FURNISHED BY Shipper", 3.3, 6.90, 4.0, 8, true, false);
    mylongText(pdf, "DESCRIPTION OF GOODS OR SERVICES", 2.0, 7.20, 4.0, 7, true, false);
    mylongText(pdf, "NO. OF PACKAGES", 0.57, 7.20, 1.0, 7, true, false);
    mylongText(pdf, "GROSS WEIGHT", 6.65, 7.20, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginNumberOfPackages').value, 0.57, 7.45, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginGrossWeight').value, 6.65, 7.45, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginGrossWeight1').value, 6.65, 8.25, 1.0, 7, true, false);
    mylongText(pdf, "PLACE OF RECIEPT", 0.57, 4.85, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginModalPlaceOfReciept').value, 0.57, 5.05, 1.0, 7, true, false);
    
    mylongText(pdf, "FORWARD INLAND ROUTING", 4.17, 4.85, 4.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginModal_LimitedCertification').value, 4.17, 5.05, 4.0, 7, true, false);

    mylongText(pdf, "VESSEL / AIRLINE / CARRIER", 0.57, 5.3, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginModalVesselAirlineCarrier').value, 0.57, 5.7, 1.0, 7, true, false);
    mylongText(pdf, "AIRPORT/PORT OF LOADING", 2.65, 5.3, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginModalAirportPortOfLoading').value, 2.45, 5.55, 1.7, 7, true, false);
    mylongText(pdf, "AIR/SEA PORT OF DISCHARGE", 0.57, 6.0, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginModalVesselAirSeaPortOfDischarge').value, 0.57, 6.4, 1.0, 7, true, false);
    mylongText(pdf, "FOR TRANSSHIPMENT TO", 2.65, 6.0, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginModalForTransshipmentTo').value, 2.65, 6.4, 1.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOrigin_DCS').value, 0.57, 9.5, 7.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginBottomFixText').value, 0.57, 9.8, 5.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginBottomBeneName').value, 5.57, 10.2, 2.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOrigin_FreeTextEnd').value, 0.57, 11.0, 3.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginDate1').value, 2.0, 10.1, 3.0, 7, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginDate2').value, 2.0, 10.5, 3.0, 7, true, false);
    mylongText(pdf, "Remove (Owner or Agent) ", 6.9, 9.7, 1.0, 7, true, false);
    mylongText(pdf, "DATED AT BURLINGAME, CA USA ON ", 0.57, 10.1, 1.0, 7, true, false);
    mylongText(pdf, "SWORN TO ME ON ", 0.57, 10.5, 1.0, 7, true, false);
    mylongText(pdf, "Export References ", 4.17, 1.4, 1.0, 8, true, false);
    mylongText(pdf, document.getElementById('certificateOfOriginExportReferences').value, 5.3, 1.4, 2.0, 8, true, false);
    // mylongText(pdf, document.getElementById('certificateOfOriginModalGlobal').value, 4.17, 3.0, 4.0, 10, true, false);

    // Final Text Variables
    // mylongText(pdf, text21t, 4.17, 4.55, 3.50, 6, true, false);
    // mylongText(pdf, text21, 4.17, 4.67, 3.50, 6, true, false);
    // mylongText(pdf, text14t, 4.17, 4.40, 3.50, 6, true, false);
    // mylongText(pdf, text14, 4.17, 4.40, 3.50, 6, true, false);
    // mylongText(pdf, text13, 4.17, 4.40, 3.50, 6, true, false);
    // mylongText(pdf, text12, 4.17, 4.40, 3.50, 6, true, false);
    // mylongText(pdf, text3t, 4.17, 4.55, 3.50, 6, true, false);
    // mylongText(pdf, text15, 4.17, 4.70, 3.50, 6, true, false);
    // mylongText(pdf, text23, 4.17, 4.85, 3.50, 6, true, false);
    // mylongText(pdf, text24, 4.17, 5.0, 3.50, 6, true, false);
    // mylongText(pdf, text25, 4.17, 5.15, 3.50, 6, true, false);
    // mylongText(pdf, text26, 4.7, 5.7, 3.50, 6, true, false);
    // mylongText(pdf, text27, 4.17, 5.35, 3.50, 6, true, false);
}
