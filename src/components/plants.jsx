import Plants from "../data";

function Plants({ plants, addCart }) {
  return (
    <>
      <h2>Plants</h2>
      <>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addCart={addCart} />
        ))}
      </>
    </>
  );
}

export default PLANTS;
