import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <h2>Forum</h2>
      <nav>
        <Link to="/">
          <button>Go back to titles</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
