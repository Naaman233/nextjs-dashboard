import { fetchCustomers } from '@/app/lib/data'
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
export default async function Page() {
    const fetchCustomerData = await fetchCustomers();
    return (
        <main>
            <Breadcrumbs 
                breadcrumbs={[
                    {label: 'label', href:'dashboard/invoices'},
                    {label: 'Create Invoice', href:'dashboard/invoices/create',
                    active: true}
                ]}
            />
            <Form customers={fetchCustomerData}/>
        </main>
    );

}   