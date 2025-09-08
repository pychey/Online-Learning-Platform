'use client'

import { usePathname, useRouter } from "next/navigation";

const adminNavItems = [
	{ label: "Home", path: "/admin" },
	{ label: "Program", path: "/admin/program" },
	{ label: "Course", path: "/admin/course" },
	{ label: "Lesson", path: "/admin/lesson" }
];

const AdminSidebar = () => {

	const pathname = usePathname()
	const router = useRouter()

	return(
		<nav className="flex flex-col gap-2.5 shrink-0 p-3 w-[224px] h-full border-r border-admin-border">
			<h3 className="text-primary font-medium">Navigations</h3>
			<div className="flex flex-col gap-1">
				{adminNavItems.map((item, index) => (
					<button 
						key={index}
						onClick={() => router.push(item.path)}
						className={`flex px-3 py-1.5 w-full font-medium text-sm rounded-sm ${index === 2 ? 
												"bg-secondary/15 border-l-[6px] border-secondary" : ""} cursor-pointer hover:bg-secondary/10`}
					>
						{item.label}
					</button>
				))}
			</div>
		</nav>
	)
}

export default AdminSidebar