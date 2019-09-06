// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  let cardPrefix = parseInt(cardNumber.slice(0,2));
  let cardLength = cardNumber.length;
  let cardNetwork = undefined;

  // other card types in later part of exercise require range
  function isWithinRange (int, low, high) {
    return (int <= high && int >= low);
  }

  if (cardLength === 14 && isWithinRange(cardPrefix, 38, 39)) {
    cardNetwork = 'Diner\'s Club'; 
  } else if (cardLength === 15 && (cardPrefix === 34 || cardPrefix === 37)) {
    cardNetwork =  'American Express';
  }

  return cardNetwork;
};
