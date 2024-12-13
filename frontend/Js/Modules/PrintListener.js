//  No Information related to propogation only dialog box related stuff


// Display dialog box .close show Dialog Box and homepage to certificate title
var DCSText = "THESE COMMODITIES, TECHNOLOGY OR SOFTWARE WERE EXPORTED FROM THE UNITED STATES IN ACCORDANCE WITH THE EXPORT ADMINISTRATION REGULATIONS. DIVERSION CONTRARY TO U. S. LAW IS PROHIBITED.";

function formatDate(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayName = days[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  
  const time = `${hours}:${minutes} ${ampm}`;
  
  return `${dayName}, ${monthName} ${day}, ${year}, ${time}`;
}

const currentDate = new Date();


export default function PrintListener() {
  // console.log("Main Module - Print Listener");

  // Close modal if user clicks outside the modal
  window.onclick = function (event) {
    var DraftModal = document.getElementById("DraftModal");
    var sightDraftModal = document.getElementById("sightDraftModal");
    var backDraftModal = document.getElementById("backDraftModal");
    var additionalDraftModal = document.getElementById("additionalDraftModal");
    var BeneficiaryModal1 = document.getElementById("BeneficiaryModal1");
    var BeneficiaryModal2 = document.getElementById("BeneficiaryModal2");
    var BeneficiaryModal3 = document.getElementById("BeneficiaryModal3");
    var BeneficiaryModal4 = document.getElementById("BeneficiaryModal4");
    var BeneficiaryModal5 = document.getElementById("BeneficiaryModal5");
    var BeneficiaryModal6 = document.getElementById("BeneficiaryModal6");
    var BeneficiaryModal7 = document.getElementById("BeneficiaryModal7");
    var BeneficiaryModal8 = document.getElementById("BeneficiaryModal8");
    var BeneficiaryModal9 = document.getElementById("BeneficiaryModal9");
    var BeneficiaryModal10 = document.getElementById("BeneficiaryModal10");
    var CommercialInvoiceModal = document.getElementById(
      "CommercialInvoiceModal"
    );
    var packingListModal = document.getElementById("packingListModal");
    var CertificateOfOriginModal = document.getElementById(
      "CertificateOfOriginModal"
    );
    var AirwayBillModal = document.getElementById("AirwayBillModal");
    var BillOfLadingModal = document.getElementById("BillOfLadingModal");
    var ShippingAdviceApplicantModal = document.getElementById(
      "ShippingAdviceApplicantModal"
    );
    var ShippingAdviceInsuranceModal = document.getElementById(
      "ShippingAdviceInsuranceModal"
    );
    var ShippingAdviceIssuingBankModal = document.getElementById(
      "ShippingAdviceIssuingBankModal"
    );
    var ShippingAdviceOtherRecipientModal = document.getElementById(
      "ShippingAdviceOtherRecipientModal"
    );
    var WeightListModal = document.getElementById("WeightListModal");
    var AppendedDeclarationToAirWaybillOther1Modal = document.getElementById(
      "AppendedDeclarationToAirWaybillOther1Modal"
    );

    if (event.target == BeneficiaryModal1) {
      document.getElementById("BeneficiaryModal1").classList.remove("show");
      document.getElementById("BeneficiaryModal1").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal2) {
      document.getElementById("BeneficiaryModal2").classList.remove("show");
      document.getElementById("BeneficiaryModal2").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal3) {
      document.getElementById("BeneficiaryModal3").classList.remove("show");
      document.getElementById("BeneficiaryModal3").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal4) {
      document.getElementById("BeneficiaryModal4").classList.remove("show");
      document.getElementById("BeneficiaryModal4").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal5) {
      document.getElementById("BeneficiaryModal5").classList.remove("show");
      document.getElementById("BeneficiaryModal5").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal6) {
      document.getElementById("BeneficiaryModal6").classList.remove("show");
      document.getElementById("BeneficiaryModal6").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal7) {
      document.getElementById("BeneficiaryModal7").classList.remove("show");
      document.getElementById("BeneficiaryModal7").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal8) {
      document.getElementById("BeneficiaryModal8").classList.remove("show");
      document.getElementById("BeneficiaryModal8").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal9) {
      document.getElementById("BeneficiaryModal9").classList.remove("show");
      document.getElementById("BeneficiaryModal9").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BeneficiaryModal10) {
      document.getElementById("BeneficiaryModal10").classList.remove("show");
      document.getElementById("BeneficiaryModal10").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == DraftModal) {
      document.getElementById("DraftModal").classList.remove("show");
      document.getElementById("DraftModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == sightDraftModal) {
      document.getElementById("sightDraftModal").classList.remove("show");
      document.getElementById("sightDraftModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == backDraftModal) {
      document.getElementById("backDraftModal").classList.remove("show");
      document.getElementById("backDraftModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == additionalDraftModal) {
      document.getElementById("additionalDraftModal").classList.remove("show");
      document.getElementById("additionalDraftModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == CommercialInvoiceModal) {
      document
        .getElementById("CommercialInvoiceModal")
        .classList.remove("show");
      document.getElementById("CommercialInvoiceModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == packingListModal) {
      document.getElementById("packingListModal").classList.remove("show");
      document.getElementById("packingListModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == CertificateOfOriginModal) {
      document
        .getElementById("CertificateOfOriginModal")
        .classList.remove("show");
      document.getElementById("CertificateOfOriginModal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == AirwayBillModal) {
      document.getElementById("AirwayBillModal").classList.remove("show");
      document.getElementById("AirwayBillModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == BillOfLadingModal) {
      document.getElementById("BillOfLadingModal").classList.remove("show");
      document.getElementById("BillOfLadingModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == ShippingAdviceApplicantModal) {
      document
        .getElementById("ShippingAdviceApplicantModal")
        .classList.remove("show");
      document.getElementById("ShippingAdviceApplicantModal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == ShippingAdviceInsuranceModal) {
      document
        .getElementById("ShippingAdviceInsuranceModal")
        .classList.remove("show");
      document.getElementById("ShippingAdviceInsuranceModal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == ShippingAdviceIssuingBankModal) {
      document
        .getElementById("ShippingAdviceIssuingBankModal")
        .classList.remove("show");
      document.getElementById("ShippingAdviceIssuingBankModal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == ShippingAdviceOtherRecipientModal) {
      document
        .getElementById("ShippingAdviceOtherRecipientModal")
        .classList.remove("show");
      document.getElementById(
        "ShippingAdviceOtherRecipientModal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == WeightListModal) {
      document.getElementById("WeightListModal").classList.remove("show");
      document.getElementById("WeightListModal").style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }

    if (event.target == AppendedDeclarationToAirWaybillOther1Modal) {
      document
        .getElementById("AppendedDeclarationToAirWaybillOther1Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    }
  };

  //! Bene Modals
  // Loop through modals
  for (let i = 1; i <= 10; i++) {
    // Create a closure to capture the current modal ID
    (function (modalNumber) {
      // Select all elements with the "close" class within the current modal
      document
        .querySelectorAll(`#BeneficiaryModal${modalNumber} .close`)
        .forEach(function (closeButton) {
          // Attach event listener to each close button
          closeButton.addEventListener("click", function () {
            // Remove "show" class and hide modal
            document
              .getElementById(`BeneficiaryModal${modalNumber}`)
              .classList.remove("show");
            document.getElementById(
              `BeneficiaryModal${modalNumber}`
            ).style.display = "none";

            // Hide overlay and remove class from body
            document.getElementById("modalOverlay").style.display = "none";
            document.body.classList.remove("modal-open");
          });
        });
    })(i);
  }

  // Usage
  for (let i = 1; i <= 10; i++) {
    let homeTitleId = `SimpleBENEFICIARYCertificateHomeTitle${i}`;
    let modalId = `BeneficiaryModal${i}`;
    let certificateTitleId = `SimpleBENEFICIARYCertificateTitle${i}`;

    addModalListener(homeTitleId, modalId, certificateTitleId);
  }

  function addModalListener(homeTitleId, modalId, certificateTitleId) {
    document
      .getElementById(homeTitleId)
      .addEventListener("dblclick", function (event) {
        console.log("event", event);
        console.log(
          "Value: ",
          document.getElementById("printPage_Other1SelectField").value
        );

        let modal = document.getElementById(modalId);
        modal.classList.add("show");
        modal.style.display = "block";
        document.getElementById("modalOverlay").style.display = "block";

        document.body.classList.add("modal-open");

        let homeTitle = document.getElementById(homeTitleId);
        if (certificateTitleId) {
          let certificateTitle = document.getElementById(certificateTitleId);
          if (homeTitle !== null && certificateTitle !== null) {
            certificateTitle.value = homeTitle.value;
          }
        }
      });
  }

  //! Name Draft Modals
  let draftHomeTitleId = `DraftHomeTitle`;
  let draftModalId = `DraftModal`;
  let draftCertificateTitleId = `DraftModalLabel`;
  addModalListener(draftHomeTitleId, draftModalId, draftCertificateTitleId);

  // Select all elements with the "close" class within the DraftModal
  document
    .querySelectorAll("#DraftModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("DraftModal").classList.remove("show");
        document.getElementById("DraftModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  let referToTypeDraft = document.getElementById("referToTypeDraft");
  referToTypeDraft.addEventListener("change", function () {
    var selectElement = document.getElementById("referToTypeDraft");
    var contactInfoElement = document.getElementById(
      "containerReferToTypeDraft"
    );

    // Default
    if (selectElement.value === "1") {
      contactInfoElement.innerHTML = `<p><strong>Name:</strong> SAM SADAAT</p>
      <p><strong>Phone:</strong> (713) 863-8080</p>
      <p><strong>Fax:</strong> (713) 863-748</p>
      <p><strong>Email:</strong> <a href="mailto:Sam@rhdc.com" class="text-decoration-underline">Sam@rhdc.com</a></p>
      <div class="col-md-8 mt-2">
        <div class="input-group">
          <span class="input-group-text">Our ID No.:</span>
          <input type="text" class="form-control" id="simpleDraftModelIdNumber" disabled placeholder="ID Number">
        </div>
      </div>`;
    }

    // Forwarder
    else if (selectElement.value === "2") {
      contactInfoElement.innerHTML = `
      <p><strong>Name:</strong> Forwarder Name Here</p>
      <p><strong>Company Name:</strong> Company Name Here</p>
      <p><strong>Reference No:</strong> Reference Number Here</p>`;
    }

    // Shipper
    else if (selectElement.value === "3") {
      contactInfoElement.innerHTML = `
      <p><strong>Name:</strong> Shipper Name Here</p>
      <p><strong>Company Name:</strong> Company Name Here</p>
      <p><strong>Reference No:</strong> Reference Number Here</p>
      <p><strong>Email:</strong> <a href="mailto:EmailHere@rhdc.com" class="text-decoration-underline">Sam@rhdc.com</a></p>`;
    }
  });

  // ! Sight Draft
  let sightDraftHomeTitle = `sightDraftHomeTitle`;
  let sightDraftModal = `sightDraftModal`;
  let sightDraftModalLabel = `sightDraftModalLabel`;
  addModalListener(sightDraftHomeTitle, sightDraftModal, sightDraftModalLabel);

  document
    .querySelectorAll("#sightDraftModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("sightDraftModal").classList.remove("show");
        document.getElementById("sightDraftModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  let referToTypeSightDraft = document.getElementById("referToTypeSightDraft");
  referToTypeSightDraft.addEventListener("change", function () {
    var selectElement = document.getElementById("referToTypeSightDraft");
    var contactInfoElement = document.getElementById(
      "containerReferToTypeSightDraft"
    );

    // Default
    if (selectElement.value === "1") {
      contactInfoElement.innerHTML = `<p><strong>Name:</strong> SAM SADAAT</p>
      <p><strong>Phone:</strong> (713) 863-8080</p>
      <p><strong>Fax:</strong> (713) 863-748</p>
      <p><strong>Email:</strong> <a href="mailto:Sam@rhdc.com" class="text-decoration-underline">Sam@rhdc.com</a></p>`;
    }

    // Forwarder
    else if (selectElement.value === "2") {
      contactInfoElement.innerHTML = `
      <p><strong>Name:</strong> Forwarder Name Here</p>
      <p><strong>Company Name:</strong> Company Name Here</p>
      <p><strong>Reference No:</strong> Reference Number Here</p>`;
    }

    // Shipper
    else if (selectElement.value === "3") {
      contactInfoElement.innerHTML = `
      <p><strong>Name:</strong> Shipper Name Here</p>
      <p><strong>Company Name:</strong> Company Name Here</p>
      <p><strong>Reference No:</strong> Reference Number Here</p>
      <p><strong>Email:</strong> <a href="mailto:EmailHere@rhdc.com" class="text-decoration-underline">Sam@rhdc.com</a></p>`;
    }
  });

  // ! Back of Draft
  let backDraftHomeTitle = `backDraftHomeTitle`;
  let backDraftModal = `backDraftModal`;
  let backDraftModalLabel = `backDraftModalLabel`;
  addModalListener(backDraftHomeTitle, backDraftModal, backDraftModalLabel);

  document
    .querySelectorAll("#backDraftModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("backDraftModal").classList.remove("show");
        document.getElementById("backDraftModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Additional Draft
  let additionalDraftHomeTitle = `additionalDraftHomeTitle`;
  let additionalDraftModal = `additionalDraftModal`;
  let additionalDraftModalLabel = `additionalDraftModalLabel`;
  addModalListener(
    additionalDraftHomeTitle,
    additionalDraftModal,
    additionalDraftModalLabel
  );

  document
    .querySelectorAll("#additionalDraftModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document
          .getElementById("additionalDraftModal")
          .classList.remove("show");
        document.getElementById("additionalDraftModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  let referToTypeAdditionalDraft = document.getElementById(
    "referToTypeAdditionalDraft"
  );
  referToTypeAdditionalDraft.addEventListener("change", function () {
    var selectElement = document.getElementById("referToTypeAdditionalDraft");
    var contactInfoElement = document.getElementById(
      "containerReferToTypeAdditionalDraft"
    );

    // Default
    if (selectElement.value === "1") {
      contactInfoElement.innerHTML = `<p><strong>Name:</strong> SAM SADAAT</p>
          <p><strong>Phone:</strong> (713) 863-8080</p>
          <p><strong>Fax:</strong> (713) 863-748</p>
          <p><strong>Email:</strong> <a href="mailto:Sam@rhdc.com" class="text-decoration-underline">Sam@rhdc.com</a></p>
          <div class="col-md-8 mt-2">
            <div class="input-group">
              <span class="input-group-text">Our ID No.:</span>
              <input type="text" class="form-control" id="simpleDraftModelIdNumber" disabled placeholder="ID Number">
            </div>
          </div>`;
    }

    // Forwarder
    else if (selectElement.value === "2") {
      contactInfoElement.innerHTML = `
          <p><strong>Name:</strong> Forwarder Name Here</p>
          <p><strong>Company Name:</strong> Company Name Here</p>
          <p><strong>Reference No:</strong> Reference Number Here</p>`;
    }

    // Shipper
    else if (selectElement.value === "3") {
      contactInfoElement.innerHTML = `
          <p><strong>Name:</strong> Shipper Name Here</p>
          <p><strong>Company Name:</strong> Company Name Here</p>
          <p><strong>Reference No:</strong> Reference Number Here</p>
          <p><strong>Email:</strong> <a href="mailto:EmailHere@rhdc.com" class="text-decoration-underline">Sam@rhdc.com</a></p>`;
    }
  });

  //! Commercial Invoice
  let CommercialInvoiceHomeTitle = `CommercialInvoiceHomeTitle`;
  let CommercialInvoiceModal = `CommercialInvoiceModal`;
  let CommercialInvoiceModalTitle = `CommercialInvoiceModalTitle`;
  addModalListener(CommercialInvoiceHomeTitle, CommercialInvoiceModal);

  // Select all elements with the "close" class within the DraftModal
  document
    .querySelectorAll("#CommercialInvoiceModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document
          .getElementById("CommercialInvoiceModal")
          .classList.remove("show");
        document.getElementById("CommercialInvoiceModal").style.display =
          "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  //! Packing List
  let packingListHomeTitle = `packingListHomeTitle`;
  let packingListModal = `packingListModal`;
  let packingListModalTitle = `packingListModalTitle`;
  addModalListener(
    packingListHomeTitle,
    packingListModal,
    packingListModalTitle
  );

  // Select all elements with the "close" class within the DraftModal
  document
    .querySelectorAll("#packingListModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("packingListModal").classList.remove("show");
        document.getElementById("packingListModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Certificate Of Origin
  let CertificateOfOriginHomeTitle = `CertificateOfOriginHomeTitle`;
  let CertificateOfOriginModal = `CertificateOfOriginModal`;
  let CertificateOfOriginModalTitle = `CertificateOfOriginModalTitle`;
  addModalListener(
    CertificateOfOriginHomeTitle,
    CertificateOfOriginModal,
    CertificateOfOriginModalTitle
  );

  document
    .querySelectorAll("#CertificateOfOriginModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document
          .getElementById("CertificateOfOriginModal")
          .classList.remove("show");
        document.getElementById("CertificateOfOriginModal").style.display =
          "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! AirwayBill Modal
  let AWB_HomeTitle = `AWB_HomeTitle`;
  let AirwayBillModal = `AirwayBillModal`;
  addModalListener(AWB_HomeTitle, AirwayBillModal);

  document
    .querySelectorAll("#AirwayBillModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("AirwayBillModal").classList.remove("show");
        document.getElementById("AirwayBillModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Bill of Lading Modal
  let BL_HomeTitle = `BL_HomeTitle`;
  let BillOfLadingModal = `BillOfLadingModal`;
  let BL_ModalTitle = `BL_ModalTitle`;
  addModalListener(BL_HomeTitle, BillOfLadingModal, BL_ModalTitle);

  document
    .querySelectorAll("#BillOfLadingModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("BillOfLadingModal").classList.remove("show");
        document.getElementById("BillOfLadingModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Shipping Advice Applicant Modal
  let ShippingAdviceApplicant_HomeTitle = `ShippingAdviceApplicant_HomeTitle`;
  let ShippingAdviceApplicantModal = `ShippingAdviceApplicantModal`;
  let ShippingAdviceApplicant_ModalTitle = `ShippingAdviceApplicant_ModalTitle`;
  addModalListener(
    ShippingAdviceApplicant_HomeTitle,
    ShippingAdviceApplicantModal,
    ShippingAdviceApplicant_ModalTitle
  );

  document
    .querySelectorAll("#ShippingAdviceApplicantModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document
          .getElementById("ShippingAdviceApplicantModal")
          .classList.remove("show");
        document.getElementById("ShippingAdviceApplicantModal").style.display =
          "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Shipping Advice Insurance Modal
  let ShippingAdviceInsurance_HomeTitle = `ShippingAdviceInsurance_HomeTitle`;
  let ShippingAdviceInsuranceModal = `ShippingAdviceInsuranceModal`;
  let ShippingAdviceInsurance_ModalTitle = `ShippingAdviceInsurance_ModalTitle`;
  addModalListener(
    ShippingAdviceInsurance_HomeTitle,
    ShippingAdviceInsuranceModal,
    ShippingAdviceInsurance_ModalTitle
  );

  document
    .querySelectorAll("#ShippingAdviceInsuranceModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document
          .getElementById("ShippingAdviceInsuranceModal")
          .classList.remove("show");
        document.getElementById("ShippingAdviceInsuranceModal").style.display =
          "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Shipping Advice Issuing Bank Modal
  let ShippingAdviceIssuingBank_HomeTitle = `ShippingAdviceIssuingBank_HomeTitle`;
  let ShippingAdviceIssuingBankModal = `ShippingAdviceIssuingBankModal`;
  let ShippingAdviceIssuingBank_ModalTitle = `ShippingAdviceIssuingBank_ModalTitle`;
  addModalListener(
    ShippingAdviceIssuingBank_HomeTitle,
    ShippingAdviceIssuingBankModal,
    ShippingAdviceIssuingBank_ModalTitle
  );

  const selectButtons = document.querySelectorAll(
    ".shipment-advice-select-button"
  );

  // Add event listener to each button with the class
  selectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("sherry");
    });
  });

  document
    .querySelectorAll("#ShippingAdviceIssuingBankModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document
          .getElementById("ShippingAdviceIssuingBankModal")
          .classList.remove("show");
        document.getElementById(
          "ShippingAdviceIssuingBankModal"
        ).style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Shipping Advice Other Recipient Modal
  let ShippingAdviceOtherRecipient_HomeTitle = `ShippingAdviceOtherRecipient_HomeTitle`;
  let ShippingAdviceOtherRecipientModal = `ShippingAdviceOtherRecipientModal`;
  let ShippingAdviceOtherRecipient_ModalTitle = `ShippingAdviceOtherRecipient_ModalTitle`;
  addModalListener(
    ShippingAdviceOtherRecipient_HomeTitle,
    ShippingAdviceOtherRecipientModal,
    ShippingAdviceOtherRecipient_ModalTitle
  );

  document
    .querySelectorAll("#ShippingAdviceOtherRecipientModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document
          .getElementById("ShippingAdviceOtherRecipientModal")
          .classList.remove("show");
        document.getElementById(
          "ShippingAdviceOtherRecipientModal"
        ).style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! WeightList Modal
  let WeightList_HomeTitle = `WeightList_HomeTitle`;
  let WeightListModal = `WeightListModal`;
  let WeightList_ModalTitle = `WeightList_ModalTitle`;
  addModalListener(
    WeightList_HomeTitle,
    WeightListModal,
    WeightList_ModalTitle
  );

  document
    .querySelectorAll("#WeightListModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("WeightListModal").classList.remove("show");
        document.getElementById("WeightListModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Insurance Form Modal
  let InsuranceForm_HomeTitle = `InsuranceForm_HomeTitle`;
  let InsuranceFormModal = `InsuranceFormModal`;
  let InsuranceForm_ModalTitle = `InsuranceForm_ModalTitle`;
  addModalListener(
    InsuranceForm_HomeTitle,
    InsuranceFormModal,
    InsuranceForm_ModalTitle
  );

  document
    .querySelectorAll("#InsuranceFormModal .close")
    .forEach(function (closeButton) {
      // Attach event listener to each close button
      closeButton.addEventListener("click", function () {
        // Remove "show" class and hide modal
        document.getElementById("InsuranceFormModal").classList.remove("show");
        document.getElementById("InsuranceFormModal").style.display = "none";

        // Hide overlay and remove class from body
        document.getElementById("modalOverlay").style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });

  // ! Other 1 - 1
  let printPage_Other1SelectField = document.getElementById(
    "printPage_Other1SelectField"
  );
  let AppendedDeclarationToAirWaybillOther1Modal = document.getElementById(
    "AppendedDeclarationToAirWaybillOther1Modal"
  );
  let AppendedDeclarationToAirWaybillOther1ModalTitle = document.getElementById(
    "AppendedDeclarationToAirWaybillOther1ModalTitle"
  );

  printPage_Other1SelectField.addEventListener("dblclick", function () {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;

    let DHL_Open = false;

    if (inputValue === "Appended Declaration To Air Waybill") {
      console.log("yes");
      AppendedDeclarationToAirWaybillOther1Modal.classList.add("show");
      AppendedDeclarationToAirWaybillOther1Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      AppendedDeclarationToAirWaybillOther1ModalTitle.innerText =
        printPage_Other1SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_CarrierName"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal_FlightNumber"
      ).value = document.getElementById(
        "TransportInformation_1stFlightNumber"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal_AirportsEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther1Modal_Description"
      ).value =
        "THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var Other1_LCNumberCheck = document.getElementById(
        "Other1_LCNumberCheck"
      );
      var AppendedDeclarationToAirWaybillOther1Modal_LCNumberContainer =
        document.getElementById(
          "AppendedDeclarationToAirWaybillOther1Modal_LCNumberContainer"
        );
      if (Other1_LCNumberCheck.checked) {
        AppendedDeclarationToAirWaybillOther1Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "AppendedDeclarationToAirWaybillOther1Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        AppendedDeclarationToAirWaybillOther1Modal_LCNumberContainer.style.display =
          "none";
      }


      // GLobal check
      var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
      var AppendedDeclarationToAirWaybillOther1Modal_GlobalContainer = document.getElementById("AppendedDeclarationToAirWaybillOther1Modal_GlobalContainer");
      if (Other1_GlobalCheck.checked) {
        AppendedDeclarationToAirWaybillOther1Modal_GlobalContainer.style.display = "flex";
        document.getElementById("AppendedDeclarationToAirWaybillOther1Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("AppendedDeclarationToAirWaybillOther1Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
        AppendedDeclarationToAirWaybillOther1Modal_GlobalContainer.style.display = "none";
      }


    }

    document
      .querySelectorAll("#AppendedDeclarationToAirWaybillOther1Modal .close")
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById("AppendedDeclarationToAirWaybillOther1Modal")
            .classList.remove("show");
          document.getElementById(
            "AppendedDeclarationToAirWaybillOther1Modal"
          ).style.display = "none";

          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 1 - 2
  let CertificateAppendedToBLOther1Modal = document.getElementById(
    "CertificateAppendedToBLOther1Modal"
  );
  let CertificateAppendedToBLOther1ModalTitle = document.getElementById(
    "CertificateAppendedToBLOther1ModalTitle"
  );

  printPage_Other1SelectField.addEventListener("dblclick", function () {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;

    if (inputValue === "Certificate Appended To B/L") {
      console.log("yes");
      CertificateAppendedToBLOther1Modal.classList.add("show");
      CertificateAppendedToBLOther1Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToBLOther1ModalTitle.innerText =
        printPage_Other1SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToBLOther1Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "CertificateAppendedToBLOther1Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_VesselName"
      ).value;
      document.getElementById(
        "CertificateAppendedToBLOther1Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "CertificateAppendedToBLOther1Modal_VesselEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToBLOther1Modal_Description"
      ).value =
        "THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var Other1_LCNumberCheck = document.getElementById(
        "Other1_LCNumberCheck"
      );
      var CertificateAppendedToBLOther1Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToBLOther1Modal_LCNumberContainer"
        );
      if (Other1_LCNumberCheck.checked) {
        CertificateAppendedToBLOther1Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToBLOther1Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToBLOther1Modal_LCNumberContainer.style.display =
          "none";
      }

       // GLobal check
       var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
       var CertificateAppendedToBLOther1Modal_GlobalContainer = document.getElementById("CertificateAppendedToBLOther1Modal_GlobalContainer");
       if (Other1_GlobalCheck.checked) {
        CertificateAppendedToBLOther1Modal_GlobalContainer.style.display = "flex";
         document.getElementById("CertificateAppendedToBLOther1Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
         document.getElementById("CertificateAppendedToBLOther1Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
       } else {
        CertificateAppendedToBLOther1Modal_GlobalContainer.style.display = "none";
       }




    }

    document
      .querySelectorAll("#CertificateAppendedToBLOther1Modal .close")
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById("CertificateAppendedToBLOther1Modal")
            .classList.remove("show");
          document.getElementById(
            "CertificateAppendedToBLOther1Modal"
          ).style.display = "none";

          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 1 - 3
  let CertificateAppendedToInsuranceCertificateOther1Modal =
    document.getElementById(
      "CertificateAppendedToInsuranceCertificateOther1Modal"
    );
  let CertificateAppendedToInsuranceCertificateOther1ModalTitle =
    document.getElementById(
      "CertificateAppendedToInsuranceCertificateOther1ModalTitle"
    );

  printPage_Other1SelectField.addEventListener("dblclick", function (event) {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;
    if (inputValue === "Certificate Appended To Insurance Certificate") {
      CertificateAppendedToInsuranceCertificateOther1Modal.classList.add(
        "show"
      );
      CertificateAppendedToInsuranceCertificateOther1Modal.style.display =
        "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToInsuranceCertificateOther1ModalTitle.innerText =
        printPage_Other1SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToInsuranceOther1Modal_LCNumber"
      );
      console.log("Sherry ka focus", textarea);
      textarea.focus();
      textarea.scrollIntoView();
      console.log("yes");

      document.getElementById(
        "CertificateAppendedToInsuranceOther1Modal_NameOfInsuranceCompany"
      ).value = document.getElementById(
        "TransportInformation_InsuranceCompanyName"
      ).value;
      document.getElementById(
        "CertificateAppendedToInsuranceOther1Modal_Description"
      ).value =
        "THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToInsuranceOther1Modal_DateAt"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;

      // LC check
      var Other1_LCNumberCheck = document.getElementById(
        "Other1_LCNumberCheck"
      );
      var CertificateAppendedToInsuranceOther1Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceOther1Modal_LCNumberContainer"
        );
      if (Other1_LCNumberCheck.checked) {
        CertificateAppendedToInsuranceOther1Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceOther1Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToInsuranceOther1Modal_LCNumberContainer.style.display =
          "none";
      }

      // GLobal check
      var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
      var CertificateAppendedToInsuranceOther1Modal_GlobalContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceOther1Modal_GlobalContainer"
        );
      if (Other1_GlobalCheck.checked) {
        CertificateAppendedToInsuranceOther1Modal_GlobalContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceOther1Modal_GlobalLabel"
        ).innerText = "GLOBAL CERTIFICATION";
        document.getElementById(
          "CertificateAppendedToInsuranceOther1Modal_Global"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
      } else {
        CertificateAppendedToInsuranceOther1Modal_GlobalContainer.style.display =
          "none";
      }
    }

    document
      .querySelectorAll(
        "#CertificateAppendedToInsuranceCertificateOther1Modal .close"
      )
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById(
              "CertificateAppendedToInsuranceCertificateOther1Modal"
            )
            .classList.remove("show");
          document.getElementById(
            "CertificateAppendedToInsuranceCertificateOther1Modal"
          ).style.display = "none";
          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 1 - 4
  let EmailFormCertificateOther1Modal = document.getElementById(
    "EmailFormCertificateOther1Modal"
  );
  let EmailFormCertificateOther1ModalTitle = document.getElementById(
    "EmailFormCertificateOther1ModalTitle"
  );

  printPage_Other1SelectField.addEventListener("dblclick", function (event) {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;
    if (inputValue === "Email Form") {
      console.log("Welcome to Email Form");

      EmailFormCertificateOther1Modal.classList.add("show");
      EmailFormCertificateOther1Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // EmailFormCertificateOther1ModalTitle.innerText = printPage_Other1SelectField.value;





       // LC check
       var Other1_LCNumberCheck = document.getElementById(
        "Other1_LCNumberCheck"
      );
      var EmailForm1_LCNumberContainer =
        document.getElementById(
          "EmailForm1_LCNumberContainer"
        );
      if (Other1_LCNumberCheck.checked) {
        EmailForm1_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "EmailForm1_LcNumber"
        ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        EmailForm1_LCNumberContainer.style.display =
          "none";
      }


      document.getElementById("EmailForm1_BeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

       // GLobal check
       var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
       var EmailForm1_GlobalCertificationContainer =
         document.getElementById(
           "EmailForm1_GlobalCertificationContainer"
         );
       if (Other1_GlobalCheck.checked) {
        EmailForm1_GlobalCertificationContainer.style.display =
           "flex";
         document.getElementById(
           "EmailForm1_GlobalCertification"
         ).value = document.getElementById(
           "LC_Information_Global_Certification"
         ).value;
       } else {
        EmailForm1_GlobalCertificationContainer.style.display =
           "none";
       }
       


      document.getElementById("EmailForm1_Sent").value = formatDate(currentDate);



    // New
    
    // 2nd Applicant
    var Other1_SecondApplicantCheck = document.getElementById("Other1_SecondApplicantCheck");
    var EmailForm1_SecondApplicantContainer = document.getElementById("EmailForm1_SecondApplicantContainer");

    if (Other1_SecondApplicantCheck.checked) {
      EmailForm1_SecondApplicantContainer.style.display = "flex";
      document.getElementById("EmailForm1_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      EmailForm1_SecondApplicantContainer.style.display = "none";
    }

    document.getElementById("EmailForm1_BeneName1").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("EmailForm1_BeneAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;

    







      document.body.classList.add("modal-open");
    }

    document
      .querySelectorAll("#EmailFormCertificateOther1Modal .close")
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById("EmailFormCertificateOther1Modal")
            .classList.remove("show");
          document.getElementById(
            "EmailFormCertificateOther1Modal"
          ).style.display = "none";
          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 1 - 5
  let FaxActivityCertificateOther1Modal = document.getElementById(
    "FaxActivityCertificateOther1Modal"
  );

  let isDialogPopulated_Fax1 = false;

  let FaxActivityCertificateOther1ModalTitle = document.getElementById(
    "FaxActivityCertificateOther1ModalTitle"
  );

  printPage_Other1SelectField.addEventListener("dblclick", function (event) {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;
    if (inputValue === "Fax Activity") {
      console.log("Welcome to Fax Activity");

      FaxActivityCertificateOther1Modal.classList.add("show");
      FaxActivityCertificateOther1Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // FaxActivityCertificateOther1ModalTitle.innerText = printPage_Other1SelectField.value;


    // LC check
    var Other1_LCNumberCheck = document.getElementById(
      "Other1_LCNumberCheck"
    );
    var FaxActivity1_LCNumberContainer =
      document.getElementById(
        "FaxActivity1_LCNumberContainer"
      );
    if (Other1_LCNumberCheck.checked) {
      FaxActivity1_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "FaxActivity1_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      FaxActivity1_LCNumberContainer.style.display =
        "none";
    }


    // GLobal check
    var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
    var FaxActivity1_GlobalCertificationContainer = document.getElementById("FaxActivity1_GlobalCertificationContainer");
    if (Other1_GlobalCheck.checked) {
      FaxActivity1_GlobalCertificationContainer.style.display = "flex";
      document.getElementById("FaxActivity1_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      FaxActivity1_GlobalCertificationContainer.style.display ="none";
    }



    //  SteamShip Propogation
    if(!isDialogPopulated_Fax1){        
      document.getElementById("FaxActivity1_FaxDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_Fax1 = true;
    }

    document.getElementById("FaxActivity1_PrintTime").value =  document.getElementById("Homepage_ShipDate").value;    
    
    
    // 2nd Applicant
    var Other1_SecondApplicantCheck = document.getElementById("Other1_SecondApplicantCheck");
    var FaxActivity1_SecondApplicantContainer = document.getElementById("FaxActivity1_SecondApplicantContainer");

    if (Other1_SecondApplicantCheck.checked) {
      FaxActivity1_SecondApplicantContainer.style.display = "flex";
      document.getElementById("FaxActivity1_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      FaxActivity1_SecondApplicantContainer.style.display = "none";
    }

    function setTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('FaxActivity1_PrintTime2').value = `${hours}:${minutes}`;
  }
  
    setTime();



      document.body.classList.add("modal-open");
    }

    document
      .querySelectorAll("#FaxActivityCertificateOther1Modal .close")
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById("FaxActivityCertificateOther1Modal")
            .classList.remove("show");
          document.getElementById(
            "FaxActivityCertificateOther1Modal"
          ).style.display = "none";
          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 1 - 6
  let DhlFormCertificateOther1Modal = document.getElementById(
    "DhlFormCertificateOther1Modal"
  );
  let DhlFormCertificateOther1ModalTitle = document.getElementById(
    "DhlFormCertificateOther1ModalTitle"
  );

  printPage_Other1SelectField.addEventListener("dblclick", function (event) {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;
    if (inputValue === "DHL Form") {
      console.log("Welcome to DHL Form");

      

      DhlFormCertificateOther1Modal.classList.add("show");
      DhlFormCertificateOther1Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");

    // ! Check Box Check
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("DhlFormOther1_DCS").value = DCSText;
    } else {
    document.getElementById("DhlFormOther1_DCS").value = "";
    }


    // LC check
    if (document.getElementById("Other1_LCNumberCheck").checked) {
      document.getElementById("DhlFormOther1_LcNumberContainer1").style.display = "inline-block";
      document.getElementById("DhlFormOther1_LcNumberContainer2").style.display = "inline-block";
      document.getElementById("DhlFormOther1_LcNumber").value = document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      document.getElementById("DhlFormOther1_LcNumberContainer1").style.display = "none";
      document.getElementById("DhlFormOther1_LcNumberContainer2").style.display = "none";
    }


     // GLobal check
     var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
     var DhlFormOther1_GlobalCertificationContainer = document.getElementById("DhlFormOther1_GlobalCertificationContainer");
     if (Other1_GlobalCheck.checked) {
      DhlFormOther1_GlobalCertificationContainer.style.display = "flex";
       document.getElementById("DhlFormOther1_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
     } else {
      DhlFormOther1_GlobalCertificationContainer.style.display ="none";
     }


     
     document.getElementById("DhlFormOther1_From").value = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
     document.getElementById("DhlFormOther1_To").value = document.getElementById("LCInformation_BENEFICIARYName").value;
     document.getElementById("DhlFormOther1_ToAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;
     document.getElementById("DhlFormOther1_Date").value = document.getElementById("Homepage_ShipDate").value;
     document.getElementById("DhlFormOther1_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
     document.getElementById("DhlFormOther1_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
     document.getElementById("DhlFormOther1_Piece").textContent = document.getElementById("TransportInformation_NumberOfPieces").value;
     document.getElementById("DhlFormOther1_ShptWeight").textContent = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;

     



     
  


    // ! End Check Boxes







    }

    document
      .querySelectorAll("#DhlFormCertificateOther1Modal .close")
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById("DhlFormCertificateOther1Modal")
            .classList.remove("show");
          document.getElementById(
            "DhlFormCertificateOther1Modal"
          ).style.display = "none";
          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 1 - 7
  let TruckBillOfLadingCertificateOther1Modal = document.getElementById(
    "TruckBillOfLadingCertificateOther1Modal"
  );
  let TruckBillOfLadingCertificateOther1ModalTitle = document.getElementById(
    "TruckBillOfLadingCertificateOther1ModalTitle"
  );

  printPage_Other1SelectField.addEventListener("dblclick", function (event) {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;
    if (inputValue === "Truck Bill of lading") {
      console.log("Welcome to Truck Bill of lading");

      TruckBillOfLadingCertificateOther1Modal.classList.add("show");
      TruckBillOfLadingCertificateOther1Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      TruckBillOfLadingCertificateOther1ModalTitle.innerText =
        printPage_Other1SelectField.value;
      document.body.classList.add("modal-open");

      //  Truck Bill of lading

      document.getElementById("TruckBillOfLading1_AsAgents").value =
        document.getElementById("TransportInformation_TlForwarderName").value;
      document.getElementById("TruckBillOfLading1_AsAgentsAddress").value =
        document.getElementById("TransportInformation_ForwarderAddress").value;
      document.getElementById("TruckBillOfLading1_CarrierName").value =
        document.getElementById("TransportInformation_CarrierName").value;
      document.getElementById("TruckBillOfLading1_Notify").value =
        document.getElementById("lcInformationPageNotifyParty").value;
      document.getElementById("TruckBillOfLading1_ConsignedTo").value =
        document.getElementById("lcInformationPageConsignToParty").value;
      document.getElementById("TruckBillOfLading1_ShipDate").value =
        document.getElementById("Homepage_ShipDate").value;
      document.getElementById("TruckBillOfLading1_Freight").value =
        document.getElementById("lcInformationPageFreight").value;
   
      document.getElementById("TruckBillOfLading1_NoOfPieces").value =
        document.getElementById("TransportInformation_NumberOfPieces").value;


      
      // LC check
      var Other1_LCNumberCheck = document.getElementById("Other1_LCNumberCheck");
      var TruckBillOfLading1_LcNumberContainer = document.getElementById("TruckBillOfLading1_LcNumberContainer");
      if (Other1_LCNumberCheck.checked) {
        TruckBillOfLading1_LcNumberContainer.style.display = "flex";
        document.getElementById("TruckBillOfLading1_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
      } else {
        TruckBillOfLading1_LcNumberContainer.style.display = "none";
      }



    // New
    document.getElementById("TruckBillOfLading1_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading1_ShipmentFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("TruckBillOfLading1_To").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("TruckBillOfLading1_GrossWeight").value =  document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;
    document.getElementById("TruckBillOfLading1_ShipperOrExporter").value =  document.getElementById("LCInformation_BENEFICIARYName").value;
    
    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("TruckBillOfLading1_FreeText1").value =  document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;
    document.getElementById("TruckBillOfLading1_FreeText2").value =  "ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON " + formattedDate ;
    document.getElementById("TruckBillOfLading1_FreeText3").value =  "ISSUED IN ONE (1) ORIGINAL.";
    

    var Other1_SecondApplicantCheck = document.getElementById("Other1_SecondApplicantCheck");
    if (Other1_SecondApplicantCheck.checked) {
      document.getElementById("TruckBillOfLading1_SecondApplicant").style.display = "flex";
      document.getElementById("TruckBillOfLading1_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      document.getElementById("TruckBillOfLading1_SecondApplicant").style.display = "none";
    }



    // New End





      
      document.getElementById("TruckBillOfLading1_BlNumber").value =
      document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

      var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
      if (Other1_GlobalCheck.checked) {
        document.getElementById(
          "TruckBillOfLading1_LcGlobalCertifications"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
        document.getElementById(
          "TruckBillOfLading1_LcGlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "TruckBillOfLading1_LcGlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById(
          "TruckBillOfLading1_LcGlobalCertifications"
        ).value = "";
      }

      // Limited Certifications
      function updateLimitedCertificationsAWB() {
        var checkbox = document.getElementById(
          "lcInformationPageLimitedCertifications_BLcheckbox"
        );
        var textArea = document.getElementById(
          "TruckBillOfLading1_LcLimitedCertifications"
        );

        if (checkbox.checked) {
          textArea.value = document.getElementById(
            "lcInformationPageLimitedCertifications"
          ).value;
          textArea.style.display = "block";
        } else {
          textArea.value = "";
        }
      }

      document
        .getElementById("lcInformationPageLimitedCertifications_BLcheckbox")
        .addEventListener("change", updateLimitedCertificationsAWB);
      updateLimitedCertificationsAWB();
    }

    document
      .querySelectorAll("#TruckBillOfLadingCertificateOther1Modal .close")
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById("TruckBillOfLadingCertificateOther1Modal")
            .classList.remove("show");
          document.getElementById(
            "TruckBillOfLadingCertificateOther1Modal"
          ).style.display = "none";
          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 1 - 8
  let SteamshipCertificateOther1Modal = document.getElementById(
    "SteamshipCertificateOther1Modal"
  );

  let isDialogPopulated_SteamShip1 = false;

  let SteamshipCertificateOther1ModalTitle = document.getElementById(
    "SteamshipCertificateOther1ModalTitle"
  );

  printPage_Other1SelectField.addEventListener("dblclick", function (event) {
    console.log("Value: ", printPage_Other1SelectField.value);
    var inputValue = printPage_Other1SelectField.value;

    if (inputValue === "Steamship") {
      
      console.log("Welcome to Steamship");


      SteamshipCertificateOther1Modal.classList.add("show");
      SteamshipCertificateOther1Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");

      //  SteamShip Propogation
      if(!isDialogPopulated_SteamShip1){        
        document.getElementById("Steamship1_ShipDate").value =  document.getElementById("Homepage_ShipDate").value;        
        isDialogPopulated_SteamShip1 = true;
      }


    // 2nd Applicant
    var Other1_SecondApplicantCheck = document.getElementById("Other1_SecondApplicantCheck");
    var Steamship1_SecondApplicantContainer = document.getElementById("Steamship1_SecondApplicantContainer");

    if (Other1_SecondApplicantCheck.checked) {
      Steamship1_SecondApplicantContainer.style.display = "flex";
      document.getElementById("Steamship1_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Steamship1_SecondApplicantContainer.style.display = "none";
    }


    
  
        
      // LC check
      var Other1_LCNumberCheck = document.getElementById("Other1_LCNumberCheck");
      var Steamship1_LcNumberContainer = document.getElementById("Steamship1_LcNumberContainer");
      if (Other1_LCNumberCheck.checked) {
        Steamship1_LcNumberContainer.style.display = "flex";
        document.getElementById("Steamship1_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      } else {
        Steamship1_LcNumberContainer.style.display = "none";
      }

      document.getElementById("Steamship1_VesselName").value = document.getElementById("TransportInformation_VesselName").value


      var Other1_GlobalCheck = document.getElementById("Other1_GlobalCheck");
      if (Other1_GlobalCheck.checked) {
        document.getElementById("Steamship1_GlobalCertifications").value =
          document.getElementById("LC_Information_Global_Certification").value;
        document.getElementById(
          "Steamship1_GlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "Steamship1_GlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById("Steamship1_GlobalCertifications").value = "";
      }
    }

    document
      .querySelectorAll("#SteamshipCertificateOther1Modal .close")
      .forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
          document
            .getElementById("SteamshipCertificateOther1Modal")
            .classList.remove("show");
          document.getElementById(
            "SteamshipCertificateOther1Modal"
          ).style.display = "none";
          document.getElementById("modalOverlay").style.display = "none";
          document.body.classList.remove("modal-open");
        });
      });
  });

  // ! Other 2
  let printPage_Other2SelectField = document.getElementById(
    "printPage_Other2SelectField"
  );
  let isDialogPopulated_SteamShip2 = false;
  
  printPage_Other2SelectField.addEventListener("dblclick", function () {
    console.log("Value: ", printPage_Other2SelectField.value);
    var inputValue = printPage_Other2SelectField.value;

    if (inputValue === "Appended Declaration To Air Waybill") {
      let AppendedDeclarationToAirWaybillother2Modal = document.getElementById(
        "AppendedDeclarationToAirWaybillOther2Modal"
      );
      let AppendedDeclarationToAirWaybillother2ModalTitle =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother2ModalTitle"
        );
      console.log("yes");
      AppendedDeclarationToAirWaybillother2Modal.classList.add("show");
      AppendedDeclarationToAirWaybillother2Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      AppendedDeclarationToAirWaybillother2ModalTitle.innerText =
        printPage_Other2SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "AppendedDeclarationToAirWaybillother2Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "AppendedDeclarationToAirWaybillother2Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_CarrierName"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother2Modal_FlightNumber"
      ).value = document.getElementById(
        "TransportInformation_1stFlightNumber"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother2Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother2Modal_AirportsEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother2Modal_Description"
      ).value =
        "THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other2_LCNumberCheck = document.getElementById(
        "other2_LCNumberCheck"
      );
      var AppendedDeclarationToAirWaybillother2Modal_LCNumberContainer =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother2Modal_LCNumberContainer"
        );
      if (other2_LCNumberCheck.checked) {
        AppendedDeclarationToAirWaybillother2Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "AppendedDeclarationToAirWaybillother2Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        AppendedDeclarationToAirWaybillother2Modal_LCNumberContainer.style.display =
          "none";
      }

      // GLobal check
      var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
      var AppendedDeclarationToAirWaybillOther2Modal_GlobalContainer = document.getElementById("AppendedDeclarationToAirWaybillOther2Modal_GlobalContainer");
      if (other2_GlobalCheck.checked) {
        AppendedDeclarationToAirWaybillOther2Modal_GlobalContainer.style.display = "flex";
        document.getElementById("AppendedDeclarationToAirWaybillOther2Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("AppendedDeclarationToAirWaybillOther2Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
        AppendedDeclarationToAirWaybillOther2Modal_GlobalContainer.style.display = "none";
      }

    }

    // ! Other 2 - 2
    else if (inputValue === "Certificate Appended To B/L") {
      let CertificateAppendedToBLother2Modal = document.getElementById(
        "CertificateAppendedToBLother2Modal"
      );
      let CertificateAppendedToBLother2ModalTitle = document.getElementById(
        "CertificateAppendedToBLother2ModalTitle"
      );
      console.log("yes");
      CertificateAppendedToBLother2Modal.classList.add("show");
      CertificateAppendedToBLother2Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToBLother2ModalTitle.innerText =
        printPage_Other2SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToBLother2Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "CertificateAppendedToBLother2Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_VesselName"
      ).value;
      document.getElementById(
        "CertificateAppendedToBLother2Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "CertificateAppendedToBLother2Modal_VesselEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToBLother2Modal_Description"
      ).value =
        "THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other2_LCNumberCheck = document.getElementById(
        "other2_LCNumberCheck"
      );
      var CertificateAppendedToBLother2Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToBLother2Modal_LCNumberContainer"
        );
      if (other2_LCNumberCheck.checked) {
        CertificateAppendedToBLother2Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToBLother2Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToBLother2Modal_LCNumberContainer.style.display =
          "none";
      }

      // GLobal check
      var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
      var CertificateAppendedToBLOther2Modal_GlobalContainer = document.getElementById("CertificateAppendedToBLOther2Modal_GlobalContainer");
      if (other2_GlobalCheck.checked) {
      CertificateAppendedToBLOther2Modal_GlobalContainer.style.display = "flex";
        document.getElementById("CertificateAppendedToBLOther2Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("CertificateAppendedToBLOther2Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
      CertificateAppendedToBLOther2Modal_GlobalContainer.style.display = "none";
      }
    }

    // ! Other 2 - 3
    else if (inputValue === "Certificate Appended To Insurance Certificate") {
      let CertificateAppendedToInsuranceCertificateother2Modal =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother2Modal"
        );
      let CertificateAppendedToInsuranceCertificateother2ModalTitle =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother2ModalTitle"
        );

      CertificateAppendedToInsuranceCertificateother2Modal.classList.add(
        "show"
      );
      CertificateAppendedToInsuranceCertificateother2Modal.style.display =
        "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToInsuranceCertificateother2ModalTitle.innerText =
        document.getElementById("printPage_Other2SelectField").value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToInsuranceother2Modal_LCNumber"
      );
      console.log("Sherry ka focus", textarea);
      textarea.focus();
      textarea.scrollIntoView();
      console.log("yes");

      document.getElementById(
        "CertificateAppendedToInsuranceother2Modal_NameOfInsuranceCompany"
      ).value = document.getElementById(
        "TransportInformation_InsuranceCompanyName"
      ).value;
      document.getElementById(
        "CertificateAppendedToInsuranceother2Modal_Description"
      ).value =
        "THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToInsuranceother2Modal_DateAt"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;

      // LC check
      var other2_LCNumberCheck = document.getElementById(
        "other2_LCNumberCheck"
      );
      var CertificateAppendedToInsuranceother2Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother2Modal_LCNumberContainer"
        );
      if (other2_LCNumberCheck.checked) {
        CertificateAppendedToInsuranceother2Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother2Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToInsuranceother2Modal_LCNumberContainer.style.display =
          "none";
      }

      // GLobal check
      var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
      var CertificateAppendedToInsuranceother2Modal_GlobalContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother2Modal_GlobalContainer"
        );
      if (other2_GlobalCheck.checked) {
        CertificateAppendedToInsuranceother2Modal_GlobalContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother2Modal_GlobalLabel"
        ).innerText = "GLOBAL CERTIFICATION";
        document.getElementById(
          "CertificateAppendedToInsuranceother2Modal_Global"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
      } else {
        CertificateAppendedToInsuranceother2Modal_GlobalContainer.style.display =
          "none";
      }
    }

    // ! Other 2 - 4
    else if (inputValue === "Email Form") {
      console.log("Welcome to Email Form");
      let EmailFormCertificateother2Modal = document.getElementById(
        "EmailFormCertificateother2Modal"
      );
      let EmailFormCertificateother2ModalTitle = document.getElementById(
        "EmailFormCertificateother2ModalTitle"
      );

      EmailFormCertificateother2Modal.classList.add("show");
      EmailFormCertificateother2Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // EmailFormCertificateother2ModalTitle.innerText = printPage_other2SelectField.value;



       // LC check
       var Other2_LCNumberCheck = document.getElementById(
        "other2_LCNumberCheck"
      );
      var EmailForm2_LCNumberContainer =
        document.getElementById(
          "EmailForm2_LCNumberContainer"
        );
      if (Other2_LCNumberCheck.checked) {
        EmailForm2_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "EmailForm2_LCNumber"
        ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        EmailForm2_LCNumberContainer.style.display =
          "none";
      }



      document.getElementById("EmailFormOther2_BeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

      // GLobal check
      var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
      var EmailForm2_GlobalCertificationContainer = document.getElementById("EmailForm2_GlobalCertificationContainer");
      if (other2_GlobalCheck.checked) {
        EmailForm2_GlobalCertificationContainer.style.display = "flex";
        document.getElementById("EmailForm2_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
        EmailForm2_GlobalCertificationContainer.style.display = "none";
      }

      document.getElementById("EmailForm2_Sent").value = formatDate(currentDate);


          // New
    
    // 2nd Applicant
    var Other2_SecondApplicantCheck = document.getElementById("Other2_SecondApplicantCheck");
    var EmailForm2_SecondApplicantContainer = document.getElementById("EmailForm2_SecondApplicantContainer");

    if (Other2_SecondApplicantCheck.checked) {
      EmailForm2_SecondApplicantContainer.style.display = "flex";
      document.getElementById("EmailForm2_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      EmailForm2_SecondApplicantContainer.style.display = "none";
    }

    document.getElementById("EmailForm2_BeneName1").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("EmailForm2_BeneAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;





      document.body.classList.add("modal-open");
    }

    // ! Other 2 - 5
    else if (inputValue === "Fax Activity") {
      let FaxActivityCertificateother2Modal = document.getElementById(
        "FaxActivityCertificateother2Modal"
      );


     let isDialogPopulated_Fax2 = false;

      let FaxActivityCertificateother2ModalTitle = document.getElementById(
        "FaxActivityCertificateother2ModalTitle"
      );
      console.log("Welcome to Fax Activity");

      FaxActivityCertificateother2Modal.classList.add("show");
      FaxActivityCertificateother2Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


    // LC check
    var Other2_LCNumberCheck = document.getElementById(
      "other2_LCNumberCheck"
    );
    var FaxActivity2_LCNumberContainer =
      document.getElementById(
        "FaxActivity2_LCNumberContainer"
      );
    if (Other2_LCNumberCheck.checked) {
      FaxActivity2_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "FaxActivity2_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      FaxActivity2_LCNumberContainer.style.display =
        "none";
    }


    // GLobal check
    var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
    var FaxActivity2_GlobalCertificationContainer = document.getElementById("FaxActivity2_GlobalCertificationContainer");
    if (other2_GlobalCheck.checked) {
      FaxActivity2_GlobalCertificationContainer.style.display = "flex";
      document.getElementById("FaxActivity2_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      FaxActivity2_GlobalCertificationContainer.style.display ="none";
    }



    //  SteamShip Propogation
    if(!isDialogPopulated_Fax2){        
      document.getElementById("FaxActivity2_FaxDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_Fax2 = true;
    }

    document.getElementById("FaxActivity2_PrintTime").value =  document.getElementById("Homepage_ShipDate").value;    
    
    
    // 2nd Applicant
    var Other2_SecondApplicantCheck = document.getElementById("Other2_SecondApplicantCheck");
    var FaxActivity2_SecondApplicantContainer = document.getElementById("FaxActivity2_SecondApplicantContainer");

    if (Other2_SecondApplicantCheck.checked) {
      FaxActivity2_SecondApplicantContainer.style.display = "flex";
      document.getElementById("FaxActivity2_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      FaxActivity2_SecondApplicantContainer.style.display = "none";
    }

    function setTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('FaxActivity2_PrintTime2').value = `${hours}:${minutes}`;
  }
  
    setTime();




    }

    // ! Other 2 - 6
    else if (inputValue === "DHL Form") {
      let DhlFormCertificateother2Modal = document.getElementById(
        "DhlFormCertificateother2Modal"
      );
      let DhlFormCertificateother2ModalTitle = document.getElementById(
        "DhlFormCertificateother2ModalTitle"
      );

      console.log("Welcome to DHL Form");
      DhlFormCertificateother2Modal.classList.add("show");
      DhlFormCertificateother2Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


    //! Check Box Check
    if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
      document.getElementById("DhlFormOther2_DCS").value = DCSText;
    } else {
    document.getElementById("DhlFormOther2_DCS").value = "";
    }


    // LC check
    if (document.getElementById("other2_LCNumberCheck").checked) {
      document.getElementById("DhlFormOther2_LcNumberContainer1").style.display = "inline-block";
      document.getElementById("DhlFormOther2_LcNumberContainer2").style.display = "inline-block";
      document.getElementById("DhlFormOther2_LcNumber").value = document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      document.getElementById("DhlFormOther2_LcNumberContainer1").style.display = "none";
      document.getElementById("DhlFormOther2_LcNumberContainer2").style.display = "none";
    }

    
    // GLobal check
    var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
    var DhlFormOther2_GlobalCertificationContainer = document.getElementById("DhlFormOther2_GlobalCertificationContainer");
    if (other2_GlobalCheck.checked) {
      DhlFormOther2_GlobalCertificationContainer.style.display = "flex";
      document.getElementById("DhlFormOther2_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      DhlFormOther2_GlobalCertificationContainer.style.display ="none";
    }


    document.getElementById("DhlFormOther2_From").value = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
    document.getElementById("DhlFormOther2_To").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("DhlFormOther2_ToAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;
    document.getElementById("DhlFormOther2_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("DhlFormOther2_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("DhlFormOther2_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("DhlFormOther2_Piece").textContent = document.getElementById("TransportInformation_NumberOfPieces").value;
    document.getElementById("DhlFormOther2_ShptWeight").textContent = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;





    
    //! End Check Boxes


    }

    // ! Other 2 - 7
    else if (inputValue === "Truck Bill of lading") {
      let TruckBillOfLadingCertificateother2Modal = document.getElementById(
        "TruckBillOfLadingCertificateother2Modal"
      );
      let TruckBillOfLadingCertificateother2ModalTitle =
        document.getElementById("TruckBillOfLadingCertificateother2ModalTitle");
      console.log("Welcome to Truck Bill of lading");

      TruckBillOfLadingCertificateother2Modal.classList.add("show");
      TruckBillOfLadingCertificateother2Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      TruckBillOfLadingCertificateother2ModalTitle.innerText =
        document.getElementById("printPage_Other2SelectField").value;
      document.body.classList.add("modal-open");

      //  Truck Bill of lading

      document.getElementById("TruckBillOfLading2_AsAgents").value =
        document.getElementById("TransportInformation_TlForwarderName").value;
      document.getElementById("TruckBillOfLading2_AsAgentsAddress").value =
        document.getElementById("TransportInformation_ForwarderAddress").value;
      document.getElementById("TruckBillOfLading2_CarrierName").value =
        document.getElementById("TransportInformation_CarrierName").value;
      document.getElementById("TruckBillOfLading2_Notify").value =
        document.getElementById("lcInformationPageNotifyParty").value;
      document.getElementById("TruckBillOfLading2_ConsignedTo").value =
        document.getElementById("lcInformationPageConsignToParty").value;
      document.getElementById("TruckBillOfLading2_ShipDate").value =
        document.getElementById("Homepage_ShipDate").value;
      document.getElementById("TruckBillOfLading2_Freight").value =
        document.getElementById("lcInformationPageFreight").value;
      document.getElementById("TruckBillOfLading2_GrossWeight").value =
        document.getElementById("TransportInformation_GrossWeight").value;
      document.getElementById("TruckBillOfLading2_NoOfPieces").value =
        document.getElementById("TransportInformation_NumberOfPieces").value;


       // LC check
       var other2_LCNumberCheck = document.getElementById("other2_LCNumberCheck");
       var TruckBillOfLading2_LcNumberContainer = document.getElementById("TruckBillOfLading2_LcNumberContainer");
       if (other2_LCNumberCheck.checked) {
        TruckBillOfLading2_LcNumberContainer.style.display = "flex";
         document.getElementById("TruckBillOfLading2_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
       } else {
        TruckBillOfLading2_LcNumberContainer.style.display = "none";
       }



  // New
    document.getElementById("TruckBillOfLading2_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading2_ShipmentFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("TruckBillOfLading2_To").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("TruckBillOfLading2_GrossWeight").value =  document.getElementById("TransportInformation_GrossWeight").value +document.getElementById("TransportInformation_Measurements").value ;
    document.getElementById("TruckBillOfLading2_ShipperOrExporter").value =  document.getElementById("LCInformation_BENEFICIARYName").value;
    
    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("TruckBillOfLading2_FreeText1").value =  document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;
    document.getElementById("TruckBillOfLading2_FreeText2").value =  "ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON " + formattedDate ;
    document.getElementById("TruckBillOfLading2_FreeText3").value =  "ISSUED IN ONE (1) ORIGINAL.";
    

    var Other2_SecondApplicantCheck = document.getElementById("Other2_SecondApplicantCheck");
    if (Other2_SecondApplicantCheck.checked) {
      document.getElementById("TruckBillOfLading2_SecondApplicant").style.display = "flex";
      document.getElementById("TruckBillOfLading2_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      document.getElementById("TruckBillOfLading2_SecondApplicant").style.display = "none";
    }



    // New End






      document.getElementById("TruckBillOfLading2_BlNumber").value =
        document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

      var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
      if (other2_GlobalCheck.checked) {
        document.getElementById(
          "TruckBillOfLading2_LcGlobalCertifications"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
        document.getElementById(
          "TruckBillOfLading2_LcGlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "TruckBillOfLading2_LcGlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById(
          "TruckBillOfLading2_LcGlobalCertifications"
        ).value = "";
      }

      // Limited Certifications
      function updateLimitedCertificationsAWB() {
        var checkbox = document.getElementById(
          "lcInformationPageLimitedCertifications_BLcheckbox"
        );
        var textArea = document.getElementById(
          "TruckBillOfLading2_LcLimitedCertifications"
        );

        if (checkbox.checked) {
          textArea.value = document.getElementById(
            "lcInformationPageLimitedCertifications"
          ).value;
          textArea.style.display = "block";
        } else {
          textArea.value = "";
          // textArea.style.display = "none"; // Hide the text area
        }
      }

      document
        .getElementById("lcInformationPageLimitedCertifications_BLcheckbox")
        .addEventListener("change", updateLimitedCertificationsAWB);
      updateLimitedCertificationsAWB();
    }

    // ! Other 2 - 8
    else if (inputValue === "Steamship") {
      let SteamshipCertificateother2Modal = document.getElementById(
        "SteamshipCertificateother2Modal"
      );
      let SteamshipCertificateother2ModalTitle = document.getElementById(
        "SteamshipCertificateother2ModalTitle"
      );
      console.log("Welcome to Steamship");

      SteamshipCertificateother2Modal.classList.add("show");
      SteamshipCertificateother2Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // SteamshipCertificateother2Modal.innerText = printPage_other2SelectField.value;
      document.body.classList.add("modal-open");


      //  SteamShip Propogation
      if(!isDialogPopulated_SteamShip2){        
        document.getElementById("Steamship2_ShipDate").value =  document.getElementById("Homepage_ShipDate").value;        
        isDialogPopulated_SteamShip2 = true;
      }

    // 2nd Applicant
    var Other2_SecondApplicantCheck = document.getElementById("Other2_SecondApplicantCheck");
    var Steamship2_SecondApplicantContainer = document.getElementById("Steamship2_SecondApplicantContainer");

    if (Other2_SecondApplicantCheck.checked) {
      Steamship2_SecondApplicantContainer.style.display = "flex";
      document.getElementById("Steamship2_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Steamship2_SecondApplicantContainer.style.display = "none";
    }


     
      // LC check
      var other2_LCNumberCheck = document.getElementById("other2_LCNumberCheck");
      var Steamship2_LcNumberContainer = document.getElementById("Steamship2_LcNumberContainer");
      if (other2_LCNumberCheck.checked) {
        Steamship2_LcNumberContainer.style.display = "flex";
        document.getElementById("Steamship2_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      } else {
        Steamship2_LcNumberContainer.style.display = "none";
      }

      document.getElementById("Steamship2_VesselName").value = document.getElementById("TransportInformation_VesselName").value


      var other2_GlobalCheck = document.getElementById("other2_GlobalCheck");
      if (other2_GlobalCheck.checked) {
        document.getElementById("Steamship2_GlobalCertifications").value =
          document.getElementById("LC_Information_Global_Certification").value;
        document.getElementById(
          "Steamship2_GlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "Steamship2_GlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById("Steamship2_GlobalCertifications").value = "";
      }
    } else {
      console.log("Other 2 - Select Wrong");
    }

    // All over
  });

  // ! Other 3
  let printPage_Other3SelectField = document.getElementById(
    "printPage_Other3SelectField"
  );
  let isDialogPopulated_SteamShip3 = false;


  printPage_Other3SelectField.addEventListener("dblclick", function () {
    console.log("Other 3- Value: ");
    console.log(printPage_Other3SelectField.value);
    var inputValue = printPage_Other3SelectField.value;

    // ! Other 3-1

    if (inputValue === "Appended Declaration To Air Waybill") {
      let AppendedDeclarationToAirWaybillother3Modal = document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal"
      );
      let AppendedDeclarationToAirWaybillother3ModalTitle =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother3ModalTitle"
        );
      console.log("yes");
      AppendedDeclarationToAirWaybillother3Modal.classList.add("show");
      AppendedDeclarationToAirWaybillother3Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      AppendedDeclarationToAirWaybillother3ModalTitle.innerText =
        printPage_Other3SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_CarrierName"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal_FlightNumber"
      ).value = document.getElementById(
        "TransportInformation_1stFlightNumber"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal_AirportsEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal_Description"
      ).value =
        "THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other3_LCNumberCheck = document.getElementById(
        "other3_LCNumberCheck"
      );
      var AppendedDeclarationToAirWaybillother3Modal_LCNumberContainer =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother3Modal_LCNumberContainer"
        );
      if (other3_LCNumberCheck.checked) {
        AppendedDeclarationToAirWaybillother3Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "AppendedDeclarationToAirWaybillother3Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        AppendedDeclarationToAirWaybillother3Modal_LCNumberContainer.style.display =
          "none";
      }


       // GLobal check
       var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
       var AppendedDeclarationToAirWaybillOther3Modal_GlobalContainer = document.getElementById("AppendedDeclarationToAirWaybillOther3Modal_GlobalContainer");
       if (other3_GlobalCheck.checked) {
         AppendedDeclarationToAirWaybillOther3Modal_GlobalContainer.style.display = "flex";
         document.getElementById("AppendedDeclarationToAirWaybillOther3Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
         document.getElementById("AppendedDeclarationToAirWaybillOther3Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
       } else {
         AppendedDeclarationToAirWaybillOther3Modal_GlobalContainer.style.display = "none";
       }


    }

    // ! Other 3 - 2
    else if (inputValue === "Certificate Appended To B/L") {
      let CertificateAppendedToBLother3Modal = document.getElementById(
        "CertificateAppendedToBLother3Modal"
      );
      let CertificateAppendedToBLother3ModalTitle = document.getElementById(
        "CertificateAppendedToBLother3ModalTitle"
      );
      console.log("yes");
      CertificateAppendedToBLother3Modal.classList.add("show");
      CertificateAppendedToBLother3Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToBLother3ModalTitle.innerText =
        printPage_Other3SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToBLother3Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "CertificateAppendedToBLother3Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_VesselName"
      ).value;
      document.getElementById(
        "CertificateAppendedToBLother3Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "CertificateAppendedToBLother3Modal_VesselEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToBLother3Modal_Description"
      ).value =
        "THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other3_LCNumberCheck = document.getElementById(
        "other3_LCNumberCheck"
      );
      var CertificateAppendedToBLother3Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToBLother3Modal_LCNumberContainer"
        );
      if (other3_LCNumberCheck.checked) {
        CertificateAppendedToBLother3Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToBLother3Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToBLother3Modal_LCNumberContainer.style.display =
          "none";
      }


      // GLobal check
      var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
      var CertificateAppendedToBLOther3Modal_GlobalContainer = document.getElementById("CertificateAppendedToBLOther3Modal_GlobalContainer");
      if (other3_GlobalCheck.checked) {
      CertificateAppendedToBLOther3Modal_GlobalContainer.style.display = "flex";
        document.getElementById("CertificateAppendedToBLOther3Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("CertificateAppendedToBLOther3Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
      CertificateAppendedToBLOther3Modal_GlobalContainer.style.display = "none";
      }

    }

    // ! Other 3 - 3
    else if (inputValue === "Certificate Appended To Insurance Certificate") {
      let CertificateAppendedToInsuranceCertificateother3Modal =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother3Modal"
        );
      let CertificateAppendedToInsuranceCertificateother3ModalTitle =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother3ModalTitle"
        );

      CertificateAppendedToInsuranceCertificateother3Modal.classList.add(
        "show"
      );
      CertificateAppendedToInsuranceCertificateother3Modal.style.display =
        "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToInsuranceCertificateother3ModalTitle.innerText =
        document.getElementById("printPage_Other3SelectField").value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToInsuranceother3Modal_LCNumber"
      );
      console.log("Sherry ka focus", textarea);
      textarea.focus();
      textarea.scrollIntoView();
      console.log("yes");

      document.getElementById(
        "CertificateAppendedToInsuranceother3Modal_NameOfInsuranceCompany"
      ).value = document.getElementById(
        "TransportInformation_InsuranceCompanyName"
      ).value;
      document.getElementById(
        "CertificateAppendedToInsuranceother3Modal_Description"
      ).value =
        "THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToInsuranceother3Modal_DateAt"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;

      // LC check
      var other3_LCNumberCheck = document.getElementById(
        "other3_LCNumberCheck"
      );
      var CertificateAppendedToInsuranceother3Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother3Modal_LCNumberContainer"
        );
      if (other3_LCNumberCheck.checked) {
        CertificateAppendedToInsuranceother3Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother3Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToInsuranceother3Modal_LCNumberContainer.style.display =
          "none";
      }

      // GLobal check
      var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
      var CertificateAppendedToInsuranceother3Modal_GlobalContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother3Modal_GlobalContainer"
        );
      if (other3_GlobalCheck.checked) {
        CertificateAppendedToInsuranceother3Modal_GlobalContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother3Modal_GlobalLabel"
        ).innerText = "GLOBAL CERTIFICATION";
        document.getElementById(
          "CertificateAppendedToInsuranceother3Modal_Global"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
      } else {
        CertificateAppendedToInsuranceother3Modal_GlobalContainer.style.display =
          "none";
      }
    }

    // ! Other 3 - 4
    else if (inputValue === "Email Form") {
      console.log("Welcome to Email Form");
      let EmailFormCertificateother3Modal = document.getElementById(
        "EmailFormCertificateother3Modal"
      );
      let EmailFormCertificateother3ModalTitle = document.getElementById(
        "EmailFormCertificateother3ModalTitle"
      );

      EmailFormCertificateother3Modal.classList.add("show");
      EmailFormCertificateother3Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // EmailFormCertificateother3ModalTitle.innerText = printPage_other3SelectField.value;




       // LC check
       var Other3_LCNumberCheck = document.getElementById(
        "other3_LCNumberCheck"
      );
      var EmailForm3_LCNumberContainer =
        document.getElementById(
          "EmailForm3_LCNumberContainer"
        );
      if (Other3_LCNumberCheck.checked) {
        EmailForm3_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "EmailForm3_LCNumber"
        ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        EmailForm3_LCNumberContainer.style.display =
          "none";
      }


      document.getElementById("EmailForm3_BeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

      // GLobal check
      var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
      var EmailForm3_GlobalCertificationContainer = document.getElementById("EmailForm3_GlobalCertificationContainer");
      if (other3_GlobalCheck.checked) {
        EmailForm3_GlobalCertificationContainer.style.display = "flex";
        document.getElementById("EmailForm3_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
        EmailForm3_GlobalCertificationContainer.style.display = "none";
      }

      document.getElementById("EmailForm3_Sent").value = formatDate(currentDate);


          // 3nd Applicant
    var Other3_SecondApplicantCheck = document.getElementById("Other3_SecondApplicantCheck");
    var EmailForm3_SecondApplicantContainer = document.getElementById("EmailForm3_SecondApplicantContainer");

    if (Other3_SecondApplicantCheck.checked) {
      EmailForm3_SecondApplicantContainer.style.display = "flex";
      document.getElementById("EmailForm3_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      EmailForm3_SecondApplicantContainer.style.display = "none";
    }

    document.getElementById("EmailForm3_BeneName1").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("EmailForm3_BeneAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;




      document.body.classList.add("modal-open");
    }

    // ! Other 3 - 5
    else if (inputValue === "Fax Activity") {
      let FaxActivityCertificateother3Modal = document.getElementById(
        "FaxActivityCertificateother3Modal"
      );


      let isDialogPopulated_Fax3 = false;


      let FaxActivityCertificateother3ModalTitle = document.getElementById(
        "FaxActivityCertificateother3ModalTitle"
      );
      console.log("Welcome to Fax Activity");

      FaxActivityCertificateother3Modal.classList.add("show");
      FaxActivityCertificateother3Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


    // LC check
    var Other3_LCNumberCheck = document.getElementById(
      "other3_LCNumberCheck"
    );
    var FaxActivity3_LCNumberContainer =
      document.getElementById(
        "FaxActivity3_LCNumberContainer"
      );
    if (Other3_LCNumberCheck.checked) {
      FaxActivity3_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "FaxActivity3_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      FaxActivity3_LCNumberContainer.style.display =
        "none";
    }

     // GLobal check
 var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
 var FaxActivity3_GlobalCertificationContainer = document.getElementById("FaxActivity3_GlobalCertificationContainer");
 if (other3_GlobalCheck.checked) {
   FaxActivity3_GlobalCertificationContainer.style.display = "flex";
   document.getElementById("FaxActivity3_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
 } else {
   FaxActivity3_GlobalCertificationContainer.style.display ="none";
 }



    //  SteamShip Propogation
    if(!isDialogPopulated_Fax3){        
      document.getElementById("FaxActivity3_FaxDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_Fax3 = true;
    }

    document.getElementById("FaxActivity3_PrintTime").value =  document.getElementById("Homepage_ShipDate").value;    
    
    
    // 2nd Applicant
    var Other3_SecondApplicantCheck = document.getElementById("Other3_SecondApplicantCheck");
    var FaxActivity3_SecondApplicantContainer = document.getElementById("FaxActivity3_SecondApplicantContainer");

    if (Other3_SecondApplicantCheck.checked) {
      FaxActivity3_SecondApplicantContainer.style.display = "flex";
      document.getElementById("FaxActivity3_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      FaxActivity3_SecondApplicantContainer.style.display = "none";
    }

    function setTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('FaxActivity3_PrintTime2').value = `${hours}:${minutes}`;
  }
  
    setTime();





    }

    // ! Other 3 - 6
    else if (inputValue === "DHL Form") {
      let DhlFormCertificateother3Modal = document.getElementById(
        "DhlFormCertificateother3Modal"
      );
      let DhlFormCertificateother3ModalTitle = document.getElementById(
        "DhlFormCertificateother3ModalTitle"
      );

      console.log("Welcome to DHL Form");
      DhlFormCertificateother3Modal.classList.add("show");
      DhlFormCertificateother3Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");

       //! Check Box Check
        if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
          document.getElementById("DhlFormOther3_DCS").value = DCSText;
        } else {
        document.getElementById("DhlFormOther3_DCS").value = "";
        }


        // LC check
        if (document.getElementById("other3_LCNumberCheck").checked) {
          document.getElementById("DhlFormOther3_LcNumberContainer1").style.display = "inline-block";
          document.getElementById("DhlFormOther3_LcNumberContainer2").style.display = "inline-block";
          document.getElementById("DhlFormOther3_LcNumber").value = document.getElementById("Homepage_IssuingBankRef").value;
        } else {
          document.getElementById("DhlFormOther3_LcNumberContainer1").style.display = "none";
          document.getElementById("DhlFormOther3_LcNumberContainer2").style.display = "none";
        }


        // GLobal check
        var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
        var DhlFormOther3_GlobalCertificationContainer = document.getElementById("DhlFormOther3_GlobalCertificationContainer");
        if (other3_GlobalCheck.checked) {
          DhlFormOther3_GlobalCertificationContainer.style.display = "flex";
          document.getElementById("DhlFormOther3_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
        } else {
          DhlFormOther3_GlobalCertificationContainer.style.display ="none";
        }

        document.getElementById("DhlFormOther3_From").value = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
        document.getElementById("DhlFormOther3_To").value = document.getElementById("LCInformation_BENEFICIARYName").value;
        document.getElementById("DhlFormOther3_ToAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;
        document.getElementById("DhlFormOther3_Date").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther3_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther3_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther3_Piece").textContent = document.getElementById("TransportInformation_NumberOfPieces").value;
        document.getElementById("DhlFormOther3_ShptWeight").textContent = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;







    
       //! End Check Boxes


    }

    // ! Other 3 - 7
    else if (inputValue === "Truck Bill of lading") {
      let TruckBillOfLadingCertificateother3Modal = document.getElementById(
        "TruckBillOfLadingCertificateother3Modal"
      );
      let TruckBillOfLadingCertificateother3ModalTitle =
        document.getElementById("TruckBillOfLadingCertificateother3ModalTitle");
      console.log("Welcome to Truck Bill of lading");

      TruckBillOfLadingCertificateother3Modal.classList.add("show");
      TruckBillOfLadingCertificateother3Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      TruckBillOfLadingCertificateother3ModalTitle.innerText =
        document.getElementById("printPage_Other3SelectField").value;
      document.body.classList.add("modal-open");

      //  Truck Bill of lading

      document.getElementById("TruckBillOfLading3_AsAgents").value =
        document.getElementById("TransportInformation_TlForwarderName").value;
      document.getElementById("TruckBillOfLading3_AsAgentsAddress").value =
        document.getElementById("TransportInformation_ForwarderAddress").value;
      document.getElementById("TruckBillOfLading3_CarrierName").value =
        document.getElementById("TransportInformation_CarrierName").value;
      document.getElementById("TruckBillOfLading3_Notify").value =
        document.getElementById("lcInformationPageNotifyParty").value;
      document.getElementById("TruckBillOfLading3_ConsignedTo").value =
        document.getElementById("lcInformationPageConsignToParty").value;
      document.getElementById("TruckBillOfLading3_ShipDate").value =
        document.getElementById("Homepage_ShipDate").value;
      document.getElementById("TruckBillOfLading3_Freight").value =
        document.getElementById("lcInformationPageFreight").value;
      document.getElementById("TruckBillOfLading3_GrossWeight").value =
        document.getElementById("TransportInformation_GrossWeight").value;
      document.getElementById("TruckBillOfLading3_NoOfPieces").value =
        document.getElementById("TransportInformation_NumberOfPieces").value;
    

        
       // LC check
       var other3_LCNumberCheck = document.getElementById("other3_LCNumberCheck");
       var TruckBillOfLading3_LcNumberContainer = document.getElementById("TruckBillOfLading3_LcNumberContainer");
       if (other3_LCNumberCheck.checked) {
        TruckBillOfLading3_LcNumberContainer.style.display = "flex";
         document.getElementById("TruckBillOfLading3_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
       } else {
        TruckBillOfLading3_LcNumberContainer.style.display = "none";
       }


       
    // New
    document.getElementById("TruckBillOfLading3_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading3_ShipmentFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("TruckBillOfLading3_To").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("TruckBillOfLading3_GrossWeight").value =  document.getElementById("TransportInformation_GrossWeight").value +document.getElementById("TransportInformation_Measurements").value ;
    document.getElementById("TruckBillOfLading3_ShipperOrExporter").value =  document.getElementById("LCInformation_BENEFICIARYName").value;
    
    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("TruckBillOfLading3_FreeText1").value =  document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;
    document.getElementById("TruckBillOfLading3_FreeText2").value =  "ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON " + formattedDate ;
    document.getElementById("TruckBillOfLading3_FreeText3").value =  "ISSUED IN ONE (1) ORIGINAL.";
    

    var Other3_SecondApplicantCheck = document.getElementById("Other3_SecondApplicantCheck");
    if (Other3_SecondApplicantCheck.checked) {
      document.getElementById("TruckBillOfLading3_SecondApplicant").style.display = "flex";
      document.getElementById("TruckBillOfLading3_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      document.getElementById("TruckBillOfLading3_SecondApplicant").style.display = "none";
    }

    // New End




      document.getElementById("TruckBillOfLading3_BlNumber").value =
        document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

      var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
      if (other3_GlobalCheck.checked) {
        document.getElementById(
          "TruckBillOfLading3_LcGlobalCertifications"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
        document.getElementById(
          "TruckBillOfLading3_LcGlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "TruckBillOfLading3_LcGlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById(
          "TruckBillOfLading3_LcGlobalCertifications"
        ).value = "";
      }

      // Limited Certifications
      function updateLimitedCertificationsAWB() {
        var checkbox = document.getElementById(
          "lcInformationPageLimitedCertifications_BLcheckbox"
        );
        var textArea = document.getElementById(
          "TruckBillOfLading3_LcLimitedCertifications"
        );

        if (checkbox.checked) {
          textArea.value = document.getElementById(
            "lcInformationPageLimitedCertifications"
          ).value;
          textArea.style.display = "block";
        } else {
          textArea.value = "";
          // textArea.style.display = "none"; // Hide the text area
        }
      }

      document
        .getElementById("lcInformationPageLimitedCertifications_BLcheckbox")
        .addEventListener("change", updateLimitedCertificationsAWB);
      updateLimitedCertificationsAWB();
    }

    // ! Other 3 - 8
    else if (inputValue === "Steamship") {
      let SteamshipCertificateother3Modal = document.getElementById(
        "SteamshipCertificateother3Modal"
      );
      let SteamshipCertificateother3ModalTitle = document.getElementById(
        "SteamshipCertificateother3ModalTitle"
      );
      console.log("Welcome to Steamship");

      SteamshipCertificateother3Modal.classList.add("show");
      SteamshipCertificateother3Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // SteamshipCertificateother3Modal.innerText = printPage_other3SelectField.value;
      document.body.classList.add("modal-open");

       //  SteamShip Propogation
       if(!isDialogPopulated_SteamShip3){        
        document.getElementById("Steamship3_ShipDate").value =  document.getElementById("Homepage_ShipDate").value;        
        isDialogPopulated_SteamShip3 = true;
      }


    // 3nd Applicant
    var Other3_SecondApplicantCheck = document.getElementById("Other3_SecondApplicantCheck");
    var Steamship3_SecondApplicantContainer = document.getElementById("Steamship3_SecondApplicantContainer");

    if (Other3_SecondApplicantCheck.checked) {
      Steamship3_SecondApplicantContainer.style.display = "flex";
      document.getElementById("Steamship3_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Steamship3_SecondApplicantContainer.style.display = "none";
    }


     

       // LC check
       var other3_LCNumberCheck = document.getElementById("other3_LCNumberCheck");
       var Steamship3_LcNumberContainer = document.getElementById("Steamship3_LcNumberContainer");
       if (other3_LCNumberCheck.checked) {
         Steamship3_LcNumberContainer.style.display = "flex";
         document.getElementById("Steamship3_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
       } else {
         Steamship3_LcNumberContainer.style.display = "none";
       }

       document.getElementById("Steamship3_VesselName").value = document.getElementById("TransportInformation_VesselName").value


      var other3_GlobalCheck = document.getElementById("other3_GlobalCheck");
      if (other3_GlobalCheck.checked) {
        document.getElementById("Steamship3_GlobalCertifications").value =
          document.getElementById("LC_Information_Global_Certification").value;
        document.getElementById(
          "Steamship3_GlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "Steamship3_GlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById("Steamship3_GlobalCertifications").value = "";
      }
    } else {
      console.log("Other 3 - Select Wrong");
    }

    // All over
  });

  //  ! Other 4
  let printPage_other4SelectField = document.getElementById(
    "printPage_Other4SelectField"
  );
  let isDialogPopulated_SteamShip4 = false;


  printPage_other4SelectField.addEventListener("dblclick", function () {
    console.log("other 4- Value: ");
    console.log(printPage_other4SelectField.value);
    var inputValue = printPage_other4SelectField.value;


    //! Other 4-1  
    if (inputValue === "Appended Declaration To Air Waybill") {
      let AppendedDeclarationToAirWaybillother4Modal = document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal"
      );
      let AppendedDeclarationToAirWaybillother4ModalTitle =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother4ModalTitle"
        );
      console.log("yes");
      AppendedDeclarationToAirWaybillother4Modal.classList.add("show");
      AppendedDeclarationToAirWaybillother4Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      AppendedDeclarationToAirWaybillother4ModalTitle.innerText =
        printPage_other4SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_CarrierName"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal_FlightNumber"
      ).value = document.getElementById(
        "TransportInformation_1stFlightNumber"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal_AirportsEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal_Description"
      ).value =
        "THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other4_LCNumberCheck = document.getElementById(
        "other4_LCNumberCheck"
      );
      var AppendedDeclarationToAirWaybillother4Modal_LCNumberContainer =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother4Modal_LCNumberContainer"
        );
      if (other4_LCNumberCheck.checked) {
        AppendedDeclarationToAirWaybillother4Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "AppendedDeclarationToAirWaybillother4Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        AppendedDeclarationToAirWaybillother4Modal_LCNumberContainer.style.display =
          "none";
      }


       // GLobal check
       var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
       var AppendedDeclarationToAirWaybillOther4Modal_GlobalContainer = document.getElementById("AppendedDeclarationToAirWaybillOther4Modal_GlobalContainer");
       if (other4_GlobalCheck.checked) {
         AppendedDeclarationToAirWaybillOther4Modal_GlobalContainer.style.display = "flex";
         document.getElementById("AppendedDeclarationToAirWaybillOther4Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
         document.getElementById("AppendedDeclarationToAirWaybillOther4Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
       } else {
         AppendedDeclarationToAirWaybillOther4Modal_GlobalContainer.style.display = "none";
       }


    }

    // ! other 4 - 2
    else if (inputValue === "Certificate Appended To B/L") {
      let CertificateAppendedToBLother4Modal = document.getElementById(
        "CertificateAppendedToBLother4Modal"
      );
      let CertificateAppendedToBLother4ModalTitle = document.getElementById(
        "CertificateAppendedToBLother4ModalTitle"
      );
      console.log("yes");
      CertificateAppendedToBLother4Modal.classList.add("show");
      CertificateAppendedToBLother4Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToBLother4ModalTitle.innerText =
        printPage_other4SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToBLother4Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "CertificateAppendedToBLother4Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_VesselName"
      ).value;
      document.getElementById(
        "CertificateAppendedToBLother4Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "CertificateAppendedToBLother4Modal_VesselEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToBLother4Modal_Description"
      ).value =
        "THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other4_LCNumberCheck = document.getElementById(
        "other4_LCNumberCheck"
      );
      var CertificateAppendedToBLother4Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToBLother4Modal_LCNumberContainer"
        );
      if (other4_LCNumberCheck.checked) {
        CertificateAppendedToBLother4Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToBLother4Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToBLother4Modal_LCNumberContainer.style.display =
          "none";
      }


      // GLobal check
      var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
      var CertificateAppendedToBLOther4Modal_GlobalContainer = document.getElementById("CertificateAppendedToBLOther4Modal_GlobalContainer");
      if (other4_GlobalCheck.checked) {
      CertificateAppendedToBLOther4Modal_GlobalContainer.style.display = "flex";
        document.getElementById("CertificateAppendedToBLOther4Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("CertificateAppendedToBLOther4Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
      CertificateAppendedToBLOther4Modal_GlobalContainer.style.display = "none";
      }



    }

    // ! other 4 - 3
    else if (inputValue === "Certificate Appended To Insurance Certificate") {
      let CertificateAppendedToInsuranceCertificateother4Modal =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother4Modal"
        );
      let CertificateAppendedToInsuranceCertificateother4ModalTitle =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother4ModalTitle"
        );

      CertificateAppendedToInsuranceCertificateother4Modal.classList.add(
        "show"
      );
      CertificateAppendedToInsuranceCertificateother4Modal.style.display =
        "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToInsuranceCertificateother4ModalTitle.innerText =
        document.getElementById("printPage_Other4SelectField").value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToInsuranceother4Modal_LCNumber"
      );
      console.log("Sherry ka focus", textarea);
      textarea.focus();
      textarea.scrollIntoView();
      console.log("yes");

      document.getElementById(
        "CertificateAppendedToInsuranceother4Modal_NameOfInsuranceCompany"
      ).value = document.getElementById(
        "TransportInformation_InsuranceCompanyName"
      ).value;
      document.getElementById(
        "CertificateAppendedToInsuranceother4Modal_Description"
      ).value =
        "THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToInsuranceother4Modal_DateAt"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;

      // LC check
      var other4_LCNumberCheck = document.getElementById(
        "other4_LCNumberCheck"
      );
      var CertificateAppendedToInsuranceother4Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother4Modal_LCNumberContainer"
        );
      if (other4_LCNumberCheck.checked) {
        CertificateAppendedToInsuranceother4Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother4Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToInsuranceother4Modal_LCNumberContainer.style.display =
          "none";
      }

      // GLobal check
      var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
      var CertificateAppendedToInsuranceother4Modal_GlobalContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother4Modal_GlobalContainer"
        );
      if (other4_GlobalCheck.checked) {
        CertificateAppendedToInsuranceother4Modal_GlobalContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother4Modal_GlobalLabel"
        ).innerText = "GLOBAL CERTIFICATION";
        document.getElementById(
          "CertificateAppendedToInsuranceother4Modal_Global"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
      } else {
        CertificateAppendedToInsuranceother4Modal_GlobalContainer.style.display =
          "none";
      }
    }

    // ! other 4 - 4
    else if (inputValue === "Email Form") {
      console.log("Welcome to Email Form");
      let EmailFormCertificateother4Modal = document.getElementById(
        "EmailFormCertificateother4Modal"
      );
      let EmailFormCertificateother4ModalTitle = document.getElementById(
        "EmailFormCertificateother4ModalTitle"
      );

      EmailFormCertificateother4Modal.classList.add("show");
      EmailFormCertificateother4Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // EmailFormCertificateother4ModalTitle.innerText = printPage_other4SelectField.value;



      // LC check
      var Other4_LCNumberCheck = document.getElementById(
      "other4_LCNumberCheck"
    );
    var EmailForm4_LCNumberContainer =
      document.getElementById(
        "EmailForm4_LCNumberContainer"
      );
    if (Other4_LCNumberCheck.checked) {
      EmailForm4_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "EmailForm4_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      EmailForm4_LCNumberContainer.style.display =
        "none";
    }

    document.getElementById("EmailForm4_BeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    // GLobal check
    var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
    var EmailForm4_GlobalCertificationContainer = document.getElementById("EmailForm4_GlobalCertificationContainer");
    if (other4_GlobalCheck.checked) {
      EmailForm4_GlobalCertificationContainer.style.display = "flex";
      document.getElementById("EmailForm4_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      EmailForm4_GlobalCertificationContainer.style.display = "none";
    }

    document.getElementById("EmailForm4_Sent").value = formatDate(currentDate);

        // 4nd Applicant
        var Other4_SecondApplicantCheck = document.getElementById("Other4_SecondApplicantCheck");
        var EmailForm4_SecondApplicantContainer = document.getElementById("EmailForm4_SecondApplicantContainer");
    
        if (Other4_SecondApplicantCheck.checked) {
          EmailForm4_SecondApplicantContainer.style.display = "flex";
          document.getElementById("EmailForm4_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
        } else {
          EmailForm4_SecondApplicantContainer.style.display = "none";
        }
    
        document.getElementById("EmailForm4_BeneName1").value = document.getElementById("LCInformation_BENEFICIARYName").value;
        document.getElementById("EmailForm4_BeneAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;




      document.body.classList.add("modal-open");
    }

    // ! other 4 - 5
    else if (inputValue === "Fax Activity") {
      let FaxActivityCertificateother4Modal = document.getElementById(
        "FaxActivityCertificateother4Modal"
      );

      let isDialogPopulated_Fax4 = false;

      let FaxActivityCertificateother4ModalTitle = document.getElementById(
        "FaxActivityCertificateother4ModalTitle"
      );
      console.log("Welcome to Fax Activity");

      FaxActivityCertificateother4Modal.classList.add("show");
      FaxActivityCertificateother4Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


    // LC check
    var Other4_LCNumberCheck = document.getElementById(
      "other4_LCNumberCheck"
    );
    var FaxActivity4_LCNumberContainer =
      document.getElementById(
        "FaxActivity4_LCNumberContainer"
      );
    if (Other4_LCNumberCheck.checked) {
      FaxActivity4_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "FaxActivity4_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      FaxActivity4_LCNumberContainer.style.display =
        "none";
    }

     // GLobal check
 var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
 var FaxActivity4_GlobalCertificationContainer = document.getElementById("FaxActivity4_GlobalCertificationContainer");
 if (other4_GlobalCheck.checked) {
   FaxActivity4_GlobalCertificationContainer.style.display = "flex";
   document.getElementById("FaxActivity4_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
 } else {
   FaxActivity4_GlobalCertificationContainer.style.display ="none";
 }



    //  SteamShip Propogation
    if(!isDialogPopulated_Fax4){        
      document.getElementById("FaxActivity4_FaxDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_Fax4 = true;
    }

    document.getElementById("FaxActivity4_PrintTime").value =  document.getElementById("Homepage_ShipDate").value;    
    
    
    // 2nd Applicant
    var Other4_SecondApplicantCheck = document.getElementById("Other4_SecondApplicantCheck");
    var FaxActivity4_SecondApplicantContainer = document.getElementById("FaxActivity4_SecondApplicantContainer");

    if (Other4_SecondApplicantCheck.checked) {
      FaxActivity4_SecondApplicantContainer.style.display = "flex";
      document.getElementById("FaxActivity4_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      FaxActivity4_SecondApplicantContainer.style.display = "none";
    }

    function setTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('FaxActivity4_PrintTime2').value = `${hours}:${minutes}`;
  }
  
    setTime();







    }

    // ! other 4 - 6
    else if (inputValue === "DHL Form") {
      let DhlFormCertificateother4Modal = document.getElementById(
        "DhlFormCertificateother4Modal"
      );
      let DhlFormCertificateother4ModalTitle = document.getElementById(
        "DhlFormCertificateother4ModalTitle"
      );

      console.log("Welcome to DHL Form");
      DhlFormCertificateother4Modal.classList.add("show");
      DhlFormCertificateother4Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");

      //! Check Box Check
      if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
        document.getElementById("DhlFormOther4_DCS").value = DCSText;
      } else {
      document.getElementById("DhlFormOther4_DCS").value = "";
      }

      // LC check
      if (document.getElementById("other4_LCNumberCheck").checked) {
        document.getElementById("DhlFormOther4_LcNumberContainer1").style.display = "inline-block";
        document.getElementById("DhlFormOther4_LcNumberContainer2").style.display = "inline-block";
        document.getElementById("DhlFormOther4_LcNumber").value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        document.getElementById("DhlFormOther4_LcNumberContainer1").style.display = "none";
        document.getElementById("DhlFormOther4_LcNumberContainer2").style.display = "none";
      }

      // GLobal check
      var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
      var DhlFormOther4_GlobalCertificationContainer = document.getElementById("DhlFormOther4_GlobalCertificationContainer");
      if (other4_GlobalCheck.checked) {
        DhlFormOther4_GlobalCertificationContainer.style.display = "flex";
        document.getElementById("DhlFormOther4_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
        DhlFormOther4_GlobalCertificationContainer.style.display ="none";
      }

      document.getElementById("DhlFormOther4_From").value = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
      document.getElementById("DhlFormOther4_To").value = document.getElementById("LCInformation_BENEFICIARYName").value;
      document.getElementById("DhlFormOther4_ToAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;
      document.getElementById("DhlFormOther4_Date").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("DhlFormOther4_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("DhlFormOther4_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("DhlFormOther4_Piece").textContent = document.getElementById("TransportInformation_NumberOfPieces").value;
      document.getElementById("DhlFormOther4_ShptWeight").textContent = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;







  
     //! End Check Boxes


    }

    // ! other 4 - 7
    else if (inputValue === "Truck Bill of lading") {
      let TruckBillOfLadingCertificateother4Modal = document.getElementById(
        "TruckBillOfLadingCertificateother4Modal"
      );
      let TruckBillOfLadingCertificateother4ModalTitle =
        document.getElementById("TruckBillOfLadingCertificateother4ModalTitle");
      console.log("Welcome to Truck Bill of lading");

      TruckBillOfLadingCertificateother4Modal.classList.add("show");
      TruckBillOfLadingCertificateother4Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      TruckBillOfLadingCertificateother4ModalTitle.innerText =
        document.getElementById("printPage_Other4SelectField").value;
      document.body.classList.add("modal-open");

      //  Truck Bill of lading

      document.getElementById("TruckBillOfLading4_AsAgents").value =
        document.getElementById("TransportInformation_TlForwarderName").value;
      document.getElementById("TruckBillOfLading4_AsAgentsAddress").value =
        document.getElementById("TransportInformation_ForwarderAddress").value;
      document.getElementById("TruckBillOfLading4_CarrierName").value =
        document.getElementById("TransportInformation_CarrierName").value;
      document.getElementById("TruckBillOfLading4_Notify").value =
        document.getElementById("lcInformationPageNotifyParty").value;
      document.getElementById("TruckBillOfLading4_ConsignedTo").value =
        document.getElementById("lcInformationPageConsignToParty").value;
      document.getElementById("TruckBillOfLading4_ShipDate").value =
        document.getElementById("Homepage_ShipDate").value;
      document.getElementById("TruckBillOfLading4_Freight").value =
        document.getElementById("lcInformationPageFreight").value;
      document.getElementById("TruckBillOfLading4_GrossWeight").value =
        document.getElementById("TransportInformation_GrossWeight").value;
      document.getElementById("TruckBillOfLading4_NoOfPieces").value =
        document.getElementById("TransportInformation_NumberOfPieces").value;
     

      
       // LC check
       var other4_LCNumberCheck = document.getElementById("other4_LCNumberCheck");
       var TruckBillOfLading4_LcNumberContainer = document.getElementById("TruckBillOfLading4_LcNumberContainer");
       if (other4_LCNumberCheck.checked) {
        TruckBillOfLading4_LcNumberContainer.style.display = "flex";
         document.getElementById("TruckBillOfLading4_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
       } else {
        TruckBillOfLading4_LcNumberContainer.style.display = "none";
       }


    // New
    document.getElementById("TruckBillOfLading4_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading4_ShipmentFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("TruckBillOfLading4_To").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("TruckBillOfLading4_GrossWeight").value =  document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;
    document.getElementById("TruckBillOfLading4_ShipperOrExporter").value =  document.getElementById("LCInformation_BENEFICIARYName").value;
    
    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("TruckBillOfLading4_FreeText1").value =  document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;
    document.getElementById("TruckBillOfLading4_FreeText2").value =  "ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON " + formattedDate ;
    document.getElementById("TruckBillOfLading4_FreeText3").value =  "ISSUED IN ONE (1) ORIGINAL.";
    

    var Other4_SecondApplicantCheck = document.getElementById("Other4_SecondApplicantCheck");
    if (Other4_SecondApplicantCheck.checked) {
      document.getElementById("TruckBillOfLading4_SecondApplicant").style.display = "flex";
      document.getElementById("TruckBillOfLading4_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      document.getElementById("TruckBillOfLading4_SecondApplicant").style.display = "none";
    }



    // New End






      document.getElementById("TruckBillOfLading4_BlNumber").value =
        document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

      var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
      if (other4_GlobalCheck.checked) {
        document.getElementById(
          "TruckBillOfLading4_LcGlobalCertifications"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
        document.getElementById(
          "TruckBillOfLading4_LcGlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "TruckBillOfLading4_LcGlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById(
          "TruckBillOfLading4_LcGlobalCertifications"
        ).value = "";
      }

      // Limited Certifications
      function updateLimitedCertificationsAWB() {
        var checkbox = document.getElementById(
          "lcInformationPageLimitedCertifications_BLcheckbox"
        );
        var textArea = document.getElementById(
          "TruckBillOfLading4_LcLimitedCertifications"
        );

        if (checkbox.checked) {
          textArea.value = document.getElementById(
            "lcInformationPageLimitedCertifications"
          ).value;
          textArea.style.display = "block";
        } else {
          textArea.value = "";
        }
      }

      document
        .getElementById("lcInformationPageLimitedCertifications_BLcheckbox")
        .addEventListener("change", updateLimitedCertificationsAWB);
      updateLimitedCertificationsAWB();
    }

    // ! other 4 - 8
    else if (inputValue === "Steamship") {
      let SteamshipCertificateother4Modal = document.getElementById(
        "SteamshipCertificateother4Modal"
      );
      let SteamshipCertificateother4ModalTitle = document.getElementById(
        "SteamshipCertificateother4ModalTitle"
      );
      console.log("Welcome to Steamship");

      SteamshipCertificateother4Modal.classList.add("show");
      SteamshipCertificateother4Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");

      //  SteamShip Propogation
      if(!isDialogPopulated_SteamShip4){        
        document.getElementById("Steamship4_ShipDate").value =  document.getElementById("Homepage_ShipDate").value;        
        isDialogPopulated_SteamShip4 = true;
      }

      // 4nd Applicant
      var Other4_SecondApplicantCheck = document.getElementById("Other4_SecondApplicantCheck");
      var Steamship4_SecondApplicantContainer = document.getElementById("Steamship4_SecondApplicantContainer");

      if (Other4_SecondApplicantCheck.checked) {
        Steamship4_SecondApplicantContainer.style.display = "flex";
        document.getElementById("Steamship4_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
      } else {
        Steamship4_SecondApplicantContainer.style.display = "none";
      }



      // LC check
      var other4_LCNumberCheck = document.getElementById("other4_LCNumberCheck");
      var Steamship4_LcNumberContainer = document.getElementById("Steamship4_LcNumberContainer");
      if (other4_LCNumberCheck.checked) {
        Steamship4_LcNumberContainer.style.display = "flex";
        document.getElementById("Steamship4_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      } else {
        Steamship4_LcNumberContainer.style.display = "none";
      }

      document.getElementById("Steamship4_VesselName").value = document.getElementById("TransportInformation_VesselName").value


      var other4_GlobalCheck = document.getElementById("other4_GlobalCheck");
      if (other4_GlobalCheck.checked) {
        document.getElementById("Steamship4_GlobalCertifications").value =
          document.getElementById("LC_Information_Global_Certification").value;
        document.getElementById(
          "Steamship4_GlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "Steamship4_GlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById("Steamship4_GlobalCertifications").value = "";
      }
    } else {
      console.log("Other 4 - Select Wrong");
    }

    // All over
  });

  //  ! Other 5
  let printPage_other5SelectField = document.getElementById(
    "printPage_Other5SelectField"
  );
  let isDialogPopulated_SteamShip5 = false;


  printPage_other5SelectField.addEventListener("dblclick", function () {
    console.log("Other 5- Value: ");
    console.log(printPage_other5SelectField.value);
    var inputValue = printPage_other5SelectField.value;

    // ! Other 5 - 1
    if (inputValue === "Appended Declaration To Air Waybill") {
      let AppendedDeclarationToAirWaybillother5Modal = document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal"
      );
      let AppendedDeclarationToAirWaybillother5ModalTitle =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother5ModalTitle"
        );
      console.log("yes");
      AppendedDeclarationToAirWaybillother5Modal.classList.add("show");
      AppendedDeclarationToAirWaybillother5Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      AppendedDeclarationToAirWaybillother5ModalTitle.innerText =
        printPage_other5SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_CarrierName"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal_FlightNumber"
      ).value = document.getElementById(
        "TransportInformation_1stFlightNumber"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal_AirportsEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal_Description"
      ).value =
        "THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other5_LCNumberCheck = document.getElementById(
        "other5_LCNumberCheck"
      );
      var AppendedDeclarationToAirWaybillother5Modal_LCNumberContainer =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother5Modal_LCNumberContainer"
        );
      if (other5_LCNumberCheck.checked) {
        AppendedDeclarationToAirWaybillother5Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "AppendedDeclarationToAirWaybillother5Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        AppendedDeclarationToAirWaybillother5Modal_LCNumberContainer.style.display =
          "none";
      }
      
       // GLobal check
       var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
       var AppendedDeclarationToAirWaybillOther5Modal_GlobalContainer = document.getElementById("AppendedDeclarationToAirWaybillOther5Modal_GlobalContainer");
       if (other5_GlobalCheck.checked) {
         AppendedDeclarationToAirWaybillOther5Modal_GlobalContainer.style.display = "flex";
         document.getElementById("AppendedDeclarationToAirWaybillOther5Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
         document.getElementById("AppendedDeclarationToAirWaybillOther5Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
       } else {
         AppendedDeclarationToAirWaybillOther5Modal_GlobalContainer.style.display = "none";
       }



    }

    // ! Other 5 - 2
    else if (inputValue === "Certificate Appended To B/L") {
      let CertificateAppendedToBLother5Modal = document.getElementById(
        "CertificateAppendedToBLother5Modal"
      );
      let CertificateAppendedToBLother5ModalTitle = document.getElementById(
        "CertificateAppendedToBLother5ModalTitle"
      );
      console.log("yes");
      CertificateAppendedToBLother5Modal.classList.add("show");
      CertificateAppendedToBLother5Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToBLother5ModalTitle.innerText =
        printPage_other5SelectField.value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToBLother5Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();

      document.getElementById(
        "CertificateAppendedToBLother5Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_VesselName"
      ).value;
      document.getElementById(
        "CertificateAppendedToBLother5Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "CertificateAppendedToBLother5Modal_VesselEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToBLother5Modal_Description"
      ).value =
        "THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;

      // LC check
      var other5_LCNumberCheck = document.getElementById(
        "other5_LCNumberCheck"
      );
      var CertificateAppendedToBLother5Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToBLother5Modal_LCNumberContainer"
        );
      if (other5_LCNumberCheck.checked) {
        CertificateAppendedToBLother5Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToBLother5Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToBLother5Modal_LCNumberContainer.style.display =
          "none";
      }


      // GLobal check
      var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
      var CertificateAppendedToBLOther5Modal_GlobalContainer = document.getElementById("CertificateAppendedToBLOther5Modal_GlobalContainer");
      if (other5_GlobalCheck.checked) {
      CertificateAppendedToBLOther5Modal_GlobalContainer.style.display = "flex";
        document.getElementById("CertificateAppendedToBLOther5Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("CertificateAppendedToBLOther5Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
      CertificateAppendedToBLOther5Modal_GlobalContainer.style.display = "none";
      }



    }

    // ! Other 5 - 3
    else if (inputValue === "Certificate Appended To Insurance Certificate") {
      let CertificateAppendedToInsuranceCertificateother5Modal =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother5Modal"
        );
      let CertificateAppendedToInsuranceCertificateother5ModalTitle =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother5ModalTitle"
        );

      CertificateAppendedToInsuranceCertificateother5Modal.classList.add(
        "show"
      );
      CertificateAppendedToInsuranceCertificateother5Modal.style.display =
        "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToInsuranceCertificateother5ModalTitle.innerText =
        document.getElementById("printPage_Other5SelectField").value;
      document.body.classList.add("modal-open");

      var textarea = document.getElementById(
        "CertificateAppendedToInsuranceother5Modal_LCNumber"
      );
      console.log("Sherry ka focus", textarea);
      textarea.focus();
      textarea.scrollIntoView();
      console.log("yes");

      document.getElementById(
        "CertificateAppendedToInsuranceother5Modal_NameOfInsuranceCompany"
      ).value = document.getElementById(
        "TransportInformation_InsuranceCompanyName"
      ).value;
      document.getElementById(
        "CertificateAppendedToInsuranceother5Modal_Description"
      ).value =
        "THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToInsuranceother5Modal_DateAt"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;

      // LC check
      var other5_LCNumberCheck = document.getElementById(
        "other5_LCNumberCheck"
      );
      var CertificateAppendedToInsuranceother5Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother5Modal_LCNumberContainer"
        );
      if (other5_LCNumberCheck.checked) {
        CertificateAppendedToInsuranceother5Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother5Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToInsuranceother5Modal_LCNumberContainer.style.display =
          "none";
      }

      // GLobal check
      var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
      var CertificateAppendedToInsuranceother5Modal_GlobalContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother5Modal_GlobalContainer"
        );
      if (other5_GlobalCheck.checked) {
        CertificateAppendedToInsuranceother5Modal_GlobalContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother5Modal_GlobalLabel"
        ).innerText = "GLOBAL CERTIFICATION";
        document.getElementById(
          "CertificateAppendedToInsuranceother5Modal_Global"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
      } else {
        CertificateAppendedToInsuranceother5Modal_GlobalContainer.style.display =
          "none";
      }
    }

    // ! Other 5 - 4
    else if (inputValue === "Email Form") {
      console.log("Welcome to Email Form");
      let EmailFormCertificateother5Modal = document.getElementById(
        "EmailFormCertificateother5Modal"
      );
      let EmailFormCertificateother5ModalTitle = document.getElementById(
        "EmailFormCertificateother5ModalTitle"
      );

      EmailFormCertificateother5Modal.classList.add("show");
      EmailFormCertificateother5Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      // EmailFormCertificateother5ModalTitle.innerText = printPage_other5SelectField.value;

      // LC check
      var Other5_LCNumberCheck = document.getElementById(
      "other5_LCNumberCheck"
    );
    var EmailForm5_LCNumberContainer =
      document.getElementById(
        "EmailForm5_LCNumberContainer"
      );
    if (Other5_LCNumberCheck.checked) {
      EmailForm5_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "EmailForm5_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      EmailForm5_LCNumberContainer.style.display =
        "none";
    }


    document.getElementById("EmailForm5_BeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    // GLobal check
    var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
    var EmailForm5_GlobalCertificationContainer = document.getElementById("EmailForm5_GlobalCertificationContainer");
    if (other5_GlobalCheck.checked) {
      EmailForm5_GlobalCertificationContainer.style.display = "flex";
      document.getElementById("EmailForm5_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      EmailForm5_GlobalCertificationContainer.style.display = "none";
    }


    document.getElementById("EmailForm5_Sent").value = formatDate(currentDate);

        // 5nd Applicant
        var Other5_SecondApplicantCheck = document.getElementById("Other5_SecondApplicantCheck");
        var EmailForm5_SecondApplicantContainer = document.getElementById("EmailForm5_SecondApplicantContainer");
    
        if (Other5_SecondApplicantCheck.checked) {
          EmailForm5_SecondApplicantContainer.style.display = "flex";
          document.getElementById("EmailForm5_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
        } else {
          EmailForm5_SecondApplicantContainer.style.display = "none";
        }
    
        document.getElementById("EmailForm5_BeneName1").value = document.getElementById("LCInformation_BENEFICIARYName").value;
        document.getElementById("EmailForm5_BeneAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;





      document.body.classList.add("modal-open");
    }

    // ! Other 5 - 5
    else if (inputValue === "Fax Activity") {
      let FaxActivityCertificateother5Modal = document.getElementById(
        "FaxActivityCertificateother5Modal"
      );

      let isDialogPopulated_Fax5 = false;

      let FaxActivityCertificateother5ModalTitle = document.getElementById(
        "FaxActivityCertificateother5ModalTitle"
      );
      console.log("Welcome to Fax Activity");

      FaxActivityCertificateother5Modal.classList.add("show");
      FaxActivityCertificateother5Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


    // LC check
    var Other5_LCNumberCheck = document.getElementById(
      "other5_LCNumberCheck"
    );
    var FaxActivity5_LCNumberContainer =
      document.getElementById(
        "FaxActivity5_LCNumberContainer"
      );
    if (Other5_LCNumberCheck.checked) {
      FaxActivity5_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "FaxActivity5_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      FaxActivity5_LCNumberContainer.style.display =
        "none";
    }

     // GLobal check
 var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
 var FaxActivity5_GlobalCertificationContainer = document.getElementById("FaxActivity5_GlobalCertificationContainer");
 if (other5_GlobalCheck.checked) {
   FaxActivity5_GlobalCertificationContainer.style.display = "flex";
   document.getElementById("FaxActivity5_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
 } else {
   FaxActivity5_GlobalCertificationContainer.style.display ="none";
 }


    //  SteamShip Propogation
    if(!isDialogPopulated_Fax5){        
      document.getElementById("FaxActivity5_FaxDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_Fax5 = true;
    }

    document.getElementById("FaxActivity5_PrintTime").value =  document.getElementById("Homepage_ShipDate").value;    
    
    
    // 2nd Applicant
    var Other5_SecondApplicantCheck = document.getElementById("Other5_SecondApplicantCheck");
    var FaxActivity5_SecondApplicantContainer = document.getElementById("FaxActivity5_SecondApplicantContainer");

    if (Other5_SecondApplicantCheck.checked) {
      FaxActivity5_SecondApplicantContainer.style.display = "flex";
      document.getElementById("FaxActivity5_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      FaxActivity5_SecondApplicantContainer.style.display = "none";
    }

    function setTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('FaxActivity5_PrintTime2').value = `${hours}:${minutes}`;
  }
  
    setTime();




    }

    // ! Other 5 - 6
    else if (inputValue === "DHL Form") {
      let DhlFormCertificateother5Modal = document.getElementById(
        "DhlFormCertificateother5Modal"
      );
      let DhlFormCertificateother5ModalTitle = document.getElementById(
        "DhlFormCertificateother5ModalTitle"
      );

      console.log("Welcome to DHL Form");
      DhlFormCertificateother5Modal.classList.add("show");
      DhlFormCertificateother5Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


        //! Check Box Check
         if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
          document.getElementById("DhlFormOther5_DCS").value = DCSText;
        } else {
        document.getElementById("DhlFormOther5_DCS").value = "";
        }


        // LC check
        if (document.getElementById("other5_LCNumberCheck").checked) {
          document.getElementById("DhlFormOther5_LcNumberContainer1").style.display = "inline-block";
          document.getElementById("DhlFormOther5_LcNumberContainer2").style.display = "inline-block";
          document.getElementById("DhlFormOther5_LcNumber").value = document.getElementById("Homepage_IssuingBankRef").value;
        } else {
          document.getElementById("DhlFormOther5_LcNumberContainer1").style.display = "none";
          document.getElementById("DhlFormOther5_LcNumberContainer2").style.display = "none";
        }


        // GLobal check
        var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
        var DhlFormOther5_GlobalCertificationContainer = document.getElementById("DhlFormOther5_GlobalCertificationContainer");
        if (other5_GlobalCheck.checked) {
          DhlFormOther5_GlobalCertificationContainer.style.display = "flex";
          document.getElementById("DhlFormOther5_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
        } else {
          DhlFormOther5_GlobalCertificationContainer.style.display ="none";
        }

        document.getElementById("DhlFormOther5_From").value = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
        document.getElementById("DhlFormOther5_To").value = document.getElementById("LCInformation_BENEFICIARYName").value;
        document.getElementById("DhlFormOther5_ToAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;
        document.getElementById("DhlFormOther5_Date").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther5_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther5_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther5_Piece").textContent = document.getElementById("TransportInformation_NumberOfPieces").value;
        document.getElementById("DhlFormOther5_ShptWeight").textContent = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;





  
  
  
    
       //! End Check Boxes


    }

    // ! Other 5 - 7
    else if (inputValue === "Truck Bill of lading") {
      let TruckBillOfLadingCertificateother5Modal = document.getElementById(
        "TruckBillOfLadingCertificateother5Modal"
      );
      let TruckBillOfLadingCertificateother5ModalTitle =
        document.getElementById("TruckBillOfLadingCertificateother5ModalTitle");
      console.log("Welcome to Truck Bill of lading");

      TruckBillOfLadingCertificateother5Modal.classList.add("show");
      TruckBillOfLadingCertificateother5Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      TruckBillOfLadingCertificateother5ModalTitle.innerText =
        document.getElementById("printPage_Other5SelectField").value;
      document.body.classList.add("modal-open");

      //  Truck Bill of lading

      document.getElementById("TruckBillOfLading5_AsAgents").value =
        document.getElementById("TransportInformation_TlForwarderName").value;
      document.getElementById("TruckBillOfLading5_AsAgentsAddress").value =
        document.getElementById("TransportInformation_ForwarderAddress").value;
      document.getElementById("TruckBillOfLading5_CarrierName").value =
        document.getElementById("TransportInformation_CarrierName").value;
      document.getElementById("TruckBillOfLading5_Notify").value =
        document.getElementById("lcInformationPageNotifyParty").value;
      document.getElementById("TruckBillOfLading5_ConsignedTo").value =
        document.getElementById("lcInformationPageConsignToParty").value;
      document.getElementById("TruckBillOfLading5_ShipDate").value =
        document.getElementById("Homepage_ShipDate").value;
      document.getElementById("TruckBillOfLading5_Freight").value =
        document.getElementById("lcInformationPageFreight").value;
      document.getElementById("TruckBillOfLading5_GrossWeight").value =
        document.getElementById("TransportInformation_GrossWeight").value;
      document.getElementById("TruckBillOfLading5_NoOfPieces").value =
        document.getElementById("TransportInformation_NumberOfPieces").value;
      

    
      // LC check
      var other5_LCNumberCheck = document.getElementById("other5_LCNumberCheck");
      var TruckBillOfLading5_LcNumberContainer = document.getElementById("TruckBillOfLading5_LcNumberContainer");
      if (other5_LCNumberCheck.checked) {
      TruckBillOfLading5_LcNumberContainer.style.display = "flex";
        document.getElementById("TruckBillOfLading5_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
      } else {
      TruckBillOfLading5_LcNumberContainer.style.display = "none";
      }



    // New
    document.getElementById("TruckBillOfLading5_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading5_ShipmentFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("TruckBillOfLading5_To").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("TruckBillOfLading5_GrossWeight").value =  document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;
    document.getElementById("TruckBillOfLading5_ShipperOrExporter").value =  document.getElementById("LCInformation_BENEFICIARYName").value;
    
    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("TruckBillOfLading5_FreeText1").value =  document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;
    document.getElementById("TruckBillOfLading5_FreeText2").value =  "ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON " + formattedDate ;
    document.getElementById("TruckBillOfLading5_FreeText3").value =  "ISSUED IN ONE (1) ORIGINAL.";
    

    var Other5_SecondApplicantCheck = document.getElementById("Other5_SecondApplicantCheck");
    if (Other5_SecondApplicantCheck.checked) {
      document.getElementById("TruckBillOfLading5_SecondApplicant").style.display = "flex";
      document.getElementById("TruckBillOfLading5_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      document.getElementById("TruckBillOfLading5_SecondApplicant").style.display = "none";
    }



    // New End




      document.getElementById("TruckBillOfLading5_BlNumber").value =
        document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

      var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
      if (other5_GlobalCheck.checked) {
        document.getElementById(
          "TruckBillOfLading5_LcGlobalCertifications"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
        document.getElementById(
          "TruckBillOfLading5_LcGlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "TruckBillOfLading5_LcGlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById(
          "TruckBillOfLading5_LcGlobalCertifications"
        ).value = "";
      }

      // Limited Certifications
      function updateLimitedCertificationsAWB() {
        var checkbox = document.getElementById(
          "lcInformationPageLimitedCertifications_BLcheckbox"
        );
        var textArea = document.getElementById(
          "TruckBillOfLading5_LcLimitedCertifications"
        );

        if (checkbox.checked) {
          textArea.value = document.getElementById(
            "lcInformationPageLimitedCertifications"
          ).value;
          textArea.style.display = "block";
        } else {
          textArea.value = "";
          // textArea.style.display = "none"; // Hide the text area
        }
      }

      document
        .getElementById("lcInformationPageLimitedCertifications_BLcheckbox")
        .addEventListener("change", updateLimitedCertificationsAWB);
      updateLimitedCertificationsAWB();
    }

    // ! Other 5 - 8
    else if (inputValue === "Steamship") {
      let SteamshipCertificateother5Modal = document.getElementById(
        "SteamshipCertificateother5Modal"
      );
      let SteamshipCertificateother5ModalTitle = document.getElementById(
        "SteamshipCertificateother5ModalTitle"
      );
      console.log("Welcome to Steamship");

      SteamshipCertificateother5Modal.classList.add("show");
      SteamshipCertificateother5Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");

     
      //  SteamShip Propogation
      if(!isDialogPopulated_SteamShip5){        
        document.getElementById("Steamship5_ShipDate").value =  document.getElementById("Homepage_ShipDate").value;        
        isDialogPopulated_SteamShip5 = true;
      }

      // 5nd Applicant
      var Other5_SecondApplicantCheck = document.getElementById("Other5_SecondApplicantCheck");
      var Steamship5_SecondApplicantContainer = document.getElementById("Steamship5_SecondApplicantContainer");

      if (Other5_SecondApplicantCheck.checked) {
        Steamship5_SecondApplicantContainer.style.display = "flex";
        document.getElementById("Steamship5_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
      } else {
        Steamship5_SecondApplicantContainer.style.display = "none";
      }





         // LC check
      var other5_LCNumberCheck = document.getElementById("other5_LCNumberCheck");
      var Steamship5_LcNumberContainer = document.getElementById("Steamship5_LcNumberContainer");
      if (other5_LCNumberCheck.checked) {
        Steamship5_LcNumberContainer.style.display = "flex";
        document.getElementById("Steamship5_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      } else {
        Steamship5_LcNumberContainer.style.display = "none";
      }

      document.getElementById("Steamship5_VesselName").value = document.getElementById("TransportInformation_VesselName").value


      var other5_GlobalCheck = document.getElementById("other5_GlobalCheck");
      if (other5_GlobalCheck.checked) {
        document.getElementById("Steamship5_GlobalCertifications").value =
          document.getElementById("LC_Information_Global_Certification").value;
        document.getElementById(
          "Steamship5_GlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "Steamship5_GlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById("Steamship5_GlobalCertifications").value = "";
      }
    } else {
      console.log("Other 5 - Select Wrong");
    }

    // All over
  });



  //  ! Other 6
let printPage_other6SelectField = document.getElementById(
  "printPage_Other6SelectField"
);
let isDialogPopulated_SteamShip6 = false;


printPage_other6SelectField.addEventListener("dblclick", function () {
  console.log("Other 6- Value: ");
  console.log(printPage_other6SelectField.value);
  var inputValue = printPage_other6SelectField.value;

  // ! Other 6 - 1
  if (inputValue === "Appended Declaration To Air Waybill") {
    let AppendedDeclarationToAirWaybillother6Modal = document.getElementById(
      "AppendedDeclarationToAirWaybillother6Modal"
    );
    let AppendedDeclarationToAirWaybillother6ModalTitle =
      document.getElementById(
        "AppendedDeclarationToAirWaybillother6ModalTitle"
      );
    console.log("yes");
    AppendedDeclarationToAirWaybillother6Modal.classList.add("show");
    AppendedDeclarationToAirWaybillother6Modal.style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    AppendedDeclarationToAirWaybillother6ModalTitle.innerText =
      printPage_other6SelectField.value;
    document.body.classList.add("modal-open");

    var textarea = document.getElementById(
      "AppendedDeclarationToAirWaybillother6Modal_LCNumber"
    );
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById(
      "AppendedDeclarationToAirWaybillother6Modal_NameOfPlane"
    ).value = document.getElementById(
      "TransportInformation_CarrierName"
    ).value;
    document.getElementById(
      "AppendedDeclarationToAirWaybillother6Modal_FlightNumber"
    ).value = document.getElementById(
      "TransportInformation_1stFlightNumber"
    ).value;
    document.getElementById(
      "AppendedDeclarationToAirWaybillother6Modal_PortOfLoading"
    ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById(
      "AppendedDeclarationToAirWaybillother6Modal_AirportsEnroute"
    ).value =
      document.getElementById("Homepage_LcCountry").options[
        document.getElementById("Homepage_LcCountry").selectedIndex
      ].textContent;
    document.getElementById(
      "AppendedDeclarationToAirWaybillother6Modal_Description"
    ).value =
      "THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
      document.getElementById("Homepage_LcCountry").options[
        document.getElementById("Homepage_LcCountry").selectedIndex
      ].textContent;

    // LC check
    var other6_LCNumberCheck = document.getElementById(
      "other6_LCNumberCheck"
    );
    var AppendedDeclarationToAirWaybillother6Modal_LCNumberContainer =
      document.getElementById(
        "AppendedDeclarationToAirWaybillother6Modal_LCNumberContainer"
      );
    if (other6_LCNumberCheck.checked) {
      AppendedDeclarationToAirWaybillother6Modal_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "AppendedDeclarationToAirWaybillother6Modal_LCNumber"
      ).value = document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      AppendedDeclarationToAirWaybillother6Modal_LCNumberContainer.style.display =
        "none";
    }

     // GLobal check
     var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
     var AppendedDeclarationToAirWaybillOther6Modal_GlobalContainer = document.getElementById("AppendedDeclarationToAirWaybillOther6Modal_GlobalContainer");
     if (other6_GlobalCheck.checked) {
       AppendedDeclarationToAirWaybillOther6Modal_GlobalContainer.style.display = "flex";
       document.getElementById("AppendedDeclarationToAirWaybillOther6Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
       document.getElementById("AppendedDeclarationToAirWaybillOther6Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
     } else {
       AppendedDeclarationToAirWaybillOther6Modal_GlobalContainer.style.display = "none";
     }




  }

  // ! Other 6 - 2
  else if (inputValue === "Certificate Appended To B/L") {
    let CertificateAppendedToBLother6Modal = document.getElementById(
      "CertificateAppendedToBLother6Modal"
    );
    let CertificateAppendedToBLother6ModalTitle = document.getElementById(
      "CertificateAppendedToBLother6ModalTitle"
    );
    console.log("yes");
    CertificateAppendedToBLother6Modal.classList.add("show");
    CertificateAppendedToBLother6Modal.style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    CertificateAppendedToBLother6ModalTitle.innerText =
      printPage_other6SelectField.value;
    document.body.classList.add("modal-open");

    var textarea = document.getElementById(
      "CertificateAppendedToBLother6Modal_LCNumber"
    );
    textarea.focus();
    textarea.scrollIntoView();

    document.getElementById(
      "CertificateAppendedToBLother6Modal_NameOfPlane"
    ).value = document.getElementById(
      "TransportInformation_VesselName"
    ).value;
    document.getElementById(
      "CertificateAppendedToBLother6Modal_PortOfLoading"
    ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById(
      "CertificateAppendedToBLother6Modal_VesselEnroute"
    ).value =
      document.getElementById("Homepage_LcCountry").options[
        document.getElementById("Homepage_LcCountry").selectedIndex
      ].textContent;
    document.getElementById(
      "CertificateAppendedToBLother6Modal_Description"
    ).value =
      "THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
      document.getElementById("Homepage_LcCountry").options[
        document.getElementById("Homepage_LcCountry").selectedIndex
      ].textContent;

    // LC check
    var other6_LCNumberCheck = document.getElementById(
      "other6_LCNumberCheck"
    );
    var CertificateAppendedToBLother6Modal_LCNumberContainer =
      document.getElementById(
        "CertificateAppendedToBLother6Modal_LCNumberContainer"
      );
    if (other6_LCNumberCheck.checked) {
      CertificateAppendedToBLother6Modal_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "CertificateAppendedToBLother6Modal_LCNumber"
      ).value = document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      CertificateAppendedToBLother6Modal_LCNumberContainer.style.display =
        "none";
    }


      // GLobal check
      var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
      var CertificateAppendedToBLOther6Modal_GlobalContainer = document.getElementById("CertificateAppendedToBLOther6Modal_GlobalContainer");
      if (other6_GlobalCheck.checked) {
      CertificateAppendedToBLOther6Modal_GlobalContainer.style.display = "flex";
        document.getElementById("CertificateAppendedToBLOther6Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("CertificateAppendedToBLOther6Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
      CertificateAppendedToBLOther6Modal_GlobalContainer.style.display = "none";
      }



  }

  // ! Other 6 - 3
  else if (inputValue === "Certificate Appended To Insurance Certificate") {
    let CertificateAppendedToInsuranceCertificateother6Modal =
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother6Modal"
      );
    let CertificateAppendedToInsuranceCertificateother6ModalTitle =
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother6ModalTitle"
      );

    CertificateAppendedToInsuranceCertificateother6Modal.classList.add(
      "show"
    );
    CertificateAppendedToInsuranceCertificateother6Modal.style.display =
      "block";
    document.getElementById("modalOverlay").style.display = "block";
    CertificateAppendedToInsuranceCertificateother6ModalTitle.innerText =
      document.getElementById("printPage_Other6SelectField").value;
    document.body.classList.add("modal-open");

    var textarea = document.getElementById(
      "CertificateAppendedToInsuranceother6Modal_LCNumber"
    );
    console.log("Sherry ka focus", textarea);
    textarea.focus();
    textarea.scrollIntoView();
    console.log("yes");

    document.getElementById(
      "CertificateAppendedToInsuranceother6Modal_NameOfInsuranceCompany"
    ).value = document.getElementById(
      "TransportInformation_InsuranceCompanyName"
    ).value;
    document.getElementById(
      "CertificateAppendedToInsuranceother6Modal_Description"
    ).value =
      "THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE " +
      document.getElementById("Homepage_LcCountry").options[
        document.getElementById("Homepage_LcCountry").selectedIndex
      ].textContent;
    document.getElementById(
      "CertificateAppendedToInsuranceother6Modal_DateAt"
    ).value = document.getElementById("lcInformationPageLoadOnBoard").value;

    // LC check
    var other6_LCNumberCheck = document.getElementById(
      "other6_LCNumberCheck"
    );
    var CertificateAppendedToInsuranceother6Modal_LCNumberContainer =
      document.getElementById(
        "CertificateAppendedToInsuranceother6Modal_LCNumberContainer"
      );
    if (other6_LCNumberCheck.checked) {
      CertificateAppendedToInsuranceother6Modal_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "CertificateAppendedToInsuranceother6Modal_LCNumber"
      ).value = document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      CertificateAppendedToInsuranceother6Modal_LCNumberContainer.style.display =
        "none";
    }

    // GLobal check
    var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
    var CertificateAppendedToInsuranceother6Modal_GlobalContainer =
      document.getElementById(
        "CertificateAppendedToInsuranceother6Modal_GlobalContainer"
      );
    if (other6_GlobalCheck.checked) {
      CertificateAppendedToInsuranceother6Modal_GlobalContainer.style.display =
        "flex";
      document.getElementById(
        "CertificateAppendedToInsuranceother6Modal_GlobalLabel"
      ).innerText = "GLOBAL CERTIFICATION";
      document.getElementById(
        "CertificateAppendedToInsuranceother6Modal_Global"
      ).value = document.getElementById(
        "LC_Information_Global_Certification"
      ).value;
    } else {
      CertificateAppendedToInsuranceother6Modal_GlobalContainer.style.display =
        "none";
    }
  }

  // ! Other 6 - 4
  else if (inputValue === "Email Form") {
    console.log("Welcome to Email Form");
    let EmailFormCertificateother6Modal = document.getElementById(
      "EmailFormCertificateother6Modal"
    );
    let EmailFormCertificateother6ModalTitle = document.getElementById(
      "EmailFormCertificateother6ModalTitle"
    );

    EmailFormCertificateother6Modal.classList.add("show");
    EmailFormCertificateother6Modal.style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    // EmailFormCertificateother6ModalTitle.innerText = printPage_Other6SelectField.value;







    // LC check
    var Other6_LCNumberCheck = document.getElementById(
      "other6_LCNumberCheck"
    );
    var EmailForm6_LCNumberContainer =
      document.getElementById(
        "EmailForm6_LCNumberContainer"
      );
    if (Other6_LCNumberCheck.checked) {
      EmailForm6_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "EmailForm6_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      EmailForm6_LCNumberContainer.style.display =
        "none";
    }


    document.getElementById("EmailForm6_BeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    // GLobal check
    var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
    var EmailForm6_GlobalCertificationContainer = document.getElementById("EmailForm6_GlobalCertificationContainer");
    if (other6_GlobalCheck.checked) {
      EmailForm6_GlobalCertificationContainer.style.display = "flex";
      document.getElementById("EmailForm6_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      EmailForm6_GlobalCertificationContainer.style.display = "none";
    }

    document.getElementById("EmailForm6_Sent").value = formatDate(currentDate);


    // 6nd Applicant
    var Other6_SecondApplicantCheck = document.getElementById("Other6_SecondApplicantCheck");
    var EmailForm6_SecondApplicantContainer = document.getElementById("EmailForm6_SecondApplicantContainer");

    if (Other6_SecondApplicantCheck.checked) {
      EmailForm6_SecondApplicantContainer.style.display = "flex";
      document.getElementById("EmailForm6_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      EmailForm6_SecondApplicantContainer.style.display = "none";
    }

    document.getElementById("EmailForm6_BeneName1").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("EmailForm6_BeneAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;




    document.body.classList.add("modal-open");
  }

  // ! Other 6 - 5
  else if (inputValue === "Fax Activity") {
    let FaxActivityCertificateother6Modal = document.getElementById(
      "FaxActivityCertificateother6Modal"
    );

    let isDialogPopulated_Fax6 = false;

    let FaxActivityCertificateother6ModalTitle = document.getElementById(
      "FaxActivityCertificateother6ModalTitle"
    );
    console.log("Welcome to Fax Activity");

    FaxActivityCertificateother6Modal.classList.add("show");
    FaxActivityCertificateother6Modal.style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    document.body.classList.add("modal-open");



    // LC check
    var Other6_LCNumberCheck = document.getElementById(
      "other6_LCNumberCheck"
    );
    var FaxActivity6_LCNumberContainer =
      document.getElementById(
        "FaxActivity6_LCNumberContainer"
      );
    if (Other6_LCNumberCheck.checked) {
      FaxActivity6_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "FaxActivity6_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      FaxActivity6_LCNumberContainer.style.display =
        "none";
    }

     // GLobal check
 var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
 var FaxActivity6_GlobalCertificationContainer = document.getElementById("FaxActivity6_GlobalCertificationContainer");
 if (other6_GlobalCheck.checked) {
   FaxActivity6_GlobalCertificationContainer.style.display = "flex";
   document.getElementById("FaxActivity6_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
 } else {
   FaxActivity6_GlobalCertificationContainer.style.display ="none";
 }


    //  SteamShip Propogation
    if(!isDialogPopulated_Fax6){        
      document.getElementById("FaxActivity6_FaxDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_Fax6 = true;
    }

    document.getElementById("FaxActivity6_PrintTime").value =  document.getElementById("Homepage_ShipDate").value;    
    
    
    // 2nd Applicant
    var Other6_SecondApplicantCheck = document.getElementById("Other6_SecondApplicantCheck");
    var FaxActivity6_SecondApplicantContainer = document.getElementById("FaxActivity6_SecondApplicantContainer");

    if (Other6_SecondApplicantCheck.checked) {
      FaxActivity6_SecondApplicantContainer.style.display = "flex";
      document.getElementById("FaxActivity6_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      FaxActivity6_SecondApplicantContainer.style.display = "none";
    }

    function setTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('FaxActivity6_PrintTime2').value = `${hours}:${minutes}`;
  }
  
    setTime();





  }

  // ! Other 6 - 6
  else if (inputValue === "DHL Form") {
    let DhlFormCertificateother6Modal = document.getElementById(
      "DhlFormCertificateother6Modal"
    );
    let DhlFormCertificateother6ModalTitle = document.getElementById(
      "DhlFormCertificateother6ModalTitle"
    );

    console.log("Welcome to DHL Form");
    DhlFormCertificateother6Modal.classList.add("show");
    DhlFormCertificateother6Modal.style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    document.body.classList.add("modal-open");

      //! Check Box Check
      if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
        document.getElementById("DhlFormOther6_DCS").value = DCSText;
      } else {
      document.getElementById("DhlFormOther6_DCS").value = "";
      }


      // LC check
      if (document.getElementById("other6_LCNumberCheck").checked) {
        document.getElementById("DhlFormOther6_LcNumberContainer1").style.display = "inline-block";
        document.getElementById("DhlFormOther6_LcNumberContainer2").style.display = "inline-block";
        document.getElementById("DhlFormOther6_LcNumber").value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        document.getElementById("DhlFormOther6_LcNumberContainer1").style.display = "none";
        document.getElementById("DhlFormOther6_LcNumberContainer2").style.display = "none";
      }

      // GLobal check
      var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
      var DhlFormOther6_GlobalCertificationContainer = document.getElementById("DhlFormOther6_GlobalCertificationContainer");
      if (other6_GlobalCheck.checked) {
        DhlFormOther6_GlobalCertificationContainer.style.display = "flex";
        document.getElementById("DhlFormOther6_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
        DhlFormOther6_GlobalCertificationContainer.style.display ="none";
      }

      document.getElementById("DhlFormOther6_From").value = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
      document.getElementById("DhlFormOther6_To").value = document.getElementById("LCInformation_BENEFICIARYName").value;
      document.getElementById("DhlFormOther6_ToAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;
      document.getElementById("DhlFormOther6_Date").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("DhlFormOther6_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("DhlFormOther6_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
      document.getElementById("DhlFormOther6_Piece").textContent = document.getElementById("TransportInformation_NumberOfPieces").value;
      document.getElementById("DhlFormOther6_ShptWeight").textContent = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;






  
     //! End Check Boxes


  }

  // ! Other 6 - 7
  else if (inputValue === "Truck Bill of lading") {
    let TruckBillOfLadingCertificateother6Modal = document.getElementById(
      "TruckBillOfLadingCertificateother6Modal"
    );
    let TruckBillOfLadingCertificateother6ModalTitle =
      document.getElementById("TruckBillOfLadingCertificateother6ModalTitle");
    console.log("Welcome to Truck Bill of lading");

    TruckBillOfLadingCertificateother6Modal.classList.add("show");
    TruckBillOfLadingCertificateother6Modal.style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    TruckBillOfLadingCertificateother6ModalTitle.innerText =
      document.getElementById("printPage_Other6SelectField").value;
    document.body.classList.add("modal-open");

    //  Truck Bill of lading

    document.getElementById("TruckBillOfLading6_AsAgents").value =
      document.getElementById("TransportInformation_TlForwarderName").value;
    document.getElementById("TruckBillOfLading6_AsAgentsAddress").value =
      document.getElementById("TransportInformation_ForwarderAddress").value;
    document.getElementById("TruckBillOfLading6_CarrierName").value =
      document.getElementById("TransportInformation_CarrierName").value;
    document.getElementById("TruckBillOfLading6_Notify").value =
      document.getElementById("lcInformationPageNotifyParty").value;
    document.getElementById("TruckBillOfLading6_ConsignedTo").value =
      document.getElementById("lcInformationPageConsignToParty").value;
    document.getElementById("TruckBillOfLading6_ShipDate").value =
      document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading6_Freight").value =
      document.getElementById("lcInformationPageFreight").value;
    document.getElementById("TruckBillOfLading6_GrossWeight").value =
      document.getElementById("TransportInformation_GrossWeight").value;
    document.getElementById("TruckBillOfLading6_NoOfPieces").value =
      document.getElementById("TransportInformation_NumberOfPieces").value;
   

  
    // LC check
    var other6_LCNumberCheck = document.getElementById("other6_LCNumberCheck");
    var TruckBillOfLading6_LcNumberContainer = document.getElementById("TruckBillOfLading6_LcNumberContainer");
    if (other6_LCNumberCheck.checked) {
      TruckBillOfLading6_LcNumberContainer.style.display = "flex";
      document.getElementById("TruckBillOfLading6_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
    } else {
    TruckBillOfLading6_LcNumberContainer.style.display = "none";
    }




    // New
    document.getElementById("TruckBillOfLading6_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading6_ShipmentFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("TruckBillOfLading6_To").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("TruckBillOfLading6_GrossWeight").value =  document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;
    document.getElementById("TruckBillOfLading6_ShipperOrExporter").value =  document.getElementById("LCInformation_BENEFICIARYName").value;
    
    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("TruckBillOfLading6_FreeText1").value =  document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;
    document.getElementById("TruckBillOfLading6_FreeText2").value =  "ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON " + formattedDate ;
    document.getElementById("TruckBillOfLading6_FreeText3").value =  "ISSUED IN ONE (1) ORIGINAL.";
    

    var Other6_SecondApplicantCheck = document.getElementById("Other6_SecondApplicantCheck");
    if (Other6_SecondApplicantCheck.checked) {
      document.getElementById("TruckBillOfLading6_SecondApplicant").style.display = "flex";
      document.getElementById("TruckBillOfLading6_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      document.getElementById("TruckBillOfLading6_SecondApplicant").style.display = "none";
    }



    // New End




    document.getElementById("TruckBillOfLading6_BlNumber").value =
      document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;

    var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
    if (other6_GlobalCheck.checked) {
      document.getElementById(
        "TruckBillOfLading6_LcGlobalCertifications"
      ).value = document.getElementById(
        "LC_Information_Global_Certification"
      ).value;
      document.getElementById(
        "TruckBillOfLading6_LcGlobalCertificationsContainer"
      ).style.display = "block";
    } else {
      document.getElementById(
        "TruckBillOfLading6_LcGlobalCertificationsContainer"
      ).style.display = "none";
      document.getElementById(
        "TruckBillOfLading6_LcGlobalCertifications"
      ).value = "";
    }

    // Limited Certifications
    function updateLimitedCertificationsAWB() {
      var checkbox = document.getElementById(
        "lcInformationPageLimitedCertifications_BLcheckbox"
      );
      var textArea = document.getElementById(
        "TruckBillOfLading6_LcLimitedCertifications"
      );

      if (checkbox.checked) {
        textArea.value = document.getElementById(
          "lcInformationPageLimitedCertifications"
        ).value;
        textArea.style.display = "block";
      } else {
        textArea.value = "";
        // textArea.style.display = "none"; // Hide the text area
      }
    }

    document
      .getElementById("lcInformationPageLimitedCertifications_BLcheckbox")
      .addEventListener("change", updateLimitedCertificationsAWB);
    updateLimitedCertificationsAWB();
  }

  // ! Other 6 - 8
  else if (inputValue === "Steamship") {
    let SteamshipCertificateother6Modal = document.getElementById(
      "SteamshipCertificateother6Modal"
    );
    let SteamshipCertificateother6ModalTitle = document.getElementById(
      "SteamshipCertificateother6ModalTitle"
    );
    console.log("Welcome to Steamship");

    SteamshipCertificateother6Modal.classList.add("show");
    SteamshipCertificateother6Modal.style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
    // SteamshipCertificateother6Modal.innerText = printPage_other6SelectField.value;
    document.body.classList.add("modal-open");


    //  SteamShip Propogation
    if(!isDialogPopulated_SteamShip6){        
      document.getElementById("Steamship6_ShipDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_SteamShip6= true;
    }

    // 6nd Applicant
    var Other6_SecondApplicantCheck = document.getElementById("Other6_SecondApplicantCheck");
    var Steamship6_SecondApplicantContainer = document.getElementById("Steamship6_SecondApplicantContainer");

    if (Other6_SecondApplicantCheck.checked) {
      Steamship6_SecondApplicantContainer.style.display = "flex";
      document.getElementById("Steamship6_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      Steamship6_SecondApplicantContainer.style.display = "none";
    }



    // LC check
     var other6_LCNumberCheck = document.getElementById("other6_LCNumberCheck");
     var Steamship6_LcNumberContainer = document.getElementById("Steamship6_LcNumberContainer");
     if (other6_LCNumberCheck.checked) {
       Steamship6_LcNumberContainer.style.display = "flex";
       document.getElementById("Steamship6_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
     } else {
       Steamship6_LcNumberContainer.style.display = "none";
     }


     document.getElementById("Steamship6_VesselName").value = document.getElementById("TransportInformation_VesselName").value


    var other6_GlobalCheck = document.getElementById("other6_GlobalCheck");
    if (other6_GlobalCheck.checked) {
      document.getElementById("Steamship6_GlobalCertifications").value =
        document.getElementById("LC_Information_Global_Certification").value;
      document.getElementById(
        "Steamship6_GlobalCertificationsContainer"
      ).style.display = "block";
    } else {
      document.getElementById(
        "Steamship6_GlobalCertificationsContainer"
      ).style.display = "none";
      document.getElementById("Steamship6_GlobalCertifications").value = "";
    }
  } else {
    console.log("Other 6 - Select Wrong");
  }

  // All over
});



  //  ! Other 7
  let printPage_Other7SelectField = document.getElementById(
    "printPage_Other7SelectField"
  );
  let isDialogPopulated_SteamShip7 = false;

  
  printPage_Other7SelectField.addEventListener("dblclick", function () {
    console.log("Other 7- Value: ");
    console.log(printPage_Other7SelectField.value);
    var inputValue = printPage_Other7SelectField.value;
  
    // ! Other 7 - 1
    if (inputValue === "Appended Declaration To Air Waybill") {
      let AppendedDeclarationToAirWaybillother7Modal = document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal"
      );
      let AppendedDeclarationToAirWaybillother7ModalTitle =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother7ModalTitle"
        );
      console.log("yes");
      AppendedDeclarationToAirWaybillother7Modal.classList.add("show");
      AppendedDeclarationToAirWaybillother7Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      AppendedDeclarationToAirWaybillother7ModalTitle.innerText =
        printPage_Other7SelectField.value;
      document.body.classList.add("modal-open");
  
      var textarea = document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();
  
      document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_CarrierName"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal_FlightNumber"
      ).value = document.getElementById(
        "TransportInformation_1stFlightNumber"
      ).value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal_AirportsEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal_Description"
      ).value =
        "THE UNDERSIGNED [AGENT, CAPTAIN, ETC.] OF THE PLANE ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4 ABOVE) IS CORRECT AND COMPLETE AND THE PLANE SHALL NOT CALL AT OR ANCHOR ON ANY OTHER AIRPORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
  
      // LC check
      var Other7_LCNumberCheck = document.getElementById(
        "other7_LCNumberCheck"
      );
      var AppendedDeclarationToAirWaybillOther7Modal_LCNumberContainer =
        document.getElementById(
          "AppendedDeclarationToAirWaybillother7Modal_LCNumberContainer"
        );
      if (Other7_LCNumberCheck.checked) {
        AppendedDeclarationToAirWaybillOther7Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "AppendedDeclarationToAirWaybillother7Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        AppendedDeclarationToAirWaybillOther7Modal_LCNumberContainer.style.display =
          "none";
      }

       // GLobal check
       var other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
       var AppendedDeclarationToAirWaybillOther7Modal_GlobalContainer = document.getElementById("AppendedDeclarationToAirWaybillOther7Modal_GlobalContainer");
       if (other7_GlobalCheck.checked) {
         AppendedDeclarationToAirWaybillOther7Modal_GlobalContainer.style.display = "flex";
         document.getElementById("AppendedDeclarationToAirWaybillOther7Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
         document.getElementById("AppendedDeclarationToAirWaybillOther7Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
       } else {
         AppendedDeclarationToAirWaybillOther7Modal_GlobalContainer.style.display = "none";
       }


    }
  
    // ! Other 7 - 2
    else if (inputValue === "Certificate Appended To B/L") {
      let CertificateAppendedToBLOther7Modal = document.getElementById(
        "CertificateAppendedToBLother7Modal"
      );
      let CertificateAppendedToBLOther7ModalTitle = document.getElementById(
        "CertificateAppendedToBLother7ModalTitle"
      );
      console.log("yes");
      CertificateAppendedToBLOther7Modal.classList.add("show");
      CertificateAppendedToBLOther7Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToBLOther7ModalTitle.innerText =
        printPage_Other7SelectField.value;
      document.body.classList.add("modal-open");
  
      var textarea = document.getElementById(
        "CertificateAppendedToBLother7Modal_LCNumber"
      );
      textarea.focus();
      textarea.scrollIntoView();
  
      document.getElementById(
        "CertificateAppendedToBLother7Modal_NameOfPlane"
      ).value = document.getElementById(
        "TransportInformation_VesselName"
      ).value;
      document.getElementById(
        "CertificateAppendedToBLother7Modal_PortOfLoading"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
      document.getElementById(
        "CertificateAppendedToBLother7Modal_VesselEnroute"
      ).value =
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToBLother7Modal_Description"
      ).value =
        "THE UNDERSIGNED (THE OWNER, AGENT, CAPTAIN OR COMPANY OF VESSEL) ACCORDINGLY DECLARES THAT THE INFORMATION PROVIDED (IN RESPONSES TO 1 TO 4) ABOVE IS CORRECT AND COMPLETE AND THE VESSEL SHALL NOT CALL AT OR ANCHOR ON ANY OTHER PORTS OTHER THAN THAT MENTIONED ABOVE ENROUTE TO " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
  
      // LC check
      var Other7_LCNumberCheck = document.getElementById(
        "other7_LCNumberCheck"
      );
      var CertificateAppendedToBLOther7Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToBLother7Modal_LCNumberContainer"
        );
      if (Other7_LCNumberCheck.checked) {
        CertificateAppendedToBLOther7Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToBLother7Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToBLOther7Modal_LCNumberContainer.style.display =
          "none";
      }


      // GLobal check
      var other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
      var CertificateAppendedToBLOther7Modal_GlobalContainer = document.getElementById("CertificateAppendedToBLOther7Modal_GlobalContainer");
      if (other7_GlobalCheck.checked) {
      CertificateAppendedToBLOther7Modal_GlobalContainer.style.display = "flex";
        document.getElementById("CertificateAppendedToBLOther7Modal_GlobalLabel").innerText = "GLOBAL CERTIFICATION";
        document.getElementById("CertificateAppendedToBLOther7Modal_Global").value = document.getElementById("LC_Information_Global_Certification").value;
      } else {
      CertificateAppendedToBLOther7Modal_GlobalContainer.style.display = "none";
      }

      
    }
  
    // ! Other 7 - 3
    else if (inputValue === "Certificate Appended To Insurance Certificate") {
      let CertificateAppendedToInsuranceCertificateOther7Modal =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother7Modal"
        );
      let CertificateAppendedToInsuranceCertificateOther7ModalTitle =
        document.getElementById(
          "CertificateAppendedToInsuranceCertificateother7ModalTitle"
        );
  
      CertificateAppendedToInsuranceCertificateOther7Modal.classList.add(
        "show"
      );
      CertificateAppendedToInsuranceCertificateOther7Modal.style.display =
        "block";
      document.getElementById("modalOverlay").style.display = "block";
      CertificateAppendedToInsuranceCertificateOther7ModalTitle.innerText =
        document.getElementById("printPage_Other7SelectField").value;
      document.body.classList.add("modal-open");
  
      var textarea = document.getElementById(
        "CertificateAppendedToInsuranceother7Modal_LCNumber"
      );
      console.log("Sherry ka focus", textarea);
      textarea.focus();
      textarea.scrollIntoView();
      console.log("yes");
  
      document.getElementById(
        "CertificateAppendedToInsuranceother7Modal_NameOfInsuranceCompany"
      ).value = document.getElementById(
        "TransportInformation_InsuranceCompanyName"
      ).value;
      document.getElementById(
        "CertificateAppendedToInsuranceother7Modal_Description"
      ).value =
        "THE UNDERSIGNED DOES HEREBY CERTIFY ON BEHALF OF THE ABOVE NAMED INSURANCE COMPANY THAT THE SAID COMPANY HAS DULY QUALIFIED AND APPOINTED PAYING AGENT OR REPRESENTATIVE IN THE " +
        document.getElementById("Homepage_LcCountry").options[
          document.getElementById("Homepage_LcCountry").selectedIndex
        ].textContent;
      document.getElementById(
        "CertificateAppendedToInsuranceother7Modal_DateAt"
      ).value = document.getElementById("lcInformationPageLoadOnBoard").value;
  
      // LC check
      var Other7_LCNumberCheck = document.getElementById(
        "other7_LCNumberCheck"
      );
      var CertificateAppendedToInsuranceOther7Modal_LCNumberContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother7Modal_LCNumberContainer"
        );
      if (Other7_LCNumberCheck.checked) {
        CertificateAppendedToInsuranceOther7Modal_LCNumberContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother7Modal_LCNumber"
        ).value = document.getElementById("Homepage_IssuingBankRef").value;
      } else {
        CertificateAppendedToInsuranceOther7Modal_LCNumberContainer.style.display =
          "none";
      }
  
      // GLobal check
      var Other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
      var CertificateAppendedToInsuranceOther7Modal_GlobalContainer =
        document.getElementById(
          "CertificateAppendedToInsuranceother7Modal_GlobalContainer"
        );
      if (Other7_GlobalCheck.checked) {
        CertificateAppendedToInsuranceOther7Modal_GlobalContainer.style.display =
          "flex";
        document.getElementById(
          "CertificateAppendedToInsuranceother7Modal_GlobalLabel"
        ).innerText = "GLOBAL CERTIFICATION";
        document.getElementById(
          "CertificateAppendedToInsuranceother7Modal_Global"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
      } else {
        CertificateAppendedToInsuranceOther7Modal_GlobalContainer.style.display =
          "none";
      }
    }
  
    // ! Other 7 - 4
    else if (inputValue === "Email Form") {
      console.log("Welcome to Email Form");
      let EmailFormCertificateOther7Modal = document.getElementById(
        "EmailFormCertificateother7Modal"
      );
      let EmailFormCertificateOther7ModalTitle = document.getElementById(
        "EmailFormCertificateother7ModalTitle"
      );
  
      EmailFormCertificateOther7Modal.classList.add("show");
      EmailFormCertificateOther7Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";


      

    // LC check
    var Other7_LCNumberCheck = document.getElementById(
      "other7_LCNumberCheck"
    );
    var EmailForm7_LCNumberContainer =
      document.getElementById(
        "EmailForm7_LCNumberContainer"
      );
    if (Other7_LCNumberCheck.checked) {
      EmailForm7_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "EmailForm7_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      EmailForm7_LCNumberContainer.style.display =
        "none";
    }

    document.getElementById("EmailForm7_BeneName").value = document.getElementById("LCInformation_BENEFICIARYName").value;

    // GLobal check
    var other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
    var EmailForm7_GlobalCertificationContainer = document.getElementById("EmailForm7_GlobalCertificationContainer");
    if (other7_GlobalCheck.checked) {
      EmailForm7_GlobalCertificationContainer.style.display = "flex";
      document.getElementById("EmailForm7_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
    } else {
      EmailForm7_GlobalCertificationContainer.style.display = "none";
    }

    document.getElementById("EmailForm7_Sent").value = formatDate(currentDate);

    // 7nd Applicant
    var Other7_SecondApplicantCheck = document.getElementById("Other7_SecondApplicantCheck");
    var EmailForm7_SecondApplicantContainer = document.getElementById("EmailForm7_SecondApplicantContainer");

    if (Other7_SecondApplicantCheck.checked) {
      EmailForm7_SecondApplicantContainer.style.display = "flex";
      document.getElementById("EmailForm7_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      EmailForm7_SecondApplicantContainer.style.display = "none";
    }

    document.getElementById("EmailForm7_BeneName1").value = document.getElementById("LCInformation_BENEFICIARYName").value;
    document.getElementById("EmailForm7_BeneAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;




      document.body.classList.add("modal-open");
    }
  
    // ! Other 7 - 5
    else if (inputValue === "Fax Activity") {
      let FaxActivityCertificateOther7Modal = document.getElementById(
        "FaxActivityCertificateother7Modal"
      );

      let isDialogPopulated_Fax7 = false;


      let FaxActivityCertificateOther7ModalTitle = document.getElementById(
        "FaxActivityCertificateother7ModalTitle"
      );
      console.log("Welcome to Fax Activity");
  
      FaxActivityCertificateOther7Modal.classList.add("show");
      FaxActivityCertificateOther7Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


      // LC check
    var Other7_LCNumberCheck = document.getElementById(
      "other7_LCNumberCheck"
    );
    var FaxActivity7_LCNumberContainer =
      document.getElementById(
        "FaxActivity7_LCNumberContainer"
      );
    if (Other7_LCNumberCheck.checked) {
      FaxActivity7_LCNumberContainer.style.display =
        "flex";
      document.getElementById(
        "FaxActivity7_LCNumber"
      ).value = "LC Number: " + document.getElementById("Homepage_IssuingBankRef").value;
    } else {
      FaxActivity7_LCNumberContainer.style.display =
        "none";
    }

     // GLobal check
 var other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
 var FaxActivity7_GlobalCertificationContainer = document.getElementById("FaxActivity7_GlobalCertificationContainer");
 if (other7_GlobalCheck.checked) {
   FaxActivity7_GlobalCertificationContainer.style.display = "flex";
   document.getElementById("FaxActivity7_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
 } else {
   FaxActivity7_GlobalCertificationContainer.style.display ="none";
 }



    //  SteamShip Propogation
    if(!isDialogPopulated_Fax7){        
      document.getElementById("FaxActivity7_FaxDate").value =  document.getElementById("Homepage_ShipDate").value;        
      isDialogPopulated_Fax7 = true;
    }

    document.getElementById("FaxActivity7_PrintTime").value =  document.getElementById("Homepage_ShipDate").value;    
    
    
    // 2nd Applicant
    var Other7_SecondApplicantCheck = document.getElementById("Other7_SecondApplicantCheck");
    var FaxActivity7_SecondApplicantContainer = document.getElementById("FaxActivity7_SecondApplicantContainer");

    if (Other7_SecondApplicantCheck.checked) {
      FaxActivity7_SecondApplicantContainer.style.display = "flex";
      document.getElementById("FaxActivity7_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      FaxActivity7_SecondApplicantContainer.style.display = "none";
    }

    function setTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('FaxActivity7_PrintTime2').value = `${hours}:${minutes}`;
  }
  
    setTime();





    }
  
    // ! Other 7 - 6
    else if (inputValue === "DHL Form") {
      let DhlFormCertificateOther7Modal = document.getElementById(
        "DhlFormCertificateother7Modal"
      );
      let DhlFormCertificateOther7ModalTitle = document.getElementById(
        "DhlFormCertificateother7ModalTitle"
      );
  
      console.log("Welcome to DHL Form");
      DhlFormCertificateOther7Modal.classList.add("show");
      DhlFormCertificateOther7Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");

         //! Check Box Check
         if (document.getElementById("printPageDestinationControlStatementCheck").checked) {
          document.getElementById("DhlFormOther7_DCS").value = DCSText;
        } else {
        document.getElementById("DhlFormOther7_DCS").value = "";
        }

        // LC check
        if (document.getElementById("other7_LCNumberCheck").checked) {
          document.getElementById("DhlFormOther7_LcNumberContainer1").style.display = "inline-block";
          document.getElementById("DhlFormOther7_LcNumberContainer2").style.display = "inline-block";
          document.getElementById("DhlFormOther7_LcNumber").value = document.getElementById("Homepage_IssuingBankRef").value;
        } else {
          document.getElementById("DhlFormOther7_LcNumberContainer1").style.display = "none";
          document.getElementById("DhlFormOther7_LcNumberContainer2").style.display = "none";
        }

        // GLobal check
        var other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
        var DhlFormOther7_GlobalCertificationContainer = document.getElementById("DhlFormOther7_GlobalCertificationContainer");
        if (other7_GlobalCheck.checked) {
          DhlFormOther7_GlobalCertificationContainer.style.display = "flex";
          document.getElementById("DhlFormOther7_GlobalCertification").value = document.getElementById("LC_Information_Global_Certification").value;
        } else {
          DhlFormOther7_GlobalCertificationContainer.style.display ="none";
        }

        document.getElementById("DhlFormOther7_From").value = document.getElementById("lcInformationPageApplicantName").value + " \n" + document.getElementById("lcInformationPageApplicantAddress").value;
        document.getElementById("DhlFormOther7_To").value = document.getElementById("LCInformation_BENEFICIARYName").value;
        document.getElementById("DhlFormOther7_ToAddress").value = document.getElementById("LCInformation_BENEFICIARYAddress").value;
        document.getElementById("DhlFormOther7_Date").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther7_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther7_ChangeDate").value = document.getElementById("Homepage_ShipDate").value;
        document.getElementById("DhlFormOther7_Piece").textContent = document.getElementById("TransportInformation_NumberOfPieces").value;
        document.getElementById("DhlFormOther7_ShptWeight").textContent = document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;



          
  
  
    
       //! End Check Boxes


    }
  
    // ! Other 7 - 7
    else if (inputValue === "Truck Bill of lading") {
      let TruckBillOfLadingCertificateOther7Modal = document.getElementById(
        "TruckBillOfLadingCertificateother7Modal"
      );
      let TruckBillOfLadingCertificateOther7ModalTitle =
        document.getElementById("TruckBillOfLadingCertificateother7ModalTitle");
      console.log("Welcome to Truck Bill of lading");
  
      TruckBillOfLadingCertificateOther7Modal.classList.add("show");
      TruckBillOfLadingCertificateOther7Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      TruckBillOfLadingCertificateOther7ModalTitle.innerText =
        document.getElementById("printPage_Other7SelectField").value;
      document.body.classList.add("modal-open");
  
      //  Truck Bill of lading
  
      document.getElementById("TruckBillOfLading7_AsAgents").value =
        document.getElementById("TransportInformation_TlForwarderName").value;
      document.getElementById("TruckBillOfLading7_AsAgentsAddress").value =
        document.getElementById("TransportInformation_ForwarderAddress").value;
      document.getElementById("TruckBillOfLading7_CarrierName").value =
        document.getElementById("TransportInformation_CarrierName").value;
      document.getElementById("TruckBillOfLading7_Notify").value =
        document.getElementById("lcInformationPageNotifyParty").value;
      document.getElementById("TruckBillOfLading7_ConsignedTo").value =
        document.getElementById("lcInformationPageConsignToParty").value;
      document.getElementById("TruckBillOfLading7_ShipDate").value =
        document.getElementById("Homepage_ShipDate").value;
      document.getElementById("TruckBillOfLading7_Freight").value =
        document.getElementById("lcInformationPageFreight").value;
      document.getElementById("TruckBillOfLading7_GrossWeight").value =
        document.getElementById("TransportInformation_GrossWeight").value;
      document.getElementById("TruckBillOfLading7_NoOfPieces").value =
        document.getElementById("TransportInformation_NumberOfPieces").value;
     


     // LC check
    var other7_LCNumberCheck = document.getElementById("other7_LCNumberCheck");
    var TruckBillOfLading7_LcNumberContainer = document.getElementById("TruckBillOfLading7_LcNumberContainer");
    if (other7_LCNumberCheck.checked) {
      TruckBillOfLading7_LcNumberContainer.style.display = "flex";
      document.getElementById("TruckBillOfLading7_LcNumber").value = "LC Number: " + document.getElementById("lcInformationPageLcNumber").value;
    } else {
    TruckBillOfLading7_LcNumberContainer.style.display = "none";
    
    }


    

    // New
    document.getElementById("TruckBillOfLading7_Date").value = document.getElementById("Homepage_ShipDate").value;
    document.getElementById("TruckBillOfLading7_ShipmentFrom").value = document.getElementById("lcInformationPageLoadOnBoard").value;
    document.getElementById("TruckBillOfLading7_To").value = document.getElementById("lcInformationPageForTransportTo").value;
    document.getElementById("TruckBillOfLading7_GrossWeight").value =  document.getElementById("TransportInformation_GrossWeight").value + document.getElementById("TransportInformation_Measurements").value ;
    document.getElementById("TruckBillOfLading7_ShipperOrExporter").value =  document.getElementById("LCInformation_BENEFICIARYName").value;
    
    let TOS_Date = document.getElementById("Homepage_ShipDate").value;
    let dateParts = TOS_Date.split("-");
    let formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;


    document.getElementById("TruckBillOfLading7_FreeText1").value =  document.getElementById("lcInformationPageAWDorBLMerchadiseDescription").value ;
    document.getElementById("TruckBillOfLading7_FreeText2").value =  "ABOVE MENTIONED MERCHANDISE HAS BEEN RECEIVED BY US FOR SHIPMENT AS INDICATED ABOVE ON " + formattedDate ;
    document.getElementById("TruckBillOfLading7_FreeText3").value =  "ISSUED IN ONE (1) ORIGINAL.";
    

    var Other7_SecondApplicantCheck = document.getElementById("Other7_SecondApplicantCheck");
    if (Other7_SecondApplicantCheck.checked) {
      document.getElementById("TruckBillOfLading7_SecondApplicant").style.display = "flex";
      document.getElementById("TruckBillOfLading7_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
    } else {
      document.getElementById("TruckBillOfLading7_SecondApplicant").style.display = "none";
    }



    // New End





      document.getElementById("TruckBillOfLading7_BlNumber").value =
        document.getElementById("TransportInformation_HAWBOrHOBLNumber").value;
  
      var Other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
      if (Other7_GlobalCheck.checked) {
        document.getElementById(
          "TruckBillOfLading7_LcGlobalCertifications"
        ).value = document.getElementById(
          "LC_Information_Global_Certification"
        ).value;
        document.getElementById(
          "TruckBillOfLading7_LcGlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "TruckBillOfLading7_LcGlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById(
          "TruckBillOfLading7_LcGlobalCertifications"
        ).value = "";
      }
  
      // Limited Certifications
      function updateLimitedCertificationsAWB() {
        var checkbox = document.getElementById(
          "lcInformationPageLimitedCertifications_BLcheckbox"
        );
        var textArea = document.getElementById(
          "TruckBillOfLading7_LcLimitedCertifications"
        );
  
        if (checkbox.checked) {
          textArea.value = document.getElementById(
            "lcInformationPageLimitedCertifications"
          ).value;
          textArea.style.display = "block";
        } else {
          textArea.value = "";
          // textArea.style.display = "none"; // Hide the text area
        }
      }
  
      document
        .getElementById("lcInformationPageLimitedCertifications_BLcheckbox")
        .addEventListener("change", updateLimitedCertificationsAWB);
      updateLimitedCertificationsAWB();
    }
  
    // ! Other 7 - 8
    else if (inputValue === "Steamship") {
      let SteamshipCertificateOther7Modal = document.getElementById(
        "SteamshipCertificateother7Modal"
      );
      let SteamshipCertificateOther7ModalTitle = document.getElementById(
        "SteamshipCertificateother7ModalTitle"
      );
      console.log("Welcome to Steamship");
  
      SteamshipCertificateOther7Modal.classList.add("show");
      SteamshipCertificateOther7Modal.style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";
      document.body.classList.add("modal-open");


      //  SteamShip Propogation
      if(!isDialogPopulated_SteamShip7){        
        document.getElementById("Steamship7_ShipDate").value =  document.getElementById("Homepage_ShipDate").value;        
        isDialogPopulated_SteamShip7= true;
      }


      // 7nd Applicant
      var Other7_SecondApplicantCheck = document.getElementById("Other7_SecondApplicantCheck");
      var Steamship7_SecondApplicantContainer = document.getElementById("Steamship7_SecondApplicantContainer");

      if (Other7_SecondApplicantCheck.checked) {
        Steamship7_SecondApplicantContainer.style.display = "flex";
        document.getElementById("Steamship7_SecondApplicant").value = document.getElementById("lcInformationSecondApplicantHeader").value + "\n" + document.getElementById("lcInformationSecondApplicantName").value + "\n" + document.getElementById("lcInformationSecondApplicantAddress").value;
      } else {
        Steamship7_SecondApplicantContainer.style.display = "none";
      }


      // LC check
      var other7_LCNumberCheck = document.getElementById("other7_LCNumberCheck");
      var Steamship7_LcNumberContainer = document.getElementById("Steamship7_LcNumberContainer");
      if (other7_LCNumberCheck.checked) {
        Steamship7_LcNumberContainer.style.display = "flex";
        document.getElementById("Steamship7_LcNumber").value = document.getElementById("lcInformationPageLcNumber").value;
      } else {
        Steamship7_LcNumberContainer.style.display = "none";
      }


      document.getElementById("Steamship7_VesselName").value = document.getElementById("TransportInformation_VesselName").value

  
      var Other7_GlobalCheck = document.getElementById("other7_GlobalCheck");
      if (Other7_GlobalCheck.checked) {
        document.getElementById("Steamship7_GlobalCertifications").value =
          document.getElementById("LC_Information_Global_Certification").value;
        document.getElementById(
          "Steamship7_GlobalCertificationsContainer"
        ).style.display = "block";
      } else {
        document.getElementById(
          "Steamship7_GlobalCertificationsContainer"
        ).style.display = "none";
        document.getElementById("Steamship7_GlobalCertifications").value = "";
      }
    } else {
      console.log("Other 7 - Select Wrong");
    }
  
    // All over
  });










  

  //! Other 2 close
  document
    .getElementById("2Point1Close")
    .addEventListener("click", function () {
      document
        .getElementById("AppendedDeclarationToAirWaybillOther2Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillOther2Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("2Point2Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToBLother2Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother2Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("2Point3Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToInsuranceCertificateother2Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother2Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("2Point4Close")
    .addEventListener("click", function () {
      document
        .getElementById("EmailFormCertificateother2Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother2Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("2Point5Close")
    .addEventListener("click", function () {
      document
        .getElementById("FaxActivityCertificateother2Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother2Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("2Point6Close")
    .addEventListener("click", function () {
      document
        .getElementById("DhlFormCertificateother2Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother2Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("2Point7Close")
    .addEventListener("click", function () {
      document
        .getElementById("TruckBillOfLadingCertificateother2Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother2Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("2Point8Close")
    .addEventListener("click", function () {
      document
        .getElementById("SteamshipCertificateother2Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother2Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  //  ! Other 3
  document
    .getElementById("3Point1Close")
    .addEventListener("click", function () {
      document
        .getElementById("AppendedDeclarationToAirWaybillother3Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother3Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("3Point2Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToBLother3Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother3Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("3Point3Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToInsuranceCertificateother3Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother3Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("3Point4Close")
    .addEventListener("click", function () {
      document
        .getElementById("EmailFormCertificateother3Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother3Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("3Point5Close")
    .addEventListener("click", function () {
      document
        .getElementById("FaxActivityCertificateother3Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother3Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("3Point6Close")
    .addEventListener("click", function () {
      document
        .getElementById("DhlFormCertificateother3Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother3Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("3Point7Close")
    .addEventListener("click", function () {
      document
        .getElementById("TruckBillOfLadingCertificateother3Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother3Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("3Point8Close")
    .addEventListener("click", function () {
      document
        .getElementById("SteamshipCertificateother3Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother3Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  // ! Other 4

  document
    .getElementById("4Point1Close")
    .addEventListener("click", function () {
      document
        .getElementById("AppendedDeclarationToAirWaybillother4Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother4Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("4Point2Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToBLother4Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother4Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("4Point3Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToInsuranceCertificateother4Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother4Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("4Point4Close")
    .addEventListener("click", function () {
      document
        .getElementById("EmailFormCertificateother4Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother4Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("4Point5Close")
    .addEventListener("click", function () {
      document
        .getElementById("FaxActivityCertificateother4Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother4Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("4Point6Close")
    .addEventListener("click", function () {
      document
        .getElementById("DhlFormCertificateother4Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother4Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("4Point7Close")
    .addEventListener("click", function () {
      document
        .getElementById("TruckBillOfLadingCertificateother4Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother4Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("4Point8Close")
    .addEventListener("click", function () {
      document
        .getElementById("SteamshipCertificateother4Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother4Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  //! other 5

  document
    .getElementById("5Point1Close")
    .addEventListener("click", function () {
      document
        .getElementById("AppendedDeclarationToAirWaybillother5Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother5Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("5Point2Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToBLother5Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother5Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("5Point3Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToInsuranceCertificateother5Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother5Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("5Point4Close")
    .addEventListener("click", function () {
      document
        .getElementById("EmailFormCertificateother5Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother5Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("5Point5Close")
    .addEventListener("click", function () {
      document
        .getElementById("FaxActivityCertificateother5Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother5Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("5Point6Close")
    .addEventListener("click", function () {
      document
        .getElementById("DhlFormCertificateother5Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother5Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("5Point7Close")
    .addEventListener("click", function () {
      document
        .getElementById("TruckBillOfLadingCertificateother5Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother5Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("5Point8Close")
    .addEventListener("click", function () {
      document
        .getElementById("SteamshipCertificateother5Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother5Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  // ! Other 6

  document
    .getElementById("6Point1Close")
    .addEventListener("click", function () {
      document
        .getElementById("AppendedDeclarationToAirWaybillother6Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother6Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("6Point2Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToBLother6Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother6Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("6Point3Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToInsuranceCertificateother6Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother6Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("6Point4Close")
    .addEventListener("click", function () {
      document
        .getElementById("EmailFormCertificateother6Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother6Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("6Point5Close")
    .addEventListener("click", function () {
      document
        .getElementById("FaxActivityCertificateother6Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother6Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("6Point6Close")
    .addEventListener("click", function () {
      document
        .getElementById("DhlFormCertificateother6Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother6Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("6Point7Close")
    .addEventListener("click", function () {
      document
        .getElementById("TruckBillOfLadingCertificateother6Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother6Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("6Point8Close")
    .addEventListener("click", function () {
      document
        .getElementById("SteamshipCertificateother6Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother6Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  // ! Other 7

  document
    .getElementById("7Point1Close")
    .addEventListener("click", function () {
      document
        .getElementById("AppendedDeclarationToAirWaybillother7Modal")
        .classList.remove("show");
      document.getElementById(
        "AppendedDeclarationToAirWaybillother7Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("7Point2Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToBLother7Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToBLother7Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("7Point3Close")
    .addEventListener("click", function () {
      document
        .getElementById("CertificateAppendedToInsuranceCertificateother7Modal")
        .classList.remove("show");
      document.getElementById(
        "CertificateAppendedToInsuranceCertificateother7Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("7Point4Close")
    .addEventListener("click", function () {
      document
        .getElementById("EmailFormCertificateother7Modal")
        .classList.remove("show");
      document.getElementById("EmailFormCertificateother7Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("7Point5Close")
    .addEventListener("click", function () {
      document
        .getElementById("FaxActivityCertificateother7Modal")
        .classList.remove("show");
      document.getElementById(
        "FaxActivityCertificateother7Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("7Point6Close")
    .addEventListener("click", function () {
      document
        .getElementById("DhlFormCertificateother7Modal")
        .classList.remove("show");
      document.getElementById("DhlFormCertificateother7Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("7Point7Close")
    .addEventListener("click", function () {
      document
        .getElementById("TruckBillOfLadingCertificateother7Modal")
        .classList.remove("show");
      document.getElementById(
        "TruckBillOfLadingCertificateother7Modal"
      ).style.display = "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });

  document
    .getElementById("7Point8Close")
    .addEventListener("click", function () {
      document
        .getElementById("SteamshipCertificateother7Modal")
        .classList.remove("show");
      document.getElementById("SteamshipCertificateother7Modal").style.display =
        "none";
      document.getElementById("modalOverlay").style.display = "none";
      document.body.classList.remove("modal-open");
    });


















  // ! Zoom for Input Field
  const inputFields = document.querySelectorAll(".PrintInputZoomButton");

  inputFields.forEach(function (inputField) {
    inputField.style.height = "50px";
    createButtonsForInput(inputField);
  });

  function createButtonsForInput(inputField) {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "inline";
    buttonContainer.style.marginTop = "5px";

    const decreaseFontSizeButton = document.createElement("button");
    decreaseFontSizeButton.style.backgroundColor = "rgb(193, 191, 191)";
    decreaseFontSizeButton.style.marginRight = "-5px";
    decreaseFontSizeButton.innerHTML = '<i class="fa-solid fa-caret-left"></i>';
    decreaseFontSizeButton.onclick = function () {
      changeFontSize(inputField, false);
    };

    const increaseFontSizeButton = document.createElement("button");
    increaseFontSizeButton.style.backgroundColor = "rgb(193, 191, 191)";
    increaseFontSizeButton.innerHTML =
      '<i class="fa-solid fa-caret-right"></i>';
    increaseFontSizeButton.onclick = function () {
      changeFontSize(inputField, true);
    };

    buttonContainer.appendChild(decreaseFontSizeButton);
    buttonContainer.appendChild(increaseFontSizeButton);

    inputField.parentNode.insertBefore(buttonContainer, inputField.nextSibling);
  }

  function changeFontSize(inputField, increment) {
    let currentSize = window
      .getComputedStyle(inputField, null)
      .getPropertyValue("font-size");
    let currentSizeValue = parseFloat(currentSize);
    let newSize = currentSizeValue + (increment ? 1 : -1);
    inputField.style.fontSize = newSize + "px";
  }

  // ! Zoom for TextArea
  const textAreas = document.querySelectorAll(".PrintTextAreaZoomButton");
  textAreas.forEach(function (textArea) {
    createButtonsForTextArea(textArea);
  });

  function createButtonsForTextArea(textArea) {
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "inline";
    buttonContainer.style.marginTop = "5px";

    const decreaseFontSizeButton = document.createElement("button");
    decreaseFontSizeButton.style.backgroundColor = "rgb(193, 191, 191)";
    decreaseFontSizeButton.innerHTML = '<i class="fa-solid fa-caret-left"></i>';
    decreaseFontSizeButton.onclick = function () {
      decreaseFontSizeTextAreaFunction(textArea);
    };

    const increaseFontSizeButton = document.createElement("button");
    increaseFontSizeButton.style.backgroundColor = "rgb(193, 191, 191)";
    increaseFontSizeButton.innerHTML =
      '<i class="fa-solid fa-caret-right"></i>';
    increaseFontSizeButton.onclick = function () {
      increaseFontSizeTextAreaFunction(textArea);
    };

    buttonContainer.appendChild(decreaseFontSizeButton);
    buttonContainer.appendChild(increaseFontSizeButton);

    textArea.parentNode.insertBefore(buttonContainer, textArea.nextSibling);
  }

  function increaseFontSizeTextAreaFunction(textArea) {
    var currentSize = parseInt(
      window.getComputedStyle(textArea, null).getPropertyValue("font-size")
    );
    textArea.style.fontSize = currentSize + 2 + "px";
  }

  function decreaseFontSizeTextAreaFunction(textArea) {
    var currentSize = parseInt(
      window.getComputedStyle(textArea, null).getPropertyValue("font-size")
    );
    textArea.style.fontSize = currentSize - 2 + "px";
  }
}
