import Plant from "./plant";

function Plants({ plants, addCart }) {
  return (
    <div>
      <h2>Plants</h2>
      <div className="plants-container">
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addCart={addCart} />
        ))}
      </div>
    </div>
  );
}

export default Plants;
