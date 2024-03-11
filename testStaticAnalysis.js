// 1. Missing semicolon
const x = 5

// 2. Unexpected comma
const numbers = [1, 2, , 4];

// 3. Octal literals (not allowed in strict mode)
const value = 0o777;

// 4. Duplicate property names
const obj = { name: "John", name: "Jane" };

// 5. Comparing with null/undefined using != or !==
if (x != null) {
  console.log("Not null");
}

// 6. Using bitwise operators in conditional statements
if (x & 1) {
  console.log("Odd number");
}

// 7. Empty block statements
if (true) {}

// 8. Dot notation for methods called on strings
"hello".toUpperCase();

// 9. Assigning to a non-writable property
const obj2 = { prop: "value" };
obj2.prop = "new value";

// 10. Missing space before/after unary operators
let y = !x;

// 11. Using ++ or -- on non-numeric operands
let z = "some string"++;

// 12. Unnecessary parentheses
(function() {
  console.log("This is pointless");
})();

// 13. Unexpected use of strict mode directives
"use strict";
// rest of the code is not in strict mode

// 14. Capitalized keywords outside of strings or templates
const cONSTANT = 5;

// 15. Using reserved keywords as variable names
let for = "loop";

// 16. Octal escape sequences in strings (not recommended)
const str = "\101 world";

// 17. Using arguments object in arrow functions
const sum = (a, b) => arguments[0] + arguments[1];

// 18. Using `with` statement
with (obj) {
  console.log(name);
}

// 19. Using eval() or Function()
const code = "console.log('Eval')";
eval(code);

// 20. Using `new` keyword with non-constructor functions
const strObj = new String("hello");
