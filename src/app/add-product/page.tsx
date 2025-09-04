import React from 'react';
import { Button } from "@/components/ui/button"


export default function AddProduct() {
    return (
        <div className='min-h-screen flex  items-center justify-center max-w-fit '>
            <div className="w-full max-w-md p-8 rounded-lg shadow-md border-4  ">
                <h1 className='text-2xl mb-5 font-bold '>Add Product</h1>
                <form  >
                    <input
                        className='mb-3 w-full border-2 '
                        required
                        name='name'
                        placeholder='Name'
                    />
                    <textarea
                        className='mb-3 w-full border-2'
                        name="description"
                        placeholder='Description'
                        required
                    />
                    <input
                        className='mb-3 w-full border-2'
                        required
                        name='imageUrl'
                        type='url'
                        placeholder='Image URL'
                    />
                    <input
                        className='mb-3 w-full border-2'
                        required
                        type='number'
                        name='price'
                        placeholder='Price'
                    />
                    <Button  variant={'default'} className=''>Add Product</Button>
                </form>
            </div>
        </div>
    )
}
