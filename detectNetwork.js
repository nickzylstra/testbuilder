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

  let cardFirstTwoChars = cardNumber.slice(0,2);
  let cardLength = cardNumber.length;
  let cardNetwork = undefined;

  if ([14].includes(cardLength) && ['38', '39'].includes(cardFirstTwoChars)) {
    cardNetwork = 'Diner\'s Club'; 
  } else if ([15].includes(cardLength) && ['34', '37'].includes(cardFirstTwoChars)) {
    cardNetwork =  'American Express';
  } else if ([13, 16, 19].includes(cardLength) && ['4'].includes(cardFirstTwoChars.slice(0,1))) {
    cardNetwork = 'Visa';
  } else if ([16].includes(cardLength) && ['51', '52', '53', '54', '55'].includes(cardFirstTwoChars)) {
    cardNetwork = 'MasterCard';
  }

  return cardNetwork;
};
