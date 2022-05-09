import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import { ChangePassword } from '../pages/ChangePassword/ChangePassword';
import { ForgotPassword } from '../pages/ForgotPassword/ForgotPassword';
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
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/change-password" element={<ChangePassword />} />
					<Route path="/system" element={<PrivateRoute authenticated={authenticated}><SystemPage /></PrivateRoute>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRoutes;