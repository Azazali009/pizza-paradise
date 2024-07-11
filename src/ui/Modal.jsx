import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, size = "large", onClose }) => {
  const ref = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          onClose();
        }
      }
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    },

    [onClose],
  );

  return createPortal(
    <div className="fixed inset-0 bg-gray-400 bg-opacity-70">
      <div
        ref={ref}
        className={`no-scrollbar fixed left-[50%] top-[50%] max-h-[calc(100vh-5em)] w-11/12 bg-white text-tertiary ${
          size === "mini" ? " max-w-xl" : " max-w-5xl"
        }  -translate-x-[50%] -translate-y-[50%] overflow-hidden rounded-md shadow-xl `}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
