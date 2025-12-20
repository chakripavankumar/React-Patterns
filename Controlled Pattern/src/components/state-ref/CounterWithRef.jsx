import { useState } from "react";
import { useRef } from "react";

const CounterWithRef = () => {
  const countRef = useRef(0); // persisits between re-renders
  const [renderCount, setRenderCountref] = useState(0); // for forceing rerenders

  const increment = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref Count:", countRef.current);
  };

  return (
    <div className="flex justify-around w-full">
      <div>
        <h2 className=" text-2xl"> Ref Count: {countRef.current}</h2>
        <button className="bg-purple-500 text-white p-1 " onClick={increment}>
          Increment Ref Count
        </button>
      </div>
      <div>
        <h2 className="text-2xl"> Render Count : {renderCount}</h2>
        <button
          className="bg-purple-500 text-white p-1"
          onClick={() => setRenderCountref(renderCount + 1)}
        >
          Force Re-render{" "}
        </button>
      </div>
    </div>
  );
};

export default CounterWithRef;
