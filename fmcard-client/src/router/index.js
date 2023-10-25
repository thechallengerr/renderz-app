import { createBrowserRouter, Navigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import ErrorPage from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Home from "../Components/Home/Home";
import Register from "../pages/Login/Register";
import AllPlayer from "../pages/AllPlayers/AllPlayer";
import PlayerDetail from "../pages/PlayerDetail/PlayerDetail";
import AllPrograms from "../pages/AllPrograms/AllPrograms";
import ProgramPlayer from '../pages/ProgramPlayers/ProgramPlayers'
import CardGenerator from "../pages/CardGenerator/CardGenerator";
import UserProfile,{getCurrentUser} from "../pages/UserProfile/UserProfile";
import ResetPassword from "../pages/Login/ChangePassword";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="home" replace />
            },
            {
                path: 'home',
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: 'players',
                element: <AllPlayer />,
                errorElement: <ErrorPage />,
                children: [

                ]
            },
            {
                path: 'players/:id',
                element: <PlayerDetail />,
                errorElement: <ErrorPage />

            },
            {
                path: 'programs',
                element: <AllPrograms />,
                errorElement: <ErrorPage />,
                children: [

                ]
            },
            {
                path: 'programs/:slug',
                element: <ProgramPlayer />,
                errorElement: <ErrorPage />,
                children: [

                ]
            },
            {
                path: 'card-generator',
                element: <CardGenerator />,
                errorElement: <ErrorPage />,
                children: [

                ]
            },
            {
                path: 'user/profile',
                element: <UserProfile />,
                errorElement: <ErrorPage />,
                loader:getCurrentUser,
                children: [

                ]
            },
        ]
    },

    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: '/register',
        element: <Register />,
        errorElement: <ErrorPage />
    },
    {
        path: '/reset-password',
        element: <ResetPassword />,
        errorElement: <ErrorPage />
    }

]);

export default router;