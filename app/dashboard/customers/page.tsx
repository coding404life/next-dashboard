import { fetchCustomers } from "@/app/lib/data"
import CustomersTable from "@/app/ui/customers/table"

export default async function Customers() {
    const customers = await fetchCustomers()
    console.log(customers)
    return <CustomersTable customers={customers} />
}
