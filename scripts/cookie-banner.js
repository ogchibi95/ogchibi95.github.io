(function(){

    "use strict";

  
    function setCookie(name, value, days) {
                let expires = "";
                
                if (days) {
                  const date = new Date();
                  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
                  expires = "; expires=" + date.toUTCString();
                }
                
                document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
    }
              
              // Set a cookie that expires in 7 days
              setCookie("userSession", "active", 7);
        
              function getCookieValue(name) {
                const cookies = document.cookie.split(';');
                
                for (let cookie of cookies) {
                  const [cookieName, cookieValue] = cookie.trim().split('=');
                  
                  if (cookieName === name) {
                    return decodeURIComponent(cookieValue);
                  }
                }
                
                return null; // Cookie not found
              }
              
              // Example: Get the value of the 'userSession' cookie
              const session = getCookieValue("userSession");
    console.log(session); // Outputs: active

})(this, window);