import { Outlet, useNavigate } from 'react-router'
import useDarkSide from '../../../shared/hooks/darkmode/useDarkSide'

const Layout = () => {
	const { colorTheme, setTheme } = useDarkSide()
	const handleTheme = () => {
		setTheme(colorTheme)
	}
	const navigate = useNavigate()
	return (
		<div className='lg:w-[100%] min-h-[100vh] flex justify-center items-start'>
			<div className='w-[83%] min-h-[100vh] flex flex-col justify-start items-center'>
				<ul className='w-[100%] flex justify-between items-center py-[50px]'>
					<li onClick={() => navigate('/')}>Home</li>
					<li onClick={() => navigate('/shop')}>Shop</li>
					<li onClick={() => navigate('/plant-care')}>Plant Care</li>
					<li onClick={() => navigate('/blogs')}>Blogs</li>
				</ul>
				<button onClick={handleTheme}>{colorTheme.toString()}</button>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
