import DashboardHeader from "@/components/Dashboard/DashboardHeader"
import DownloadCertificate from "@/components/Dashboard/DownloadCertificate"
import CertificateInformation from "@/components/Dashboard/CertificateInformation"

const MyCertificatesPage = () => {

  return(
    <main className="mt-20">
      <DashboardHeader />
      <DownloadCertificate />
      <CertificateInformation />
    </main>
  )
}

export default MyCertificatesPage