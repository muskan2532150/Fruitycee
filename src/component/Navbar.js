import { Link } from 'react-router-dom';
import { GiFruitBowl } from 'react-icons/gi';

const Navbar = () => (
  <nav>
    <Link to="/"><GiFruitBowl /></Link>
  </nav>
);

export default Navbar;
