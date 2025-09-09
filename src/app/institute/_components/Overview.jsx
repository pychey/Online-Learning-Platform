const Overview = ({ item }) => {
  const { heading, paragraph1, paragraph2, img } = item;
  const { src, alt, position } = img;

  return (
    <section
      className={`mt-10 grid gap-6 py-8 laptop:py-10 px-6 max-w-[1080px] w-full mx-auto laptop:grid-rows-1 laptop:grid-cols-2 `}>
      {/* Image */}
      <div className="w-full h-full">
        <img
          src={src}
          alt={alt || ""}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className={`flex flex-col justify-start gap-6  ${position!="left"?`row-start-2 row-end-1`:``}`}>
        <h1 className="font-semibold text-2xl lg:text-3xl leading-snug">
          {heading}
        </h1>
        <p className="text-base leading-relaxed">{paragraph1}</p>
        <p className="text-base leading-relaxed">{paragraph2}</p>
      </div>
    </section>
  );
};

export default Overview;
