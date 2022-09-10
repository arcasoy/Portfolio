import React, { useRef, useImperativeHandle, forwardRef } from "react";

// This is now a test for the nav bar

const TestPage = forwardRef((props, ref) => {
  const greenRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      greenRef.current.scrollIntoView();
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
