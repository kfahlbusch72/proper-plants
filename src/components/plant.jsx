export default function Plant({ plant, addCart }) {
  return (
    <div className="plant-card">
      <div style={{ fontSize: "2rem" }}>{plant.image}</div>
      <div>{plant.name}</div>
      <button onClick={() => addCart(plant)}>Add Plant</button>
    </div>
  );
}
