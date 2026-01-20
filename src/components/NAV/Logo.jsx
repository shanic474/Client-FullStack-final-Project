import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex-shrink-0 space-y-1">
        <h1 className="text-4xl font-light tracking-wider 
          bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600
          dark:from-amber-300 dark:via-yellow-400 dark:to-amber-500
          bg-clip-text text-transparent uppercase"
        >
          Build-Your-Own Meal
        </h1>
        <p className="text-base text-amber-600/70 dark:text-amber-400/70 
          tracking-[0.25em] font-light uppercase"
        >
          Nutrition Laboratory
        </p>
      </Link>
    </div>
  );
}

export default Logo;