import { Route, Routes } from "react-router-dom"
import { useState,useEffect } from "react"

import Home from "./components/Home/Home.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Stack from "./components/Stack/Stack.jsx"
import Proyects from "./components/Proyects/Proyects.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [current, setCurrent] = useState([<Home />]);
  const handleClick = (page) => {
    setActivePage(page);
  };
  useEffect(() => {
    if(activePage === "stack") {
        setCurrent([...current, <Stack />])
    }
    if(activePage === "proyects") {
        setCurrent([...current, <Proyects />])
    }
    if(activePage === "contact") {
        setCurrent([...current, <Contact />])
    }
    return () => {
      
    }
  }, [activePage])
  
  console.log(activePage);
  return (
    <>
      <NavBar
        handleClick={handleClick}
        setActivePage={setActivePage}
        activePage={activePage}
      />
      {activePage && current}
    </>
  );
      {/* <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/stack"} element={<Stack />} />
        <Route path={"/proyects"} element={<Proyects />} />
        <Route path={"/contact"} element={<Contact />} /> 
    </Routes> */}
}

export default App
