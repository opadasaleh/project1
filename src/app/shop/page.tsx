import React from 'react'
import Navbar from '../../../components/Navbar'
import { Prisma } from '@/generated/prisma'
import { prisma } from '@/lib/db/prisma'
import CardProduct from '../../../components/CardProduct'
import ProductCard from '../../../components/ProductCard'

 async function Shop() {
  const products = await prisma.items.findMany({
    orderBy:{id:"desc"}
  })

  return (
    <div className='flex '>
      <CardProduct product={products[0]} />
      {/* <ProductCard /> */}
    </div>
  )
}
export default Shop
