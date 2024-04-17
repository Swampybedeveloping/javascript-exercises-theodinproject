const repeatString = function(item, count) {
    count > 0 ? item.repeat(count) : "";
};

// Do not edit below this line
module.exports = repeatString;

console.log(repeatString('hey', 3));
console.log(repeatString('hey', 0));