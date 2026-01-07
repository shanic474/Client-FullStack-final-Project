const ProductsHero = () => {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

      <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a] via-[#1a1a1a] to-amber-950/10" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-8 px-6 py-2.5 border border-amber-500/30 bg-amber-500/5 rounded-full">
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <span className="text-amber-400 text-xs font-light tracking-[0.2em] uppercase">
            Premium Collection
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-light uppercase mb-8">
          Our <br />
          <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
            Products
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Meticulously curated ingredients with complete nutritional data.
        </p>
      </div>
    </section>
  );
};

export default ProductsHero;
