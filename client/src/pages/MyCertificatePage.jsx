import CertificateInformation from "../components/CertificateInformation"
import DashboardHeader from "../components/DashboardHeader"
import DownloadCertificate from "../components/DownloadCertificate"
// import CertificateIcon from "../components/icons/CertificateIcon"

const MyCertificatePage = () => {

  return(
    <main>
      <DashboardHeader />
      <DownloadCertificate />
      <CertificateInformation/>
      
    </main>
  )
}

export default MyCertificatePage