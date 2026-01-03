import { Route, Routes } from "react-router-dom"
import { Home } from "@/pages/Home"
import Setting from "@/pages/Setting"
import Booking from "@/pages/Booking"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} /> 
      <Route path="/book" Component={Booking} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  )
}

export default MainRoutes