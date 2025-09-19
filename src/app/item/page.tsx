import { prisma } from '@/lib/db/prisma'
import React from 'react'
import ProductPage from '../../../components/ProductPage';
import { Card } from '@/components/ui/card';


export default async function ItemPage() {
  const products = await prisma.items.findMany();
  return (
    <div>

      <Card>
      <div className='border max-w-[600px] pl-10'>
        <ProductPage product={products[2]}  />
        </div>
      </Card>
    </div>
  )
}


