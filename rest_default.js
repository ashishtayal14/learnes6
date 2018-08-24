// ES6
function f (x, y = 7, z = 42) {
    return x + y + z
}
console.log(f(1) === 50);

// in ES5
function f (x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
console.log(f(1) === 50);


// in ES6
function f (x, y, ...a) {
    return (x + y) * a.length
}
console.log(f(1, 2, "hello", true, 7) === 9);

// in ES5
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
console.log(f(1, 2, "hello", true, 7) === 9);