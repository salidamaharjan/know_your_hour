import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import App from "./App.jsx";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LoginPage/>,
                index: true,
            },
            {
                path: "/homepage",
                element: <HomePage/>
            }
        ]
    }
]);

