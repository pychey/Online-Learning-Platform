'use client'

import CertificatePage from "./CertificatePage"
import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading PDF Viewer...</p>
  },
);

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Preparing Download Link...</p>
  },
);

const CertificateDownloader = ({ code = '123-45-678', name = "Sok Bunleap", courseTitle = "Deep Research", additionalClassName = '', bgColor = 'bg-primary', textColor = 'text-white'}) => {
  const aspectRatio = 3478 / 4861;

  return (
    <div className="py-4 max-w-[900px] w-full mx-auto flex flex-col items-center">

      {/* <div
        className="relative w-full border-b-1"
        style={{ paddingTop: `${aspectRatio * 100}%` }}
      >
        <PDFViewer className="absolute top-0 left-0 w-full h-full">
          <CertificatePage code = {code} name = {name} courseTitle = {courseTitle} />
        </PDFViewer>
      </div> */}

      <PDFDownloadLink
        document={<CertificatePage code = {code} name = {name} courseTitle = {courseTitle} />}
        fileName={`${name.split(' ')[0]}_certificate.pdf`}
        className={`px-6 py-3 ${bgColor} ${textColor} rounded-md font-medium ${additionalClassName}`}
      >
          {({ loading }) => (loading ? "Preparing Document..." : "ទាញយករូបភាពសញ្ញាបត្រ")}
      </PDFDownloadLink>
    </div>
  );
};

export default CertificateDownloader;