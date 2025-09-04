import Image from "next/image"

const AdminHeader = () => {

  return(
    <header className="flex px-4 py-2 h-20 w-full border-b border-admin-border">
			<Image
				src="/Logo-AA-Horizontal.png"
				alt="Logo"
				width={212}
				height={64}
			/>
		</header>
  )
}

export default AdminHeader