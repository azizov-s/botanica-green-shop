import { Outlet } from 'react-router'
import Navbar from './navbar'

const Layout = () => {
	return (
		<div className='lg:w-[100%] min-h-[100vh] flex justify-center items-start'>
			<div className='w-[83%] min-h-[100vh] flex flex-col justify-start items-center'>
				<Navbar />
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
