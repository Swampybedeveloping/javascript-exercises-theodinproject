const sumAll = function(start, end) {
    let total = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)){
        return 'ERROR';
    } else{
        for (let i = start; i < end+1; i++){
            total += i;
        }
    }
    return total;
};

// did not take into consideration if min and max are switched
// if min or max below 0

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll(1, 4000));