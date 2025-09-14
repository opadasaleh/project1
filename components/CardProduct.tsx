import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Image } from "@/components/ui/shadcn-io/ai/image";
import { Link, StarIcon } from "lucide-react"
// Import the correct type from your generated Prisma client
import { items } from "@/generated/prisma"

interface CardProductProps {
    product: items  // Use 'items' instead of 'Product'
}

export default function CardProduct({ product }: CardProductProps) {
    return (
        <div className="w-full p-6 grid grid-row-4 gap-4 ">

            {/* <Card className="w-48">
                <CardContent className="p-3">
                    <div className="aspect-square rounded-md bg-gray-100 mb-2">
                        <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                            <img
                                src={product.imageUrl}  // Use actual product image
                                alt={product.name}      // Use actual product name
                                className="h-[150px] aspect-square border object-cover"
                            />
                        </div>
                    </div>
                    <CardTitle className="text-sm mb-1">{product.name}</CardTitle>
                    <CardDescription className="text-xs mb-2 line-clamp-2">
                        {product.description}
                    </CardDescription>
                    <div className="flex items-center space-x-1 mb-2">
                        <div className="flex">
                            {[1, 2, 3, 4].map((star) => (
                                <StarIcon
                                    key={star}
                                    className="h-3 w-3 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                            <StarIcon className="h-3 w-3 text-gray-300" />
                        </div>
                        <span className="text-xs text-muted-foreground">(4.0)</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">${product.price}</span>
                        <Button size="sm" className="text-xs px-2 py-1 h-7">Add</Button>
                    </div>
                </CardContent>
            </Card> */}








            <Card className="max-w-5xl w-45 h-full">
                <CardContent>
                    <div className="mt-4">
                        <img src={product.imageUrl} alt={product.description} className="w-200 aspect-square h-[150px] object-cover border-2" />
                    </div>
                <CardHeader>
                    <h1>{product.name}</h1>
                </CardHeader>
                    <CardDescription className="text-xs mb-2 line-clamp-2">{product.description}</CardDescription>
                {/* <CardTitle>{product.name}</CardTitle> */}
                </CardContent>
                <CardFooter>CardFooter</CardFooter>
            </Card>

        </div>
    )
}