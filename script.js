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

