function biggestElement(matrix) {
  let largestElement = Number.MIN_SAFE_INTEGER;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] >= largestElement) {
        largestElement = matrix[row][col];
       
      }
    }
  }
  return largestElement;
}