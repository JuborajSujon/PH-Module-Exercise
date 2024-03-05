/**
 * Truthy - always
 * 1.true
 * 2. Any number (+ve , -ve) will be truthy other than 0
 * 3. Any string will be truthy other than ""
 * 4. empty object {}
 * 5. empty array []
 * 6. funtion(){}
 *
 * Falsy - always
 * 1. false
 * 2. 0 or -0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 * 6. NaN
 */
const x = false; //check varivable
if (x) {
  console.log("value of x is truthy");
} else {
  console.log("value of x is falsy");
}

// if check falsy or truthy

// check falsy
const y = "";
if (!y) {
  console.log("Value is falsy");
}

// check truthy
const z = "";
if (!!z) {
  console.log("Value is truthy");
}
