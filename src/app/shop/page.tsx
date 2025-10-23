import React from 'react'
import Navbar from '../../../components/Navbar'
import { prisma } from '@/lib/db/prisma'
import CardProduct from '../../../components/CardProduct'

async function Shop(
  { params, }: { params: Promise<{ slug: string }> }
) {
  const products = await prisma.items.findMany({
    orderBy: { id: "desc" }
  })

  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <CardProduct key={product.id} product={product}  />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Shop
    