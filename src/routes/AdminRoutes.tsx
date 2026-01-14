import { Route, Routes } from 'react-router-dom'
import Setting from '@/pages/admin/Setting'
import Dashboard from '@/pages/admin/Dashboard'

const AdminRoutes = () => {
	return (
		<Routes>
			<Route path='/admin/dashboard' Component={Dashboard} />
			<Route	path='/admin/setting' Component={Setting} />
			<Route path='/setting' element={<Setting />} />
		</Routes>
	)
}

export default AdminRoutes
