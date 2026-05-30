"use client";

import { useNotify } from "@/context/notifyContext.jsx";
import { useEffect } from "react";

export const Notify = () => {
  const { notifyText, notify, setNotify } = useNotify();

  useEffect(() => {
    if (!notify) return;
    const timer = setTimeout(() => setNotify(false), 1500);
    return () => clearTimeout(timer);
  }, [notify]);

  return (
    <div
      className={`fixed z-9999 text-center ${notify && notifyText? "top-1.5" : "-top-20"} bg-[#e2eaec] flex justify-self-center rounded py-2 px-4 transition-all duration-200 ease-linear shadow shadow-yellow-50 font-semibold`}
    >
      {notifyText}
    </div>
  );
};
