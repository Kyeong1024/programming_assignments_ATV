import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal") as HTMLElement;

const Modal = ({ children }: { children: React.ReactNode }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const current = el.current;

    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default Modal;
