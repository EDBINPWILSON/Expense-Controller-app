import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to="/">DASHBOARD</NavLink>
      <NavLink to="/expenses">EXPENSES</NavLink>
      <NavLink to="/wallets">WALLETS</NavLink>
    </div>
  );
};
export default Navigation;
