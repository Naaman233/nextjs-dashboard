import Pagination from '@/app/ui/invoices/pagination'
import Search from '@/app/ui/search'
import { CreateInvoice } from '@/app/ui/invoices/buttons'
import { roboto_mono } from '@/app/ui/font'
export default function Page() {
    return (
       <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <h1 className={`${roboto_mono.className} text-2xl`}>Invoices</h1>
        </div>
        <div className="mt-4 flex item-center justify-between gap-2 md:mt-8">
            <Search placeholder="Search Invoices....." />
            <CreateInvoice />
        </div>
        
       </div>
    )
}