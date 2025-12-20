import { useEffect, useRef } from "react";

const AutoFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current;
  }, []);

  return (
    <input
      className="border rounded-2xl p-2 my-3"
      ref={inputRef}
      placeholder="Type here.."
    />
  );
};

export default AutoFocus;
