const CloseButton = ({ onClick, ariaLabel = "Close modal", className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/20 transition-all duration-300 ${className}`}
      aria-label={ariaLabel}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
};

export default CloseButton;

