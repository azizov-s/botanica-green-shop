import { useLocation, useNavigate } from 'react-router'
import { Icons } from '../../../../../shared/assets/icons/icons'

const data = [
	{
		value: '/',
		content: 'Home',
	},
	{
		value: '/shop',
		content: 'Shop',
	},
	{
		value: '/plant-care',
		content: 'Plant Care',
	},
	{
		value: '/blogs',
		content: 'Blogs',
	},
]

const Navbar = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const activeLink = (link: string) => {
		return link === pathname
			? 'font-bold border-[#46A358]'
			: 'font-normal border-transparent text-[#3D3D3D]'
	}
	return (
		<div
			className='w-[100%] pt-[50px] min-h-[53px] 
    flex justify-between items-start
		border-b-[0.1px] accent-[#46A35880]
    '
		>
			<div className='flex justify-start items-center gap-[6px]'>
				<img src={Icons.logo} alt='' />
				<p className='text-[#46A358] text-[20px] font-bold'>GREENSHOP</p>
			</div>
			<div className='max-w-[351px] w-[100%] h-[56px] flex justify-between items-start'>
				{data?.map(e => {
					return (
						<button
							key={e.value}
							className={
								`duration-250 h-[100%] pb-[26px] text-[16px] leading-5 border-b-[3px] ` +
								activeLink(e.value)
							}
							onClick={() => navigate(e.value)}
						>
							{e.content}
						</button>
					)
				})}
			</div>
			<div className='bg-[red]'></div>
		</div>
	)
}

export default Navbar
