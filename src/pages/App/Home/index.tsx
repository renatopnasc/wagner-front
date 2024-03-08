import { useEffect, useState } from 'react'
import { api } from '../../../services/api'

type Product = {
  id: string
  name: string
  price: number
  description: string
  created_at: string
  image_url: string
}

export function Home() {
  const [productsList, setProductsList] = useState<Product[]>([])

  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get('/product')

      const { products } = response.data

      setProductsList(products)
    }

    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
