import { useEffect, useState } from "react";

// CUSTOM HOOK TO CLOSE ANY POPUP/MODAL ON CLICK OUTSIDE
const useOutsideClicker = (elmRef) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (elmRef && !elmRef?.current?.contains(event.target)) {
      setIsClicked(true);
    }
  };

  return isClicked;
};

export default useOutsideClicker;
