import Form from "./components/Form.js";
import Logo from "./components/Logo.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/Stats.js";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Wallet", quantity: 12, packed: false },
  { id: 3, description: "Cloths", quantity: 2, packed: false },
  { id: 4, description: "Charger", quantity: 12, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }
  function handleRemoveItem(itemId) {
    setItems((prev) => prev.filter((ele) => ele.id !== itemId));
  }

  function handleStrikeItem(itemId) {
    setItems((prev) =>
      prev.map((ele) =>
        ele.id === itemId ? { ...ele, packed: !ele.packed } : ele
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        setItems={setItems}
        handleRemoveItem={handleRemoveItem}
        handleStrikeItem={handleStrikeItem}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
