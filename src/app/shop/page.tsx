import React from 'react'
import Navbar from '../../../components/Navbar'
import { Prisma } from '@/generated/prisma'
import { prisma } from '@/lib/db/prisma'

export default async function Shop() {
  const products = await prisma.items.findMany({
    orderBy:{id:"desc"}
  })

  return (
    <div>
      
    </div>
  )
}
export default Shop
