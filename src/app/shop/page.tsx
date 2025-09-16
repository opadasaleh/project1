import React from 'react'
import Navbar from '../../../components/Navbar'
import { prisma } from '@/lib/db/prisma'
import CardProduct from '../../../components/CardProduct'

async function Shop() {
  const products = await prisma.items.findMany({
    orderBy: { id: "desc" }
  })

  return (
    <div>
      
      <div className="grid grid-cols-6  ">
        
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
          <CardProduct product={products[0]} />
        
      
      </div>
    </div>
  )
}
export default Shop
