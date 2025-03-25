import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/home'
import Team from '../views/Team'
import League from '../views/League'
import Leagues from '../views/Leagues'
import Teams from '../views/Teams'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/team',
        element: <Team />
    },
    {
        path: '/league',
        element: <League />
    },
    {
        path: '/leagues',
        element: <Leagues />
    },
    {
        path: '/teams',
        element: <Teams />
    }
])