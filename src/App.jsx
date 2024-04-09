import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<h3>This is product page</h3>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
