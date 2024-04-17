const reverseString = function(str) {
    let rev = "";
    for (let i = str.length-1 ; i > -1; i--){
        rev += str[i];
    }
    return rev
};

// Do not edit below this line
module.exports = reverseString;