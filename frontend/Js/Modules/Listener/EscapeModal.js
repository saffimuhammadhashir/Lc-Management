export function EscapeModalFunction() {
  document.addEventListener("keydown", function (event) {
    console.log("Escape Function Triggered");
    // console.log(event.target);
    // console.log(event.target.id);
    if (event.key === "Escape") {
      // console.log("I am in");

      document.getElementById("AirwayBillModal").classList.remove("show");
      document.getElementById("AirwayBillModal").style.display = "none";
      document.getElementById("BillOfLadingModal").classList.remove("show");
      document.getElementById("BillOfLadingModal").style.display = "none";
      document
        .getElementById("CommercialInvoiceModal")
        .classList.remove("show");
      document.getElementById("CommercialInvoiceModal").style.display = "none";
      document.getElementById("packingListModal").classList.remove("show");
      document.getElementById("packingListModal").style.display = "none";
      document.getElementById("DraftModal").classList.remove("show");
      document.getElementById("DraftModal").style.display = "none";

      document.getElementById("sightDraftModal").classList.remove("show");
      document.getElementById("sightDraftModal").style.display = "none";

      document.getElementById("backDraftModal").classList.remove("show");
      document.getElementById("backDraftModal").style.display = "none";

      document.getElementById("additionalDraftModal").classList.remove("show");
      document.getElementById("additionalDraftModal").style.display = "none";

      document
        .getElementById("CertificateOfOriginModal")
        .classList.remove("show");
      document.getElementById("CertificateOfOriginModal").style.display =
        "none";

      document.getElementById("BeneficiaryModal1").classList.remove("show");
      document.getElementById("BeneficiaryModal1").style.display = "none";

      document.getElementById("BeneficiaryModal2").classList.remove("show");
      document.getElementById("BeneficiaryModal2").style.display = "none";

      document.getElementById("BeneficiaryModal3").classList.remove("show");
      document.getElementById("BeneficiaryModal3").style.display = "none";

      document.getElementById("BeneficiaryModal4").classList.remove("show");
      document.getElementById("BeneficiaryModal4").style.display = "none";

      document.getElementById("BeneficiaryModal5").classList.remove("show");
      document.getElementById("BeneficiaryModal5").style.display = "none";

      document.getElementById("BeneficiaryModal6").classList.remove("show");
      document.getElementById("BeneficiaryModal6").style.display = "none";

      document.getElementById("BeneficiaryModal7").classList.remove("show");
      document.getElementById("BeneficiaryModal7").style.display = "none";

      document.getElementById("BeneficiaryModal8").classList.remove("show");
      document.getElementById("BeneficiaryModal8").style.display = "none";

      document.getElementById("BeneficiaryModal9").classList.remove("show");
      document.getElementById("BeneficiaryModal9").style.display = "none";

      document.getElementById("BeneficiaryModal10").classList.remove("show");
      document.getElementById("BeneficiaryModal10").style.display = "none";

      document
        .getElementById("ShippingAdviceApplicantModal")
        .classList.remove("show");
      document.getElementById("ShippingAdviceApplicantModal").style.display =
        "none";

      document
        .getElementById("ShippingAdviceInsuranceModal")
        .classList.remove("show");
      document.getElementById("ShippingAdviceInsuranceModal").style.display =
        "none";

      document
        .getElementById("ShippingAdviceIssuingBankModal")
        .classList.remove("show");
      document.getElementById("ShippingAdviceIssuingBankModal").style.display =
        "none";

      document
        .getElementById("ShippingAdviceOtherRecipientModal")
        .classList.remove("show");
      document.getElementById(
        "ShippingAdviceOtherRecipientModal"
      ).style.display = "none";

      document.getElementById("WeightListModal").classList.remove("show");
      document.getElementById("WeightListModal").style.display = "none";

      document.getElementById("InsuranceFormModal").classList.remove("show");
      document.getElementById("InsuranceFormModal").style.display = "none";

      // Other 1

      document
        .getElementById("AppendedDeclarationToAirWaybillOther1Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToBLOther1Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLOther1Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToInsuranceCertificateOther1Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateOther1Modal"
      ).style.display = "none";

      document
        .getElementById("EmailFormCertificateOther1Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateOther1Modal").style.display =
        "none";

      document
        .getElementById("FaxActivityCertificateOther1Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateOther1Modal"
      ).style.display = "none";

      document
        .getElementById("DhlFormCertificateOther1Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateOther1Modal").style.display =
        "none";

      document
        .getElementById("TruckBillOfLadingCertificateOther1Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateOther1Modal"
      ).style.display = "none";

      document
        .getElementById("SteamshipCertificateOther1Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateOther1Modal").style.display =
        "none";

      // Other 2
      document
        .getElementById("AppendedDeclarationToAirWaybillOther2Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther2Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToBLother2Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother2Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToInsuranceCertificateother2Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother2Modal"
      ).style.display = "none";

      document
        .getElementById("EmailFormCertificateother2Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother2Modal").style.display =
        "none";

      document
        .getElementById("FaxActivityCertificateother2Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother2Modal"
      ).style.display = "none";

      document
        .getElementById("DhlFormCertificateother2Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother2Modal").style.display =
        "none";

      document
        .getElementById("TruckBillOfLadingCertificateother2Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother2Modal"
      ).style.display = "none";

      document
        .getElementById("SteamshipCertificateother2Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother2Modal").style.display =
        "none";

      // Other 3
      document
        .getElementById("AppendedDeclarationToAirWaybillother3Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToBLother3Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother3Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToInsuranceCertificateother3Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother3Modal"
      ).style.display = "none";

      document
        .getElementById("EmailFormCertificateother3Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother3Modal").style.display =
        "none";

      document
        .getElementById("FaxActivityCertificateother3Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother3Modal"
      ).style.display = "none";

      document
        .getElementById("DhlFormCertificateother3Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother3Modal").style.display =
        "none";

      document
        .getElementById("TruckBillOfLadingCertificateother3Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother3Modal"
      ).style.display = "none";

      document
        .getElementById("SteamshipCertificateother3Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother3Modal").style.display =
        "none";

      // Other 4
      document
        .getElementById("AppendedDeclarationToAirWaybillother4Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToBLother4Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother4Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToInsuranceCertificateother4Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother4Modal"
      ).style.display = "none";

      document
        .getElementById("EmailFormCertificateother4Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother4Modal").style.display =
        "none";

      document
        .getElementById("FaxActivityCertificateother4Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother4Modal"
      ).style.display = "none";

      document
        .getElementById("DhlFormCertificateother4Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother4Modal").style.display =
        "none";

      document
        .getElementById("TruckBillOfLadingCertificateother4Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother4Modal"
      ).style.display = "none";

      document
        .getElementById("SteamshipCertificateother4Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother4Modal").style.display =
        "none";

      // Other 5
      document
        .getElementById("AppendedDeclarationToAirWaybillother5Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToBLother5Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother5Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToInsuranceCertificateother5Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother5Modal"
      ).style.display = "none";

      document
        .getElementById("EmailFormCertificateother5Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother5Modal").style.display =
        "none";

      document
        .getElementById("FaxActivityCertificateother5Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother5Modal"
      ).style.display = "none";

      document
        .getElementById("DhlFormCertificateother5Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother5Modal").style.display =
        "none";

      document
        .getElementById("TruckBillOfLadingCertificateother5Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother5Modal"
      ).style.display = "none";

      document
        .getElementById("SteamshipCertificateother5Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother5Modal").style.display =
        "none";

      // Other 6
      document
        .getElementById("AppendedDeclarationToAirWaybillother6Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother6Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToBLother6Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother6Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToInsuranceCertificateother6Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother6Modal"
      ).style.display = "none";

      document
        .getElementById("EmailFormCertificateother6Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother6Modal").style.display =
        "none";

      document
        .getElementById("FaxActivityCertificateother6Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother6Modal"
      ).style.display = "none";

      document
        .getElementById("DhlFormCertificateother6Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother6Modal").style.display =
        "none";

      document
        .getElementById("TruckBillOfLadingCertificateother6Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother6Modal"
      ).style.display = "none";

      document
        .getElementById("SteamshipCertificateother6Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother6Modal").style.display =
        "none";

      // Other 7
      document
        .getElementById("AppendedDeclarationToAirWaybillother7Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToBLother7Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother7Modal"
      ).style.display = "none";

      document
        .getElementById("CertificateAppendedToInsuranceCertificateother7Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother7Modal"
      ).style.display = "none";

      document
        .getElementById("EmailFormCertificateother7Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother7Modal").style.display =
        "none";

      document
        .getElementById("FaxActivityCertificateother7Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother7Modal"
      ).style.display = "none";

      document
        .getElementById("DhlFormCertificateother7Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother7Modal").style.display =
        "none";

      document
        .getElementById("TruckBillOfLadingCertificateother7Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother7Modal"
      ).style.display = "none";

      document
        .getElementById("SteamshipCertificateother7Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother7Modal").style.display =
        "none";

      // Remove Modal
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
}
