function ItemListContainer({ greeting }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{greeting}</h2>
      <p>Aquí irán los productos disponibles.</p>
    </div>
  );
}

export default ItemListContainer;