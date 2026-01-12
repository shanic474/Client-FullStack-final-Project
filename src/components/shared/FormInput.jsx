const FormInput = ({ 
  id, 
  name, 
  type = "text", 
  label, 
  placeholder, 
  className = "" 
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-xs text-gray-500 uppercase tracking-wide mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full px-4 py-3 bg-[#1a1a1a] border border-amber-500/20 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;

