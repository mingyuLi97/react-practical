import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("useEffect", ref.current);
    ref.current?.focus();
  }, []);

  return (
    <div>
      <h3>useEffect</h3>
      <input type="text" ref={ref} />
    </div>
  );
}

export default App;
