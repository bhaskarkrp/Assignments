var arr = [2, 4, 5, 6, 7, 8];

var res = arr.map((element, index) => [element ** 2, index]); //We can write either of these two - 1

var res = arr.map((element, index) => {
    return [element ** 2, index];
}); // - 2

console.log("res", res)