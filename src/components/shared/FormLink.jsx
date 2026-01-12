import { Link } from 'react-router-dom';

const FormLink = ({ to, text, linkText }) => {
  return (
    <div className="text-center">
      <p className="text-sm text-gray-500 uppercase tracking-wide">
        {text}{' '}
        <Link to={to} className="text-amber-400 hover:text-amber-300 transition-colors">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default FormLink;

