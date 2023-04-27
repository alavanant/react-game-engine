import { Sprite } from "@pixi/react";
import { useInteractivePosition } from "../hooks/useInteractivePosition";

export const Main = () => {
  const position = useInteractivePosition([50, 100]);

  return (
    <Sprite
      image="https://pixijs.io/pixi-react/img/bunny.png"
      position={position}
    />
  );
};
