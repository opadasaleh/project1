import { prisma } from '@/lib/db/prisma'
import React from 'react'
import CardProduct from '../../../../components/CardProduct'

async function ProductPage(
    { params, }: { params: Promise<{ slug: string }> }
) {

    const products = await prisma.items.findMany({})
    
  return (
      <div>this page describe
          <CardProduct product={products[0]} />
          <CardProduct product={products[2]} />
      </div>
  )
}
export default ProductPage