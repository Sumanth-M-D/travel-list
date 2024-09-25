import Item from "./Item.js";
import { useState } from "react";

function PackingList({
  items,
  handleRemoveItem,
  handleStrikeItem,
  handleClearList,
}) {
  const [sortOrder, setSortOrder] = useState("input");
  let sortedItems;

  if (sortOrder === "input") sortedItems = items;
  if (sortOrder === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortOrder === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  const listItems = sortedItems.map((item) => (
    <Item
      item={item}
      key={item.id}
      handleRemoveItem={handleRemoveItem}
      handleStrikeItem={handleStrikeItem}
    />
  ));

  function handleSort(e) {
    setSortOrder(e.target.value);
  }

  return (
    <div className="list">
      <ul className="items">{listItems}</ul>

      <div className="actions">
        <select value={sortOrder} onChange={handleSort}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
