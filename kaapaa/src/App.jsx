import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />

      </Routes>
    </>
  )
}

export default App



