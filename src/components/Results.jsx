import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ inputValues }) {
  let totalInterest = 0;

  const investmentResults = calculateInvestmentResults(inputValues);
  const isDurationValid = inputValues.duration >= 0;

  return (
    <>
      {isDurationValid && (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {investmentResults.map((investment) => {
              return (
                <tr>
                  <td>{investment.year}</td>
                  <td>{formatter.format(investment.valueEndOfYear)}</td>
                  <td>{formatter.format(investment.interest)}</td>
                  <td>
                    {formatter.format((totalInterest += investment.interest))}
                  </td>
                  <td>
                    {formatter.format(
                      (investment.valueEndOfYear -= totalInterest)
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {!isDurationValid && (
        <p className="center">Invalid duration! Please check it again</p>
      )}
    </>
  );
}
