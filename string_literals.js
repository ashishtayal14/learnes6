// ES5
var first = 'James';
var last = 'Bond';
var name = 'Your name is ' + first + ' ' + last + '.';
console.log(name);
var id='007';
var url = 'http://localhost:3000/api/messages/' + id;
console.log(url);

// ES6
let first = 'James';
let last = 'Bond';
let name = `Your name is ${first} ${last}.`;
console.log(name);
let id='007';
let url = `http://localhost:3000/api/messages/${id}`;
console.log(url);


// ES5 Multi-Line String
var roadPoem = 'Then took the other, as just as fair,\n\t'
                + 'And having perhaps the better claim\n\t'
                + 'Because it was grassy and wanted wear,\n\t'
                + 'Though as for that the passing there\n\t'
                + 'Had worn them really about the same,\n\t';

// ES6 Multi-Line String
let roadPoem = `Then took the other, as just as fair,
                And having perhaps the better claim
                Because it was grassy and wanted wear,
                Though as for that the passing there
                Had worn them really about the same,`
