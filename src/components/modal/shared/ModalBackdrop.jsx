const ModalBackdrop = ({ onClick }) => {
  return (
    <div 
      className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      onClick={onClick}
    />
  );
};

export default ModalBackdrop;

