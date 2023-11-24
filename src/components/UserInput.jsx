export default function UserInput({ setInputValues }) {
  function hanldeSetInputValues(event, valueToSet) {
    setInputValues((prevValues) => {
      return { ...prevValues, [valueToSet]: Number(event.target.value) };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            onChange={(event) =>
              hanldeSetInputValues(event, "initialInvestment")
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              hanldeSetInputValues(event, "annualInvestment")
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) => hanldeSetInputValues(event, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => hanldeSetInputValues(event, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
