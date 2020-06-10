// arguments object - no longer bound with arrow functions


const add = (a, b) => {
    // console.log(arguments); // no longer have access to the arguments in es6
    return a+b;
}

console.log(add(55,1, 1001))

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // printPlacesLived: function() { // only es5 works
    printPlacesLived(){
        // // console.log(this.name);
        // // console.log(this.cities);
        // const that = this;
        // this.cities.forEach(function (city) {
        //     console.log(that.name + ' has lived in '+city)
        // }); // this.name is only accessible within this forEach function
        // const cityMessages = this.cities.map((city) => {
        //     //in place change to array
        //     return this.name + ' has lived in ' + city;
        // });
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+city)
        // }); // arrow function allows this to access parent function
    }
}

// challenge
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());