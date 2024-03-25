import { Route, Routes } from "react-router-dom";
import { Register } from "../../pages/Register";
import { Login } from "../../pages/Login";
import { Main } from "../../pages/Main";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
