import "./App.css";

import { useState, useEffect, createContext } from "react";

// Question 24
const Counter = ({ initial }) => {
  let count = initial ?? 0;

  const handleClick = () => (count += 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

// Question 25
const Quantity = ({ onChange }) => {
  const [qty, setQty] = useState(100);

  const handleIncrement = () => {
    setQty(qty + 2);
    onChange(qty);
  };

  const handleDecrement = () => {
    setQty(qty - 2);
    onChange(qty);
  };

  return (
    <>
      <div>
        <button onClick={handleDecrement}>-2</button>
        {qty}
        <button onClick={handleIncrement}>+2</button>
      </div>
    </>
  );
};

// Question 26
const Updates = () => {
  let [count, setCount] = useState(100);
  let [updates, setUpdates] = useState(0);

  useEffect(() => {
    setUpdates(updates + 1);
  }, [count, updates]);

  const handleClick = () => setCount(count + 1);

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};

// Question 27
const Facts = () => {
  const [facts, setFacts] = useState(null);

  useEffect(() => {
    const setData = async () => {
      const response = await fetch("https://catfact.ninja/facts");
      const data = await response.json();
      setFacts(data.data);
    };

    setData();
  });

  return (
    <>
      {facts &&
        facts.map((fact, index) => {
          return <p key={index}>{fact.fact}</p>;
        })}
    </>
  );
};

// Question 28
const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => setInput(event.target.value);
  const handleClick = () => console.log("Current input", input);

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

const Header = () => {
  const [search, setSearch] = useState("");

  return <SearchBar />;
};

// Question 29
const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};

// Question 30
const Students = () => {
  const [students] = useState([
    { name: "Harrison", browniePoints: Math.floor(Math.random() * 100) },
    { name: "Sandra", browniePoints: Math.floor(Math.random() * 100) },
  ]);

  return (
    <>
      {students.map((student, index) => (
        <p key={index}>
          {student.name} - {student.browniePoints}
        </p>
      ))}
    </>
  );
};

// Question 31
const TextField = ({ initial }) => {
  const [input, setInput] = useState(initial);

  const handleChange = (event) => {
    setInput(event.target.value);
    // This console.log never logs the right input value, why?
    // Where could I move log this to see the new value?
    console.log(input);
  };
  

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
