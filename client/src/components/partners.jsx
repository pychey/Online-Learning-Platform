export const items = [
  { id: 1, logo: "/logo/CADT.png", name: "ធម្មតា" },
  { id: 2, logo: "/logo/CADT.png" , name: "ពិសេស" },
  { id: 3, logo: "/logo/CADT.png" , name: "ធម្មតា" },
  { id: 4, logo: "/logo/CADT.png" , name: "ពិសេស" },
  { id: 5, logo: "/logo/CADT.png" , name: "ធម្មតា" },
  { id: 6, logo: "/logo/CADT.png" , name: "ពិសេស" },
  { id: 7, logo: "/logo/CADT.png" , name: "ធម្មតា" },
  { id: 8, logo: "/logo/CADT.png" , name: "ពិសេស" },
  { id: 9, logo: "/logo/CADT.png" , name: "ធម្មតា" },
  { id: 10, logo: "/logo/CADT.png" , name: "ពិសេស" },
];

const Partners = () => {
    return (
        <>
            <div className=" mb-10  ">
                <h1 className="tablet:text-4xl mt-10 flex items-center justify-center text-2xl ">ដៃគូរសហការ</h1>

                <div className="grid grid-cols-1  tablet:grid-cols-3 lg:grid-cols-5 gap-10 lg:mx-30 tablet:mx-auto mx-40 justify-center items-center ">   
                    {items && items.length > 0 ? (
                        items.map((item) => (
                            <div key={item.id} className="flex flex-col  items-center mt-10 ">
                                <div className="flex aspect-[40/40] min-w-40 tablet:max-w-40 w-full items-center justify-center rounded-full border-2 border-gray-600 text-2xl">
                                    <img src={item.logo} className="h-10 object-contain" />
                                </div>
                                <p className="mt-2 text-center">{item.name}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No partners available.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Partners;