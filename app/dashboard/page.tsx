import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { roboto_mono } from '@/app/ui/font';
import { fetchLatestInvoices, fetchCardData } from '../lib/data';
import { Suspense } from 'react'
import { RevenueChartSkeleton, 
    LatestInvoicesSkeleton, 
    CardSkeleton } from '@/app/ui/skeletons'

export default async function Page() {
    //const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {totalPaidInvoices,
        numberOfCustomers,
        totalPendingInvoices,
        numberOfInvoices
    } = await fetchCardData();

  return (
    <main>
      <h1 className={`${roboto_mono.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
     {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected"/>
        <Card title="Pending" value={totalPendingInvoices} type="pending"/>
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices"/>
        <Card title="Customers" value={numberOfCustomers} type="customers"/>

      </div> */}
      <Suspense fallback={<CardSkeleton />}>
        <CardWrapper/>
      </Suspense>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
         {/**<RevenueChart revenue={revenue}  /> */ }
         <Suspense fallback={<RevenueChartSkeleton/>}>
            <RevenueChart />
         </Suspense>
         {/*<LatestInvoices latestInvoices={latestInvoices} /> */}
         <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
         </Suspense>
      </div>
    </main>
  );
}