function validEmail(email) {
    if (typeof email !== "string"){
         return "Invalid";
    }
    if (email.startsWith("-") || email.startsWith(" ")) {
        return false;
    }

    if (!email.includes("@") || email.indexOf("@") === email.length - 1) {
        return false;
    }

    let parts = email.split("@");
    if (parts.length !== 2 || !parts[1].includes(".com")) {
        return false;
    }

    return true;
}
console.log(validEmail("joydhano@.com"));
