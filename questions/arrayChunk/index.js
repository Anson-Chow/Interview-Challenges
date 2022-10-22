/** Given an array along with a chunk size, return a new array that contains
 * many subarrays where the length of each subarray is length `size`.
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

const arrayChunk = (array, size) => {
  // BEST PRACTISE
  // Create an empty 'chunkedArray' to hold the subarrays
  const chunkedArray = [];

  // For each index in the array that is divisible by 'size'
  for (let i = 0; i < array.length; i += size) {
    // Create a subarray of length 'size' that slices from the current index
    const subarray = array.slice(i, i + size);
    // Push this subarray onto our 'chunkedArray'
    chunkedArray.push(subarray);
  }

  return chunkedArray;
};

// SIMPLE TO UNDERSTAND
//   const arrayChunk2 = (array, size) => {
//     const chunkedArray = [];

//     for (let i = 0; i < array.length; ++i) {
//       if (i % size !== 0) {
//         continue;
//       }
//       const subarray = array.slice(i, i + size);
//       chunkedArray.push(subarray);
//     }

//     return chunkedArray;

module.exports = arrayChunk;
