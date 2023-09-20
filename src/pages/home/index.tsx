import { NavLink, Outlet } from 'react-router-dom';
import { authorDatas } from '../../data';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl mb-4">Best Seller Authors</h1>
      {authorDatas.map((authorInfo, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) => getLinkClassnames(isActive)}
            to={`/author/${authorInfo.authorName}`}
          >
            {authorInfo.authorName}
          </NavLink>
        </li>
      ))}
      <Outlet />
    </div>
  );
};

const getLinkClassnames = (isActive: boolean) => {
  return defaultLinkClassnames + ' ' + (isActive ? 'font-bold' : null);
};
const defaultLinkClassnames = 'hover:font-bold';

export default Home;
