const cryptoJS = require("crypto-js");
const SECRET_KEY = 'uSr3r1234gF1tB0x';

export function getEncryptEmail(emailUser) {
    //Encrypt
    const emailEncrypted = cryptoJS.AES.encrypt(emailUser, SECRET_KEY).toString();
    //console.log('email encriptado: ' + emailEncrypted);
    return emailEncrypted.replaceAll('+','xMl3Jk').replaceAll('/','Por21Ld').replaceAll('=','Ml32'); 
}

export function decryptEmail(emailUser) {    
    // Decrypt
    const _email = emailUser.replaceAll('xMl3Jk', '+' ).replaceAll('Por21Ld', '/').replaceAll('Ml32', '=');
    var bytes = cryptoJS.AES.decrypt(_email, SECRET_KEY);
    var decryptedData = bytes.toString(cryptoJS.enc.Utf8);
    //console.log("correo desencriptado: " + decryptedData);
    return decryptedData;
}