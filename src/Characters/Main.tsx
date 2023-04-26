import { Sprite } from "@pixi/react";
import { useInteractivePosition } from "../hooks/useInteractivePosition";

export const Main = () => {
  const position = useInteractivePosition();

  return (
    <Sprite image="https://pixijs.io/pixi-react/img/bunny.png" {...position} />
  );
};
