import { FunctionComponent } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '../routes'
import '../styles/App.css'
import { NextUIProvider } from '@nextui-org/react'

export const App: FunctionComponent = () =>
    <NextUIProvider>
        <RouterProvider router={router} />
    </NextUIProvider>
