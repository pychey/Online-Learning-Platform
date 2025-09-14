'use client'

import AdminHeader from "./_components/AdminHeader"
import AdminSidebar from "./_components/AdminSidebar"
import AdminSubHeader from "./_components/AdminSubHeader"

import { BreadcrumbProvider } from "../context/BreadcrumbContext"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;
        if (!session?.user?.isAdmin) router.replace("/"); 
    }, [session, status, router]);
	
    return(
		<BreadcrumbProvider>
			<div className="flex flex-col h-screen">
				<AdminHeader />
				<div className="flex flex-1 overflow-hidden">
					<AdminSidebar />
					<main className="flex flex-col w-full overflow-y-auto bg-[#F7F7F7]">
						<AdminSubHeader />
						<div className="">
							{children}
						</div>
					</main>
				</div>
			</div>
		</BreadcrumbProvider>
  )
}