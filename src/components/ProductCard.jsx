import { useContext, useState } from 'react'
import { CartContext } from '../context/cartCtx'
import { FaEye, FaShoppingCart } from 'react-icons/fa'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { openCart, addItem } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false)

  const handleAdd = () => {
    if (addItem) addItem({ id: product.id, name: product.nombre, price: product.precioUnitario })
    // openCart() // Removed to prevent opening cart automatically
  }

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <>
      <article className="product-card">
        <img src={product.urlImagen} alt={product.nombre} className="product-image" />
        <div className="product-name">{product.nombre}</div>
        <div className="product-price">${product.precioUnitario.toFixed(2)}</div>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={handleAdd}>
            <FaShoppingCart /> Agregar
          </button>
          <button className="view-details-btn" onClick={openModal}>
            <FaEye className="eye-icon" />
          </button>
        </div>
      </article>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={closeModal}>
          <div style={{
            backgroundColor: 'white',
            padding: 20,
            width: '100%',
            height: '100%',
            overflowY: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <h3>{product.nombre}</h3>
            <img src={product.urlImagen} alt={product.nombre} style={{ width: '100%', height: '60%', objectFit: 'contain', margin: '10px 0' }} />
            <p>{product.descripcion}</p>
            <div style={{ marginTop: 10, fontWeight: 'bold' }}>Precio: ${product.precioUnitario.toFixed(2)}</div>
            <div>Stock: {product.stock} unidades</div>
            <button onClick={closeModal} style={{ marginTop: 15, backgroundColor: 'red', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  )
}
