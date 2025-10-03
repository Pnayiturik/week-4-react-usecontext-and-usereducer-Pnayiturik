import './App.css'
import TaskManager from './components/TaskManager';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <Navbar/>
      <TaskManager/>
    </ThemeProvider>
  )
}

export default App
