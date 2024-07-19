import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

export default function App() {
  /**
   * ! STATE (état, données) de l'application
   */


  /**
   * ! COMPORTEMENT (méthodes, fonctions) de l'application
   */


  /**
   * ! AFFICHAGE (render) de l'application
   */
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}