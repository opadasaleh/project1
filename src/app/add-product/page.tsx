import React from 'react';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

export default function AddProduct() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <div className="w-full max-w-md p-8 rounded-lg shadow-md border-4  ">
                <h1 className='text-2xl mb-5 font-bold '>Add Product</h1>
                <form className='bg-gray-600'>
                    <Input
                        className='mb-3 w-full'
                        required
                        name='name'
                        placeholder='Name'
                    />
                    <Textarea
                        className='mb-3 w-full'
                        name="description"
                        placeholder='Description'
                        required
                    />
                    <Input
                        className='mb-3 w-full'
                        required
                        name='imageUrl'
                        type='url'
                        placeholder='Image URL'
                    />
                    <Input
                        className='mb-3 w-full'
                        required
                        type='number'
                        name='price'
                        placeholder='Price'
                    />
                </form>
            </div>
        </div>
    )
}
