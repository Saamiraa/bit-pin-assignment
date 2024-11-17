import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import CryptoCurrency from "./pages/CryptoCurrency"
import Layout from "./shared-components/layout"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="coin/:id" element={<CryptoCurrency />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
