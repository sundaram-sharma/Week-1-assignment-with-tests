/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  let temp1 = str.toLowerCase().replace(/\W/g, '');
  let rev_str = "";
    for (let i = temp1.length - 1; i >= 0; i--) {
        rev_str += temp1[i];
    }
  if(rev_str === temp1){
    console.log("Palindrome")
    return true
  }
  else{
    console.log("Not Palindrome")
    return false;
  }
}

isPalindrome("iidii");

module.exports = isPalindrome;
