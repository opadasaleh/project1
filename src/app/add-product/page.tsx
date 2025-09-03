import React from 'react';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

export default function AddProduct() {
    return (
        <div className=' min-h-screen flex flex-col items-center justify-center bg-amber-100 '>
            <h1 className='text-2xl mb-5 font-bold '>Add Product</h1>
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
                <Input
                    className='mb-3 w-full '
                    required
                    name='name'
                    placeholder='Name'
                />
                <Textarea
                    className='mb-3 w-full -bg-conic-330'
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
                <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Add Product</button>
            </form>
        </div>
    )
}
