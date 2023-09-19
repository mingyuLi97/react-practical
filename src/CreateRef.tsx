import { useEffect, createRef } from "react";

function App() {
  const ref = createRef<HTMLInputElement>();

  useEffect(() => {
    console.log("createRef", ref.current);
    ref.current?.focus();
  }, [ref]);

  return (
    <div>
      <h3>createRef</h3>
      <input type="text" ref={ref} />
    </div>
  );
}

export default App;
