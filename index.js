function reverse(word)  {
  // Write your algorithm here
  return word.split("").reverse().join("");
  // const regex = /[\W_]/g;
  // const lowRegWord = word.toLowerCase().replace(re, '');
  // const reverseWord = lowRegWord.split('').reverse().join('');
  // var len = word.length;
  // for (var i = 0; i < len/2; i++) {
  //   if (word[i] !== word[len - 1 - i]) { 
  //       return false; 
  //   }
  //   return true;
  // }
}
function isPalindrome(word) {
  const reversedWord = reverse(word);

  return word === reversedWord;
}
/* 
  Add your pseudocode here
  create a function that going to take the word and parse each 
  letter in it ,then it will be put it in condetion 
  the condition will return true if it palindrome and  if not it 
  will return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
