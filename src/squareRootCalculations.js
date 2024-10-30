export function sqrtMethodDecomposition(A) {
  const n = A.length;
  let S = Array.from({length: n}, () => Array(n).fill(0));
  let D = Array(n).fill(0);

  function sgn(x) {
    return x >= 0 ? 1 : -1;
  }

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let p = 0; p < i; p++) {
      sum += Math.pow(S[p][i], 2) * D[p];
    }
    D[i] = sgn(A[i][i] - sum);

    S[i][i] = Math.sqrt(Math.abs(A[i][i] - sum));

    for (let j = i + 1; j < n; j++) {
      let sum2 = 0;
      for (let p = 0; p < i; p++) {
        sum2 += S[p][i] * D[p] * S[p][j];
      }
      S[i][j] = (A[i][j] - sum2) / (D[i] * S[i][i]);
    }
  }

  return {S, D};
}

export function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let transposed = Array.from({length: cols}, () => Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;
}

export const multiplyMatrixWithD = (matrix, vector) => {
  return matrix.map((el, ind) => {
    if (vector[ind] === 1) return el;
    else return el.map((el) => -1 * el);
  });
};

export const findYRootsForMatrix = (matrix, vector, isReverse = false) => {
  const result = Array.from({length: vector.length}).fill(0);
  if (!isReverse) {
    for (let ind = 0; ind < vector.length; ind++) {
      let sum = 0;
      for (let i = 0; i < ind; i++) {
        sum += result[i] * matrix[ind][i];
      }
      result[ind] = (vector[ind] - sum) / matrix[ind][ind];
    }
  } else {
    for (let ind = vector.length - 1; ind >= 0; ind--) {
      let sum = 0;
      for (let i = vector.length - 1; i >= ind; i--) {
        sum += result[i] * matrix[ind][i];
      }
      result[ind] = (vector[ind] - sum) / matrix[ind][ind];
    }
  }
  return result;
};

export const calculateAccuracy = (matrix, x, b) => {
  const result = [];
  for (let i = 0; i < x.length; i++) {
    let sum = 0;
    for (let j = 0; j < x.length; j++) {
      sum += x[j] * matrix[i][j];
    }
    result[i] = b[i] - sum;
  }
  return result;
};

export const calculateDeterminant = (S, D) => {
  const d_res = D.reduce((acc, current) => acc * current, 1);
  console.log(d_res);
  const s_res = S.reduce((acc, curr, ind) => acc * curr[ind] * curr[ind], 1);
  return d_res * s_res;
};
