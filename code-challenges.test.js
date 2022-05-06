// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// Pseudo
// remove first item in array with a .slice
// shuffle array using a math.random or indexes and mapping a new array

describe("shuffle", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"]
  const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
  it("Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// FAIL  ./code-challenges.test.js
//  shuffle
//    ✕ Create a function that takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
//
//  ● shuffle › Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
//
//    ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.


// const shuffle = (array) => {
//   let removeFirstArray = array.slice(1)
//   let arrayLength = removeFirstArray.length
//   let shuffledArray = Math.floor(Math.random() * arrayLength)
// return     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex], array[currentIndex]];
// }

//
// const shuffle = (array) => {
//   let removeTheFirst = array.slice(1)
//   let currentIndex = removeTheFirst.length,  randomIndex;
//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     [removeTheFirst[currentIndex], removeTheFirst[randomIndex]] = [
//       removeTheFirst[randomIndex], removeTheFirst[currentIndex]];
//   }
//   return array.slice(1)
// }
                const shuffle = (array) => {
                  let removeTheFirst = array.slice(1)
                  return removeTheFirst
                  let currentIndex = removeTheFirst.length,  randomIndex;
                  while (currentIndex != 0) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
                    [array[currentIndex], array[randomIndex]] = [
                      array[randomIndex], array[currentIndex]];
                  }
                  return array.slice(1);
                }


// console.log(shuffle(colors1));
// console.log(shuffle(colors2));

// console.log(colors2);

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
// const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


// psuedo
// will .filter for min and max and then combine both arrays?
// sort the arrays for largest to smallest
// get the first index of the array and the last index of an array1
// create a new array with for let because making arrays with just two numbers is hard.


describe("finishedArray", () => {
  it("Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    const nums2 = [109, 5, 9, 67, 8, 24]
    expect(finishedArray(nums1)).toEqual([-8, 90])
    expect(finishedArray(nums2)).toEqual([5, 109])
  })
})


// FAIL  ./code-challenges.test.js
//  ● Test suite failed to run
//
//    ReferenceError: finishedArray is not defined

// b) Create the function that makes the test pass.

finishedArray = (n) => {
  let smallestToLargestArry = n.sort((a, b) => a - b)
  let minArr = smallestToLargestArry[0]
  let maxArr = smallestToLargestArry[smallestToLargestArry.length -1]
  let newArr = []
  for (let i=minArr; i< maxArr; i=i+smallestToLargestArry){
    newArr.push(i)
  }
  newArr.push(maxArr)
  return newArr
}
// console.log(finishedArray(nums1));
// console.log(finishedArray(nums2));


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// const testArray1 = [3, 7, 10, 5, 4, 3, 3]
// const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// psudeo
// concat both arrays into one array1
// do a for let on combined array removing the duplicate by using indexof and pushing unique numbers


describe("removeDuplicates", () => {
  it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    expect(removeDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})




// b) Create the function that makes the test pass.
//
removeDuplicates = (arr1,arr2) => {
const mergeArray = arr1.concat(arr2)
const uniqueArr = []
for (let i of mergeArray){
  if (uniqueArr.indexOf(i) === -1){
    uniqueArr.push(i)
        }
      }
      return uniqueArr
    }

// console.log(removeDuplicates(testArray1, testArray2))

// spreadOperator = (arr1, arr2) =>{
// let mergedSpreadArr = [...arr1,...arr2]
// let uniqueSpreadArr = []
//   uniqueSpreadArr = [... new Set(mergedSpreadArr)]
//   return uniqueSpreadArr
// }
//
// console.log(spreadOperator(testArray1, testArray2));
