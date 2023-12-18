import styled from "styled-components";
import { Button } from "../styled/Button";
const startGame = ({ toggle }) => {
  return (
    <>
      <Conatianer>
        <div>
          <img src="/images/dices1.png" />
        </div>
        <div className="content">
          <h1>Dice Game </h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Conatianer>
    </>
  );
};

export default startGame;
// eslint-disable-next-line react-refresh/only-export-components
const Conatianer = styled.div`
  max-width: 1180px;
  display: flex;
  height: 90vh;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
// eslint-disable-next-line react-refresh/only-export-components
