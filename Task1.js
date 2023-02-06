class Car{
    constructor(model, make, year, min, max){
        this.model = model
        this.make = make
        this.year = year
        this.cost = this.carCost(min, max)
        
    }

    getDescription(){
        return `A ${this.model} made by ${this.make} at ${this.year}, ${this.cost}` // when use the back tick is called template litarels
    }

    carCost(min,max){
         return  Math.floor(Math.random() * (max - min) ) + min;
    }
          

}

const car1 = new Car("Camry" , "Toyota", 2020, 12000, 15000 );

console.log(car1.getDescription())

const car2 = new Car("Camry" , "Toyota", 2020);
const car3 = new Car("Camry" , "Toyota", 2020);

///////////


class Person {
    constructor(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName;
    this.age = age;


    }

    getGreeting(){
        return `Hi, I'm  ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`

    }

}

const Person1 = new Person("Asem", "Yaseen", "27")

console.log(Person1.getGreeting())

//////////////////////////////////////////

// function counterFunc(counter) {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }
    
//     return counter;
//   }

  let counterFunc = (counter) => {
    (counter>100) ? console.log(counter = 0): console.log(++counter)
         
    }
    counterFunc(20)
  ////////////////////////////////////////////////////
  
//   function nameAge(name, age) {
//     console.log("Hello " + name);
//     console.log("You are " + age + " years old");
//   }

  let nameAge = (name, age) => {
    console.log("Hello " + name)
    console.log("You are " + age + " years old");
  }
  nameAge('Asem', '27')
  /////////////////////////////////////




//   function createFullName(firstName, lastName) {
//     return firstName + " " + lastName;
//   }
  


  const createFullName = (firstName, lastName)=>{

    console.log(firstName + " " + lastName)
  }
  createFullName('Asem', 'Yaseen');



//   function doubleNumber(number) {
//     return number * 2;
//   }

  const doubleNumber = (number)=>number*2

  console.log(doubleNumber(10))

  //////////
  
//   function getEvenNumbers(array) {
//     let evenNumbers = [];
//     for (let i of array) {
//       if (i % 2 === 0) {
//         evenNumbers.push(i);
//       }
//     }
//     return evenNumbers;
//   }

const getEvenNumbers = (array)=>{
    let evenNumbers = [];
    for (let i of array) {
        (i % 2 === 0) ? evenNumbers.push(i): i;
    }
    return evenNumbers;
}


// if (1<2){ 
//     for (let index = 0; index < 5; index++) 
//     {
//      console.log("hi");
//      }
//      } else{ 
//     console.log("bye"); 
//     }

    const newIf = ()=>(1<2)? (()=>{

        for(index = 0 ; index < 5 ; index++){
            console.log('Hi')
        }
    }) ():console.log('Bye')

    newIf()


    ////////////////////////////////////

    let nums = [2, 4, 5];

    let NewFunc1 = ()=>{
      let arr =  nums.reduce((acc, cur)=> acc+cur**2,0) // reduse take 2 param the first is acc , the second is curent value, and take init value to start
      return arr
    }
    console.log(NewFunc1())


    NewFunc2 =(list)=>{
        const array =list.map(e => e*10)
        return array
    }
    console.log(NewFunc2([1,2,3,4,5,6,7,8]));


    makeStrings=[
        {  name: "Angelina Jolie",
        age: 80   },
        {   name: "Eric Jones",
           age: 2
        },
        {   name: "Paris Hilton",
        age: 5
    },
    {   name: "Kayne West",
    age: 16
    },
    {   name: "Bob Ziroll",
    age: 100
    }
    ];
    
    Matrix = (array)=>{
        const MatrixList=array.map(ele => ele.age>10 ? `${ele.name} can go to The Matrix`:`${ele.name} is under age!!`  )
        
        return MatrixList;
    }
    
    
    console.log(Matrix(makeStrings));
    
    // task4
    // reduce
    var persons = [
        { name: { first: 'John', last: 'Hob' }, age: 35 },
        { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
        { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
        { name: { first: 'Zues', last: 'Odin' }, age: 55 },
        { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
    ];
    
    avgAge = (list) =>{
        const array = list.reduce((acc,curr)=> (acc+curr.age),0)/list.length;
        
        return array;
        
    }
    console.log(avgAge(persons));
    
    
    // task5
    // filter
    
    evenOnly= (list)=>{
        const array=list.filter(ele => ele%2 == 0 ) // filter شرط معين على ال array
        return array;
    }
    console.log(evenOnly([1,8,6,4,5,10]));
    
    // task6
    // filter
    
    multiFour = (list)=>{
        const array=list.filter(ele => ele%4 == 0 )
        return array;
    }
    console.log(multiFour([1,8,6,4]));





    


    

  
  
