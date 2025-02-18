/*function signature/sample */
function  validEmail( email ) {
   if (typeof email !== "string"){
    return "Invalid"
   }

   if (email.startsWith("-")|| email.startsWith(" ")) {
    return false;
   }
   let emailchick = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\..com$/;
   if (!emailchick.test(email)) {
    return false
   }
   return true
}


