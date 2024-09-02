import { motion } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/dashboard';
import Wallets from './Wallets/wallets';
import Navigation from './Navigation/navigation';
import Expenses from './Expenses/expenses';
import { FirstContext } from './Context/firstContext';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    food: { date: '', price: '' },
    travel: { date: '', price: '' },
    movie: { date: '', price: '' },
    dress: { date: '', price: '' },
  });
  const [add, setAdd] = useState({
    TotalAmount: '',
    Food: '',
    Dress: '',
    movie: '',
    travel: '',
  });
  // const onClick = () => {
  //   setData(prevData => ({
  //     ...prevData,
  //     [input]: { date: input1, price: input2 },
  //   }));
  //   setInput('');
  //   setInput1('');
  //   setInput2('');
  // };

  return (
    <div>
      {/* <div>
        <motion.div className="hj" whileFocus={{ scale: 1.3 }}></motion.div>
      </div> */}
      <div>
        <BrowserRouter>
          <FirstContext.Provider value={{ data, setData, add, setAdd }}>
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/expenses" element={<Expenses />}></Route>
              <Route path="/wallets" element={<Wallets />}></Route>

              {/* <Route path="/e" element={<Expenses />}></Route> */}
              {/* <Route path="/w" element={<Wallets />}></Route> */}
            </Routes>
          </FirstContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
