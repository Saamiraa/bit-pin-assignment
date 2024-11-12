import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./layout"
import Home from "./pages/Home"
import CryptoCurrency from "./pages/CryptoCurrency"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="coin/:id" element={<CryptoCurrency />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
