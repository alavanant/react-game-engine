import { Stage, Container } from "@pixi/react";
import { FC } from "react";
import { Main } from "./Characters/Main";

export const Game: FC = () => {
  const size = { width: 640, height: 360 };

  return (
    <Stage {...size}>
      <Container>
        <Main />
      </Container>
    </Stage>
  );
};
