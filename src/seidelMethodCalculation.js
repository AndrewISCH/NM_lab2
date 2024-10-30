export function seidelMethod(A, b, eps = 1e-6) {
  const n = A.length;
  let x = new Array(n).fill(0);
  let iteration = 0;

  while (true) {
    let xNew = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      let s1 = 0;
      let s2 = 0;

      for (let j = 0; j < i; j++) {
        s1 += A[i][j] * xNew[j];
      }

      for (let j = i + 1; j < n; j++) {
        s2 += A[i][j] * x[j];
      }

      xNew[i] = (b[i] - s1 - s2) / A[i][i];
    }

    iteration++;

    if (isConverged(x, xNew, eps)) {
      return {
        solution: xNew,
        iterations: iteration,
      };
    }

    x = [...xNew];
  }
}

function isConverged(x1, x2, eps) {
  return x1.every((val, i) => Math.abs(val - x2[i]) < eps);
}
