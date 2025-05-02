import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import Team from '../views/Team'
import League from '../views/League'
import Leagues from '../views/Leagues'
import Teams from '../views/Teams'
import Game from '../views/Game'
import Player from '../views/Player'
import AboutUs from '../views/About'
import Registro from '../views/Registro'
import Iniciar from '../views/Login'
import Account from '../views/Account'
import ResetPassword from '../views/ResetPassword'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/team/:teamId',
        element: <Team />
    },
    {
        path: '/league/:nombre',
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
        path: '/player/:playerId',
        element: <Player />
    },
    {
        path: '/AboutUs',
        element: <AboutUs />
    },
    {
        path: '/Iniciar',
        element: <Iniciar />
    },

    {
        path: '/Registro',
        element: <Registro />
    },
    {
        path: '/Reestablecer',
        element: <ResetPassword />
    },
    {
        path: '/Account',
        element: <Account />
    },



])
