// console.log('LoginMain JS - Call Modules Here');


//imports 
import config from "./Configuration/config.prod.js";
// import config from "./Configuration/config.dev.js";


import {checkCookie, getCookie, setCookie, deleteCookie } from "./Modules/cookies.js";
import {Authenication } from "./Modules/Authenication.js";


// console.log(config);
checkCookie();



// Login Authentication
Authenication(config, setCookie);

