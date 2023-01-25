import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/header/Header'

import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
function App () {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
