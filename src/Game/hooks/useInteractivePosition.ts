import { useTick } from "@pixi/react";
import { useState } from "react";
import { useKey } from "../hooks/useKey";

type UseInteractivePositionFn = (startPosition: { x: number; y: number }) => {
  x: number;
  y: number;
};

export const useInteractivePosition: UseInteractivePositionFn = (
  startPosition
) => {
  const [position, setPosition] = useState(startPosition);

  const [velocity, setVelocity] = useState({
    vx: 0,
    vy: 0,
  });

  useKey({
    code: "KeyA",
    onPress: () => setVelocity((velocity) => ({ ...velocity, vx: -1 })),
    onRelease: () => setVelocity((velocity) => ({ ...velocity, vx: 0 })),
  });
  useKey({
    code: "KeyD",
    onPress: () => setVelocity((velocity) => ({ ...velocity, vx: 1 })),
    onRelease: () => setVelocity((velocity) => ({ ...velocity, vx: 0 })),
  });
  useKey({
    code: "KeyW",
    onPress: () => setVelocity((velocity) => ({ ...velocity, vy: -1 })),
    onRelease: () => setVelocity((velocity) => ({ ...velocity, vy: 0 })),
  });
  useKey({
    code: "KeyS",
    onPress: () => setVelocity((velocity) => ({ ...velocity, vy: 1 })),
    onRelease: () => setVelocity((velocity) => ({ ...velocity, vy: 0 })),
  });
  useTick((delta) => {
    setPosition(({ x, y }) => ({
      x: x + velocity.vx * delta,
      y: y + velocity.vy * delta,
    }));
  });

  return position;
};
