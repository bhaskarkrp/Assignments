var arr = ["bhaskar", "arpita", "abhisheka", "anujita", "aupendra", "asgar", "raja"];

var res = arr.reduce((prev, curr) => (prev + "_" + curr));

console.log(res)