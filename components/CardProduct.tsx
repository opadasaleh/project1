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
import { Product } from "@prisma/client"


interface CardProductProps {
    product: Product
}





export default function CardProduct({ product }: CardProductProps) {
    return (

        <div className="w-full p-6 flex justify-center">
            <Link
                href={"/products/" + product.id}
                className="w-full bg-base-100 hover:shadow-xl">
                <Card className="w-48">
                    <CardContent className="p-3">
                        <div className="aspect-square rounded-md bg-gray-100 mb-2">
                            <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                                <Image
                                    base64="valid base64 string"
                                    mediaType="image/jpeg"
                                    uint8Array={new Uint8Array([])}
                                    alt="Generated image"
                                    className="h-[150px] aspect-square border"
                                />;
                            </div>
                        </div>
                        <CardTitle className="text-sm mb-1">Wireless Headphones</CardTitle>
                        <CardDescription className="text-xs mb-2 line-clamp-2">
                            High-quality wireless headphones
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
                            <span className="text-sm font-bold">$199</span>
                            <Button size="sm" className="text-xs px-2 py-1 h-7">Add</Button>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    )
}