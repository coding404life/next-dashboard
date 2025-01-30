import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

export const experimental_ppr = true;

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard',
}

interface Props {
    children: React.ReactNode
}

export default function Layout({ children }: Readonly<Props>) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>

            <main className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </main>
        </div>
    );
}
