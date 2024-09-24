// Importing VDOM, Provider,router&Store
import {Provider} from 'react-redux'
import store from './store/store.js'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing Global Styles
import './index.css'

// Importing Components and Elements
import App from './App.jsx'
import Dashboard from './components/pages/Dashboard.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path: "/dashboard",
    element:<Dashboard />
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
