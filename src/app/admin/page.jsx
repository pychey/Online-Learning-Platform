'use client'
import { useEffect } from "react"
import { useBreadcrumb } from "../context/BreadcrumbContext"
import Modal from "@/components/ui/Modal"

const AdminPage = () => {
  const { setBreadcrumbs } = useBreadcrumb()

  useEffect(() => {
    setBreadcrumbs([{label: "Admin", url: "/admin"}])
  }, [setBreadcrumbs])

  return(
		<main>
      <Modal>
        f
      </Modal>
		</main>
  )
}

export default AdminPage