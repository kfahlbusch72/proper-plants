export default function Plant({ plant, addCart }) {
  return (
    <div>
      <b>{plant.plantName}</b>{" "}
      <button onClick={() => addCart(plant)}>Add Plants</button>
    </div>
  );
}
