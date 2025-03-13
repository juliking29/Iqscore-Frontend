import { router } from './Router/AppRouter'  
import { RouterProvider } from 'react-router-dom'  
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App