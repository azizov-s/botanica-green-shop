import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home, Layout, Shop } from './lazy'

export const router = createBrowserRouter([
	{
		element: (
			<Suspense fallback='loading...'>
				<Layout />
			</Suspense>
		),
		path: '/',
		children: [
			{
				index: true,
				element: (
					<Suspense fallback='loading...'>
						<Home />
					</Suspense>
				),
			},
			{
				path: 'shop',
				element: (
					<Suspense fallback='loading...'>
						<Shop />
					</Suspense>
				),
			},
			{
				path: 'plant-care',
				element: 'plant-care',
			},
			{
				path: 'blogs',
				element: 'blogs',
			},
		],
	},
])
