export function AddTenorOfDraftFunction(config) {
  populateSelectField();

  let TenorOfDraft_Remove_Option_SaveButton = document.getElementById("TenorOfDraft_Remove_Option_SaveButton");

  let TenorOfDraft_Add_Option_SaveButton = document.getElementById("TenorOfDraft_Add_Option_SaveButton");

  TenorOfDraft_Add_Option_SaveButton.addEventListener("click", function (event) {
    event.preventDefault();

    let TenorOfDraft_Add_Option_Value = document.getElementById("TenorOfDraft_Add_Option_Value").value;

    if (!TenorOfDraft_Add_Option_Value || TenorOfDraft_Add_Option_Value.trim() === "") {
      alert("Value cannot be empty");
    } else {
      const requestUrl = `${config.HOST}/Select`;
      const requestBody = {
        field_name: "TENOR OF DRAFT",
        field_value: TenorOfDraft_Add_Option_Value,
      };

      document.getElementById("TenorOfDraft_Add_Option_Value").value = "";

      fetch(requestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('Success:', data);
          var selectFieldText = document.getElementById("lcInformationPageTenorOfDraft").options[
            document.getElementById("lcInformationPageTenorOfDraft").selectedIndex
          ].text;

          populateSelectField(selectFieldText);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
  });

  function populateSelectField(selectFieldText) {
    var selectField = document.getElementById("lcInformationPageTenorOfDraft");

    fetch(`${config.HOST}/Select/TENOR%20OF%20DRAFT`)
      .then((response) => response.json())
      .then((data) => {
        selectField.innerHTML = "";
        data.forEach((option) => {
          var optionElement = document.createElement("option");
          optionElement.value = option.field_value;
          optionElement.textContent = option.field_value;
          if (optionElement.value === selectFieldText) {
            optionElement.selected = true;
          }
          selectField.appendChild(optionElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  let RemoveTenorOfDraftButton = document.getElementById("RemoveTenorOfDraftButton");
  RemoveTenorOfDraftButton.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Remove Select ");

    var selectX = document.getElementById("lcInformationPageTenorOfDraft");
    var selectY = document.getElementById("TenorOfDraft_Remove_Option_Value");
    selectY.innerHTML = "";

    // Copy options from selectX to selectY
    for (var i = 0; i < selectX.options.length; i++) {
      var option = document.createElement("option");
      option.value = selectX.options[i].value;
      option.text = selectX.options[i].text;
      selectY.appendChild(option);
    }
  });

  // Remove
  TenorOfDraft_Remove_Option_SaveButton.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Working on Remove");

    var TenorOfDraft_Remove_Option_Value = document.getElementById("TenorOfDraft_Remove_Option_Value");
    var TenorOfDraft_Remove_Option_ValueOption =
      TenorOfDraft_Remove_Option_Value.options[TenorOfDraft_Remove_Option_Value.selectedIndex];
    const TenorOfDraft_Remove_Option_ValueText = TenorOfDraft_Remove_Option_ValueOption.text;

    if (!TenorOfDraft_Remove_Option_ValueText || TenorOfDraft_Remove_Option_ValueText.trim() === "") {
      alert("Value cannot be empty");
    } else {
      const requestUrl = `${config.HOST}/Select/TENOR%20OF%20DRAFT/${TenorOfDraft_Remove_Option_ValueText}`;
      console.log(requestUrl);

      fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          var selectFieldText = document.getElementById("lcInformationPageTenorOfDraft").options[
            document.getElementById("lcInformationPageTenorOfDraft").selectedIndex
          ].text;
          populateSelectField(selectFieldText);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
}