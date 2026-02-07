export async function fetchProducts() {
  const res = await fetch('/datos/products.json')
  if (!res.ok) throw new Error('Error al cargar productos')
  const data = await res.json()
  return data
}

export async function fetchProductById(id) {
  const items = await fetchProducts()
  return items.find((p) => p.id === id) || null
}

export async function fetchProductsByCategory(cat) {
  const items = await fetchProducts()
  return items.filter((p) => p.categoria === cat)
}

