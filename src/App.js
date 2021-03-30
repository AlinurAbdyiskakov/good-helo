import { useState } from "react";
import Countdown from "./componants/Countdown/Countdown";

const App = () => {
  const [countdown, setCountdown] = useState(20);
  const [a, setA] = useState(Math.round(Math.random() * 50));
  const [b, setB] = useState(Math.round(Math.random() * 50));
  const [c, setC] = useState("?");

  function reset() {
    setA(Math.round(Math.random() * 50));
    setB(Math.round(Math.random() * 50));
    setC("?");
    setCountdown(20);
  }

  function checkAnswer() {
    if (a + b == c) {
      reset();
    }
    else {
      alert("No");
    }
  }

  return (
    <div className="App">
      {a} + {b} = {c}
      
      <Countdown countdown={countdown}
        setCountdown={setCountdown} />
      <input type="text"
        onChange={({ target }) => setC(target.value)} />
      <button onClick={checkAnswer}>Ok</button>
    </div>
  );
}

export default App;