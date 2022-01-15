var arr = ["bhaskar", "arpita", "abhisheka", "anujita", "aupendra", "asgar", "raja"];

var res = arr.filter(function(element) {
    return (element[0] == "a" && element[element.length - 1] == "a");
})

console.log(res)