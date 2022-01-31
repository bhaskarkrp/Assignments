// Constructor function with two arguments -- We can't add a new property to a constructor function
function teacher(arg1, arg2, arg3) {
    // this.type = "teacher",
    // this.rate = "Excellent"
    console.log(`Using ${arg3}: ${this.name} is a ${arg1} and he is ${arg2} at ${this.subject}`)
};

// Constructor function with two arguments
function person(name, subject) {
    this.name = name,
        this.subject = subject
};

// Creating three person objects
var person1 = new person("Ritesh", "Fundamentals of Advance JS");
var person2 = new person("Ankush", "DSA");
var person3 = new person("Swanand", "Advance JS")

// console.log(person1, person2) //Print objects

// inheriting properties of teacher in person 1/2/3 objects
// Using call - it will take obj(which we are inheriting) and two arguments(teacher function) as parameter
teacher.call(person1, "teacher", "excellent", "call");
teacher.call(person2, "teacher", "excellent", "call");
teacher.call(person3, "teacher", "excellent", "call");

// Using apply - it will take obj(which we are inheriting) and two arguments as an array
teacher.apply(person1, ["teacher", "excellent", "apply"]);
teacher.apply(person2, ["teacher", "excellent", "apply"]);
teacher.apply(person3, ["teacher", "excellent", "apply"]);

// Using bind - it will take obj(which we are inheriting) and two arguments(teacher function) as parameter same as call but this will return function
let teacher1 = teacher.bind(person1, "teacher", "excellent", "bind");
teacher1();

let teacher2 = teacher.bind(person2, "teacher", "excellent", "bind");
teacher2();

let teacher3 = teacher.bind(person3, "teacher", "excellent", "bind");
teacher3();