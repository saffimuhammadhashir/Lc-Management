//  original or copy print krta haaan yahan. No Propogation information
import { format } from "https://cdn.jsdelivr.net/npm/date-fns@2.22.1/esm/index.js";

function formatDate(dateString) {
  // Create a Date object
  let date = new Date(dateString);

  // Get month, day, and year
  let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  let day = String(date.getDate()).padStart(2, "0");
  let year = date.getFullYear();

  // Format the date in mm-dd-year format
  let formattedDate = `${month}-${day}-${year}`;

  return formattedDate;
}

import { airwaybillFunction } from "../Pdf/certificates/AirwayBillPDF.js";
import { BillOfLadingFunction } from "../Pdf/certificates/BillOfLadingCertificate.js";
import { commercialInvoiceFunction } from "../Pdf/certificates/CommercialInvoicePDF.js";
import { commercialPackingListFunction } from "../Pdf/certificates/CommercialPackingListPDF.js";
import { nameDraftFunction } from "../Pdf/certificates/NameDraftPDF.js";
import { sightDraftFunction } from "../Pdf/certificates/SightDraft.js";
import { BackOfDraft } from "../Pdf/certificates/BackOfDraft.js";
import { AdditionalNameDraftPDF } from "../Pdf/certificates/AdditionalNameDraftPDF.js";
import { certificateOfOriginFunction } from "../Pdf/certificates/CertificateOfOriginPDF.js";
import { SimpleBeneficiaryFuction1 } from "../Pdf/certificates/SimpleBeneficiary1PDF.js";
import { SimpleBeneficiaryFuction2 } from "../Pdf/certificates/SimpleBeneficiary2PDF.js";
import { SimpleBeneficiaryFuction3 } from "../Pdf/certificates/SimpleBeneficiary3PDF.js";
import { SimpleBeneficiaryFuction4 } from "../Pdf/certificates/SimpleBeneficiary4PDF.js";
import { SimpleBeneficiaryFuction5 } from "../Pdf/certificates/SimpleBeneficiary5PDF.js";
import { SimpleBeneficiaryFuction6 } from "../Pdf/certificates/SimpleBeneficiary6PDF.js";
import { SimpleBeneficiaryFuction7 } from "../Pdf/certificates/SimpleBeneficiary7PDF.js";
import { SimpleBeneficiaryFuction8 } from "../Pdf/certificates/SimpleBeneficiary8PDF.js";
import { SimpleBeneficiaryFuction9 } from "../Pdf/certificates/SimpleBeneficiary9PDF.js";
import { SimpleBeneficiaryFuction10 } from "../Pdf/certificates/SimpleBeneficiary10PDF.js";
import { shipmentAdviceApplicantFunction } from "../Pdf/certificates/ShipmentAdviceApplicant.js";
import { shipmentAdviceInsuranceFunction } from "../Pdf/certificates/ShipmentAdviceInsurance.js";
import { shippingAdviceIssuingBankFunction } from "../Pdf/certificates/ShippingAdviceIssuingBank.js";
import { shippingAdviceOtherRecipientFunction } from "../Pdf/certificates/ShippingAdviceOtherRecipient.js";
import { WeightListFunction } from "../Pdf/certificates/WeightList.js";
import { InsuranceFormFunction } from "../Pdf/certificates/InsuranceForm.js";

{
}
// Others 1
import { AppendedDeclarationToAirWaybillFunction1 } from "../Pdf/certificates/Appended Declaration To Air Waybill1.js";
import { CertificateAppendedToBLFunction1 } from "../Pdf/certificates/Certificate Appended To BL1.js";
import { CertificateAppendedToInsuranceCertificateFunction1 } from "../Pdf/certificates/Certificate Appended To Insurance Certificate1.js";
import { EmailFormFunction1 } from "../Pdf/certificates/EmailForm1.js";
import { FaxActivityFunction1 } from "../Pdf/certificates/FaxActivity1.js";
import { DHLFormFunction1 } from "../Pdf/certificates/DHLForm1.js";
import { TruckBillofladingFunction1 } from "../Pdf/certificates/Truckbilloflading1.js";
import { SteamshipFunction1 } from "../Pdf/certificates/Steamship1.js";

// Others 2
import { AppendedDeclarationToAirWaybillFunction2 } from "../Pdf/certificates/Appended Declaration To Air Waybill2.js";
import { CertificateAppendedToBLFunction2 } from "../Pdf/certificates/Certificate Appended To BL2.js";
import { CertificateAppendedToInsuranceCertificateFunction2 } from "../Pdf/certificates/Certificate Appended To Insurance Certificate2.js";
import { EmailFormFunction2 } from "../Pdf/certificates/EmailForm2.js";
import { FaxActivityFunction2 } from "../Pdf/certificates/FaxActivity2.js";
import { DHLFormFunction2 } from "../Pdf/certificates/DHLForm2.js";
import { TruckBillofladingFunction2 } from "../Pdf/certificates/Truckbilloflading2.js";
import { SteamshipFunction2 } from "../Pdf/certificates/Steamship2.js";

// Others 3
import { AppendedDeclarationToAirWaybillFunction3 } from "../Pdf/certificates/Appended Declaration To Air Waybill3.js";
import { CertificateAppendedToBLFunction3 } from "../Pdf/certificates/Certificate Appended To BL3.js";
import { CertificateAppendedToInsuranceCertificateFunction3 } from "../Pdf/certificates/Certificate Appended To Insurance Certificate3.js";
import { EmailFormFunction3 } from "../Pdf/certificates/EmailForm3.js";
import { FaxActivityFunction3 } from "../Pdf/certificates/FaxActivity3.js";
import { DHLFormFunction3 } from "../Pdf/certificates/DHLForm3.js";
import { TruckBillofladingFunction3 } from "../Pdf/certificates/Truckbilloflading3.js";
import { SteamshipFunction3 } from "../Pdf/certificates/Steamship3.js";

// Others 4
import { AppendedDeclarationToAirWaybillFunction4 } from "../Pdf/certificates/Appended Declaration To Air Waybill4.js";
import { CertificateAppendedToBLFunction4 } from "../Pdf/certificates/Certificate Appended To BL4.js";
import { CertificateAppendedToInsuranceCertificateFunction4 } from "../Pdf/certificates/Certificate Appended To Insurance Certificate4.js";
import { EmailFormFunction4 } from "../Pdf/certificates/EmailForm4.js";
import { FaxActivityFunction4 } from "../Pdf/certificates/FaxActivity4.js";
import { DHLFormFunction4 } from "../Pdf/certificates/DHLForm4.js";
import { TruckBillofladingFunction4 } from "../Pdf/certificates/Truckbilloflading4.js";
import { SteamshipFunction4 } from "../Pdf/certificates/Steamship4.js";

// Others 5
import { AppendedDeclarationToAirWaybillFunction5 } from "../Pdf/certificates/Appended Declaration To Air Waybill5.js";
import { CertificateAppendedToBLFunction5 } from "../Pdf/certificates/Certificate Appended To BL5.js";
import { CertificateAppendedToInsuranceCertificateFunction5 } from "../Pdf/certificates/Certificate Appended To Insurance Certificate5.js";
import { EmailFormFunction5 } from "../Pdf/certificates/EmailForm5.js";
import { FaxActivityFunction5 } from "../Pdf/certificates/FaxActivity5.js";
import { DHLFormFunction5 } from "../Pdf/certificates/DHLForm5.js";
import { TruckBillofladingFunction5 } from "../Pdf/certificates/Truckbilloflading5.js";
import { SteamshipFunction5 } from "../Pdf/certificates/Steamship5.js";

// Others 6
import { AppendedDeclarationToAirWaybillFunction6 } from "../Pdf/certificates/Appended Declaration To Air Waybill6.js";
import { CertificateAppendedToBLFunction6 } from "../Pdf/certificates/Certificate Appended To BL6.js";
import { CertificateAppendedToInsuranceCertificateFunction6 } from "../Pdf/certificates/Certificate Appended To Insurance Certificate6.js";
import { EmailFormFunction6 } from "../Pdf/certificates/EmailForm6.js";
import { FaxActivityFunction6 } from "../Pdf/certificates/FaxActivity6.js";
import { DHLFormFunction6 } from "../Pdf/certificates/DHLForm6.js";
import { TruckBillofladingFunction6 } from "../Pdf/certificates/Truckbilloflading6.js";
import { SteamshipFunction6 } from "../Pdf/certificates/Steamship6.js";

