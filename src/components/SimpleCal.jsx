import React, { useState } from "react";
import styles from "../css/simplecal.module.css";

function SimpleCal() {
  const [num1, setNum1] = useState(0);
  const [input, setInput] = useState("");
  const [oper, setOper] = useState("");
  const handleOperand = (operand) => {
    setOper(operand);
    setNum1(parseFloat(input));
    setInput("");
  };
  const handleEqual = () => {
    setInput("");
    if (oper === "divide") {
      var ans = num1 / parseFloat(input);
      setInput(ans);
    } else if (oper === "add") {
      var ans = num1 + parseFloat(input);
      setInput(ans);
    } else if (oper === "minus") {
      var ans = num1 - parseInt(input);
      setInput(ans);
    } else if (oper === "multiply") {
      var ans = num1 * parseInt(input);
      setInput(ans);
    }
  };
  const handlePercentage = () => {
    let modulo = parseFloat(input) * 0.01;
    setInput(modulo);
  };
  const handleClear = () => {
    setInput("");
    setNum1(0);
  };
  const handleNegative = () => {
    let neg = parseFloat(input) - parseFloat(input) * 2;
    setInput(neg);
  };
  return (
    <div className={styles.cal}>
      <h1>Simple Calculator</h1>
      <div className={styles.calc}>
        <div className={styles.textinput}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClear}>AC</button>
          <button onClick={handleNegative}>+/-</button>
          <button onClick={handlePercentage}>%</button>
          <button className="operands" onClick={() => handleOperand("divide")}>
            /
          </button>
          <button onClick={() => setInput(input + "7")}>7</button>
          <button onClick={() => setInput(input + "8")}>8</button>
          <button onClick={() => setInput(input + "9")}>9</button>
          <button
            className="operands"
            onClick={() => handleOperand("multiply")}
          >
            x
          </button>
          <button onClick={() => setInput(input + "4")}>4</button>
          <button onClick={() => setInput(input + "5")}>5</button>
          <button onClick={() => setInput(input + "6")}>6</button>
          <button className="operands" onClick={() => handleOperand("add")}>
            +
          </button>
          <button onClick={() => setInput(input + "1")}>1</button>
          <button onClick={() => setInput(input + "2")}>2</button>
          <button onClick={() => setInput(input + "3")}>3</button>
          <button className="operands" onClick={() => handleOperand("minus")}>
            -
          </button>
        </div>
        <div className={styles.buttons2}>
          <button onClick={() => setInput(input + "0")}>0</button>
          <button onClick={() => setInput(input + ".")}>.</button>
          <button className={styles.operands} onClick={handleEqual}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleCal;
