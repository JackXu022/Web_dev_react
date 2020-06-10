// var: redefine and reassign    hard to debug
var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

// let: can reassign cannot redefine
let nameLet = 'Jen';
nameLet = 'Mike';
// let nameLet = 'Mike';
console.log('nameLet', nameLet);

// const: cannot reassign and redefine
const nameConst = 'Frank';
// nameConst = 'Mike';
console.log('nameConst', nameConst); 

// scope is also different
// these are all within function scope
function getPetName() {
    var petName = 'Mal';
    return petName;
}

// getPetName();
const petName = getPetName();
console.log(petName);

// Block scoping
// const and let is block scoping
var fullName = 'Andrew Mead';
let firstName; // for const and let cases

if (fullName) {
    // const firstName = fullName.split(" ")[0];
    firstName = fullName.split(" ")[0];
    // var firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);