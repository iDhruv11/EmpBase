const validateEmail = (mail) => {
    mail = mail.trim();
    const indexOfATR = mail.indexOf('@');
    const indexOfDot = mail.indexOf('.');
    if(mail == "") return "email can't be empty!";    
    if(indexOfATR == 0 || indexOfATR == -1) return "No @ used ";
    if(indexOfDot == 0 || indexOfDot == -1) return "No mail client and domain name saperator used.";
    if(indexOfDot - indexOfATR <= 1) return "Invalid mail client"
    if(mail[indexOfDot + 1] == undefined || mail[indexOfDot + 2] == undefined) return "no or one char long domain name";

    return null;
}

export { validateEmail };