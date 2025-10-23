import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// if you need the icon, rename the import:
import { Link as LinkIcon, StarIcon } from "lucide-react";
// Import the correct type from your generated Prisma client
import { items } from "@/generated/prisma";

interface CardProductProps {
    product: items;
}

export default function CardProduct({ product }: CardProductProps,
    // { params }: { params: Promise<{ slug: string }> }
) {
    return (
        <div className="max-w-10 pt-5">
            <Link href={`/shop/${product.id}`} className="">
                <Card className="max-w-xl w-45">
                    <CardContent>
                        <div className="mt-4">
                            <img
                                src={product.imageUrl}
                                alt={product.description}
                                className="w-200 aspect-square h-[150px] object-cover border-2"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex justify-start">
                                <h1>{product.name}</h1>
                            </div>
                        </CardHeader>
                        <CardDescription className="text-xs mb-2 line-clamp-2">
                            {product.description}
                        </CardDescription>
                    </CardContent>
                    <CardFooter>{product.price}</CardFooter>
                </Card>
            </Link>
        </div>
    );
}