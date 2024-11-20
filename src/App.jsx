
import Contact from "./components/Contact"
import Team from "./components/Team"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Event from "./components/Event"
import ToutTerrain from "./components/Challenges/Tout-terrain"
import Suiveur from "./components/Challenges/Suiveur"
import Junior from "./components/Challenges/Junior"
import RocketLeague from "./components/Challenges/RocketLeague"
import Issatso from "./components/issatso"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Event />} /> 
        <Route path="Contact" element={<Contact />} />
        <Route path="team" element={<Team />} />
        <Route path="about" element={<Issatso />} />
        <Route path="ToutTerrain" element={<ToutTerrain />} />
        <Route path="Suiveur" element={<Suiveur />} />
        <Route path="Junior" element={<Junior />} />
        <Route path="RocketLeague" element={<RocketLeague />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
