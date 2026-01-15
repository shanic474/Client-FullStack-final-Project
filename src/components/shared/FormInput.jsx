const FormInput = ({ 
  id, 
  name, 
  type = "text", 
  label, 
  placeholder, 
  value,        // <-- controlled input value
  onChange,     // <-- onChange handler
  className = "" 
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs text-gray-500 uppercase tracking-wide mb-2"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}           // <-- controlled
        onChange={onChange}     // <-- call parent handler
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[#1a1a1a] border border-amber-500/20 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-all duration-300"
      />
    </div>
  );
};

export default FormInput;
