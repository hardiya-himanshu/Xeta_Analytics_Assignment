// Importing VDOM, Provider,router&Store
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing Global Styles
import './index.css'

// Importing Components and Elements
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
