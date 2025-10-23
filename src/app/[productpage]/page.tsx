import React from 'react'
import { items } from "@/generated/prisma";
import PageProduct from '../../../components/PageProduct';
import { prisma } from '@/lib/db/prisma';

export default async function ProductPage({ params }: { params: { productpage: string } }) {
    // parse slug as an integer index
    

   

    const products = await prisma.items.findMany();

  
    return (
        <div>
            <PageProduct product={products[1]} />
        </div>
    );
}