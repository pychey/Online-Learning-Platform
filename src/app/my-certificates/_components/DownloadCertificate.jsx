import pdfToPng from "@/utils/pdfToPng";
import Link from "next/link";

const DownloadCertificate = ({certificates = []}) => {

	return(
		<section className="px-4 tablet:px-20 py-10 w-full bg-white leading-relaxed">
			<div className="flex flex-col gap-6 mx-auto px-6 pt-5 pb-20 w-full max-w-[800px] bg-[#f5f5f5] border border-[#CBCBCB] rounded-xs text-sm tablet:text-base">
				<h1 className="font-medium text-lg text-center">ទាញយកសញ្ញាបត្ររបស់អ្នក</h1>
				<div className="mt-8 grid grid-cols-1 tablet:grid-cols-2 gap-6 w-full text-sm text-left">
					{certificates.length > 0 && 
						certificates.map((certificate)=>(
						<Link key={certificate.id} href={`/course/${certificate.courseSlug}/certificate`}>
							<div className="relative flex flex-col border border-gray-300 text-sm w-full">
								<img src={pdfToPng(certificate.url)} alt={certificate.courseTitle} className='w-full z-10 h-full object-cover' />
								<span className="absolute z-10 top-2 -left-3 bg-primary text-white text-sm font-medium px-3 py-1">
									ទទួលបាន
								</span>
								<span className="absolute top-2 -left-3 bg-primary-hover w-8 h-7 origin-bottom-left rotate-25"></span>
							</div>
						</Link>
					))}
				</div>
				<p className="leading-relaxed text-center">{certificates.length > 0 ? 'អ្នកអាចទាញយកគ្រប់សញ្ញាបត្ររបស់អ្នកដោយចុចលើរូបដើម្បីទៅកាន់ទំព័រទាញយករូប' : 'អ្នកអាចទាញយកគ្រប់សញ្ញាបត្ររបស់អ្នកនៅទីនេះបាន'}</p>
				<p className="underline font-medium text-center"><Link href={'/courselist'}>បញ្ចប់វគ្គសិក្សាដើម្បីទទួលបានសញ្ញាបត្រ</Link></p>
			</div>
		</section>
	)
}

export default DownloadCertificate;