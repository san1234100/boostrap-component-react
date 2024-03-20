import { Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import TheHeader from "./components/TheHeader"
import HomePage from "./components/HomePage"
import ButtonPage from "./pages/ButtonPage"
import AlertPage from "./pages/AlertPage"
import AccordionPage from "./pages/AccordionPage"
import CardPage from "./pages/CardPage"
import BadgePage from "./pages/BadgePage"

function App() {

  return (
    <>
   <TheHeader/>
   <div className="mx-20 flex">
    <Menu/>
    <div className="h-fit p-5 flex-1">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/buttons" element={<ButtonPage/>}/>
        <Route path="/accordion" element={<AccordionPage/>}/>
        <Route path="/alerts" element={<AlertPage/>}/>
        <Route path="/cards" element={<CardPage/>}/>
        <Route path="/badges" element={<BadgePage/>}/>
      </Routes>
    </div>
   </div>
    </>
  )
}

export default App
