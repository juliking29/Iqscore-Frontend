import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import Team from '../views/Team'
import League from '../views/League'
import Leagues from '../views/Leagues'
import Teams from '../views/Teams'
import Game from '../views/Game'
import Player from '../views/Player'
import AboutUs from '../views/About'

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
    },
    {
        path: '/game',
        element: <Game />
    },
    {
        path: '/player',
        element: <Player />
    },
    {
        path: '/AboutUs',
        element: <AboutUs />
    }
])