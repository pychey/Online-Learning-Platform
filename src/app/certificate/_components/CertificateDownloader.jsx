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

const CertificateDownloader = ({ code = '123-45-678', name = "Sok Bunleap", courseTitle = "Deep Research" }) => {
  const aspectRatio = 3308 / 4677;

  return (
    <div className="py-10 max-w-[900px] w-full mx-auto flex flex-col items-center">

      <div
        className="relative w-full border-b-1"
        style={{ paddingTop: `${aspectRatio * 100}%` }}
      >
        <PDFViewer className="absolute top-0 left-0 w-full h-full">
          <CertificatePage code = {code} name = {name} courseTitle = {courseTitle} />
        </PDFViewer>
      </div>

      <PDFDownloadLink
        document={<CertificatePage code = {code} name = {name} courseTitle = {courseTitle} />}
        fileName={`${name.split(' ')[0]}_certificate.pdf`}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
      >
          {({ loading }) => (loading ? "Preparing Document..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
};

export default CertificateDownloader;