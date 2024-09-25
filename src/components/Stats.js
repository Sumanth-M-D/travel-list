function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your list 🚀</em>
      </footer>
    );
  }

  const itemsCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedCount * 100) / itemsCount);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go"
          : `👜 Your have ${itemsCount} items on your list, and you already packed 
        ${packedCount} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
