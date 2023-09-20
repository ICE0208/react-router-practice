import { Link } from 'react-router-dom';

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
        <li key={index} className="hover:text-blue-400">
          <Link to={item.to}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Header;
