function ItemListContainer({ greeting = "Bienvenido a nuestra tienda de ropa" }) {
  return (
    <div>
      <h2>{greeting}</h2>
      <p>Aquí verás nuestros productos.</p>
    </div>
  )
}

export default ItemListContainer
