import NavLink from './NavLink';

function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-16">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </div>
  );
}

export default NavLinks;