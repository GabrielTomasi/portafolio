import { Route, Routes } from "react-router-dom"


import Home from "./components/Home/Home.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Stack from "./components/Stack/Stack.jsx"
import Proyects from "./components/Proyects/Proyects.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"

const App = () => {
  return (
      <>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/stack"} element={<Stack />} />
        <Route path={"/proyects"} element={<Proyects />} />
        <Route path={"/contact"} element={<Contact />} />

      </Routes>
      </>

  )
}

export default App
