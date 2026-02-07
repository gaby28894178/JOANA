import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchProductsByCategory } from '../services/products'
import ProductCard from '../components/ProductCard'

export default function Legumbres() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [params] = useSearchParams()

  useEffect(() => {
    fetchProductsByCategory('comestibles')
      .then(setItems)
      .catch(() => setError('No se pudo cargar'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Cargando...</div>
  if (error) return <div>{error}</div>

  const q = (params.get('q') || '').toLowerCase()
  const filtered = q ? items.filter(p => (p.nombre || '').toLowerCase().includes(q)) : items

  return (
    <section>
      <h1>Legumbres</h1>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
