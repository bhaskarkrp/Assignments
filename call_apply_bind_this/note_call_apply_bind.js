// 1
var obj = { num: 2 };

function add(a, b) {
    return this.num + a + b;
}

const resultCall = add.call(obj, 3, 5);
const resultApply = add.apply(obj, [3, 5]);
const funcBind = add.bind(obj, 3, 5);
const resultBind = funcBind();

console.log(resultCall, resultApply, resultBind);

// 2
var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: function() {
        console.log(this.a)
    }
}

console.log(obj1.b);

obj1.d();

// 3
let person = {
    name: "Bhaskar",
    age: 21,
    type: "person",
    hobby: "Coding",
    company: {
        name: "Masai",
        type: "organization"
    }
};

let person2 = {
    name: 'manu',
    age: 22,
    type: 'person'
}


function display() {
    console.log(this.type + " is " + this.name);
}

display.call(person2);
display.call(person);
display.call(person.company)


// function displayWrapper(obj) {
//     obj.display = function() {
//         console.log(this.type + this.name);
//     }
// }