export const calculateMatrixA = (n) => {
  console.log("lol");
  return Array.from({length: n}, (_, index) => {
    console.log("row number ", index);
    const arr = Array.from({length: n}, (_, ind) => {
      if (ind === index) return 3 + index + 1 + 2 / (index + 1);
      if (ind === index - 1) return 5 / (ind + 1);
      if (ind - 1 === index) return 5 / ind;
      if ((ind === 0 && index === n - 1) || (ind === n - 1 && index === 0))
        return 1;
      return 0;
    });
    return arr;
  });
};

export const multiplyMatrix = (A, B, n) => {
  const product = createZerosMatrix(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        product[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return product;
};

export const formatNumber = (value) => {
  return value.toExponential(8);
};

export const calculateReverseMatrix = (St, D, S, n) => {
  const E = createIdentityMatrix(n);
  const y = createZerosMatrix(n);

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let k = 0; k < i; k++) {
        sum += St[i][k] * D[k] * y[k][j];
      }
      y[i][j] = (E[i][j] - sum) / (St[i][i] * D[i]);
    }
  }
  const X = createZerosMatrix(n);

  for (let j = 0; j < n; j++) {
    for (let i = n - 1; i >= 0; i--) {
      let sum = 0;
      for (let k = i + 1; k < n; k++) {
        sum += S[i][k] * X[k][j];
      }
      X[i][j] = (y[i][j] - sum) / S[i][i];
    }
  }

  return X;
};

export function createIdentityMatrix(n) {
  return Array(n)
    .fill()
    .map((_, i) =>
      Array(n)
        .fill()
        .map((_, j) => (i === j ? 1 : 0)),
    );
}

export const calculateVectorB = (n) => {
  return Array.from({length: n}, (_, ind) => ind + 5);
};

function createZerosMatrix(n) {
  return Array(n)
    .fill()
    .map(() => Array(n).fill(0));
}

export function getInfinityNorm(matrix) {
  let maxSum = 0;

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = matrix[i].reduce((sum, val) => sum + Math.abs(val), 0);
    maxSum = Math.max(maxSum, rowSum);
  }
  return maxSum;
}
