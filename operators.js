// aarithmetic operators
var sum = 2+3;
console.log("sum", sum);
var diff = 12-7;
console.log("difference:",diff);
var inc = diff++;
console.log("incrementing",inc)
var product = 6*4;
console.log("product",product);
var dec = product--;
console.log("decrementing",dec)
var div = (18/9);
console.log("quotient", div);
var mod = 20%6;
console.log("modulus", mod);

// assignment operators
var s = 26
s+=2
console.log("+=",s);
console.log("-=",s-=8);
console.log("*=",s*=2);
console.log("/=",s/=4);
console.log("%=", s%=7);


// comparison operators
const a = 5, b = 2, c = 'hello';
// equal to operatorssconst a = true, b = false, c = 4;

console.log(a == 3);     // false
console.log(b == '2');   // true
console.log(c == 'Hello');  // false
const d = 2, e = 'hello';

// strict not equal operator
console.log(d !== 2); // false
console.log(d !== '2'); // true
console.log(e !== 'Hello'); // true

const f = true, g = false, h = 4;


// logical OR
console.log(f || g); // true
console.log(g || g); // false
console.log((h>2) || (h<2)); // true


// ternary operators
//console.log(1<2 ? "peaky": "prison" )