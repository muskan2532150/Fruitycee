import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowUp} from 'react-icons/ai';
import { fetchdata, STATUSES } from '../redux/Container/Containers';
import Item from './Item';

const Container = () => {
  const { data,status } = useSelector((state) => state.container);
  const [scroll, setscroll] = useState(document.documentElement.scrollTop);
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

  
if(status=== STATUSES.LOADING)
{
  return <h2>Loading...</h2>
}

  return (
    <>
      <div className="container">
      {data.map((record) => {
        return <Item record={record} key={record.id} />;
      })}
      <div className="topbtn">
        <button className={scroll > 20 ? 'scrollbtn ' : 'scrollDown'} type="button" onClick={() => handleScroll()}><AiOutlineArrowUp /></button>
      </div>
    </div>
    </>
    
  );
};

export default Container;
