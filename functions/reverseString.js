function reverseString(word) {
    let array = word.split("");
    array.reverse();
    console.log("after reverse:", array);
    return array.join("");
}

module.exports = reverseString;
