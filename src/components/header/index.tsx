import { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface ILink {
  to: string;
  label: string;
}

const links: ILink[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

const Header = () => {
  const [onHome, setOnHome] = useState<boolean>(true);
  const onClick = useCallback((label: ILink['label']) => {
    if (label === 'Home') {
      setOnHome(true);
      return;
    }
    setOnHome(false);
  }, []);
  useEffect(() => {
    const currentPath = window.location.pathname;
    const onAbout = currentPath === '/about';
    setOnHome(!onAbout);
  }, []);

  return (
    <div className="px-2 py-4">
      <ul className="list-disc list-inside text-xl">
        {links.map((item, index) => (
          <li key={index}>
            <NavLink
              onClick={() => {
                onClick(item.label);
              }}
              className={({ isActive }) => {
                if (item.label === 'Home') {
                  return getLinkClassnames(onHome);
                }
                return getLinkClassnames(isActive);
              }}
              to={item.to}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getLinkClassnames = (isActive: boolean) => {
  return (
    defaultLinkClassnames + ' ' + (isActive ? 'text-blue-400 font-bold' : null)
  );
};
const defaultLinkClassnames = 'hover:text-blue-400 hover:font-bold';

export default Header;
