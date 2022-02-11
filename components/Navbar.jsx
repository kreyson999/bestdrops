import { useState } from 'react'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const NavLink = ({href, children}) => {
  const router = useRouter()
  const { asPath } = router
  const isActive = href === asPath

  return (
    <Link href={href}>
      <a className={`block font-bold uppercase grid text-white text-xl md:text-2xl h-full place-content-center py-2 md:py-3 px-1 ${isActive ? 'md:border-b-2 md:border-t-2 border-t-custom-black border-b-blue-600' : ''}`}>
        {children}
      </a>
    </Link>
  );
}

const Navbar = () => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const handleOpeningNavbar = () => {
    setIsNavbarOpen(state => !state)
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-custom-black border-b border-gray-700">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between">
        <div className="flex justify-between sm:w-min sm:justify-start">
          <Link href={'/'}>
            <a className="h-full grid place-content-center py-1.5 px-1">
              <div className="h-12 w-12">
                <Image
                  src={'/images/logo.svg'}
                  alt="Home"
                  width={64}
                  height={64}
                />
              </div>
            </a>
          </Link>
          <button
          className='sm:hidden'
          onClick={handleOpeningNavbar}>
            <div className="h-10 w-10">
              <Image
                src={'/icons/menu.svg'}
                alt="Open menu"
                width={64}
                height={64}
              />
            </div>
          </button>
        </div>
        <ul onClick={handleOpeningNavbar} className={`flex sm:space-x-4 ${isNavbarOpen ? 'flex-col sm:flex-row' : 'hidden sm:flex'}`}>
          <li>
            <NavLink href={'/hotdrops'}>
              Hot dropy
            </NavLink>
          </li>
          <li>
            <NavLink href={'/drops'}>
              Dropy
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
export default Navbar;