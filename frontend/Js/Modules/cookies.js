export function checkCookie() {
  let username = getCookie("username");

  if (username === undefined) {
    if (!window.location.href.includes("login.html")) {
      window.location.href = "login.html";
    }
  } else {
    if (!window.location.href.includes("index.html")) {
        window.location.href = "index.html";
    }
  }
}

export function getCookie(name) {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();

    var parts = cookie.split("=");

    if (parts[0] === name) {
      return parts[1];
    }
  }

  return undefined;
}

export function setCookie(username) {
  var expires = new Date();
  expires.setDate(expires.getDate() + 1);

  document.cookie =
    "username=" + username + "; expires=" + expires.toUTCString() + "; path=/";
}

export function deleteCookie(name) {
    document.cookie = name + "=; max-age=0; path=/;";
  }