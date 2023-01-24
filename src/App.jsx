import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
