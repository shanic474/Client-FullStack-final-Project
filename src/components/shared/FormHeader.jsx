const FormHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-light tracking-wider text-amber-400 uppercase mb-2">
        {title}
      </h1>
      <p className="text-sm text-gray-500 uppercase tracking-wide">
        {subtitle}
      </p>
    </div>
  );
};

export default FormHeader;

