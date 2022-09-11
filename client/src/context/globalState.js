import { createContext } from "react";

// Default values for global state context
export const globalState = {
  scrollDynamicOffset: 0,
  setScrollDynamicOffset: () => {},
};

export const GlobalStateContext = createContext(
  globalState // default value
);
