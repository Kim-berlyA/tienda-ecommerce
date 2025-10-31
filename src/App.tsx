// react-router
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

//layout
import RootLayout from "./layout/RootLayout"

//pages
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Cart from "./pages/Cart"
import Account from "./pages/Account"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="profile" element={<Account />}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))