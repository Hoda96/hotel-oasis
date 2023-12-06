import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing);
      // To remove after render
      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}

useOutsideClick.protoTypes = {
  handler: PropTypes.func,
  listenCapturing: PropTypes.bool,
};
