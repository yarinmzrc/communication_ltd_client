import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/Login/Login';
import { RegisterPage } from '../pages/Register/Register';

const AppRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRoutes;