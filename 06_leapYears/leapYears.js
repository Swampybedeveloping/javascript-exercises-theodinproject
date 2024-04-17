const leapYears = function(year) {
    // if // 100 => // 400 => leap
    // else if // 4 => leap
    if (!Number.isInteger(year)){
        return 'False';
    } else if( year % 100 === 0){
        if (year % 400 === 0 ){
            return 'True';
        } else{
            return 'False';
        }
    } else if (year % 4 === 0){
        return "True";
    } else{
        return "False";
    }
};

// Do not edit below this line
module.exports = leapYears;
console.log(leapYears(700));

// can make 1 liner but good attempt!!! 