import { fetchCustomers } from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"
import { InvoicesTableSkeleton } from "@/app/ui/skeletons"
import { Suspense } from "react"

export default async function Customers() {
    const customers = await fetchCustomers()

    return <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />
    </Suspense>
}
