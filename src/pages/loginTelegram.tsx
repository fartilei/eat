import { useNavigate } from "react-router-dom";
import { useAuth } from "@/AuthProvider";

export default function LoginTelegramPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(); 
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
            <div className="w-full max-w-md p-6 text-center">
                <h1 className="text-2xl font-bold mb-6">Войдите через Telegram</h1>

                <button
                    onClick={handleLogin}
                    className="bg-primary text-white px-6 py-3 rounded-lg w-full"
                >
                    Войти через Telegram
                </button>
            </div>
        </div>
    );
}