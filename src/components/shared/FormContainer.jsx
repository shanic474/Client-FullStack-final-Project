const FormContainer = ({ children, maxWidth = "max-w-md" }) => {
  return (
    <div className="flex items-center justify-center pt-32 pb-16 px-4">
      <div className={`w-full ${maxWidth}`}>
        <div className="relative bg-gradient-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 p-8">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;

