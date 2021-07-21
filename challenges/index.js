// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function modulo(a, b) {
  // return the remainder of the division a / b
  return a % b;
}

function squareRoot(n) {
  // return the square root of n
  return Math.sqrt(n);


  
}

function raiseToPower(m, n) {
  // return the result of raising m to the nth power
}

function formatMoney(amount) {
  /**
   * return a the amount formatted into pounds sterling
   * Amounts should be a string with the £ symbol in front
   * formatMoney(2.33) => "£2.33"
   * Amounts should be rounded to 2 decimal numbers
   * formatMoney(2.338) => "£2.34"
   * Amounts should always have 2 decimal numbers even if they are zeroes
   * formatMoney(1) => "£1.00"
   */
}

function calculateCircleArea(r) {
  // return the area of a circle with radius r
  // round result to 3 decimal numbers
}

function calculateFullTurns(degrees) {
  // return the number of full turns you can make with the provided degrees
  // 1 full turn === 360 degrees
}

function getLength(str) {
  // return the length of the passed string
}

function putNamesTogether(firstName, lastName) {
  // return the first and last names with a space between them
}

function capitaliseString(str) {
  // return the passed string with its first letter capitalised
}

function dontShoutSentence(SENTENCE) {
  // return the passed sentence (IN ALL CAPS) in lower case
  // keep the first character capitalised
}

function getMiddle(str) {
  // return the middle (or middle two) character(s) of the passed string
}

function getLastWord(words) {
  // return the last word of a sentence
  // you can assume words doesn't have a period at the end
}

function hyphenateWords(words) {
  // return the passed string with the spaces replaced by hyphens ("-")
}

function convertToCamelCase(words) {
  // convert the passed string of space-separated words to camel case
  // camel case looks like this --> camelCaseLooksLikeThis
}

function areValuesEqual(left, right) {
  // return true if the passed arguments are strictly equal
}

function areValuesNotEqual(left, right) {
  // return true if the passed arguments are NOT equal
}

function isFromThe60s(year) {
  // return true if the year is in the 1960's
}

function isEvenLength(string) {
  // return true if string has an even length
}

function areStringsEqualCaseInsensitive(left, right) {
  // return true if the passed strings are equal ignoring case
}

function getEvenNumbers(nums) {
  //return an array of only the even numbers in the given array
}

function getItemsLongerThan(array, len) {
  //return an array of only the items longer than the given length
}

function getLastItems(array, n) {
  // return an array with the 'n' last items of 'array'
}

function getSandwichFilling(sandwich) {
  // if an array is a sandwich, the first and last items are the bread, return an array with the filling of the sandwich
}

function removeItem(array, n) {
  // return a new array without the item on position 'n', effectively removing it from the array
}

function mergeArrays(arr1, arr2) {
  // return a new array with all the elements of arr1 followed by all the elements of arr2
}

function flattenArrayByOne(arrayOfArrays) {
  // given a nested array or arrays, return a new array with one less level of nesting. All the elements of all the original nested arrays must be kept in their original order
  // for example:
  // [[1],[2],[[3,4]]] => [1,2,[3,4]]
}

function isItemOmnipresent(arrayOfArrays, item) {
  // return true if the passed item is present in all the arrays inside arrayOfArrays
}

function isOver40(user) {
  /*
    This function takes a user object with a property of age. It should return true if the user is over 40 and false if the user is 40 or younger.
    */
}

function getUserAge(user) {
  // return the user's age as a number.
  // you can assume that the passed user will always have a 'yearOfBirth' property.
}

function getUserPetAge(user) {
  /*  The argument user will be an object. The object is nested; there are objects paired to keys on the user object. It will be in this format:
      {
        name: "Tom",
        age: 26,
        pet: {
          name: "Barney",
          age: 6,
          type: "good boy"
        }
      };
      This function should access the age property in the nested pet object and return the value
  */
}

function createProduct() {
  /*
    This function should return an object with a type property and a price property. The value for type can be any string, and the value for price should be a number.
    */
}

function addPriceToProduct(product, price) {
  /* The argument product will be an object that looks like this:
    { type: 'Tofu slices' }
    Add a price property to this object and set its value to the price passed in as an argument. Then return the object.
    */
}

function getPropertyOfProduct(product, property) {
  /* The argument product will be an object that looks like this:
    { type: 'Easy-peeler satsumas', price: '£1.09', quantity: 8 }
    Given a 'property' as an argument, return the value associated with that 'property'. 
    E.g. if asked for the price 'property' of the above satsumas object, your function would return '£1.09'.
  */
}

function addPropertyToProduct(product, property, value) {
  /* The argument 'product' will be an object that looks like this:
    { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1 }
    Given a 'property' as an argument, as well as its corresponding value, update the 'product' to include this new information. Then return the updated 'product'.
    E.g. if given the 'property' 'length' and the value '2h 36m' (yes it really is that long) 
    your function should return { type: 'Terminator 2: Judgement Day', price: '£6.99', quantity: 1, length: '2h 36m' }
  */
}

function createNorthcoder(name, yearOfBirth) {
  // return an object with:
  // a name property set to the value of the name parameter
  // an age property set to whatever the age of the northcoder would be in the year 2019
  // a language property set to 'JavaScript'
}

function updateVoterAddress(voter, correctHouseNumber) {
  /* Uh-Oh! We've got some silly voters who've registered their addresses incorrectly. Lets help them fix those typos by changing their houseNumber to the correctHouseNumber. The user object looks like this:
    {
      name: "Alex",
      age: 39,
      address: { 
        houseNumber: 2, 
        street: "Old St", 
        city: "Chester" 
      }
    };
    Note - The function does NOT need to return anything.
  */
}

function createUserString(userObj) {
  // should take as an argument an object with the format from createNorthcoder
  // returns a string with the user's details in the form:
  // 'name: Mitch, age: 27, language: Javascript';
  // Note - this is a good use case of string template literals.
}

function getNorthcodersNames(northcoders) {
  // should take an array of objects with the format from createNorthcoder
  // returns an array of the users' names as strings
}

function getAlbumProperties(obj) {
  // should take an object with information about an album
  // should return an array containing all of the object's keys
  // E.g. {a: 'foo', b: 'car', c: 'bar'} should return ['a', 'b', 'c']
}

function deleteManyPasswords(users) {
  /*
    This function take an array of user objects and deletes the password key value pair on each user object.
    E.g.
    [
      {name: 'Barry', password: 'ilovetea'},
      {name: 'Sandeep', password: 'ilovecoffee'},
      {name: 'Kavita', password: 'ilovepie'}
    ]
    Returns:
    [
      {name: 'Barry' },
      {name: 'Sandeep'},
      {name: 'Kavita'}
    ]
    */
}

function countTheObjects(arr) {
  /*
    This function takes an array of different data types. It should return a count of the number of objects in the array.
    NB, think carefully about how to test if something is an object! Arrays are technically types of objects in JavaScript, as is the value null. However these should not be counted.
    */
}

module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
  isOver40,
  getUserAge,
  getUserPetAge,
  createProduct,
  addPriceToProduct,
  getPropertyOfProduct,
  addPropertyToProduct,
  createNorthcoder,
  updateVoterAddress,
  createUserString,
  getNorthcodersNames,
  getAlbumProperties,
  deleteManyPasswords,
  countTheObjects
};
