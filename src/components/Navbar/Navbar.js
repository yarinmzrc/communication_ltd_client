import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  const navigate = useNavigate();

  return <nav className='navbar'> <h1 className='logo' onClick={() => navigate('/')}>CommunicationLTD</h1></nav>;
};
