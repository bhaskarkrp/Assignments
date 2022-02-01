// Destructering from objects
//1
let obj1 = { name: 'masai', password: 'admin@123', hostname: 'masaischool', client: 'chrome' };

let { name, password } = obj1;

console.log(name, password)

//2
let obj2 = { name: 'masai', address: { pincode: 560095 } };

let { address: { pincode: pin } } = obj2;

console.log(pin);

// Destructering from Arrays
// 1
let arr1 = [100, 200, 500, 600];

let [a, b] = arr1;

console.log(a, b);

// 2
let arr2 = [100, [50, 60, 70]];

let [, [c1]] = arr2;

console.log(c1)

// 3
let arr3 = [1, {
    arr: [1, 2, 3]
}];

let [, { arr: arr5 }] = arr3;
let [, a1, a2] = arr5;
let arr6 = [];
arr6.push(a1);
arr6.push(a2);
console.log(arr6);