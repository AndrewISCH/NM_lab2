import "./App.css";
import {Matrix} from "./Matrix";
import {
  multiplyMatrixWithD,
  sqrtMethodDecomposition,
  transposeMatrix,
  findYRootsForMatrix,
  calculateAccuracy,
  calculateDeterminant,
} from "./squareRootCalculations";
import {Vector} from "./Vector";
import {
  calculateMatrixA,
  calculateReverseMatrix,
  calculateVectorB,
  getInfinityNorm,
  multiplyMatrix,
} from "./calculateMatrix";
import {seidelMethod} from "./seidelMethodCalculation";

const n0 = 7;
function App() {
  const matrixA = calculateMatrixA(n0);
  const vectorB = calculateVectorB(n0);
  const {S, D} = sqrtMethodDecomposition(matrixA);
  const St = transposeMatrix(S);
  const StD = multiplyMatrixWithD(St, D);
  const vectorY = findYRootsForMatrix(StD, vectorB);
  const vectorX = findYRootsForMatrix(S, vectorY, true);
  const accuracyVector = calculateAccuracy(matrixA, vectorX, vectorB);
  const reverseMatrix = calculateReverseMatrix(St, D, S, n0);
  const productMatrix = multiplyMatrix(matrixA, reverseMatrix, n0);
  const matrixNorm = getInfinityNorm(matrixA);
  const reverseMatrixNorm = getInfinityNorm(reverseMatrix);
  const conditionallyNumber = matrixNorm * reverseMatrixNorm;
  const determainant = calculateDeterminant(S, D);
  const {solution, iterations} = seidelMethod(matrixA, vectorB);
  const seidelAccuracyVector = calculateAccuracy(matrixA, solution, vectorB);
  console.log(productMatrix);
  return (
    <div className="App">
      Matrix A
      <Matrix matrix={matrixA} />
      Vector b
      <Vector vector={vectorB} />
      <strong>Square root Method</strong>
      <div>Matrix S</div>
      <Matrix matrix={S} />
      Matrix D
      <Vector vector={D} />
      Matrix St
      <Matrix matrix={St} />
      Result of St * D
      <Matrix matrix={StD} />
      Y result Vector
      <Vector vector={vectorY} />
      X result Vector
      <Vector vector={vectorX} />
      R vector
      <Vector vector={accuracyVector} />
      Reverse Matrix
      <Matrix matrix={reverseMatrix} />
      Product A*A^-1
      <Matrix matrix={productMatrix} />
      <p> Matrix A inf.norm: {matrixNorm}</p>
      <p>A^-1 inf.norm: {reverseMatrixNorm}</p>
      <p>Conditionally Number: {conditionallyNumber}</p>
      <p>Determinant: {determainant}</p>
      <strong>Seidel Method</strong>
      <p>Solution vector</p>
      <Vector vector={solution} />
      <p>R vector</p>
      <Vector vector={seidelAccuracyVector} />
      <p>Number of iterations: {iterations}</p>
    </div>
  );
}

export default App;
