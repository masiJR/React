import "./App.css";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const jsonProducts = [
    {
      id: "001",
      name: "Apple",
      price: 2000.0,
    },
    {
      id: "002",
      name: "Orange",
      price: 7000.0,
    },
    {
      id: "003",
      name: "Mango",
      price: 15000.0,
    },
  ];
  return (
    <div>
      <h2 className="app-title">Market Cambodia</h2>
      <ExpenseItem
        id={jsonProducts[0].id}
        name={jsonProducts[0].name}
        price={jsonProducts[0].price}
      ></ExpenseItem>
      <ExpenseItem
        id={jsonProducts[1].id}
        name={jsonProducts[1].name}
        price={jsonProducts[1].price}
      ></ExpenseItem>
      <ExpenseItem
        id={jsonProducts[2].id}
        name={jsonProducts[2].name}
        price={jsonProducts[2].price}
      ></ExpenseItem>
    </div>
  );
}

export default App;
