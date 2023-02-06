// class

class Car{
    constructor(model, make, year){
        this.model = model
        this.make = make
        this.age = this.carAge(year)
        
    }

    getCarInfo(){
        return `A ${this.model} made by ${this.make} at ${this.age}` // when use the back tick is called template litarels
    }

    carAge(year){
        return 2023-year;
    }

}

const car1 = new Car("Camry" , "Toyota", 2010);
console.log(car1.getCarInfo())

const car2 = new Car("Camry" , "Toyota", 2020);
const car3 = new Car("Camry" , "Toyota", 2020);

