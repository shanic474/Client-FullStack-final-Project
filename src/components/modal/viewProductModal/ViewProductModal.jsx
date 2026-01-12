import { useModalStore } from "../../../store/modal.store.jsx";
import ModalBackdrop from "../shared/ModalBackdrop.jsx";
import ModalContainer from "../shared/ModalContainer.jsx";
import CloseButton from "../shared/CloseButton.jsx";
import ProductImageSection from "./ProductImageSection.jsx";
import ProductDetailsSection from "./ProductDetailsSection.jsx";

const ViewProductModal = () => {
  const { modalActive, modalType, selectedProduct, closeModal } = useModalStore();

  if (!modalActive || modalType !== 'product' || !selectedProduct) return null;

  const product = selectedProduct;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <ModalBackdrop onClick={closeModal} />
      
      <ModalContainer 
        maxWidth="max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <CloseButton 
          onClick={closeModal}
          className="absolute top-4 right-4 z-10"
          ariaLabel="Close modal"
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          <ProductImageSection 
            productImage={product.product_image}
            productName={product.product_name}
          />
          <ProductDetailsSection product={product} />
        </div>
      </ModalContainer>
    </div>
  );
};

export default ViewProductModal;

