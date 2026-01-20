import { useAuthStore } from '../../store/auth.store.jsx';
import ThemeToggle from './ThemeToggle';
import CartButton from './CartButton';
import UserMenu from './UserMenu';

function NavActions() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="flex items-center space-x-6">
      <ThemeToggle />
      <CartButton />
      <UserMenu user={user} />
    </div>
  );
}

export default NavActions;