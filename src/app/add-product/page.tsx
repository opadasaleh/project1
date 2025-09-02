import React from 'react'

export default function AddProduct() {
    return (
        <div className=''>
            <h1 className='text-lg mb-5 font-bold'>Add Product</h1>
            <form>
                <input 
                    className='mb-3 w-fulll gi'
                    required
                    name='name'
                    placeholder='Name'
                />
            </form>
        </div>
    )
}
