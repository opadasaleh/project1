import React from 'react';
import { Button } from "@/components/ui/button"

export const metadata = {
    title: 'Add Product - Flowmazon',
}

export default function AddProduct() {
    return (
        <main className='min-h-screen bg-[url(/sand-photo.jpg)] bg-cover pt-5'>
        <div className='  flex justify-center mt-50'>
            <div className="w-full max-w-md p-8 rounded-lg shadow-md border-4 bg-white">
                <h1 className='text-2xl mb-5 font-bold '>Add Product</h1>
                <form  >
                    <input
                        className='mb-3 w-full border-2 '
                        required
                        name='name'
                        placeholder=' Name'
                    />
                    <textarea
                        className='mb-3 w-full border-2'
                        name="description"
                        placeholder=' Description'
                        required
                    />
                    <input
                        className='mb-3 w-full border-2'
                        required
                        name='imageUrl'
                        type='url'
                        placeholder=' Image URL'
                    />
                    <input
                        className='mb-3 w-full border-2'
                        required
                        type='number'
                        name='price'
                        placeholder=' Price'
                    />
                    <Button  variant={'default'} className='bg-amber-400'>Add Product</Button>
                </form>
            </div>
            </div>
        </main>
    )
}
