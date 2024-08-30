var a = [1, 3, 5, 7]

var fn = (index) => {
    return index * 2;
}
var b = a.map(fn);
console.log(b);