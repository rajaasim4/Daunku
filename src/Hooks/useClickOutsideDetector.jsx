import React, { useEffect } from "react";
function useClickOutsideDetector(ref, onClickOutside) {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    console.log(ref.current);
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }
    // Bind
    document.addEventListener("mousedown", handleClickOutside, {
      capture: true,
    });
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [ref, onClickOutside]);
}
export default useClickOutsideDetector;

// Method to Use This Hook
//Import useRef
// First Import the Hook Where You want To use
// Now Create a Varialbe of Any name and put the Class as Argument Which you want to Hide When Click OutSide
//  let mainMenu = useRef("Main_nav");
/*  ClickOutside(mainMenu, () => {
    setShow(false);
  });*/

// <div ref={mainMenu}></div>
