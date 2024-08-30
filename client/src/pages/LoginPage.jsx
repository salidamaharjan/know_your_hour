import Card from "../components/card.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleCLick() {
        const data = await post("http://localhost:3000/api/login",{
            username,
            password
        });
        const token = data.token;
        if (token) {
            localStorage.setItem("token", token);
            navigate("/home");
            window.location.reload();
        }
        setUsername("");
        setPassword("");
    }
    return <div className="flex justify-center pt-20">
        <Card className="text-green-600" title="Know Your Hour"></Card>
    </div>
}
export default LoginPage;