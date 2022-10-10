import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {  AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { GiFruitBowl } from 'react-icons/gi';
import  { fetchdata} from '../redux/Container/Containers';
import Container from './Container';


const Navbar = () => {
  const [bool, setbool] = useState(false);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const title = document.querySelector('.inputText').value;
    const cat = document.querySelector('#category').value;
    if (event.key === 'Enter') {
      dispatch(fetchdata(`${cat}/${title}`));
      <Container/>
    }
  };

  const handleClosebbtn = () => { 
  document.querySelector('.inputText').value ? dispatch(fetchdata('all')) : 'false';
  document.querySelector('.inputText').value = ''; 
  setbool(!bool);
 }

  return (
  <nav>
    <Link to="/"><GiFruitBowl /></Link>
    <div className="search">
        { bool ? (
          <>
            <div>
              <select name="category" id="category">
                <option default> select</option>
                <option value="family">Family</option>
                <option value="genus">Genus</option>
                <option value="order">Order</option>
              </select>
              <input type="text" placeholder="Enter family/Genus/Order" className="inputText" onKeyDown={() => handleSearch(event)} />
              <button
                type="button"
                onClick={() => handleClosebbtn()}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          </>
        )
          : <button type="button" className="sbtn" onClick={() => setbool(!bool)}><AiOutlineSearch /></button>}
      </div>
  </nav>
)
}

export default Navbar;
