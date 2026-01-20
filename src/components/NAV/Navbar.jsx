import Logo from './Logo';
import NavLinks from './NavLinks';
import NavActions from './NavActions';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 
      bg-gradient-to-r from-[#2a2a2a] via-[#2d2d2d] to-[#2a2a2a]
      transition-all duration-500
      shadow-lg shadow-black/30"
    >
      <div className="max-w-9xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-28">
          <Logo />
          <NavLinks />
          <NavActions />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;