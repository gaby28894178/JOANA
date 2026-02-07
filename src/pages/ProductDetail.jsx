import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../services/products'

export default function ProductDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProductById(id)
      .then(setItem)
      .catch(() => setError('No se encontró el producto'))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div>Cargando...</div>
  if (error || !item) return <div>{error || 'Sin datos'}</div>

  return (
    <section>
      <h1>{item.nombre}</h1>
      <img src={item.urlImagen} alt={item.nombre} style={{ height: 200, objectFit: 'contain' }} />
      <p>{item.descripcion}</p>
      <div>Stock: {item.stock}</div>
      <div>Precio: ${item.precioUnitario.toFixed(2)}</div>
    </section>
  )
}

