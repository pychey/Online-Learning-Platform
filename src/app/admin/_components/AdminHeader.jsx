import { useRouter } from "next/navigation"

const AdminHeader = () => {
	const router = useRouter()

  return(
    <header className="flex px-4 py-2 h-20 w-full border-b border-admin-border">
			<img
				onClick={() => router.push('/')}
				src="/Logo-AA-Horizontal.png"
				alt="Logo"
				className="w-auto h-full cursor-pointer"
			/>
		</header>
  )
}

export default AdminHeader