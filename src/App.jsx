import { Routes, Route } from "react-router-dom"
import Menu from "./components/Menu"
import TheHeader from "./components/TheHeader"
import HomePage from "./components/HomePage"

function App() {

  return (
    <>
   <TheHeader/>
   <div className="mx-20 flex">
    <Menu/>
    <div className="h-fit p-5 flex-1">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/buttons" element={''}/>
        <Route path="/accordion" element={''}/>
        <Route path="/alerts" element={''}/>
        <Route path="/cards" element={''}/>
      </Routes>
    </div>
   </div>
    </>
  )
}

export default App
