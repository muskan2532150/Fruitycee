import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowUp, AiFillCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { fetchdata, STATUSES } from '../redux/Container/Containers';
import Item from './Item';
import Spinners from './Spinner';
// import  { fetchdata} from '../redux/Container/Containers';
// import Container from './Container';

const Container = () => {
  const { data, status } = useSelector((state) => state.container);
  const [scroll, setscroll] = useState(document.documentElement.scrollTop);
  const [bool, setbool] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata('all'));
    window.onscroll = () => setscroll(document.documentElement.scrollTop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setscroll(0);
  };

  if (status === STATUSES.LOADING) {
    return <Spinners />;
  }

  if (status === STATUSES.ERROR) {
    return <h2 className="spinner">ERROR...</h2>;
  }

  const handleClosebbtn = () => {
    setbool(!bool);
    if (document.querySelector('.inputText').value) { dispatch(fetchdata('all')); }
    document.querySelector('.inputText').value = '';
  };

  const handleSearch = (event) => {
    const title = document.querySelector('.inputText').value;
    const cat = document.querySelector('#category').value;
    if (event.key === 'Enter') {
      dispatch(fetchdata(`${cat}/${title}`));
        <Container />;
    }
  };

  return (
    <>
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
      <div className="container">
        {data.map((record) => <Item record={record} key={record.id} />)}
        <div className="topbtn">
          <button className={scroll > 20 ? 'scrollbtn ' : 'scrollDown'} type="button" onClick={() => handleScroll()}><AiOutlineArrowUp /></button>
        </div>
      </div>
    </>

  );
};

export default Container;
