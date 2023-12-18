import styled from "styled-components";
//import { useState } from "react";
const RollDice = ({ roleDice, currentDice }) => {
  // eslint-disable-next-line no-undef
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click On the Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  p {
    font-size: 24px;
  }
  .dice {
    cursor: pointer;
  }
`;
