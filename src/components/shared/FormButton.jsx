const FormButton = ({ type = "submit", children, onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase text-sm font-light tracking-wider hover:bg-amber-500/20 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default FormButton;

