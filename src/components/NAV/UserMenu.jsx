import { Link } from 'react-router-dom';
import IconButton from './IconButton';

function UserMenu({ user }) {
  if (user) {
    return (
      <IconButton title={user.name} ariaLabel="User profile">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M5.121 17.804A9.003 9.003 0 0112 15
            a9.003 9.003 0 016.879 2.804
            M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </IconButton>
    );
  }

  return (
    <>
      <Link
        to="/login"
        className="px-6 py-4 rounded-xl 
        bg-amber-500/10 dark:bg-amber-400/10 
        text-amber-500 dark:text-amber-400 
        hover:bg-amber-500/25 dark:hover:bg-amber-400/25 
        border border-amber-500/20 dark:border-amber-400/30 
        transition-all duration-300 uppercase text-lg font-medium"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-6 py-4 rounded-xl 
        bg-amber-500/25 dark:bg-amber-400/25 
        text-amber-500 dark:text-amber-400 
        hover:bg-amber-500/35 dark:hover:bg-amber-400/35 
        border border-amber-500/30 dark:border-amber-400/40 
        transition-all duration-300 uppercase text-lg font-medium"
      >
        Sign Up
      </Link>
    </>
  );
}

export default UserMenu;