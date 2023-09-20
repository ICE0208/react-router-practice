import { NavLink } from 'react-router-dom';

interface ILink {
  to: string;
  label: string;
}

const links: ILink[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

const Header = () => (
  <div className="px-2 py-4">
    <ul className="list-disc list-inside text-xl">
      {links.map((item, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) => getLinkClassnames(isActive)}
            to={item.to}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const getLinkClassnames = (isActive: boolean) => {
  return (
    defaultLinkClassnames + ' ' + (isActive ? 'text-blue-400 font-bold' : null)
  );
};
const defaultLinkClassnames = 'hover:text-blue-400 hover:font-bold';

export default Header;
