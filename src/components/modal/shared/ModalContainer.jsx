const ModalContainer = ({ children, maxWidth = 'max-w-2xl', onClick }) => {
  return (
    <div 
      className={`relative w-full ${maxWidth} max-h-[90vh] bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 shadow-2xl overflow-hidden flex flex-col animate-fade-in`}
      onClick={onClick}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-500/40" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-500/40" />
      
      {children}
    </div>
  );
};

export default ModalContainer;

