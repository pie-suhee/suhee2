import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='left'>
        <Link to="/">
          <span className="large_title_24">SUHEE</span>
        </Link>
      </div>

      <div className='mid'>
      </div>

      <div className='right'>
      </div>
    </header>
  );
};

export default Header;