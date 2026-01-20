const ProductsHero = () => {
  return (
    <section className="pt-32 relative overflow-hidden">
      {/* Radial dotted background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(212,175,55,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Linear gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a] via-[#1a1a1a] to-amber-950/10" />

      <div className="relative z-10 text-center">
        {/* Premium collection badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-amber-500/30 bg-amber-500/5 rounded-full">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-400 text-xs font-light tracking-[0.2em] uppercase">
            Premium Collection
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase mb-6 leading-tight">
          Our <br />
          <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Products
          </span>
        </h1>
      </div>
    </section>
  );
};

export default ProductsHero;