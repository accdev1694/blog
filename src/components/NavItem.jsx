const NavItem = ({ href, text }) => {
  return (
    <li className="px-1 tracking-wide text-primary font-medium font-primary opacity-80 hover:opacity-100 duration-300 ease-in-out">
      <a href={href}>{text}</a>
    </li>
  );
};

export default NavItem;
