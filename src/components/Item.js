function Item({ item, handleRemoveItem, handleStrikeItem }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        name="packed"
        onChange={() => handleStrikeItem(item.id)}
        checked={item.packed}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleRemoveItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
