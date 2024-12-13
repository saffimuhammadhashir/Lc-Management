export default function HomepageSearchModalFunction() {

  console.log("Main Module - Homepage Search Module 1 😊");

  document.getElementById("Homepage_Search_Close_Button").addEventListener("click", function () {
    document.getElementById("Homepage_SearchModal").classList.remove("show");
    document.getElementById("Homepage_SearchModal").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
    document.body.classList.remove("modal-open");
  });



  document
    .getElementById("Homepage_Search_Button")
    .addEventListener("click", function () {

      console.log("Main Module - Homepage Search Module 2  😊");
      document.getElementById("Homepage_SearchModal").classList.add("show");
      document.getElementById("Homepage_SearchModal").style.display = "block";
      document.getElementById("modalOverlay").style.display = "block";

      document.body.classList.add("modal-open");
    });
}
