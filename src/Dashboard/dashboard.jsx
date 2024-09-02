import { UserOutlined } from '@ant-design/icons';
import { Input, Select, Space } from 'antd';
import { useState } from 'react';
import Navigation from '../Navigation/navigation';
import { CiAlarmOn } from 'react-icons/ci';
import { MdOutlinePriceChange } from 'react-icons/md';
import { FirstContext } from '../Context/firstContext';
import { useContext } from 'react';

import './dashboard.css';

const Dashboard = () => {
  const [input, setInput] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const { data, setData } = useContext(FirstContext);

  const onClick = () => {
    setData(prevData => ({
      ...prevData,
      [input]: { date: input1, price: input2 },
    }));
    setInput('');
    setInput1('');
    setInput2('');
  };
  // const onClick = () => {
  //   setData(prevData => ({
  //     ...prevData,
  //     [input]: [...(prevData[input] || []), { date: input1, price: input2 }],
  //   }));
  //   setInput('');
  //   setInput1('');
  //   setInput2('');
  // };

  const onChange = e => {
    setInput(e);
  };
  const onChange1 = e => {
    setInput1(e.target.value);
    console.log(input1);
  };
  const onChange2 = e => {
    setInput2(e.target.value);
  };
  console.log(data);

  return (
    <>
      <div className="abc">
        <Navigation></Navigation>
        <div className="main">
          <div className=" first">
            <Select
              value={input}
              onChange={onChange}
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: 'dress',
                  label: 'Dress',
                },
                {
                  value: 'food',
                  label: 'Food',
                },
                {
                  value: 'travel',
                  label: 'Travel',
                },
                {
                  value: 'movie',
                  label: 'movie',
                },
              ]}
            />
          </div>
          <div className="input">
            <Input
              value={input1}
              onChange={onChange1}
              size="large"
              placeholder="date"
              prefix={<CiAlarmOn />}
            />
            <br />
            <br />

            <Input
              value={input2}
              onChange={onChange2}
              size="small"
              placeholder="price"
              prefix={<MdOutlinePriceChange />}
            />
          </div>
          <button className="btn" onClick={onClick}>
            ADD
          </button>
        </div>
        {/* <div>{data}</div> */}
      </div>
    </>
  );
};

export default Dashboard;
