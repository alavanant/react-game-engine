import { useTick } from "@pixi/react";
import { useState } from "react";
import { useKey } from "../hooks/useKey";

type UseInteractivePositionFn = (
  startPosition: [number, number]
) => [number, number];

export const useInteractivePosition: UseInteractivePositionFn = (
  startPosition
) => {
  const [position, setPosition] = useState(startPosition);

  const [velocity, setVelocity] = useState([0, 0]);

  const step = 1;
  const left: [number, number] = [-step, 0];
  const right: [number, number] = [step, 0];
  const top: [number, number] = [0, -step];
  const bottom: [number, number] = [0, step];

  const accelerate = ([ax, ay]: [number, number]): void =>
    setVelocity(([vx, vy]) => [vx + ax, vy + ay]);
  const decelerate = ([ax, ay]: [number, number]): void =>
    setVelocity(([vx, vy]) => [
      ax ? Math.sign(ax) * Math.min(Math.abs(vx - ax), step) : vx,
      ay ? Math.sign(ay) * Math.min(Math.abs(vy - ay), step) : vy,
    ]);

  const controls: Array<[KeyboardEvent["code"], [number, number]]> = [
    ["KeyA", left],
    ["KeyD", right],
    ["KeyW", top],
    ["KeyS", bottom],
  ];

  controls.map(([code, vector]) => {
    useKey({
      code,
      onPress: () => accelerate(vector),
      onRelease: () => decelerate(vector),
    });
  });

  useTick((delta) => {
    setPosition(([x, y]) => [x + velocity[0] * delta, y + velocity[1] * delta]);
  });
  console.log(position, velocity);
  return position;
};
