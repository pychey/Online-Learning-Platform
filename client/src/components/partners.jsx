export const items = [
  { id: 1, logo: "/logo_partner/CADT.png", name: "ធម្មតា" },
  { id: 2, logo: "/logo_partner/CADT.png", name: "ពិសេស" },
  { id: 3, logo: "/logo_partner/CADT.png", name: "ធម្មតា" },
  { id: 4, logo: "/logo_partner/CADT.png", name: "ពិសេស" },
  { id: 5, logo: "/logo_partner/CADT.png", name: "ធម្មតា" },
  { id: 6, logo: "/logo_partner/CADT.png", name: "ពិសេស" },
  { id: 7, logo: "/logo_partner/CADT.png", name: "ធម្មតា" },
  { id: 8, logo: "/logo_partner/CADT.png", name: "ពិសេស" },
  { id: 9, logo: "/logo_partner/CADT.png", name: "ធម្មតា" },
  { id: 10, logo: "/logo_partner/CADT.png", name: "ពិសេស" },
];

const Partners = () => {
  return (
    <div className="mb-10 w-full px-4">
      <h1 className="text-2xl tablet:text-4xl mt-10 text-center">ដៃគូរសហការ</h1>

      <div className="grid grid-cols-1 tablet:grid-cols-3 lg:grid-cols-5 gap-10 mt-10 place-items-center">
        {items && items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center w-full max-w-[160px] "
            >
              <div className="aspect-square  w-full max-w-[150px] flex items-center justify-center rounded-full border-2 border-gray-600 ">
                <img src={item.logo} className="h-10 object-contain" />
              </div>
              <p className="mt-2">{item.name}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No partners available.</p>
        )}
      </div>
    </div>
  );
};

export default Partners;
