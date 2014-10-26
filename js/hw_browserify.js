var unique = require('uniq');

var data = [1, 2, 3, 4, 5, 5, 5, 3, 3, 2, 7, 6, 6];
console.log(data);

var foo_lib = require('./hw_lib');
console.log(foo_lib.beep(30));

console.log("hi Rustem, my friend");

var add = function(a, b) {
    return a + b;
}

console.log(add(1, 2));


var Widget = require('./hw_widget');
var w = Widget();
w.appendTo('body');

console.log("hello Yernar");
