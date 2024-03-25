import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
	const accessToken = localStorage.getItem("accessToken");
	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate("/register");
		}
	}, []);

	return "Main page";
}

export default Main;
