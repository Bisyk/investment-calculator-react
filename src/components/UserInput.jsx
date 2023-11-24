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
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              hanldeSetInputValues(event, "annualInvestment")
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) => hanldeSetInputValues(event, "expectedReturn")}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => hanldeSetInputValues(event, "duration")}
            required
          />
        </p>
      </div>
    </section>
  );
}
