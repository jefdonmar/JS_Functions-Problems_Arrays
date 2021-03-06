// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
  if (x > y) {
    return x;
  } else {
    return y;
  }
  }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
  return Math.max(x,y,z);
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function detectVowel(input){
  if (input=='a'||input=='e'||input=='i'||input=='o'||input=='u') {
    return true;
  } else {
    return false;
  }
    
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var chars = phase.split('');
    var outPhrase = [];

    chars.forEach(function (char)) {
      if (!isVowel (char) && char !=='') {
        outPhrase.push(char + 'o' + char);
      } else {
        outPhrase.push(char);
      }
    });

    return.outPhrase.join('');
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  return string.split('').reverse().join();
};

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var word = [];

function findLongestWord(words){
    if (words.length > word.length) {
      word = words;
    }
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {

  var x = words.filter( function(words) {
    return words.length > i;
  });
  return x;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}