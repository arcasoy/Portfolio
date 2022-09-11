import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useContext,
} from "react";

//Import Context
import { GlobalStateContext } from "../context/globalState";

const TestPage = forwardRef((props, ref) => {
  const greenRef = useRef(null);

  // Global State Context
  const { scrollDynamicOffset, setScrollDynamicOffset } =
    useContext(GlobalStateContext);

  // Imperative Handle methods for scrolling.
  // scrollIntoView will bring the start of the element to the top of the page
  // dynamic scroll will bring the element to under the Navbar component, and
  // change scroll distance depending on Navbar height
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      greenRef.current.scrollIntoView();
    },
    dynamicScroll: () => {
      console.log(scrollDynamicOffset);
      console.log(greenRef.current.offsetTop);
      window.scrollTo(0, greenRef.current.offsetTop + scrollDynamicOffset);
    },
  }));

  return (
    <>
      <div
        style={{ width: "100%", height: "1500px", backgroundColor: "blue" }}
      ></div>
      <div
        ref={greenRef}
        style={{ width: "100%", height: "1500px", backgroundColor: "green" }}
      ></div>
    </>
  );
});

export default TestPage;
