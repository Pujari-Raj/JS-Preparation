import "./App.css";
import React, { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import ExampleComponent from "./components/ExampleComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ProductCard from "./components/ProductCard";
import Stateful from "./components/Stateful";
import Pages from "./components/Pages";

function App() {
  const productProps = {
    name: "test",
    description: "This is an example product description.",
    price: 19.99,
    image: "example.jpg",
  };

  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ProductCard props={productProps} /> */}
      {/* <Stateful/> */}
      {/* <ErrorBoundary>
        <ExampleComponent/>
      </ErrorBoundary> */}
      {/* <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)} style={{border: "1px solid", color: "red"}}>Increment</button>
        <ExpensiveCalculation value={count} />
      </div> */}
      <Router>
        <Routes>
          <>
            <Route path="/" exact element={<Pages page="" />} />
            <Route path="/about" element={<Pages page="about" />} />
            <Route path="/contact" element={<Pages page="contact" />} />
          </>
        </Routes>
      </Router>
    </>
  );
}

export default App;
