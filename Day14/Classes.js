// Task 1 :

// class Person{

//     constructor (name, age){
//         this.name = name;
//         this.age = age
//     }

//     greetings(){
//         return(`Hello, my name is ${this.name} and I am ${this.age}`)
//     }

// }


// let person1 = new Person("ankit",21);
// console.log(person1.greetings());

// -----------------------------------------------------------------------------------------------------------------------------

// Task 2 : 

// class Person{
//     letage = 21
//     constructor (name, age){
//         this.name = name;
//         this.age = age
//     }

//     greetings(){
//         return(`Hello, my name is ${this.name} and I am ${this.age}`)
//     }

//     updatedAge(newage){
//         this.age=newage
//         console.log(`updated age is ${this.age}`);
//     }


// }


// let person1 = new Person("ankit",21);
// console.log(person1.greetings());

// person1.updatedAge(22)

// -----------------------------------------------------------------------------------------------------------------------------

// Task 3 :

// class Person{
//     letage = 21
//     constructor (name, age){
//         this.name = name;
//         this.age = age
//     }

//     greetings(){
//         return(`Hello, my name is ${this.name} and I am ${this.age} and my id is ${this.rollno}`)
//     }

//     updatedAge(newage){
//         this.age=newage
//         console.log(`updated age is ${this.age}`);
//     }
    

// }
// class Student extends Person{
//     constructor(name,age,rollno){
//         super(name,age)
//         this.rollno = rollno
//     }
//     StudentInfo(){
//         return this.rollno,this.greetings()

//     }
// }

// const Student1 = new Student("ankit",21,205170686003)
// console.log(Student1.StudentInfo());
