import CertificateDownloader from "./_components/CertificateDownloader";

const Certificate = () => {
 
  return (
    <div className="mt-20 py-12 flex flex-col max-w-[1080px] items-center w-full mx-auto gap-8">
      <CertificateDownloader code = {'###-##-###'} name = {`Your Name`} courseTitle={'Course Title'} />
    </div>
  );
};

export default Certificate;