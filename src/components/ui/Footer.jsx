'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = ({
  // Company/Brand Information

  // Footer Sections Configuration
  sections = [
    {
      title: 'អំពីយើងខ្ញុំ',
      links: [
        {
          text: 'សាស្ត្រា អាខាដេមី គឺជាស្ថាប័ន ដែលផ្តល់ជូននូវកម្មវិធីបណ្តុះបណ្តាល និងការស្រាវជ្រាវ​ ។',
        },
      ],
    },
    {
      title: 'សាស្ត្រា អាខាដេមី',
      links: [
        { text: 'គេហទំព័រ', url: '/' },
        { text: 'វគ្គបណ្តុះបណ្តាល', url: '/courselist' },
        { text: 'ស្ថាប័ន', url: '/institute' },
      ],
    },
    {
      title: 'គណនី',
      links: [
        { text: 'ចូលគណនី', url: '/login' },
        { text: 'ចុះឈ្មោះគណនី', url: '/register' },
        { text: 'គណនីរបស់ខ្ញុំ', url: '/my-courses' }
      ],
    },
    {
      title: 'បណ្តាញសង្គម',
      links: [
        { text: 'Facebook', url: 'https://www.facebook.com/CADT.Academy' },
        { text: 'YouTube', url: 'https://www.facebook.com/CADT.Academy' },
        { text: 'មជ្ឈមណ្ឌលជំនួយ', url: '/help' },
      ],
    },
  ],

//footer link

bottomLink =[
  {
    text: 'លក្ខន្តិកៈកិច្ចព្រមព្រៀង', url: '#'
  },
  {
    text: 'លក្ខន្តិកៈឯកជនភាព', url: '#'
  },
  {
    text: 'លក្ខន្តិកៈផ្នែកច្បាប់', url: '#'
  }
],
  


  // Footer bottom information
  bottomInfo = {
    right: 'ឆ្នាំ ២០២៥​​ ដោយ សាស្ត្រា អាខាដេមី © រក្សាសិទ្ធគ្រប់យ៉ាង',
    name: 'ឈ្មោះនិង​ សញ្ញាសម្គាល់របស់ស្ថាប័ន ត្រូវបានចុះបញ្ជីការក្រុមហ៊ុន ជាមួយក្រសួងពាណិជ្ជកម្ម ។',
    description:
      'ប័ណ្ណប៉ាតង់កម្មវិធីសិក្សា ត្រូវបានចេញដោយអគ្គនាយកដ្ឋានពន្ធដា និងកម្មវិធីបណ្តុះបណ្តាលត្រូវបានទទួលស្គាល់ដោយ ក្រសួងអប់រំ យុវជននិងកីឡា ។',
  },

  // Payment methods
  paymentMethods = [
    { name: 'KHQR', logo: '/KHQR_Logo.png' }
  ],

  // Layout Configuration
  showPaymentMethods = true,
  topSectionBgColor = 'bg-[rgb(102,101,101)]',
  bottomSectionBgColor = 'bg-[rgb(56,54,54)]',
}) => {

  const pathname = usePathname()
  const isAdminPage = pathname.startsWith('/admin')

  if (isAdminPage) return null

  return (
    <footer className="text-white">
      {/* Top section with main links */}
      <div className={`${topSectionBgColor}`}>
        <div className="mx-auto w-full max-w-screen-xl px-6 py-8">
          {/* Main links grid */}
          <div className="grid grid-cols-1 min-[548px]:grid-cols-2 min-[849px]:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-400 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-200">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.url ? (
                        <Link
                          href={link.url}
                          className="hover:text-white hover:underline transition-colors duration-200 text-sm leading-relaxed"
                        >
                          {link.text}
                        </Link>
                      ) : (
                        <span className="text-sm leading-relaxed">
                          {link.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section with company info and payment methods */}
      <div className={`${bottomSectionBgColor}`}>
        <div className="mx-auto w-full max-w-screen-xl px-6 py-3">
          {/* Bottom section content */}
          <div className="flex flex-col min-[849px]:flex-row justify-between items-start gap-2">
            {/* Company information */}
            <div className="flex-1 space-y-0">
              <div className="flex flex-wrap gap-5 mb-4 hover:cursor-pointer">
                <span className="font-semibold text-white">
                  {bottomLink[0].text}
                </span>
                <span className="font-semibold text-white">
                  {bottomLink[1].text}
                </span>
                <span className="font-semibold text-white">
                  {bottomLink[2].text}
                </span>
              </div>
              {/* Divider */}
              <hr className="mx-auto w-full max-w-100 border-gray-400 mb-3" />
              <p className="text-sm text-gray-200 leading-relaxed max-w-2xl text-wrap overflow-hidden">
                {bottomInfo.right}
              </p>
              <p className="text-sm text-gray-200 leading-relaxed max-w-2xl text-wrap overflow-hidden">
                {bottomInfo.name}
              </p>
              <p className="text-sm text-gray-200 leading-relaxed max-w-3xl text-wrap overflow-hidden">
                {bottomInfo.description}
              </p>
            </div>

            {/* Payment methods */}
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 px-4 py-1 rounded text-xs font-semibold flex items-center mt-7"
              >
                <img
                  src={method.logo}
                  alt={method.name}
                  className="h-5 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
