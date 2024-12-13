// console.log('Frontend JS');



function openView(event, viewId) {
    let viewIdx,
        x = document.getElementsByClassName("view"),
        tablinks = document.getElementsByClassName("tablink");

    const VIEW_LENGTH = x.length;
    for (viewIdx = 0; viewIdx < VIEW_LENGTH; viewIdx++) {
        x[viewIdx].style.display = "none";
        tablinks[viewIdx].className = tablinks[viewIdx].className.replace(" w3-dark-gray", "");
    }
    event.currentTarget.className += " w3-dark-gray";
    document.getElementById(viewId).style.display = "block";
}
// Get the modal of newLC button modal from main input form 
var modal = document.getElementById('newlc');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
// modal of newLC button modal from main input form ends
// Get the modal of submit button modal from main input form 
var modal = document.getElementById('submit');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
// modal of submit button modal from main input form ends
// Get the modal of submit button modal from main input form 
var modal = document.getElementById('info');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
// modal of submit button modal from main input form ends

//code of shipper/bene drop down starts 
var dropdown = document.querySelector(".w3-dropdown-click");
// var button = dropdown.querySelector("#selected-item-btn");
// var arrow = dropdown.querySelector(".dropdown-arrow");
// var menu = dropdown.querySelector(".w3-dropdown-content");
// var links = menu.querySelectorAll("tr");

// button.addEventListener("click", function () {
//     menu.classList.toggle("w3-show");
// });
