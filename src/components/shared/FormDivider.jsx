const FormDivider = () => {
  return (
    <div className="relative my-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-amber-500/20"></div>
      </div>
      <div className="relative flex justify-center text-xs">
        <span className="px-2 bg-[#1a1a1a] text-gray-500 uppercase tracking-wide">Or</span>
      </div>
    </div>
  );
};

export default FormDivider;

