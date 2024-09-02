import { Link } from 'react-router-dom';
import Navigation from '../Navigation/navigation';
import { FirstContext } from '../Context/firstContext';
import { useContext } from 'react';
import { useState } from 'react';
import { Card, Space, Flex, Progress } from 'antd';
import './expenses.css';

const Expenses = () => {
  const { data, setData, add, setAdd } = useContext(FirstContext);

  console.log(
    'data. dress.price',
    parseInt(data.dress.price),
    parseInt(add.Dress)
  );

  return (
    <>
      <div className="hello">
        <h1>Expenses page</h1>
        <div className="okk">
          {/* <Link to="/">GO TO Dashboard</Link> */}
          <Navigation></Navigation>

          <div className="card">
            <Space direction="vertical" size={16}>
              <Card
                title="movie"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Date:{data.movie.date}</p>
                <p>Price:{data.movie.price}</p>
              </Card>
              <Card
                title="travel"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Date:{data.travel.date}</p>
                <p>Price:{data.travel.price}</p>
              </Card>
              <Card
                title="food"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Date:{data.food.date}</p>
                <p>Price:{data.food.price}</p>
              </Card>
              <Card
                size="small"
                title="dress"
                extra={<a href="#">More</a>}
                style={{ width: 300 }}
              >
                <p>Date:{data.dress.date}</p>
                <p>Price:{data.dress.price}</p>
              </Card>
            </Space>
          </div>
          <div>
            <Flex className="flex" gap="small" vertical>
              <div>
                <p>TOTAL</p>
                <Progress
                  percent={parseInt(add.Food) / (data.food.price / 100)}
                />
              </div>
            </Flex>
            <Flex className="flex" gap="small" vertical>
              <div>
                <p>FOOD</p>
                <Progress
                  percent={
                    parseInt(data.food.price) / (parseInt(add.Food) / 100)
                  }
                />
              </div>
            </Flex>
            <Flex className="flex" gap="small" vertical>
              <div>
                <p>DRESS</p>
                <Progress
                  percent={
                    parseInt(data.dress.price) / (parseInt(add.Dress) / 100)
                  }
                />
              </div>
            </Flex>
            <Flex className="flex" gap="small" vertical>
              <div>
                <p>MOVIE</p>
                <Progress
                  percent={parseInt(add.movie) / (data.movie.price / 100)}
                />
              </div>
            </Flex>
            <Flex className="flex" gap="small" vertical>
              <div>
                <p>TRAVEL</p>
                <Progress
                  percent={parseInt(add.travel) / (data.travel.price / 100)}
                />
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expenses;
