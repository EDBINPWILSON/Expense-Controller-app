import { useParams, Link } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import { FirstContext } from '../Context/firstContext';
import { useContext, useState } from 'react';

import './wallets.css';

const Wallets = () => {
  // const [add, setAdd] = useState([]);
  const { add, setAdd } = useContext(FirstContext);

  const [on, setOn] = useState('');
  const [on1, setOn1] = useState('');
  const [on2, setOn2] = useState('');
  const [on3, setOn3] = useState('');
  const [on4, setOn4] = useState('');
  const button = () => {
    setAdd({
      ...add,
      TotalAmount: on,
      Food: on1,
      Dress: on2,
      movie: on3,
      travel: on4,
    });
    setOn('');
    setOn1('');
    setOn2('');
    setOn3('');
    setOn4('');

    console.log(add);
  };
  const onChange3 = e => {
    setOn(e.target.value);
  };
  const onChange4 = e => {
    setOn1(e.target.value);
  };
  const onChange5 = e => {
    setOn2(e.target.value);
  };
  const onChange6 = e => {
    setOn3(e.target.value);
  };
  const onChange7 = e => {
    setOn4(e.target.value);
  };
  console.log(add);
  return (
    <>
      <h1>wallet</h1>
      <div className="you">
        {/* <Link to="/">GO TO Dashboard</Link> */}
        <Navigation></Navigation>
        <div className="box">
          <h1>BUDGET</h1>
          <h2 onChange={onChange3}>
            Total Amount : <input type="text" value={on} />
          </h2>
          <h2 onChange={onChange4}>
            Food : <input type="text" value={on1} />
          </h2>
          <h2 onChange={onChange5}>
            Dress : <input type="text" value={on2} />
          </h2>
          <h2 onChange={onChange6}>
            movie : <input type="text" value={on3} />
          </h2>
          <h2 onChange={onChange7}>
            travel: <input type="text" value={on4} />
          </h2>
          <button onClick={button}>ADD</button>
          {/* <h1>{add.price}</h1> */}
        </div>
        <div className="yoyo">
          <h1> BUDGET:{add.TotalAmount}</h1>
          <h1> FOOD:{add.Food}</h1>
          <h1> DRESS:{add.Dress}</h1>
          <h1> MOVIE:{add.movie}</h1>
          <h1> TRAVEL:{add.travel}</h1>
        </div>
      </div>
    </>
  );
};
export default Wallets;
