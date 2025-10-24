import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Titulo from "./Titulo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container text-center">
        <Titulo titulo="Exemplo padrão Vite + React" />
        <div className="text-center">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        

        <h1>Vite + React</h1>
        <div className="card">
          <div className="m-2">
            <button
              className="btn btn-primary"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
       </div>
      </div>
    </>
  );
}

export default App;
