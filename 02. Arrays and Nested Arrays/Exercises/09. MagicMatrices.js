function magicMatrices(matrix) {
  let sumRows = [];
  let sumCols = [];

  let sumCurrentRow = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      sumCurrentRow += matrix[row][col];
    }
    sumRows.push(sumCurrentRow);
    sumCurrentRow = 0;
  }


  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  let sumCurrentCol = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      sumCurrentCol += matrix[row][col];
    }
    sumCols.push(sumCurrentCol);
    sumCurrentCol = 0;
  }

  let checkCols = false;
  for (let i = 0; i < sumCols.length - 1; i++) {
      if (sumCols[i] == sumCols[i + 1]){
        checkCols = true;
      } else {
        checkCols = false;
        break;
      }
  }

  let checkRows = false;
  for (let i = 0; i < sumRows.length - 1; i++) {
      if (sumRows[i] == sumRows[i + 1]) {
          checkRows = true;
      } else {
          checkRows = false;
          break;
      }
  }

  let check = false;
  sumCols.sort((a, b) => a - b);
  sumRows.sort((a, b) => a - b);
  if (checkCols == true && checkRows == true && sumCols.length == sumRows.length) {
    for (let i = 0; i < sumCols.length; i++) {
        if (sumCols[i] == sumRows[i]) {
          check = true;
        } else {
          check = false;
          break;
        }
      }
  } 
  
  if (check) {
    return true;
  } else {
    return false;
  }
}