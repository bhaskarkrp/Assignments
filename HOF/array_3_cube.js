var arr = [1, 2, 3, 4, 5, 6, 7];

var div_3 = arr.filter((element) => (element % 3 === 0));

// console.log(div_3);

var cube = div_3.reduce((prev, curr) => (prev += curr ** 3), 0);

console.log(cube)