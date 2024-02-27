import './App.css'
import NavBar from './components/NavBar';
import Content from './components/Content';
import {NextUIProvider} from "@nextui-org/react";
function App() {
  return (
    <NextUIProvider>
      <div>
        <NavBar/>
      </div>
      <div>
        <Content/>
      </div>
    </NextUIProvider>
  )
}

export default App
