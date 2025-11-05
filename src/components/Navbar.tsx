import { NavLink } from 'react-router-dom'
import { House, User, ShoppingCart } from 'lucide-react'
import Categories from '../assets/Categories'
import { useCart } from '../hooks/cart'

export default function Navbar() {
  const {cart} = useCart();

  return (
    <div className='fixed bottom-0 border-t border-neutral-600 w-full py-2 flex justify-around bg-white z-10'>
      <NavLink
       to='/' 
       className='flex flex-col items-center'>
        {({ isActive }) => (
          <>
            <House
              stroke={isActive ? '#820933' :'black'}
              fill={isActive ? '#820933' : 'none'}
            />
            <span
              className={`mt-1 text-sm ${
                isActive ? 'text-primary' : 'text-black'
              }`}
            >
              Home
            </span>
          </>
        )}
      </NavLink>

      <NavLink
       to='categories' 
       className='flex flex-col items-center'>
        {({ isActive }) => (
          <>
            <Categories
              stroke={isActive ? '#820933' :'black'}
              fill={isActive ? '#820933' : 'none'}
            />
            <span
              className={`mt-1 text-sm ${
                isActive ? 'text-primary' : 'text-black'
              }`}
            >
              Categories
            </span>
          </>
        )}
      </NavLink>

      <NavLink
       to='cart' 
       className='flex flex-col items-center'>
        {({ isActive }) => (
          <>
            <div className='relative'>
              <ShoppingCart
                stroke={isActive ? '#820933' :'black'}
                fill={isActive ? '#820933' : 'none'}
              />
              {(cart.length > 0) && <div className={`absolute p-1 text-white rounded-full -top-2 -right-2 bg-primary border border-white ${
                isActive ? 'hidden' : ''} `}>
                  <div className='size-3 text-xs flex justify-center items-center'>{cart.length}</div>
              </div>}
            </div>
            <span
              className={`mt-1 text-sm ${
                isActive ? 'text-primary' : 'text-black'
              }`}
            >
              Cart
            </span>
          </>
        )}
      </NavLink>

      <NavLink
       to='profile' 
       className='flex flex-col items-center'>
        {({ isActive }) => (
          <>
            <User
              stroke={isActive ? '#820933' :'black'}
              fill={isActive ? '#820933' : 'none'}
            />
            <span
              className={`mt-1 text-sm ${
                isActive ? 'text-primary' : 'text-black'
              }`}
            >
              Profile
            </span>
          </>
        )}
      </NavLink>
    </div>
  )
}
