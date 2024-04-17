import { Outlet } from 'react-router'
import useDarkSide from '../../../shared/hooks/darkmode/useDarkSide'
import Navbar from './components/navbar/navbar.content'

const Layout = () => {
	const { colorTheme, setTheme } = useDarkSide()
	const handleTheme = () => {
		setTheme(colorTheme)
	}
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
