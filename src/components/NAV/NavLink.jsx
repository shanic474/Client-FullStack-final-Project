import { Link } from 'react-router-dom';

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-400 dark:text-gray-300 
      hover:text-amber-400 dark:hover:text-amber-300 
      transition-all duration-300 font-medium text-lg 
      tracking-wide relative group uppercase py-3 px-4"
    >
      {children}
      <span className="absolute bottom-1 left-0 w-0 h-1 
        bg-gradient-to-r from-amber-400 to-yellow-500 
        group-hover:w-full transition-all duration-500"
      />
    </Link>
  );
}

export default NavLink;