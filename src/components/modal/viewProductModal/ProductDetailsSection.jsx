import ProductInfoRow from './ProductInfoRow';
import ProductActionButtons from './ProductActionButtons';

const ProductDetailsSection = ({ product }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col p-8 overflow-y-auto">
      {/* Category */}
      <div className="mb-4">
        <span className="text-xs text-amber-500/60 uppercase tracking-wider">
          {product.product_category}
        </span>
      </div>

      {/* Product Name */}
      <h2 className="text-3xl md:text-4xl font-light text-amber-400 uppercase mb-4 tracking-wider">
        {product.product_name}
      </h2>

      {/* Description */}
      <div className="mb-6 pb-6 border-b border-amber-500/20">
        <p className="text-sm text-gray-400 leading-relaxed">
          {product.product_description}
        </p>
      </div>

      {/* Stock Information */}
      <ProductInfoRow
        label="Stock Available"
        value={`${product.stock} units`}
        valueClassName={`text-lg font-light ${product.stock > 0 ? 'text-amber-400' : 'text-red-400'}`}
      />

      {/* Price Section */}
      <ProductInfoRow
        label="Price"
        value={`$${product.product_price}`}
        valueClassName="text-4xl font-light text-amber-400"
      />

      {/* Action Buttons */}
      <ProductActionButtons />
    </div>
  );
};

export default ProductDetailsSection;

