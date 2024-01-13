import { fetchFilteredCustomers, fetchFilteredInvoices } from '@/app/lib/data'
import { Metadata } from 'next'
import CustomersTable from '@/app/ui/customers/table'



export const metadata : Metadata = {
    title: 'Customer'
}
export default async function Page({searchParams}:{
    searchParams?:{
        query?: string,
        page?: string
    }
}) {
    const query = searchParams?.query || '';
    const customers = await fetchFilteredCustomers(query);
    return (
       <main>
        <CustomersTable customers={customers} />
       </main>
    )
}