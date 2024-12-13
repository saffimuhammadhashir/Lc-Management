export function navbar_function(getCookie) {
    // console.log('Main Module - Navbar Function Button');

    let username = getCookie("username");
    document.getElementById("adminName").innerHTML = username.toUpperCase() + " <i class=\"fa-solid fa-user-tie\"></i>";



}
