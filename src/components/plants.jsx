import Plant from "./plant";

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

export default Plants;
