import { useState } from "react";
import { SubHeading } from "../SubHeading/SubHeading";
import StyledButton from "../StyledButton/StyledButton";

const StyledCounter = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <SubHeading content={count} />
      <StyledButton onBtnClick={decrementCount}> - </StyledButton>
      {/* pass reference of decrementCount function as props to StyledButton component*/}
      <StyledButton onBtnClick={incrementCount}> + </StyledButton>

    </div>
  );
};

export default StyledCounter;
