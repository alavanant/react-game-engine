import { useCallback, useEffect } from "react";

interface IKey {
  code: KeyboardEvent["code"];
  isDown: boolean;
  isUp: boolean;
}

type UseKeyFn = (props: {
  code: KeyboardEvent["code"];
  onPress?: VoidFunction;
  onRelease?: VoidFunction;
}) => IKey;

export const useKey: UseKeyFn = ({ code, onPress, onRelease }) => {
  const key: IKey = {
    code,
    isDown: false,
    isUp: true
  };
  //The `downHandler`
  const downHandler = useCallback((event: KeyboardEvent) => {
    if (event.code === key.code) {
      if (key.isUp && onPress) {
        onPress();
      }
      key.isDown = true;
      key.isUp = false;
      event.preventDefault();
    }
  }, []);

  const upHandler = useCallback((event: KeyboardEvent) => {
    if (event.code === key.code) {
      if (key.isDown && onRelease) {
        onRelease();
      }
      key.isDown = false;
      key.isUp = true;
      event.preventDefault();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", downHandler, false);
    window.addEventListener("keyup", upHandler, false);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [downHandler, upHandler]);

  return key;
};
