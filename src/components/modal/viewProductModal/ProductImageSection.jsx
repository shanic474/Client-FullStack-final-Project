const ProductImageSection = ({ productImage, productName }) => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-[#1a1a1a]/50 border-b md:border-b-0 md:border-r border-amber-500/20">
      <div className="w-full h-full max-h-[500px] flex items-center justify-center bg-[#1a1a1a] border border-amber-500/20 p-4">
        <img
          src={productImage}
          alt={productName}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImageSection;

