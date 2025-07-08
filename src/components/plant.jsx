export default function Plant({ plant, addCart }) {
  return (
    <div>
      <b>
        {plant.image} {plant.Name}
      </b>{" "}
      <button onClick={() => addCart(plant)}>Add Plants</button>
    </div>
  );
}
