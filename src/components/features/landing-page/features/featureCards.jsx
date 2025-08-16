function FeatureCards({ id, src, title, content, justify }) {
  const justifyClass = {
    center: "justify-center",
    end: "justify-end",
  }[justify];

  return (
    <div className="min-h-[284px] h-full pt-6 flex flex-col mlg:flex-row bg-background rounded-3xl overflow-hidden">
      <div className="w-full mlg:w-4/9 pb-6 pl-8">
        <div className="size-12 inline-flex items-center justify-center text-foreground/50 bg-[#FFFFFF08] border border-[#FFFFFF0A] rounded-xl font-eudoxus700 shadow-2xl">
          {id}
        </div>

        <h4 className="mt-6 mb-3 text-xl xl:text-[22.28px] font-stylish text-secondary-foreground font-eudoxus700">
          {title}
        </h4>

        <p className="text-base font-eudoxus400 tracking-wide leading-[1.75] ">
          {content}
        </p>
      </div>

      <div className={`w-auto sm:flex-1 relative flex ${justifyClass}`}>
        <img
          src={src}
          alt="african"
          className="relative mlg:absolute bottom-0 sm:right-0"
        />
      </div>
    </div>
  );
}

export default FeatureCards;
