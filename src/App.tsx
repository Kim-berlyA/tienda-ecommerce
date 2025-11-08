// react-router
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

//layout
import RootLayout from "./layout/RootLayout"

//pages
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Cart from "./pages/Cart"
import Account from "./pages/Account"
import Details, { detailsLoader } from "./components/Details"
import { CartProvider } from "./hooks/useCart"
import { CategoryProvider } from "./hooks/useSelectedCategory"
import Checkout from "./components/Checkout"

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ='/' element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="profile" element={<Account />}/>
        <Route path="details/:id" element={<Details />} loader={detailsLoader} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    )
  )

  return (
    <CartProvider>
      <CategoryProvider>
        <RouterProvider router={router} />
      </CategoryProvider>
    </CartProvider>
  )
}