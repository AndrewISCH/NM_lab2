import {calculateMatrixA, formatNumber} from "./calculateMatrix";

export const Matrix = ({matrix}) => {
  return (
    <table>
      <tbody>
        {matrix.map((row, index) => (
          <tr key={index} className={`row`}>
            {row.map((el, ind) => (
              <td key={ind} className="td">
                {formatNumber(el)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
