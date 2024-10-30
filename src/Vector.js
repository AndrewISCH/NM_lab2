import {formatNumber} from "./calculateMatrix";

export const Vector = ({vector}) => {
  return (
    <table>
      <tbody>
        {vector.map((el, ind) => (
          <tr key={ind}>
            <td>{formatNumber(el)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
