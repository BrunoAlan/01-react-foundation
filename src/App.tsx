import { CounterWithHook } from "./components";
import { Counter } from "./components/Counter";
// import { BasicFuntions, BasicTypes, ObjectLiterals } from "./typescript";

function App() {
  return (
    <main>
      <h1>Introduction to TS-React</h1>

      {/* <BasicTypes />
      <ObjectLiterals />
      <BasicFuntions /> */}
      <Counter />
      <CounterWithHook />
    </main>
  );
}

export default App;
