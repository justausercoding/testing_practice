function cesarCipher(text, key) {
    let newText = "";

    for (let i = 0, l = text.length; i < l; i++) {
        let char = text[i];
        if (isAlpha(text[i])) char = newLetter(text[i], key);
        newText += char;
    }

    return newText;
}

function isAlpha(string) {
    return /[a-zA-Z]+$/.test(string);
}

function newLetter(char, key) {
    let code = char.charCodeAt(0);
    let newCode = code + key;

    if (code >= 65 && code <= 90) {
        if (newCode > 90) newCode = 64 + (newCode - 90);
    } else if (code >= 97 && code <= 122) {
        if (newCode > 122) newCode = 96 + (newCode - 122);
    }

    return String.fromCharCode(newCode);
}

module.exports = cesarCipher;
