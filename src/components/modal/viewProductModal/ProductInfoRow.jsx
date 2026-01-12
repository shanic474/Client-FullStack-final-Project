const ProductInfoRow = ({ label, value, valueClassName = "" }) => {
  return (
    <div className="mb-6 pb-6 border-b border-amber-500/20">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
        <span className={valueClassName}>
          {value}
        </span>
      </div>
    </div>
  );
};

export default ProductInfoRow;

