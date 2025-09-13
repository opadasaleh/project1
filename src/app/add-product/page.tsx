import React from 'react';
import { Button } from "@/components/ui/button"
import { prisma } from '@/lib/db/prisma';
import { redirect } from 'next/navigation'
import FormSubmitButton from '../../../components/FormSubmitButton';


export const metadata = {
    title: 'Add Product - Flowmazon',
}

async function addProduct(formData: FormData) {
    "use server";
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price) {
        throw Error("Missing required fields");
    }

    // You cannot see console.log output directly in the browser for server actions.
    // To view the result, check your terminal where the Next.js server is running.
    // The output will appear there when you submit the form.

    // Use 'items' instead of 'product' to match your schema
    await prisma.items.create({
        data: { name, description, imageUrl, price },
    });

    redirect("/");
}

export default function AddProduct() {
    return (
        <main className='min-h-screen bg-black bg-cover pt-5'>
            <div className='flex justify-center mt-50'>
                <div className="w-full max-w-md p-8 rounded-lg shadow-md border-4 bg-white">
                    <h1 className='text-2xl mb-5 font-bold'>Add Product</h1>
                    <form action={addProduct}>
                        <input
                            className='mb-3 w-full border-2 p-2'
                            required
                            name='name'
                            placeholder='Name'
                        />
                        <textarea
                            className='mb-3 w-full border-2 p-2'
                            name="description"
                            placeholder='Description'
                            required
                        />
                        <input
                            className='mb-3 w-full border-2 p-2'
                            required
                            name='imageUrl'
                            type='url'
                            placeholder='Image URL'
                        />
                        <input
                            className='mb-3 w-full border-2 p-2'
                            required
                            type='number'
                            name='price'
                            placeholder='Price'
                        />
                        <FormSubmitButton >
                            Add Product
                        </FormSubmitButton>
                    </form>
                </div>
            </div>
        </main>
    )
}  