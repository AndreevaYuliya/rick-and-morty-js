import React, { createContext, useContext, useState } from "react";

const ScrollLockContext = createContext({
  isLocked: false,
  setLocked: () => {},
});

export const useScrollLock = () => useContext(ScrollLockContext);

export const ScrollLockProvider = ({ children }) => {
  const [isLocked, setLocked] = useState(false);

  return (
    <ScrollLockContext.Provider value={{ isLocked, setLocked }}>
      {children}
    </ScrollLockContext.Provider>
  );
};
