/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
let len1 = str1.length;
let leg2 = str2.length;
if(len1 !== leg2 ){
  console.log("Invalid length, make sure the length are equal")
  return false
}
else{
  let st1 = str1.toLowerCase().split('').sort().join('');
  let st2 = str2.toLowerCase().split('').sort().join('');
  if(st1 === st2){
    console.log(true);
    return true;
  }
  else{
    console.log(false);
    return false
  }
}

}

isAnagram("india", "niida");

module.exports = isAnagram;
