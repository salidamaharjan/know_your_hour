import Card from "../components/card.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {post} from "../lib/http.js";
import Button from "../components/button.jsx";
import Input from "../components/input.jsx";
import Label from "../components/label.jsx"

function LoginPage() {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleClick() {
        const data = await post("http://localhost:3001/api/login",{
            username,
            password
        });
        const token = data.accessToken;
        if (token) {
            localStorage.setItem("token", token);
            navigate("/homepage");
        }
        setUsername("");
        setPassword("");
    }
    return <div className="flex justify-center pt-20">
        <Card className="text-green-600" title="Know Your Hour">
            <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
            >
                Username
            </Label>
            <Input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
            >
                Password
            </Label>
            <Input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                value={password}
                type="password"
                placeholder="******************"
                onChange={(e)=>setPassword(e.target.value)}
            />
            <div className="flex flex-col gap-2 items-center justify-between">
                <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
                <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mb-2"
                    href="#"
                >
                    Login with google
                </a>

                <Button onClick={handleClick}>
                    Login
                </Button>
            </div>
        </Card>
    </div>
}

export default LoginPage;