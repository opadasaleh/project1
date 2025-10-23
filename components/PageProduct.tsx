import { items } from '@/generated/prisma';
import React from 'react'

interface CardProductProps {
    product: items;
}
export default function PageProduct(
    { product }: CardProductProps,
    // { params, }: { params: Promise<{ slug: string }> }
) {
    return (

        <div>
            <div>
                <p className='font-mono text-5xl pt-5 pl-5 flex justify-center'>{product.name}</p>
                <div className="mt-4 p-30">
                    <img
                        src={product.imageUrl}
                        alt={product.description}
                        className="w-125 aspect-square h-125 object-cover border-2"
                    />
                    {product.id}
                </div>
                <div>
                    <p>{product.price}</p>
                </div>
            </div>
        </div>
    )
}
