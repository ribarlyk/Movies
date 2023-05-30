import Home from "./pages/Home"
import Ganre from "./pages/Ganre"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<Ganre />} path="/:id"></Route>
      </Routes>

    </>
  )
}

