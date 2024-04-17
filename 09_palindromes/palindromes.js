const palindromes = function (word) {
    // convert ot string, lowercase everything
    // then reverse string. if reverseed string === word, ture
    let shortened = word.replace(/ /g, '').toLowerCase(); // didnt consider special characters
    let reveresd = shortened.reverse();
    return shortened === reveresd;
};

// Do not edit below this line
module.exports = palindromes;