// Others 7
import { AppendedDeclarationToAirWaybillFunction7 } from "../Pdf/certificates/Appended Declaration To Air Waybill7.js";
import { CertificateAppendedToBLFunction7 } from "../Pdf/certificates/Certificate Appended To BL7.js";
import { CertificateAppendedToInsuranceCertificateFunction7 } from "../Pdf/certificates/Certificate Appended To Insurance Certificate7.js";
import { EmailFormFunction7 } from "../Pdf/certificates/EmailForm7.js";
import { FaxActivityFunction7 } from "../Pdf/certificates/FaxActivity7.js";
import { DHLFormFunction7 } from "../Pdf/certificates/DHLForm7.js";
import { TruckBillofladingFunction7 } from "../Pdf/certificates/Truckbilloflading7.js";
import { SteamshipFunction7 } from "../Pdf/certificates/Steamship7.js";

import {
  printText,
  createCell,
  createBorder,
  longText,
  drawLine,
  checkbox,
  radioButtonpdf,
  mylongText,
} from "../Pdf/framework/jspdfFramework.js";

async function fetchCurrencyData(config) {
  var lcInformationPageCurrency = document.getElementById("lcInformationPageCurrency");
  var lcInformationPageCurrencyOption = lcInformationPageCurrency.options[lcInformationPageCurrency.selectedIndex];
  const lcInformationPageCurrencyValue = lcInformationPageCurrencyOption.value;

  const response = await fetch(`${config.HOST}/getCurrency/${lcInformationPageCurrencyValue}`);
  const data = await response.json();
  return data;
}


const printAllButton = document.getElementById("printAllButton");
const PrintTestButton = document.getElementById("PrintTestButton");

