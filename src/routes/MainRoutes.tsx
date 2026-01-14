import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/main/Home'
import Setting from '@/pages/admin/Setting'
import Booking from '@/pages/main/Booking'

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' Component={Home} />
			<Route path='/book' Component={Booking} />
			<Route path='/setting' element={<Setting />} />
		</Routes>
	)
}

export default MainRoutes
