// anchors
const anchor1 = /^Hello/;
console.log(anchor1.test("Hello, world!")); // Output: true

const anchor2 = /Hello!$/;
console.log(anchor2.test("Hi, Hello!"));   // Output: true

//quantifier
const quantifier = /([a])\w+/;
console.log(quantifier.test('Validate where')) // Output: true

// OR operator
const OR = /cat|dog/;

console.log(OR.test("cat"));   // Output: true
console.log(OR.test("bird"));  // Output: false

// character classes
const character = /[0-9]/;

console.log(character.test("apple"));   // Output: false
console.log(character.test("10"));   // Output: true

//boundaries
const boundary = /\bapple\b/;

console.log(boundary.test("apple pie"));   // Output: true
console.log(boundary.test("pineapple"));   // Output: false
console.log(boundary.test("apples"));      // Output: false


const backReference = /<(\w+)>.+<\/\1>/;

console.log(backReference.test("<div>Hello</div>"));    // Output: true
console.log(backReference.test("<span>World</span>"));  // Output: true
console.log(backReference.test("<div>Test</span>"));    // Output: false

//look-ahead
const lookAhead = /\d+(?! euros)/;

console.log("The price is 10 dollars".match(lookAhead
));  // Output: [ '10', index: 13, input: 'The price is 10 dollars' ]
console.log("The price is 20 euros".match(lookAhead
));    // Output: null
