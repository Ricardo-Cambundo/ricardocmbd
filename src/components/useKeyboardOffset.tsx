import { useEffect, useState } from "react";

export function useKeyboardOffset(isActive: boolean) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setOffset(0);
      return;
    }

    const viewport = window.visualViewport;
    if (!viewport) return;

    const update = () => {
      const keyboardHeight =
        window.innerHeight - viewport.height;

      setOffset(keyboardHeight > 100 ? keyboardHeight : 0);
    };

    update();

    viewport.addEventListener("resize", update);

    return () => {
      viewport.removeEventListener("resize", update);
    };
  }, [isActive]);

  return offset;
}