export default async function printAllFunction(config) {
  printAllButton.addEventListener("click", async () => {
    let currency = await fetchCurrencyData(config);
    Parent_Generate_PDF_PrintAll(currency);
  });

  PrintTestButton.addEventListener("click", async () => {
    let currency = await fetchCurrencyData(config);
    Parent_Generate_PDF_PrintTest_Checked(currency);
  });

  // Generate and download the combined PDF
  function Parent_Generate_PDF_PrintAll(currency) {
    console.log("Parent Currency");
    console.log(currency);
    
    let pdf = new jsPDF("p", "in", "a4"); //8.25 x 11.75 inches

    if (document.getElementById("printSelectedItemsOnlyCheckBox").checked) {
      console.log("Selected Items Only");

      // AWB
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("AWB_OriginalCheck").checked,
        document.getElementById("AWB_OriginalNumber").value,
        document.getElementById("AWB_CopyNumber").value,
        airwaybillFunction,
        currency
      );

      // BL
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("BL_OriginalCheck").checked,
        document.getElementById("BL_OriginalNumber").value,
        document.getElementById("BL_CopyNumber").value,
        BillOfLadingFunction
      );

      // CI
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("CommercialInvoiceOriginalCheck").checked,
        document.getElementById("CommercialInvoiceOriginalNumber").value,
        document.getElementById("CommercialInvoiceCopyNumber").value,
        commercialInvoiceFunction,
        currency
      );

      //  PL
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("packingListOriginalCheck").checked,
        document.getElementById("packingListOriginalNumber").value,
        document.getElementById("packingListCopyNumber").value,
        commercialPackingListFunction
      );

      //  Drafts
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("DraftOriginalCheck").checked,
        document.getElementById("DraftOriginalNumber").value,
        0,
        nameDraftFunction,
        currency
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("sightDraftOriginalCheck").checked,
        document.getElementById("sightDraftOriginalNumber").value,
        0,
        sightDraftFunction,
        currency
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("backDraftOriginalCheck").checked,
        document.getElementById("backDraftOriginalNumber").value,
        document.getElementById("backDraftCopyNumber").value,
        BackOfDraft
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("additionalDraftOriginalCheck").checked,
        document.getElementById("additionalDraftOriginalNumber").value,
        0,
        AdditionalNameDraftPDF,
        currency
      );

      // CO
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("CertificateOfOriginOriginalCheck").checked,
        document.getElementById("CertificateOfOriginOriginalNumber").value,
        document.getElementById("CertificateOfOriginCopyNumber").value,
        certificateOfOriginFunction
      );

      // Bene 1-10
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate1OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate1OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate1CopyNumber").value,
        SimpleBeneficiaryFuction1
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate2OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate2OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate2CopyNumber").value,
        SimpleBeneficiaryFuction2
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate3OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate3OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate3CopyNumber").value,
        SimpleBeneficiaryFuction3
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate4OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate4OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate4CopyNumber").value,
        SimpleBeneficiaryFuction4
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate5OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate5OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate5CopyNumber").value,
        SimpleBeneficiaryFuction5
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate6OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate6OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate6CopyNumber").value,
        SimpleBeneficiaryFuction6
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate7OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate7OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate7CopyNumber").value,
        SimpleBeneficiaryFuction7
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate8OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate8OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate8CopyNumber").value,
        SimpleBeneficiaryFuction8
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate9OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate9OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate9CopyNumber").value,
        SimpleBeneficiaryFuction9
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate10OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate10OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate10CopyNumber").value,
        SimpleBeneficiaryFuction10
      );

      // Shipping Advice
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("ShippingAdviceApplicant_OriginalCheck").checked,
        document.getElementById("ShippingAdviceApplicant_OriginalNumber").value,
        document.getElementById("ShippingAdviceApplicant_CopyNumber").value,
        shipmentAdviceApplicantFunction
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("ShippingAdviceInsurance_OriginalCheck").checked,
        document.getElementById("ShippingAdviceInsurance_OriginalNumber").value,
        document.getElementById("ShippingAdviceInsurance_CopyNumber").value,
        shipmentAdviceInsuranceFunction
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("ShippingAdviceIssuingBank_OriginalCheck").checked,
        document.getElementById("ShippingAdviceIssuingBank_OriginalNumber").value,
        document.getElementById("ShippingAdviceIssuingBank_CopyNumber").value,
        shippingAdviceIssuingBankFunction
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("ShippingAdviceOtherRecipient_OriginalCheck").checked,
        document.getElementById("ShippingAdviceOtherRecipient_OriginalNumber").value,
        document.getElementById("ShippingAdviceOtherRecipient_CopyNumber").value,
        shippingAdviceOtherRecipientFunction
      );

      // WL
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("WeightList_OriginalCheck").checked,
        document.getElementById("WeightList_OriginalNumber").value,
        document.getElementById("WeightList_CopyNumber").value,
        WeightListFunction
      );

      // Insurance Form
      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("InsuranceForm_OriginalCheck").checked,
        document.getElementById("InsuranceForm_OriginalNumber").value,
        document.getElementById("InsuranceForm_CopyNumber").value,
        InsuranceFormFunction,
        currency
      );

      // ! Others 1 - All - Checked
      let inputValue1 = printPage_Other1SelectField.value;
      let Other1FunctionName = "";
      if (inputValue1 === "Appended Declaration To Air Waybill") {
        Other1FunctionName = AppendedDeclarationToAirWaybillFunction1;
      } else if (inputValue1 === "Certificate Appended To B/L") {
        Other1FunctionName = CertificateAppendedToBLFunction1;
      } else if (inputValue1 === "Certificate Appended To Insurance Certificate") {
        Other1FunctionName = CertificateAppendedToInsuranceCertificateFunction1;
      } else if (inputValue1 === "Email Form") {
        Other1FunctionName = EmailFormFunction1;
      } else if (inputValue1 === "Fax Activity") {
        Other1FunctionName = FaxActivityFunction1;
      } else if (inputValue1 === "DHL Form") {
        Other1FunctionName = DHLFormFunction1;
      } else if (inputValue1 === "Truck Bill of lading") {
        Other1FunctionName = TruckBillofladingFunction1;
      } else if (inputValue1 === "Steamship") {
        Other1FunctionName = SteamshipFunction1;
      } else {
        console.log("Wrongg Inport In Other 1");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("Other1_OriginalCheck").checked,
        document.getElementById("Other1_OriginalNumber").value,
        document.getElementById("Other1_CopyNumber").value,
        Other1FunctionName
      );

      // ! Others 2 - All - Checked
      let inputValue2 = printPage_Other2SelectField.value;
      let Other2FunctionName = "";
      if (inputValue2 === "Appended Declaration To Air Waybill") {
        Other2FunctionName = AppendedDeclarationToAirWaybillFunction2;
      } else if (inputValue2 === "Certificate Appended To B/L") {
        Other2FunctionName = CertificateAppendedToBLFunction2;
      } else if (inputValue2 === "Certificate Appended To Insurance Certificate") {
        Other2FunctionName = CertificateAppendedToInsuranceCertificateFunction2;
      } else if (inputValue2 === "Email Form") {
        Other2FunctionName = EmailFormFunction2;
      } else if (inputValue2 === "Fax Activity") {
        Other2FunctionName = FaxActivityFunction2;
      } else if (inputValue2 === "DHL Form") {
        Other2FunctionName = DHLFormFunction2;
      } else if (inputValue2 === "Truck Bill of lading") {
        Other2FunctionName = TruckBillofladingFunction2;
      } else if (inputValue2 === "Steamship") {
        Other2FunctionName = SteamshipFunction2;
      } else {
        console.log("Wrongg Inport In Other 2");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("Other2_OriginalCheck").checked,
        document.getElementById("Other2_OriginalNumber").value,
        document.getElementById("Other2_CopyNumber").value,
        Other2FunctionName
      );

      // ! Others 3 - All - Checked
      let inputValue3 = printPage_Other3SelectField.value;
      let Other3FunctionName = "";
      if (inputValue3 === "Appended Declaration To Air Waybill") {
        Other3FunctionName = AppendedDeclarationToAirWaybillFunction3;
      } else if (inputValue3 === "Certificate Appended To B/L") {
        Other3FunctionName = CertificateAppendedToBLFunction3;
      } else if (inputValue3 === "Certificate Appended To Insurance Certificate") {
        Other3FunctionName = CertificateAppendedToInsuranceCertificateFunction3;
      } else if (inputValue3 === "Email Form") {
        Other3FunctionName = EmailFormFunction3;
      } else if (inputValue3 === "Fax Activity") {
        Other3FunctionName = FaxActivityFunction3;
      } else if (inputValue3 === "DHL Form") {
        Other3FunctionName = DHLFormFunction3;
      } else if (inputValue3 === "Truck Bill of lading") {
        Other3FunctionName = TruckBillofladingFunction3;
      } else if (inputValue3 === "Steamship") {
        Other3FunctionName = SteamshipFunction3;
      } else {
        console.log("Wrongg Inport In Other 3");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("Other3_OriginalCheck").checked,
        document.getElementById("Other3_OriginalNumber").value,
        document.getElementById("Other3_CopyNumber").value,
        Other3FunctionName
      );

      // ! Others 4 - All - Checked
      let inputValue4 = printPage_Other4SelectField.value;
      let Other4FunctionName = "";
      if (inputValue4 === "Appended Declaration To Air Waybill") {
        Other4FunctionName = AppendedDeclarationToAirWaybillFunction4;
      } else if (inputValue4 === "Certificate Appended To B/L") {
        Other4FunctionName = CertificateAppendedToBLFunction4;
      } else if (inputValue4 === "Certificate Appended To Insurance Certificate") {
        Other4FunctionName = CertificateAppendedToInsuranceCertificateFunction4;
      } else if (inputValue4 === "Email Form") {
        Other4FunctionName = EmailFormFunction4;
      } else if (inputValue4 === "Fax Activity") {
        Other4FunctionName = FaxActivityFunction4;
      } else if (inputValue4 === "DHL Form") {
        Other4FunctionName = DHLFormFunction4;
      } else if (inputValue4 === "Truck Bill of lading") {
        Other4FunctionName = TruckBillofladingFunction4;
      } else if (inputValue4 === "Steamship") {
        Other4FunctionName = SteamshipFunction4;
      } else {
        console.log("Wrongg Inport In Other 4");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("Other4_OriginalCheck").checked,
        document.getElementById("Other4_OriginalNumber").value,
        document.getElementById("Other4_CopyNumber").value,
        Other4FunctionName
      );

      // ! Others 5 - All - Checked
      let inputValue5 = printPage_Other5SelectField.value;
      let Other5FunctionName = "";
      if (inputValue5 === "Appended Declaration To Air Waybill") {
        Other5FunctionName = AppendedDeclarationToAirWaybillFunction5;
      } else if (inputValue5 === "Certificate Appended To B/L") {
        Other5FunctionName = CertificateAppendedToBLFunction5;
      } else if (inputValue5 === "Certificate Appended To Insurance Certificate") {
        Other5FunctionName = CertificateAppendedToInsuranceCertificateFunction5;
      } else if (inputValue5 === "Email Form") {
        Other5FunctionName = EmailFormFunction5;
      } else if (inputValue5 === "Fax Activity") {
        Other5FunctionName = FaxActivityFunction5;
      } else if (inputValue5 === "DHL Form") {
        Other5FunctionName = DHLFormFunction5;
      } else if (inputValue5 === "Truck Bill of lading") {
        Other5FunctionName = TruckBillofladingFunction5;
      } else if (inputValue5 === "Steamship") {
        Other5FunctionName = SteamshipFunction5;
      } else {
        console.log("Wrongg Inport In Other 5");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("Other5_OriginalCheck").checked,
        document.getElementById("Other5_OriginalNumber").value,
        document.getElementById("Other5_CopyNumber").value,
        Other5FunctionName
      );

      // ! Others 6 - All - Checked
      let inputValue6 = printPage_Other6SelectField.value;
      let Other6FunctionName = "";
      if (inputValue6 === "Appended Declaration To Air Waybill") {
        Other6FunctionName = AppendedDeclarationToAirWaybillFunction6;
      } else if (inputValue6 === "Certificate Appended To B/L") {
        Other6FunctionName = CertificateAppendedToBLFunction6;
      } else if (inputValue6 === "Certificate Appended To Insurance Certificate") {
        Other6FunctionName = CertificateAppendedToInsuranceCertificateFunction6;
      } else if (inputValue6 === "Email Form") {
        Other6FunctionName = EmailFormFunction6;
      } else if (inputValue6 === "Fax Activity") {
        Other6FunctionName = FaxActivityFunction6;
      } else if (inputValue6 === "DHL Form") {
        Other6FunctionName = DHLFormFunction6;
      } else if (inputValue6 === "Truck Bill of lading") {
        Other6FunctionName = TruckBillofladingFunction6;
      } else if (inputValue6 === "Steamship") {
        Other6FunctionName = SteamshipFunction6;
      } else {
        console.log("Wrongg Inport In Other 6");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("Other6_OriginalCheck").checked,
        document.getElementById("Other6_OriginalNumber").value,
        document.getElementById("Other6_CopyNumber").value,
        Other6FunctionName
      );

      // ! Others 7 - All - Checked
      let inputValue7 = printPage_Other7SelectField.value;
      let Other7FunctionName = "";
      if (inputValue7 === "Appended Declaration To Air Waybill") {
        Other7FunctionName = AppendedDeclarationToAirWaybillFunction7;
      } else if (inputValue7 === "Certificate Appended To B/L") {
        Other7FunctionName = CertificateAppendedToBLFunction7;
      } else if (inputValue7 === "Certificate Appended To Insurance Certificate") {
        Other7FunctionName = CertificateAppendedToInsuranceCertificateFunction7;
      } else if (inputValue7 === "Email Form") {
        Other7FunctionName = EmailFormFunction7;
      } else if (inputValue7 === "Fax Activity") {
        Other7FunctionName = FaxActivityFunction7;
      } else if (inputValue7 === "DHL Form") {
        Other7FunctionName = DHLFormFunction7;
      } else if (inputValue7 === "Truck Bill of lading") {
        Other7FunctionName = TruckBillofladingFunction7;
      } else if (inputValue7 === "Steamship") {
        Other7FunctionName = SteamshipFunction7;
      } else {
        console.log("Wrongg Inport In Other 7");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        document.getElementById("Other7_OriginalCheck").checked,
        document.getElementById("Other7_OriginalNumber").value,
        document.getElementById("Other7_CopyNumber").value,
        Other7FunctionName
      );
    } else {
      console.log("All Items");

      // AWB
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("AWB_OriginalNumber").value,
        document.getElementById("AWB_CopyNumber").value,
        airwaybillFunction,
        currency
      );

      // BL
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("BL_OriginalNumber").value,
        document.getElementById("BL_CopyNumber").value,
        BillOfLadingFunction
      );

      // CI
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("CommercialInvoiceOriginalNumber").value,
        document.getElementById("CommercialInvoiceCopyNumber").value,
        commercialInvoiceFunction,
        currency
      );

      // PL
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("packingListOriginalNumber").value,
        document.getElementById("packingListCopyNumber").value,
        commercialPackingListFunction
      );

      //  Drafts
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("DraftOriginalNumber").value,
        0,
        nameDraftFunction,
        currency);

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("sightDraftOriginalNumber").value,
        0, sightDraftFunction,
        currency);
        
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("backDraftOriginalNumber").value,
        document.getElementById("backDraftCopyNumber").value,
        BackOfDraft
      );

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("additionalDraftOriginalNumber").value,
        0,
        AdditionalNameDraftPDF,
        currency
      );

      // CO
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("CertificateOfOriginOriginalNumber").value,
        document.getElementById("CertificateOfOriginCopyNumber").value,
        certificateOfOriginFunction
      );

      // Bene 1 - 10
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate1OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate1CopyNumber").value,
        SimpleBeneficiaryFuction1
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate2OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate2CopyNumber").value,
        SimpleBeneficiaryFuction2
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate3OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate3CopyNumber").value,
        SimpleBeneficiaryFuction3
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate4OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate4CopyNumber").value,
        SimpleBeneficiaryFuction4
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate5OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate5CopyNumber").value,
        SimpleBeneficiaryFuction5
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate6OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate6CopyNumber").value,
        SimpleBeneficiaryFuction6
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate7OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate7CopyNumber").value,
        SimpleBeneficiaryFuction7
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate8OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate8CopyNumber").value,
        SimpleBeneficiaryFuction8
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate9OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate9CopyNumber").value,
        SimpleBeneficiaryFuction9
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate10OriginalNumber").value,
        document.getElementById("SimpleBENEFICIARYCertificate10CopyNumber").value,
        SimpleBeneficiaryFuction10
      );

      // Shipping Advice
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("ShippingAdviceApplicant_OriginalNumber").value,
        document.getElementById("ShippingAdviceApplicant_CopyNumber").value,
        shipmentAdviceApplicantFunction
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("ShippingAdviceInsurance_OriginalNumber").value,
        document.getElementById("ShippingAdviceInsurance_CopyNumber").value,
        shipmentAdviceInsuranceFunction
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("ShippingAdviceIssuingBank_OriginalNumber").value,
        document.getElementById("ShippingAdviceIssuingBank_CopyNumber").value,
        shippingAdviceIssuingBankFunction
      );
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("ShippingAdviceOtherRecipient_OriginalNumber").value,
        document.getElementById("ShippingAdviceOtherRecipient_CopyNumber").value,
        shippingAdviceOtherRecipientFunction
      );

      // WL
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("WeightList_OriginalNumber").value,
        document.getElementById("WeightList_CopyNumber").value,
        WeightListFunction
      );

      // Insurance Form
      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("InsuranceForm_OriginalNumber").value,
        document.getElementById("InsuranceForm_CopyNumber").value,
        InsuranceFormFunction,
        currency
      );

      // ! Others 1 - All - Not Checked
      let inputValue1 = printPage_Other1SelectField.value;
      let Other1FunctionName = "";
      if (inputValue1 === "Appended Declaration To Air Waybill") {
        Other1FunctionName = AppendedDeclarationToAirWaybillFunction1;
      } else if (inputValue1 === "Certificate Appended To B/L") {
        Other1FunctionName = CertificateAppendedToBLFunction1;
      } else if (inputValue1 === "Certificate Appended To Insurance Certificate") {
        Other1FunctionName = CertificateAppendedToInsuranceCertificateFunction1;
      } else if (inputValue1 === "Email Form") {
        Other1FunctionName = EmailFormFunction1;
      } else if (inputValue1 === "Fax Activity") {
        Other1FunctionName = FaxActivityFunction1;
      } else if (inputValue1 === "DHL Form") {
        Other1FunctionName = DHLFormFunction1;
      } else if (inputValue1 === "Truck Bill of lading") {
        Other1FunctionName = TruckBillofladingFunction1;
      } else if (inputValue1 === "Steamship") {
        Other1FunctionName = SteamshipFunction1;
      } else {
        console.log("Wrongg Inport In Other 1");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("Other1_OriginalNumber").value,
        document.getElementById("Other1_CopyNumber").value,
        Other1FunctionName
      );

      // ! Others 2 - All - Not Checked
      let inputValue2 = printPage_Other2SelectField.value;
      let Other2FunctionName = "";
      if (inputValue2 === "Appended Declaration To Air Waybill") {
        Other2FunctionName = AppendedDeclarationToAirWaybillFunction2;
      } else if (inputValue2 === "Certificate Appended To B/L") {
        Other2FunctionName = CertificateAppendedToBLFunction2;
      } else if (inputValue2 === "Certificate Appended To Insurance Certificate") {
        Other2FunctionName = CertificateAppendedToInsuranceCertificateFunction2;
      } else if (inputValue2 === "Email Form") {
        Other2FunctionName = EmailFormFunction2;
      } else if (inputValue2 === "Fax Activity") {
        Other2FunctionName = FaxActivityFunction2;
      } else if (inputValue2 === "DHL Form") {
        Other2FunctionName = DHLFormFunction2;
      } else if (inputValue2 === "Truck Bill of lading") {
        Other2FunctionName = TruckBillofladingFunction2;
      } else if (inputValue2 === "Steamship") {
        Other2FunctionName = SteamshipFunction2;
      } else {
        console.log("Wrongg Inport In Other 2");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("Other2_OriginalNumber").value,
        document.getElementById("Other2_CopyNumber").value,
        Other2FunctionName
      );

      // ! Others 3 - All - Not Checked
      let inputValue3 = printPage_Other3SelectField.value;
      let Other3FunctionName = "";
      if (inputValue3 === "Appended Declaration To Air Waybill") {
        Other3FunctionName = AppendedDeclarationToAirWaybillFunction3;
      } else if (inputValue3 === "Certificate Appended To B/L") {
        Other3FunctionName = CertificateAppendedToBLFunction3;
      } else if (inputValue3 === "Certificate Appended To Insurance Certificate") {
        Other3FunctionName = CertificateAppendedToInsuranceCertificateFunction3;
      } else if (inputValue3 === "Email Form") {
        Other3FunctionName = EmailFormFunction3;
      } else if (inputValue3 === "Fax Activity") {
        Other3FunctionName = FaxActivityFunction3;
      } else if (inputValue3 === "DHL Form") {
        Other3FunctionName = DHLFormFunction3;
      } else if (inputValue3 === "Truck Bill of lading") {
        Other3FunctionName = TruckBillofladingFunction3;
      } else if (inputValue3 === "Steamship") {
        Other3FunctionName = SteamshipFunction3;
      } else {
        console.log("Wrongg Inport In Other 3");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("Other3_OriginalNumber").value,
        document.getElementById("Other3_CopyNumber").value,
        Other3FunctionName
      );

      // ! Others 4 - All - Not Checked
      let inputValue4 = printPage_Other4SelectField.value;
      let Other4FunctionName = "";
      if (inputValue4 === "Appended Declaration To Air Waybill") {
        Other4FunctionName = AppendedDeclarationToAirWaybillFunction4;
      } else if (inputValue4 === "Certificate Appended To B/L") {
        Other4FunctionName = CertificateAppendedToBLFunction4;
      } else if (inputValue4 === "Certificate Appended To Insurance Certificate") {
        Other4FunctionName = CertificateAppendedToInsuranceCertificateFunction4;
      } else if (inputValue4 === "Email Form") {
        Other4FunctionName = EmailFormFunction4;
      } else if (inputValue4 === "Fax Activity") {
        Other4FunctionName = FaxActivityFunction4;
      } else if (inputValue4 === "DHL Form") {
        Other4FunctionName = DHLFormFunction4;
      } else if (inputValue4 === "Truck Bill of lading") {
        Other4FunctionName = TruckBillofladingFunction4;
      } else if (inputValue4 === "Steamship") {
        Other4FunctionName = SteamshipFunction4;
      } else {
        console.log("Wrongg Inport In Other 4");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("Other4_OriginalNumber").value,
        document.getElementById("Other4_CopyNumber").value,
        Other4FunctionName
      );

      // ! Others 5 - All - Not Checked
      let inputValue5 = printPage_Other5SelectField.value;
      let Other5FunctionName = "";
      if (inputValue5 === "Appended Declaration To Air Waybill") {
        Other5FunctionName = AppendedDeclarationToAirWaybillFunction5;
      } else if (inputValue5 === "Certificate Appended To B/L") {
        Other5FunctionName = CertificateAppendedToBLFunction5;
      } else if (inputValue5 === "Certificate Appended To Insurance Certificate") {
        Other5FunctionName = CertificateAppendedToInsuranceCertificateFunction5;
      } else if (inputValue5 === "Email Form") {
        Other5FunctionName = EmailFormFunction5;
      } else if (inputValue5 === "Fax Activity") {
        Other5FunctionName = FaxActivityFunction5;
      } else if (inputValue5 === "DHL Form") {
        Other5FunctionName = DHLFormFunction5;
      } else if (inputValue5 === "Truck Bill of lading") {
        Other5FunctionName = TruckBillofladingFunction5;
      } else if (inputValue5 === "Steamship") {
        Other5FunctionName = SteamshipFunction5;
      } else {
        console.log("Wrongg Inport In Other 5");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("Other5_OriginalNumber").value,
        document.getElementById("Other5_CopyNumber").value,
        Other5FunctionName
      );

      // ! Others 6 - All - Not Checked
      let inputValue6 = printPage_Other6SelectField.value;
      let Other6FunctionName = "";
      if (inputValue6 === "Appended Declaration To Air Waybill") {
        Other6FunctionName = AppendedDeclarationToAirWaybillFunction6;
      } else if (inputValue6 === "Certificate Appended To B/L") {
        Other6FunctionName = CertificateAppendedToBLFunction6;
      } else if (inputValue6 === "Certificate Appended To Insurance Certificate") {
        Other6FunctionName = CertificateAppendedToInsuranceCertificateFunction6;
      } else if (inputValue6 === "Email Form") {
        Other6FunctionName = EmailFormFunction6;
      } else if (inputValue6 === "Fax Activity") {
        Other6FunctionName = FaxActivityFunction6;
      } else if (inputValue6 === "DHL Form") {
        Other6FunctionName = DHLFormFunction6;
      } else if (inputValue6 === "Truck Bill of lading") {
        Other6FunctionName = TruckBillofladingFunction6;
      } else if (inputValue6 === "Steamship") {
        Other6FunctionName = SteamshipFunction6;
      } else {
        console.log("Wrongg Inport In Other 6");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("Other6_OriginalNumber").value,
        document.getElementById("Other6_CopyNumber").value,
        Other6FunctionName
      );

      // ! Others 7 - All - Not Checked
      let inputValue7 = printPage_Other7SelectField.value;
      let Other7FunctionName = "";
      if (inputValue7 === "Appended Declaration To Air Waybill") {
        Other7FunctionName = AppendedDeclarationToAirWaybillFunction7;
      } else if (inputValue7 === "Certificate Appended To B/L") {
        Other7FunctionName = CertificateAppendedToBLFunction7;
      } else if (inputValue7 === "Certificate Appended To Insurance Certificate") {
        Other7FunctionName = CertificateAppendedToInsuranceCertificateFunction7;
      } else if (inputValue7 === "Email Form") {
        Other7FunctionName = EmailFormFunction7;
      } else if (inputValue7 === "Fax Activity") {
        Other7FunctionName = FaxActivityFunction7;
      } else if (inputValue7 === "DHL Form") {
        Other7FunctionName = DHLFormFunction7;
      } else if (inputValue7 === "Truck Bill of lading") {
        Other7FunctionName = TruckBillofladingFunction7;
      } else if (inputValue7 === "Steamship") {
        Other7FunctionName = SteamshipFunction7;
      } else {
        console.log("Wrongg Inport In Other 7");
      }

      Child_Generate_PDF_PrintAll(
        pdf,
        true,
        document.getElementById("Other7_OriginalNumber").value,
        document.getElementById("Other7_CopyNumber").value,
        Other7FunctionName
      );
    }

    // Remove Last Page
    const pageCount = pdf.internal.getNumberOfPages();
    if (pageCount > 1) {
      pdf.deletePage(pageCount);
      pdf.save("Certificates Print All.pdf");
    } else {
      alert("Wrong Input");
    }
  }

  function Child_Generate_PDF_PrintAll(pdf, printEnableCheckbox, numberInput, copyInput, CertificateFunction, currency) {
    if (printEnableCheckbox && numberInput > 0) {
      for (let i = 0; i < numberInput; i++) {
        CertificateFunction(
          pdf,
          printText,
          "ORIGINAL",
          createCell,
          createBorder,
          longText,
          drawLine,
          checkbox,
          radioButtonpdf,
          mylongText,
          formatDate,
          currency,
          i
        );
        pdf.addPage();
      }
    }
    if (printEnableCheckbox && copyInput > 0) {
      for (let i = 0; i < copyInput; i++) {
        CertificateFunction(
          pdf,
          printText,
          "COPY",
          createCell,
          createBorder,
          longText,
          drawLine,
          checkbox,
          radioButtonpdf,
          mylongText,
          formatDate,
          currency,
          i
        );
        pdf.addPage();
      }
    }
  }

  //Print Test
  function Parent_Generate_PDF_PrintTest_Checked(currency) {
    let pdf = new jsPDF("p", "in", "a4"); //8.25 x 11.75 inches

    if (document.getElementById("printSelectedItemsOnlyCheckBox").checked) {
      // AWB
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("AWB_OriginalCheck").checked,
        document.getElementById("AWB_OriginalNumber").value,
        airwaybillFunction,
        currency
      );

      // BL
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("BL_OriginalCheck").checked,
        document.getElementById("BL_OriginalNumber").value,
        BillOfLadingFunction
      );

      // CI
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("CommercialInvoiceOriginalCheck").checked,
        document.getElementById("CommercialInvoiceOriginalNumber").value,
        commercialInvoiceFunction,
        currency
      );

      // PL
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("packingListOriginalCheck").checked,
        document.getElementById("packingListOriginalNumber").value,
        commercialPackingListFunction
      );

      // Draft
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("DraftOriginalCheck").checked,
        document.getElementById("DraftOriginalNumber").value,
        nameDraftFunction,
        currency
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("sightDraftOriginalCheck").checked,
        document.getElementById("sightDraftOriginalNumber").value,
        sightDraftFunction,
        currency
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("backDraftOriginalCheck").checked,
        document.getElementById("backDraftOriginalNumber").value,
        BackOfDraft
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("additionalDraftOriginalCheck").checked,
        document.getElementById("additionalDraftOriginalNumber").value,
        AdditionalNameDraftPDF,
        currency
      );

      // CO
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("CertificateOfOriginOriginalCheck").checked,
        document.getElementById("CertificateOfOriginOriginalNumber").value,
        certificateOfOriginFunction
      );

      // Bene 1-10
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate1OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate1OriginalNumber").value,
        SimpleBeneficiaryFuction1
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate2OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate2OriginalNumber").value,
        SimpleBeneficiaryFuction2
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate3OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate3OriginalNumber").value,
        SimpleBeneficiaryFuction3
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate4OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate4OriginalNumber").value,
        SimpleBeneficiaryFuction4
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate5OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate5OriginalNumber").value,
        SimpleBeneficiaryFuction5
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate6OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate6OriginalNumber").value,
        SimpleBeneficiaryFuction6
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate7OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate7OriginalNumber").value,
        SimpleBeneficiaryFuction7
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate8OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate8OriginalNumber").value,
        SimpleBeneficiaryFuction8
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate9OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate9OriginalNumber").value,
        SimpleBeneficiaryFuction9
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("SimpleBENEFICIARYCertificate10OriginalCheck").checked,
        document.getElementById("SimpleBENEFICIARYCertificate10OriginalNumber").value,
        SimpleBeneficiaryFuction10
      );

      // Shipping Advice
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("ShippingAdviceApplicant_OriginalCheck").checked,
        document.getElementById("ShippingAdviceApplicant_OriginalNumber").value,
        shipmentAdviceApplicantFunction
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("ShippingAdviceInsurance_OriginalCheck").checked,
        document.getElementById("ShippingAdviceInsurance_OriginalNumber").value,
        shipmentAdviceInsuranceFunction
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("ShippingAdviceIssuingBank_OriginalCheck").checked,
        document.getElementById("ShippingAdviceIssuingBank_OriginalNumber").value,
        shippingAdviceIssuingBankFunction
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("ShippingAdviceOtherRecipient_OriginalCheck").checked,
        document.getElementById("ShippingAdviceOtherRecipient_OriginalNumber").value,
        shippingAdviceOtherRecipientFunction
      );

      // WL
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("WeightList_OriginalCheck").checked,
        document.getElementById("WeightList_OriginalNumber").value,
        WeightListFunction
      );

      // Insurance Form
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("InsuranceForm_OriginalCheck").value,
        document.getElementById("InsuranceForm_OriginalNumber").value,
        InsuranceFormFunction,
        currency
      );

      // ! Others 1 - Test - Checked
      let inputValue1 = printPage_Other1SelectField.value;
      let Other1FunctionName = "";
      if (inputValue1 === "Appended Declaration To Air Waybill") {
        Other1FunctionName = AppendedDeclarationToAirWaybillFunction1;
      } else if (inputValue1 === "Certificate Appended To B/L") {
        Other1FunctionName = CertificateAppendedToBLFunction1;
      } else if (inputValue1 === "Certificate Appended To Insurance Certificate") {
        Other1FunctionName = CertificateAppendedToInsuranceCertificateFunction1;
      } else if (inputValue1 === "Email Form") {
        Other1FunctionName = EmailFormFunction1;
      } else if (inputValue1 === "Fax Activity") {
        Other1FunctionName = FaxActivityFunction1;
      } else if (inputValue1 === "DHL Form") {
        Other1FunctionName = DHLFormFunction1;
      } else if (inputValue1 === "Truck Bill of lading") {
        Other1FunctionName = TruckBillofladingFunction1;
      } else if (inputValue1 === "Steamship") {
        Other1FunctionName = SteamshipFunction1;
      } else {
        console.log("Wrongg Inport In Other 1");
      }

      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("Other1_OriginalCheck").checked,
        document.getElementById("Other1_OriginalNumber").value,
        Other1FunctionName
      );

      // ! Others 2 - Test - Checked
      let inputValue2 = printPage_Other2SelectField.value;
      let Other2FunctionName = "";
      if (inputValue2 === "Appended Declaration To Air Waybill") {
        Other2FunctionName = AppendedDeclarationToAirWaybillFunction2;
      } else if (inputValue2 === "Certificate Appended To B/L") {
        Other2FunctionName = CertificateAppendedToBLFunction2;
      } else if (inputValue2 === "Certificate Appended To Insurance Certificate") {
        Other2FunctionName = CertificateAppendedToInsuranceCertificateFunction2;
      } else if (inputValue2 === "Email Form") {
        Other2FunctionName = EmailFormFunction2;
      } else if (inputValue2 === "Fax Activity") {
        Other2FunctionName = FaxActivityFunction2;
      } else if (inputValue2 === "DHL Form") {
        Other2FunctionName = DHLFormFunction2;
      } else if (inputValue2 === "Truck Bill of lading") {
        Other2FunctionName = TruckBillofladingFunction2;
      } else if (inputValue2 === "Steamship") {
        Other2FunctionName = SteamshipFunction2;
      } else {
        console.log("Wrongg Inport In Other 2");
      }

      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("Other2_OriginalCheck").checked,
        document.getElementById("Other2_OriginalNumber").value,
        Other2FunctionName
      );

      // ! Others 3 - Test - Checked
      let inputValue3 = printPage_Other3SelectField.value;
      let Other3FunctionName = "";
      if (inputValue3 === "Appended Declaration To Air Waybill") {
        Other3FunctionName = AppendedDeclarationToAirWaybillFunction3;
      } else if (inputValue3 === "Certificate Appended To B/L") {
        Other3FunctionName = CertificateAppendedToBLFunction3;
      } else if (inputValue3 === "Certificate Appended To Insurance Certificate") {
        Other3FunctionName = CertificateAppendedToInsuranceCertificateFunction3;
      } else if (inputValue3 === "Email Form") {
        Other3FunctionName = EmailFormFunction3;
      } else if (inputValue3 === "Fax Activity") {
        Other3FunctionName = FaxActivityFunction3;
      } else if (inputValue3 === "DHL Form") {
        Other3FunctionName = DHLFormFunction3;
      } else if (inputValue3 === "Truck Bill of lading") {
        Other3FunctionName = TruckBillofladingFunction3;
      } else if (inputValue3 === "Steamship") {
        Other3FunctionName = SteamshipFunction3;
      } else {
        console.log("Wrongg Inport In Other 3");
      }

      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("Other3_OriginalCheck").checked,
        document.getElementById("Other3_OriginalNumber").value,
        Other3FunctionName
      );

      // ! Others 4 - Test - Checked
      let inputValue4 = printPage_Other4SelectField.value;
      let Other4FunctionName = "";
      if (inputValue4 === "Appended Declaration To Air Waybill") {
        Other4FunctionName = AppendedDeclarationToAirWaybillFunction4;
      } else if (inputValue4 === "Certificate Appended To B/L") {
        Other4FunctionName = CertificateAppendedToBLFunction4;
      } else if (inputValue4 === "Certificate Appended To Insurance Certificate") {
        Other4FunctionName = CertificateAppendedToInsuranceCertificateFunction4;
      } else if (inputValue4 === "Email Form") {
        Other4FunctionName = EmailFormFunction4;
      } else if (inputValue4 === "Fax Activity") {
        Other4FunctionName = FaxActivityFunction4;
      } else if (inputValue4 === "DHL Form") {
        Other4FunctionName = DHLFormFunction4;
      } else if (inputValue4 === "Truck Bill of lading") {
        Other4FunctionName = TruckBillofladingFunction4;
      } else if (inputValue4 === "Steamship") {
        Other4FunctionName = SteamshipFunction4;
      } else {
        console.log("Wrongg Inport In Other 4");
      }

      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("Other4_OriginalCheck").checked,
        document.getElementById("Other4_OriginalNumber").value,
        Other4FunctionName
      );

      // ! Others 5 - Test - Checked
      let inputValue5 = printPage_Other5SelectField.value;
      let Other5FunctionName = "";
      if (inputValue5 === "Appended Declaration To Air Waybill") {
        Other5FunctionName = AppendedDeclarationToAirWaybillFunction5;
      } else if (inputValue5 === "Certificate Appended To B/L") {
        Other5FunctionName = CertificateAppendedToBLFunction5;
      } else if (inputValue5 === "Certificate Appended To Insurance Certificate") {
        Other5FunctionName = CertificateAppendedToInsuranceCertificateFunction5;
      } else if (inputValue5 === "Email Form") {
        Other5FunctionName = EmailFormFunction5;
      } else if (inputValue5 === "Fax Activity") {
        Other5FunctionName = FaxActivityFunction5;
      } else if (inputValue5 === "DHL Form") {
        Other5FunctionName = DHLFormFunction5;
      } else if (inputValue5 === "Truck Bill of lading") {
        Other5FunctionName = TruckBillofladingFunction5;
      } else if (inputValue5 === "Steamship") {
        Other5FunctionName = SteamshipFunction5;
      } else {
        console.log("Wrongg Inport In Other 5");
      }

      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("Other5_OriginalCheck").checked,
        document.getElementById("Other5_OriginalNumber").value,
        Other5FunctionName
      );

      // ! Others 6 - Test - Checked
      let inputValue6 = printPage_Other6SelectField.value;
      let Other6FunctionName = "";
      if (inputValue6 === "Appended Declaration To Air Waybill") {
        Other6FunctionName = AppendedDeclarationToAirWaybillFunction6;
      } else if (inputValue6 === "Certificate Appended To B/L") {
        Other6FunctionName = CertificateAppendedToBLFunction6;
      } else if (inputValue6 === "Certificate Appended To Insurance Certificate") {
        Other6FunctionName = CertificateAppendedToInsuranceCertificateFunction6;
      } else if (inputValue6 === "Email Form") {
        Other6FunctionName = EmailFormFunction6;
      } else if (inputValue6 === "Fax Activity") {
        Other6FunctionName = FaxActivityFunction6;
      } else if (inputValue6 === "DHL Form") {
        Other6FunctionName = DHLFormFunction6;
      } else if (inputValue6 === "Truck Bill of lading") {
        Other6FunctionName = TruckBillofladingFunction6;
      } else if (inputValue6 === "Steamship") {
        Other6FunctionName = SteamshipFunction6;
      } else {
        console.log("Wrongg Inport In Other 6");
      }

      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("Other6_OriginalCheck").checked,
        document.getElementById("Other6_OriginalNumber").value,
        Other6FunctionName
      );

      // ! Others 7 - Test - Checked
      let inputValue7 = printPage_Other7SelectField.value;
      let Other7FunctionName = "";
      if (inputValue7 === "Appended Declaration To Air Waybill") {
        Other7FunctionName = AppendedDeclarationToAirWaybillFunction7;
      } else if (inputValue7 === "Certificate Appended To B/L") {
        Other7FunctionName = CertificateAppendedToBLFunction7;
      } else if (inputValue7 === "Certificate Appended To Insurance Certificate") {
        Other7FunctionName = CertificateAppendedToInsuranceCertificateFunction7;
      } else if (inputValue7 === "Email Form") {
        Other7FunctionName = EmailFormFunction7;
      } else if (inputValue7 === "Fax Activity") {
        Other7FunctionName = FaxActivityFunction7;
      } else if (inputValue7 === "DHL Form") {
        Other7FunctionName = DHLFormFunction7;
      } else if (inputValue7 === "Truck Bill of lading") {
        Other7FunctionName = TruckBillofladingFunction7;
      } else if (inputValue7 === "Steamship") {
        Other7FunctionName = SteamshipFunction7;
      } else {
        console.log("Wrongg Inport In Other 7");
      }

      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        document.getElementById("Other7_OriginalCheck").checked,
        document.getElementById("Other7_OriginalNumber").value,
        Other7FunctionName
      );
    } else {
      // AWB
      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("AWB_OriginalNumber").value, airwaybillFunction, currency);

      // BL
      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("BL_OriginalNumber").value, BillOfLadingFunction);

      // CI
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("CommercialInvoiceOriginalNumber").value,
        commercialInvoiceFunction,
        currency
      );

      // PL
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("packingListOriginalNumber").value,
        commercialPackingListFunction
      );

      // Draft
      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("DraftOriginalNumber").value, nameDraftFunction, currency);
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("sightDraftOriginalNumber").value,
        sightDraftFunction,
        currency
      );
      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("backDraftOriginalNumber").value, BackOfDraft);
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("additionalDraftOriginalNumber").value,
        AdditionalNameDraftPDF,
        currency
      );

      // CO
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("CertificateOfOriginOriginalNumber").value,
        certificateOfOriginFunction
      );

      // Bene  1-10
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate1OriginalNumber").value,
        SimpleBeneficiaryFuction1
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate2OriginalNumber").value,
        SimpleBeneficiaryFuction2
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate3OriginalNumber").value,
        SimpleBeneficiaryFuction3
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate4OriginalNumber").value,
        SimpleBeneficiaryFuction4
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate5OriginalNumber").value,
        SimpleBeneficiaryFuction5
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate6OriginalNumber").value,
        SimpleBeneficiaryFuction6
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate7OriginalNumber").value,
        SimpleBeneficiaryFuction7
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate8OriginalNumber").value,
        SimpleBeneficiaryFuction8
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate9OriginalNumber").value,
        SimpleBeneficiaryFuction9
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("SimpleBENEFICIARYCertificate10OriginalNumber").value,
        SimpleBeneficiaryFuction10
      );

      // Shipping Advice
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("ShippingAdviceApplicant_OriginalNumber").value,
        shipmentAdviceApplicantFunction
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("ShippingAdviceInsurance_OriginalNumber").value,
        shipmentAdviceInsuranceFunction
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("ShippingAdviceIssuingBank_OriginalNumber").value,
        shippingAdviceIssuingBankFunction
      );
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("ShippingAdviceOtherRecipient_OriginalNumber").value,
        shippingAdviceOtherRecipientFunction
      );

      // WL
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("WeightList_OriginalNumber").value,
        WeightListFunction
      );

      // Insurance Form
      Child_Generate_PDF_PrintTest_Checked(
        pdf,
        true,
        document.getElementById("InsuranceForm_OriginalNumber").value,
        InsuranceFormFunction,
        currency
      );

      // ! Others 1 - Test - Not Checked
      let inputValue1 = printPage_Other1SelectField.value;
      let Other1FunctionName = "";
      if (inputValue1 === "Appended Declaration To Air Waybill") {
        Other1FunctionName = AppendedDeclarationToAirWaybillFunction1;
      } else if (inputValue1 === "Certificate Appended To B/L") {
        Other1FunctionName = CertificateAppendedToBLFunction1;
      } else if (inputValue1 === "Certificate Appended To Insurance Certificate") {
        Other1FunctionName = CertificateAppendedToInsuranceCertificateFunction1;
      } else if (inputValue1 === "Email Form") {
        Other1FunctionName = EmailFormFunction1;
      } else if (inputValue1 === "Fax Activity") {
        Other1FunctionName = FaxActivityFunction1;
      } else if (inputValue1 === "DHL Form") {
        Other1FunctionName = DHLFormFunction1;
      } else if (inputValue1 === "Truck Bill of lading") {
        Other1FunctionName = TruckBillofladingFunction1;
      } else if (inputValue1 === "Steamship") {
        Other1FunctionName = SteamshipFunction1;
      } else {
        console.log("Wrongg Inport In Other 1");
      }

      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("Other1_OriginalNumber").value, Other1FunctionName);

      // ! Others 2 - Test - Not Checked
      let inputValue2 = printPage_Other2SelectField.value;
      let Other2FunctionName = "";
      if (inputValue2 === "Appended Declaration To Air Waybill") {
        Other2FunctionName = AppendedDeclarationToAirWaybillFunction2;
      } else if (inputValue2 === "Certificate Appended To B/L") {
        Other2FunctionName = CertificateAppendedToBLFunction2;
      } else if (inputValue2 === "Certificate Appended To Insurance Certificate") {
        Other2FunctionName = CertificateAppendedToInsuranceCertificateFunction2;
      } else if (inputValue2 === "Email Form") {
        Other2FunctionName = EmailFormFunction2;
      } else if (inputValue2 === "Fax Activity") {
        Other2FunctionName = FaxActivityFunction2;
      } else if (inputValue2 === "DHL Form") {
        Other2FunctionName = DHLFormFunction2;
      } else if (inputValue2 === "Truck Bill of lading") {
        Other2FunctionName = TruckBillofladingFunction2;
      } else if (inputValue2 === "Steamship") {
        Other2FunctionName = SteamshipFunction2;
      } else {
        console.log("Wrongg Inport In Other 2");
      }

      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("Other2_OriginalNumber").value, Other2FunctionName);

      // ! Others 3 - Test - Not Checked
      let inputValue3 = printPage_Other3SelectField.value;
      let Other3FunctionName = "";
      if (inputValue3 === "Appended Declaration To Air Waybill") {
        Other3FunctionName = AppendedDeclarationToAirWaybillFunction3;
      } else if (inputValue3 === "Certificate Appended To B/L") {
        Other3FunctionName = CertificateAppendedToBLFunction3;
      } else if (inputValue3 === "Certificate Appended To Insurance Certificate") {
        Other3FunctionName = CertificateAppendedToInsuranceCertificateFunction3;
      } else if (inputValue3 === "Email Form") {
        Other3FunctionName = EmailFormFunction3;
      } else if (inputValue3 === "Fax Activity") {
        Other3FunctionName = FaxActivityFunction3;
      } else if (inputValue3 === "DHL Form") {
        Other3FunctionName = DHLFormFunction3;
      } else if (inputValue3 === "Truck Bill of lading") {
        Other3FunctionName = TruckBillofladingFunction3;
      } else if (inputValue3 === "Steamship") {
        Other3FunctionName = SteamshipFunction3;
      } else {
        console.log("Wrongg Inport In Other 3");
      }

      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("Other3_OriginalNumber").value, Other3FunctionName);

      // ! Others 4 - Test - Not Checked
      let inputValue4 = printPage_Other4SelectField.value;
      let Other4FunctionName = "";
      if (inputValue4 === "Appended Declaration To Air Waybill") {
        Other4FunctionName = AppendedDeclarationToAirWaybillFunction4;
      } else if (inputValue4 === "Certificate Appended To B/L") {
        Other4FunctionName = CertificateAppendedToBLFunction4;
      } else if (inputValue4 === "Certificate Appended To Insurance Certificate") {
        Other4FunctionName = CertificateAppendedToInsuranceCertificateFunction4;
      } else if (inputValue4 === "Email Form") {
        Other4FunctionName = EmailFormFunction4;
      } else if (inputValue4 === "Fax Activity") {
        Other4FunctionName = FaxActivityFunction4;
      } else if (inputValue4 === "DHL Form") {
        Other4FunctionName = DHLFormFunction4;
      } else if (inputValue4 === "Truck Bill of lading") {
        Other4FunctionName = TruckBillofladingFunction4;
      } else if (inputValue4 === "Steamship") {
        Other4FunctionName = SteamshipFunction4;
      } else {
        console.log("Wrongg Inport In Other 4");
      }

      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("Other4_OriginalNumber").value, Other4FunctionName);

      // ! Others 5 - Test - Not Checked
      let inputValue5 = printPage_Other5SelectField.value;
      let Other5FunctionName = "";
      if (inputValue5 === "Appended Declaration To Air Waybill") {
        Other5FunctionName = AppendedDeclarationToAirWaybillFunction5;
      } else if (inputValue5 === "Certificate Appended To B/L") {
        Other5FunctionName = CertificateAppendedToBLFunction5;
      } else if (inputValue5 === "Certificate Appended To Insurance Certificate") {
        Other5FunctionName = CertificateAppendedToInsuranceCertificateFunction5;
      } else if (inputValue5 === "Email Form") {
        Other5FunctionName = EmailFormFunction5;
      } else if (inputValue5 === "Fax Activity") {
        Other5FunctionName = FaxActivityFunction5;
      } else if (inputValue5 === "DHL Form") {
        Other5FunctionName = DHLFormFunction5;
      } else if (inputValue5 === "Truck Bill of lading") {
        Other5FunctionName = TruckBillofladingFunction5;
      } else if (inputValue5 === "Steamship") {
        Other5FunctionName = SteamshipFunction5;
      } else {
        console.log("Wrongg Inport In Other 5");
      }

      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("Other5_OriginalNumber").value, Other5FunctionName);

      // ! Others 6 - Test - Not Checked
      let inputValue6 = printPage_Other6SelectField.value;
      let Other6FunctionName = "";
      if (inputValue6 === "Appended Declaration To Air Waybill") {
        Other6FunctionName = AppendedDeclarationToAirWaybillFunction6;
      } else if (inputValue6 === "Certificate Appended To B/L") {
        Other6FunctionName = CertificateAppendedToBLFunction6;
      } else if (inputValue6 === "Certificate Appended To Insurance Certificate") {
        Other6FunctionName = CertificateAppendedToInsuranceCertificateFunction6;
      } else if (inputValue6 === "Email Form") {
        Other6FunctionName = EmailFormFunction6;
      } else if (inputValue6 === "Fax Activity") {
        Other6FunctionName = FaxActivityFunction6;
      } else if (inputValue6 === "DHL Form") {
        Other6FunctionName = DHLFormFunction6;
      } else if (inputValue6 === "Truck Bill of lading") {
        Other6FunctionName = TruckBillofladingFunction6;
      } else if (inputValue6 === "Steamship") {
        Other6FunctionName = SteamshipFunction6;
      } else {
        console.log("Wrongg Inport In Other 6");
      }

      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("Other6_OriginalNumber").value, Other6FunctionName);

      // ! Others 7 - Test - Not Checked
      let inputValue7 = printPage_Other7SelectField.value;
      let Other7FunctionName = "";
      if (inputValue7 === "Appended Declaration To Air Waybill") {
        Other7FunctionName = AppendedDeclarationToAirWaybillFunction7;
      } else if (inputValue7 === "Certificate Appended To B/L") {
        Other7FunctionName = CertificateAppendedToBLFunction7;
      } else if (inputValue7 === "Certificate Appended To Insurance Certificate") {
        Other7FunctionName = CertificateAppendedToInsuranceCertificateFunction7;
      } else if (inputValue7 === "Email Form") {
        Other7FunctionName = EmailFormFunction7;
      } else if (inputValue7 === "Fax Activity") {
        Other7FunctionName = FaxActivityFunction7;
      } else if (inputValue7 === "DHL Form") {
        Other7FunctionName = DHLFormFunction7;
      } else if (inputValue7 === "Truck Bill of lading") {
        Other7FunctionName = TruckBillofladingFunction7;
      } else if (inputValue7 === "Steamship") {
        Other7FunctionName = SteamshipFunction7;
      } else {
        console.log("Wrongg Inport In Other 7");
      }

      Child_Generate_PDF_PrintTest_Checked(pdf, true, document.getElementById("Other7_OriginalNumber").value, Other7FunctionName);
    }

    // Remove Last Page
    const pageCount = pdf.internal.getNumberOfPages();
    if (pageCount > 1) {
      pdf.deletePage(pageCount);
      // window.open(pdf.output('bloburl'), '_blank');
      // pdf.autoPrint({variant: 'non-conform'});
      pdf.save("Certificates Print Test.pdf");
    } else {
      alert("Wrong Input");
    }
  }

  function Child_Generate_PDF_PrintTest_Checked(pdf, printEnableCheckbox, numberInput, CertificateFunction, currency) {
    if (printEnableCheckbox && numberInput > 0) {
      CertificateFunction(
        pdf,
        printText,
        "ORIGINAL",
        createCell,
        createBorder,
        longText,
        drawLine,
        checkbox,
        radioButtonpdf,
        mylongText,
        formatDate,
        currency,
        1
      );
      pdf.addPage();
    }
  }
}
