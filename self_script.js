'use strict';
class person{
    constructor(mass, height){
        this.mass = mass;
        this.height = height;
    }
    calculateMBI(){
        return this.mass / (this.height * this.height);
    }
}

const Mark = new person(78,1.69);
const John = new person(92,1.95); 

//  Przykład składania stringów z różnych zmiennych 
console.log("BMI: Mark's "+Mark.calculateMBI()+" and John's "+John.calculateMBI());
console.log('BMI: ${Mark}')

// Loose (==) and strict(===) equality operator -> Pierwszy porównuje wartości z ukrytą konwersjątypów, tj '18' jest równwe 18, drugi porównuje także typy, tj. '18' nie jest równe 18

/// Part 2 ofthe course : 'use strict'; -> strict mode, helps write secure code use on the very beginning of the script file

//Basic function syntax: function NAME(PARAMITERS){LOGIC;}
//Function expression syntax: const VARIABLE = function (PARAMITERS) {LOGIC} like so:
const clacAge = function(birthYear){return 2037-birthYear;}
const age = clacAge(2001);
console.log(age)

//Difference between declaration and expression is that expression cannot be used before declaration (hoisting)

//Arrow funstion syntax: const VARIABLE = (PARAMITERS) => {LOGIC};  example:
const yearsUntilReti = (birthyear) => {
    const age1 = 2037-birthyear;
    const retirement = 65 - age1;
    return retirement;
}

/// Arrays:
//array syntax: const ARRAYNAME = [VALUE1,VALUE2,VALUE3,...];
//              const ARRAYNAME = new Array(1,2,3,4); 

///Objects (dictionaries in Python):
//object syntax: const OBJNAME = {VARIABLE1:VALUE1,VARIABLE2:VALUE2,...};
//Positions can be accessed uding . notation -> object.variable1 OR
//using key syntax -> object['variable1']
//
//One important thing -> Value in object's declaration doesn't have to be a value it can be a function, therefore creating a method
// 

///LOOPS:
//for loop syntax: for(let COUNTER=0; COUNTER<=10; COUNTER++){LOGIC;} -składnia prawie identyczna do C
//while loop syntax: same as ewerywhere -> while(condition){Logic;}
