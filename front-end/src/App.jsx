import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Stack from "./components/Stack/Stack.jsx";
import Proyects from "./components/Proyects/Proyects.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {

  return (
    <>
      <NavBar />
      <section id={"home"}><Home /></section>
<section id={"stack"}>{<Stack />}</section>
      <section id={"proyects"}><Proyects /></section>
      <section id={"contact"}><Contact /></section>
    </>
  );
};

export default App;
