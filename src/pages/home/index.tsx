import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl mb-4">Best Seller Authors</h1>
      {authors.map((item, index) => (
        <li key={index}>
          <Link className="hover:font-bold" to={`/author/${item.name}`}>
            {item.name}
          </Link>
        </li>
      ))}
      <Outlet />
    </div>
  );
};

interface IAuthor {
  name: string;
}

const authors: IAuthor[] = [{ name: 'J.K.Rowling' }, { name: 'J.R.R.Tolkien' }];

export default Home;
