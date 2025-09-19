import React from 'react'
import { items } from "@/generated/prisma"
import { prisma } from '@/lib/db/prisma'
import { useRouter } from 'next/router'



interface CardProductProps {
    product: items  // Use 'items' instead of 'Product'
}

export default function ProductPage({ product }: CardProductProps) {
    const router = useRouter()

    const id: string = product.id;
    return (
        <div>
            <div>
                <img id={id} src={product.imageUrl} alt={product.description} />
            </div>
        </div>
    )
}
