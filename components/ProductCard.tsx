import { Product } from "@prisma/client";
import { prisma } from '@/lib/db/prisma'

import Link from "next/link"

interface ProductCardPrtops {
    product: Product;
}

export default function ProductCard({product} :ProductCardPrtops ) {
    return (
        <Link
        href={"/products/" + product.id } 
        className="w-full bg-base-100 hover:shadow-xl"
        />
    )
}