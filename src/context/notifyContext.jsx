"use client";

import { createContext, useContext, useState } from "react";

const NotifyContext = createContext();

export const useNotify = () => useContext(NotifyContext);

export const NotifyProvider = ({ children }) => {
  const [notify, setNotify] = useState(false);
  const [notifyText, setNotifyText] = useState(null);

  return (
    <NotifyContext.Provider
      value={{ notifyText, setNotifyText, notify, setNotify }}
    >
      {children}
    </NotifyContext.Provider>
  );
};
