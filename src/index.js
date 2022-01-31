module.exports = function reverse (n) {
var a;
var b;
var c = Math.abs(n);
a = String(c).split('');
b = String(a.reverse());
return b.replace(/,/g, '');
}