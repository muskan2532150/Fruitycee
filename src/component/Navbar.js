// import {useState} from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiFruitBowl } from 'react-icons/gi';



const Navbar = () => {
  // const dispatch = useDispatch(); 

  return (
  <nav>
    <Link to="/"><GiFruitBowl /></Link>
  </nav>
)
}

export default Navbar;
