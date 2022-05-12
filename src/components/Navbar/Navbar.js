import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.authenticated);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch({type: "LOG_OUT"});
    navigate('/')
  }

  return <nav className='navbar'> 
     <h1 className='logo' onClick={() => navigate('/')}>CommunicationLTD</h1>
     {authenticated && <button className='btn' onClick={handleLogOut}>Log out</button>}
  </nav>;
};
