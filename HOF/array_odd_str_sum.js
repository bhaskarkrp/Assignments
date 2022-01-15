var arr = ["bhaskar", "arpit", "abhishek", "anujit", "upendra", "asgar", "raja"];

var odd_len_str = arr.filter((element) => {
    return ((element.length % 2) !== 0)
});
console.log(" odd_len_str: ", odd_len_str);

var sum = odd_len_str.reduce((prev, curr) => prev += curr.length, 0)
    // sum += element.length;


console.log(" sum: ", sum);