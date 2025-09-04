import { NextResponse } from "next/server";

const COURSE_MANAGEMENT_CONTENT = [
  {
    
    title: "ទាំងអស់",
    certificate: "សញ្ញាបត្រទាំងអស់",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ការវិភាគស្ថិតិពិពណ៌នា", duration: "២", originalPrice: "$១០.០០", discountedPrice: "$១១.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "គណនេយ្យមូលដ្ឋាន", duration: "៣", originalPrice: "$២០.០០", discountedPrice: "$១៥.៩៩", rating: "៤.២" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "មូលដ្ឋានហិរញ្ញវត្ថុ", duration: "៤", originalPrice: "$២៥.០០", discountedPrice: "$១៨.៩៩", rating: "៤.៣" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់ពាណិជ្ជកម្ម", duration: "២", originalPrice: "$៣០.០០", discountedPrice: "$១៩.៩៩", rating: "៤.៦" },
    ],
  },
  {
    id: "business",
    title: "អាជីវកម្ម",
    certificate: "សញ្ញាបត្រផ្នែកអាជីវកម្ម",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "គ្រប់គ្រងអាជីវកម្មទំនើប", duration: "៣", originalPrice: "$៣០.០០", discountedPrice: "$១២.៩៩", rating: "៤.៧" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "យុទ្ធសាស្រ្តអាជីវកម្ម", duration: "២", originalPrice: "$២៥.០០", discountedPrice: "$១១.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "សហគ្រិនភាព", duration: "៣", originalPrice: "$៣៥.០០", discountedPrice: "$១៤.៩៩", rating: "៤.៨" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "អាជីវកម្មអនឡាញ", duration: "២", originalPrice: "$៤០.០០", discountedPrice: "$១៦.៩៩", rating: "៤.៤" },
    ],
  },
  {
    id: "accounting",
    title: "គណនេយ្យ",
    certificate: "សញ្ញាបត្រផ្នែកគណនេយ្យ",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "គណនេយ្យហិរញ្ញវត្ថុ", duration: "៣", originalPrice: "$២៥.០០", discountedPrice: "$១២.៩៩", rating: "៤.២" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "គណនេយ្យគ្រប់គ្រង", duration: "២", originalPrice: "$៣០.០០", discountedPrice: "$១៣.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "សវនកម្ម", duration: "៤", originalPrice: "$៣៥.០០", discountedPrice: "$១៥.៩៩", rating: "៤.៧" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "គណនេយ្យពន្ធ", duration: "២", originalPrice: "$៤០.០០", discountedPrice: "$១៦.៩៩", rating: "៤.៦" },
    ],
  },
  {
    id: "jurisprudence",
    title: "យុត្តិសាស្រ្ត",
    certificate: "សញ្ញាបត្រផ្នែកយុត្តិសាស្រ្ត",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់ពាណិជ្ជកម្ម", duration: "២", originalPrice: "$៣០.០០", discountedPrice: "$១៤.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់ពលកម្ម", duration: "៣", originalPrice: "$២៥.០០", discountedPrice: "$១២.៩៩", rating: "៤.២" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់អចលនទ្រព្យ", duration: "៤", originalPrice: "$៤០.០០", discountedPrice: "$១៧.៩៩", rating: "៤.៦" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់អន្តរជាតិ", duration: "៣", originalPrice: "$៣៥.០០", discountedPrice: "$១៥.៩៩", rating: "៤.៤" },
    ],
  },
  {
    id: "finance",
    title: "ហិរញ្ញវត្ថុ",
    certificate: "សញ្ញាបត្រផ្នែកហិរញ្ញវត្ថុ",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ហិរញ្ញវត្ថុមូលដ្ឋាន", duration: "២", originalPrice: "$២៥.០០", discountedPrice: "$១២.៩៩", rating: "៤.៣" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "វិនិយោគ", duration: "៣", originalPrice: "$៣០.០០", discountedPrice: "$១៤.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ហិរញ្ញវត្ថុអន្តរជាតិ", duration: "៤", originalPrice: "$៣៥.០០", discountedPrice: "$១៥.៩៩", rating: "៤.៦" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ហិរញ្ញវត្ថុគ្រប់គ្រង", duration: "២", originalPrice: "$៤០.០០", discountedPrice: "$១៦.៩៩", rating: "៤.៧" },
    ],
  },
  {
    id: "technology",
    title: "បច្ចេកវិទ្យា",
    certificate: "សញ្ញាបត្រផ្នែកបច្ចេកវិទ្យា",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "កុំព្យូទ័រមូលដ្ឋាន", duration: "២", originalPrice: "$២០.០០", discountedPrice: "$១០.៩៩", rating: "៤.២" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ប្រព័ន្ធព័ត៌មាន", duration: "៣", originalPrice: "$២៥.០០", discountedPrice: "$១២.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "បណ្ដាញកុំព្យូទ័រ", duration: "៤", originalPrice: "$៣០.០០", discountedPrice: "$១៤.៩៩", rating: "៤.៦" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "អភិវឌ្ឍន៍កម្មវិធី", duration: "៣", originalPrice: "$៣៥.០០", discountedPrice: "$១៥.៩៩", rating: "៤.៨" },
    ],
  },
  {
    id: "law",
    title: "ច្បាប់",
    certificate: "សញ្ញាបត្រផ្នែកច្បាប់",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់សង្គម", duration: "២", originalPrice: "$២០.០០", discountedPrice: "$១០.៩៩", rating: "៤.៣" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់ព្រហ្មទណ្ឌ", duration: "៣", originalPrice: "$២៥.០០", discountedPrice: "$១២.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់ស៊ីវិល", duration: "៤", originalPrice: "$៣០.០០", discountedPrice: "$១៤.៩៩", rating: "៤.៦" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ច្បាប់រដ្ឋធម្មនុញ្ញ", duration: "៣", originalPrice: "$៣៥.០០", discountedPrice: "$១៥.៩៩", rating: "៤.៧" },
    ],
  },
  {
    id: "miscellaneous",
    title: "នានា",
    certificate: "សញ្ញាបត្រផ្នែកនានា",
    courses: [
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "សិល្បៈនិងវប្បធម៌", duration: "២", originalPrice: "$២០.០០", discountedPrice: "$១០.៩៩", rating: "៤.២" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ភាសាបរទេស", duration: "៣", originalPrice: "$២៥.០០", discountedPrice: "$១២.៩៩", rating: "៤.៥" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ជំនាញទូទៅ", duration: "៤", originalPrice: "$៣០.០០", discountedPrice: "$១៤.៩៩", rating: "៤.៦" },
      { thumbnail: "/AA001-IMG - 4 x 2.5.jpg", title: "ការអប់រំសង្គម", duration: "៣", originalPrice: "$៣៥.០០", discountedPrice: "$១៥.៩៩", rating: "៤.៧" },
    ],
  },
];

export async function GET() {
  return NextResponse.json(COURSE_MANAGEMENT_CONTENT);
}