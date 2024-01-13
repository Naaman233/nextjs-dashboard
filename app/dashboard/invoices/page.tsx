import Pagination from '@/app/ui/invoices/pagination'
import Search from '@/app/ui/search'
import { CreateInvoice } from '@/app/ui/invoices/buttons'
import { roboto_mono } from '@/app/ui/font'
import { Suspense } from 'react'
import { InvoicesTableSkeleton } from '@/app/ui/skeletons'
import Table from '@/app/ui/invoices/table'
import { fetchInvoicesPages } from '@/app/lib/data'
export default async function Page({ searchParams,}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchInvoicesPages(query)
    return (
       <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <h1 className={`${roboto_mono.className} text-2xl`}>Invoices</h1>
        </div>
        <div className="mt-4 flex item-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search Invoices....." />
            <CreateInvoice />
        </div>
        <Suspense key={parseInt(query) * currentPage} fallback={<InvoicesTableSkeleton />}>
            <Table query={query} currentPage={currentPage}/>
        </Suspense>
        <Pagination totalPages={totalPages} />
       </div>
    )
}