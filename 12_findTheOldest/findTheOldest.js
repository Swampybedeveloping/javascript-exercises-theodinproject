const findTheOldest = function(people) {
    // find the age
    people.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.birth, oldest.death);
        let currentAge = getAge(current.birth, current.death);
        return oldestAge > currentAge ? oldest : current;
    });

};

const getAge = function(birth, death){
    if (!death){
        const today = new Date().getFullYear();
        return today - birth;
    } else{
        return death-birth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
