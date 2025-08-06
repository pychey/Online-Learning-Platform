import React from 'react';

const Footer = ({
  // Company/Brand Information
  

  // Footer Sections Configuration
  sections = [
    {
      title: 'អំពីយើងខ្ញុំ',
      links: [
        {
          text: 'អាកសេត អាខាដេមី គឺជាស្ថាប័ន ដែលផ្តល់ជូននូវកម្មវិធីបណ្តុះបណ្តាល និងកាស្រាវជ្រាវ',
          url: '#',
        },
      ],
    },
    {
      title: 'អាកសេត អាខាដេមី',
      links: [
        { text: 'គេហទំព័រ', url: '#' },
        { text: 'វគ្គបណ្តុះបណ្តាល', url: '#' },
        { text: 'ស្ថាប័ន', url: '#' },
        { text: 'ការងារ', url: '#' },
      ],
    },
    {
      title: 'គណនេយ្យ',
      links: [
        { text: 'ចូលរៀន', url: '#' },
        { text: 'ចុះឈ្មោះចូលរៀន', url: '#' },
        { text: 'គណនេយ្យរបស់ខ្ញុំ', url: '#' },
        { text: 'ជំនួយ', url: '#' },
      ],
    },
    {
      title: 'បណ្តាញសង្គម',
      links: [
        { text: 'Facebook', url: '#' },
        { text: 'Linkedin', url: '#' },
        { text: 'YouTube', url: '#' },
        { text: 'ទំនាក់ទំនង', url: '#' },
      ],
    },
  ],

  // Footer bottom information
  bottomInfo = {
    right: 'ឆ្នាំ ២០២៥​​ ដោយ អាកសេត អាខាដេមី © រក្សាសិទ្ធគ្រប់យ៉ាង',
    name: 'ឈ្មោះនិង​ សញ្ញាសម្គាល់របស់ស្ថាប័ន ត្រូវបានចុះបញ្ជីការក្រុមហ៊ុន ជាមួយក្រសួងពាណិជ្ជកម្ម និងកសិកម្ម​ ។',
    description:
      'ប័ណ្ណប៉ាតង់កម្មវិធីសិក្សា ត្រូវបានចេញដោយអគ្គនាយកដ្ឋានពន្ធដា និងកម្មវិធីបណ្តុះបណ្តាលត្រូវបានទទួលស្គាល់ដោយ ក្រសួងអប់រំ យុវជននិងកីឡា ។',
  },

  // Payment methods
  paymentMethods = [
    { name: 'VISA', logo: 'VISA' },
    { name: 'Mastercard', logo: '💳' },
    { name: 'American Express', logo: 'AMEX' },
    { name: 'Discover', logo: 'DISC' },
    { name: 'PayPal', logo: 'PayPal' },
  ],

  // Layout Configuration
  showPaymentMethods = true,
  topSectionBgColor = 'bg-gray-600',
  bottomSectionBgColor = 'bg-gray-700',
}) => {
  return (
    <footer className="text-white">
      {/* Top section with main links */}
      <div className={`${topSectionBgColor}`}>
        <div className="mx-auto w-full max-w-screen-xl px-6 py-12">
          {/* Main links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-400 pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-200">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="hover:text-white hover:underline transition-colors duration-200 text-sm leading-relaxed"
                      >
                        {link.text}
                      </a>
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
        <div className="mx-auto w-full max-w-screen-xl px-6 py-8">
          {/* Bottom section content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            {/* Company information */}
            <div className="flex-1 space-y-0)">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-semibold text-white">
                  លក្ខន្តិកៈស្ថាប័ន
                </span>
                <span className="font-semibold text-white">
                  គោលការណ៍ឯកជនភាព
                </span>
                <span className="font-semibold text-white">
                  ឯកសារផ្លូវច្បាប់
                </span>
              </div>
              {/* Divider */}
              <hr className="border-gray-400 mb-8" />
              <p className="text-sm text-gray-200 leading-relaxed max-w-2xl">
                {bottomInfo.right}
              </p>
              <p className="text-sm text-gray-200 leading-relaxed max-w-2xl">
                {bottomInfo.name}
              </p>
              <p className="text-sm text-gray-200 leading-relaxed max-w-2xl">
                {bottomInfo.description}
              </p>
            </div>

            {/* Payment methods */}
            {showPaymentMethods && (
              <div className="flex-shrink-0">
                <div className="flex flex-wrap gap-2 items-center pt-9">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="bg-white text-gray-800 px-3 py-1 rounded text-xs font-semibold "
                    >
                      {method.logo}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
