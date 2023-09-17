import Button from "./Button";

function App() {
  return (
    <div className="page_main">
      <h1>React Practical</h1>
      <Button
        type={"primary"}
        style={{ fontSize: "20px", color: "red" }}
        className="abc def"
        data-index={1}
        onClick={() => console.log("button click")}
      >
        测试
      </Button>
    </div>
  );
}

export default App;
