import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { LoginPage } from '../pages/Login/Login';
import { RegisterPage } from '../pages/Register/Register';
import { SystemPage } from '../pages/System/System';
import { PrivateRoute } from './PrivateRoute';

const AppRoutes = () => {
	const authenticated = useSelector(state => state.authenticated)
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/system" element={<PrivateRoute authenticated={authenticated}><SystemPage /></PrivateRoute>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRoutes;