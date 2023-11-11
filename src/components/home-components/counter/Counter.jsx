import React from "react";
import { useSpring, animated } from "react-spring";

// s is just for the sign($,+), to add with the values
const Counter = ({ n ,s}) => {
  const {number} = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0)+s)}</animated.div>;
};

export default Counter;
