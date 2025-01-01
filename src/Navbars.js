import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <nav className='navbar'>
      <Link to='/'><h1>Home</h1></Link>
      <Link to='/create'>New Blog</Link>
    </nav>
  );
}

export default Navbars;