'use server'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


const FormSchema = z.object({
    id : z.string(),
    customerId : z.string(),
    amount : z.coerce.number(),
    status : z.enum(['pending','paid']),
    date : z.string()
})

const CreateInvoice = FormSchema.omit({id : true, date : true})
const UpdateInvoice = FormSchema.omit({id : true , date : true})

export default async function createInvoice ( formData: FormData ) {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId : formData.get('customerId'),
        amount : formData.get('amount'),
        status : formData.get('status')
    });

    const amountInCents = amount * 100
    const date = new Date().toISOString().split('T')[0]

    await sql `INSERT INTO INVOICES (customer_id, amount, status, date)
      vALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `

    revalidatePath('/dashboard/invoices')
    redirect('/dashboard/invoices')
}

export async function updateInvoice ( id : string , formData : FormData ) {
    const { customerId, amount, status } = UpdateInvoice.parse({
        customerId : formData.get('customerId'),
        amount : formData.get('amount'),
        status : formData.get('status')
    });

    const amountInCents = amount * 100
    await sql `UPDATE INVOICES 
    SET customer_id = ${customerId} , amount = ${amountInCents} , status = ${status} 
    WHERE id = ${id}`

    revalidatePath('/dashboard/invoices')
    redirect('/dashboard/invoices')
}

export async function deleteInvoice( id : string ) {
    await sql `DELETE FROM INVOICES WHERE id = ${id}`
    revalidatePath('/dashboard/invoices')
} 
