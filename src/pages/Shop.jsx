import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../services/products'
import ProductCard from '../components/ProductCard'

export default function Shop() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [params] = useSearchParams()

  useEffect(() => {
    fetchProducts()
      .then(setItems)
      .catch(() => setError('No se pudo cargar'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Cargando...</div>
  if (error) return <div>{error}</div>

  const q = (params.get('q') || '').toLowerCase()
  const filtered = q ? items.filter(p => (p.nombre || '').toLowerCase().includes(q)) : items

  return (
    <section style={{ paddingBottom: 0 }}>
      <h1>Shop</h1>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', marginBottom: 0 }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
