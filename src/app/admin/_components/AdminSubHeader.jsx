'use client'

import Link from "next/link"
import ArrowUpIcon from "@/components/icons/ArrowUpIcon"
import { useBreadcrumb } from "@/app/context/BreadcrumbContext"

const AdminSubHeader = () => {
	const { breadcrumbs } = useBreadcrumb()

	return(
		<>
			{breadcrumbs.length !== 0 && breadcrumbs.length !== null ? (
				<div className="flex items-center p-4 w-full bg-white border-b border-admin-border font-medium text-base">
					{breadcrumbs.map((item, index) => (
						index !== breadcrumbs.length - 1 ? (
							<Link 
								key={index}
								className="flex items-center"
								href={item.url}
							>
								<p className="opacity-60 hover:underline">{item.label}</p>
								<ArrowUpIcon 
									size={20}
									className={"rotate-90"}
								/>
							</Link>
						) : (
							<p className="" key={index}>{item.label}</p>
						)
					))}
				</div>
			) : (
				<p className="flex items-center p-4 w-full bg-white border-b border-admin-border font-medium text-base">
					Loading...
				</p>
			)}
		</>
	)
}

export default AdminSubHeader