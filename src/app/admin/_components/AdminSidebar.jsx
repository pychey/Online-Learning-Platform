'use client'

import { usePathname, useRouter } from "next/navigation"

const adminNavItems = [
  { label: "Home", path: "/admin" },
  { label: "Program", path: "/admin/program" },
  { label: "Course", path: "/admin/course" },
]

const AdminSidebar = () => {
  const pathname = usePathname()
  const router = useRouter()

  const getActiveItem = () => {
    if (!pathname) return null

    if (pathname === "/admin") return "Home"
    if (pathname.startsWith("/admin/program") && pathname.split("/").length <= 4) {
      return "Program"
    }
    if (
      pathname.startsWith("/admin/program") &&
      pathname.split("/").length > 4
    ) {
      return "Course"
    }

    if (pathname.startsWith("/admin/course")) return "Course"

    return null
  }

  const active = getActiveItem()

  return (
    <nav className="flex flex-col gap-2.5 shrink-0 p-3 w-[224px] h-full border-r border-admin-border">
      <h3 className="text-primary font-medium">Navigations</h3>
      <div className="flex flex-col gap-1">
        {adminNavItems.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`flex px-3 py-1.5 w-full font-medium text-sm rounded-sm 
              ${active === item.label ? "bg-secondary/15 border-l-[6px] border-secondary" : ""} 
              cursor-pointer hover:bg-secondary/10`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default AdminSidebar
