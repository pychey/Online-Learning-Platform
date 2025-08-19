import DashboardHeader from "@/components/DashboardHeader"
import DownloadCertificate from "./_components/DownloadCertificate"
import CertificateInformation from "./_components/CertificateInformation"

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