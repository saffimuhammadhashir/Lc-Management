export function logout_function(deleteCookie) {
    // console.log('Main Module - Logout Button');


    // logout Button
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
        deleteCookie("username");
        window.location.href = "login.html";
    });




}