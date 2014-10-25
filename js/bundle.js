(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./hw_lib":2,"./hw_widget":3,"uniq":4}],2:[function(require,module,exports){
exports.beep = function(n) {return n * 1000}
exports.boop = 555

},{}],3:[function(require,module,exports){
module.exports = Widget;

function Widget (opts) {
    if (!(this instanceof Widget)) return new Widget(opts);
    this.element = document.createElement('div');
}


Widget.prototype.appendTo = function (target) {
    if (typeof target === 'string') target = document.querySelector(target);
    target.appendChild(this.element);
};

},{}],4:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1])