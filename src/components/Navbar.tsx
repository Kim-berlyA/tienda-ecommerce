import { NavLink } from 'react-router-dom'
import { House, User, ShoppingCart } from 'lucide-react'
import Categories from '../assets/Categories'

export default function Navbar() {
  return (
    <div className='absolute bottom-0 border-t w-full pb-2 pt-1 flex justify-around'>
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
            <ShoppingCart
              stroke={isActive ? '#820933' :'black'}
              fill={isActive ? '#820933' : 'none'}
            />
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
