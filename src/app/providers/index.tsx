import { FunctionComponent } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '../routes'
import '../styles/App.css'

export const App: FunctionComponent = () => <RouterProvider router={router} />
