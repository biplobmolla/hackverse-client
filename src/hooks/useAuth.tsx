import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import storage from "utils/storage";

export default function useAuth() {
	const { user } = useSelector((state: RootState) => state.auth);
	const navigate = useNavigate();

	const login = () => {
		storage.set("token", "dummytoken");
		navigate("/");
	};

	const logout = () => {
		storage.clear();
		window.location.reload();
	};

	return { user, login, logout };
}
