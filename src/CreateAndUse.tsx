/**
 * createRef 和 useRef 区别
 * - useRef 只能用于函数式组件
 * - createRef常用于类组件, 其并没有 Hooks 的效果，
 *   其值会随着 FunctionComponent 重复执行而不断被初始化，
 *   每次拿到的引用都是新的，所以不建议放在函数式组件
 */

import { createRef, useEffect, useRef, useState } from "react";

let prev: React.RefObject<HTMLSpanElement> | null = null;
let prev1: React.RefObject<HTMLSpanElement> | null = null;

function App() {
  const ref = useRef<HTMLSpanElement>(null);
  const ref1 = createRef<HTMLSpanElement>();
  const [state, setState] = useState(false);

  if (!prev) {
    prev = ref;
    prev1 = ref1;
  } else {
    console.log("useRef", ref === prev); // true
    console.log("createRef", ref1 === prev1); // false
  }

  useEffect(() => {
    console.log("useEffect", ref.current);
    console.log("createRef", ref1.current);
  }, []);

  return (
    <div onClick={() => setState(!state)}>
      <h3>useEffect & createRef</h3>
      <span ref={ref}>useRef</span>
      <span ref={ref1}>createRef</span>
      <span>{state}</span>
    </div>
  );
}

export default App;
