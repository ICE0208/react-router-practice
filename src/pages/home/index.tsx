import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl mb-4">Best Seller Authors</h1>
      {authors.map((item, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) => getLinkClassnames(isActive)}
            to={`/author/${item.name}`}
          >
            {item.name}
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

interface IAuthor {
  name: string;
}

const authors: IAuthor[] = [{ name: 'J.K.Rowling' }, { name: 'J.R.R.Tolkien' }];

export default Home;
