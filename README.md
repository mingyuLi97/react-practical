# React Practical

## React.createRef

常用于类组件 createRef 并没有 Hooks 的效果，其值会随着 FunctionComponent 重复执行而不断被初始化，每次拿到的引用都是新的，所以不建议放在函数式组件

## React.useRef

只能用于函数式组件

## forwardRef & useImperativeHandle

用于转发 Ref，一般用于父组件访问子组件的方法、元素。
