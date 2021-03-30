import { useEffect } from "react";
import classes from "./Countdown.module.css";
const Countdown = ({ countdown, setCountdown }) => {
  useEffect(function() {
    if (!countdown) return;
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [Countdown]);
  return (
    <div className={classes.Countdown}>{countdown}</div>
  );
}
export default Countdown;