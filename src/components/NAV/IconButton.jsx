function IconButton({ onClick, ariaLabel, title, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      title={title}
      className="p-4 rounded-xl 
      bg-amber-500/10 dark:bg-amber-400/10 
      text-amber-500 dark:text-amber-400 
      hover:bg-amber-500/25 dark:hover:bg-amber-400/25 
      border border-amber-500/20 dark:border-amber-400/30 
      transition-all duration-300"
    >
      {children}
    </button>
  );
}

export default IconButton;