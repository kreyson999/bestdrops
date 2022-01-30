import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


const NavLink = ({href, children}) => {
  const router = useRouter()
  const { asPath } = router
  const isActive = href === asPath

  return (
    <Link href={href}>
      <a className={`block font-bold uppercase grid text-white text-2xl h-full place-content-center py-3 px-1 ${isActive ? 'border-b-2 border-t-2 border-t-custom-black border-b-blue-600' : ''}`}>
        {children}
      </a>
    </Link>
  );
}

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-custom-black">
      <div className="container mx-auto px-4 flex justify-between">
        <Link href={'/'}>
          <a className="block h-full grid place-content-center py-3 px-1">
            <Image
              src={'/icons/home.svg'}
              alt="Home"
              width={36}
              height={36}
            />
          </a>
        </Link>
        <ul className="flex space-x-4">
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
          {/* <li>
            <NavLink href={'/blog'}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink href={'/influ'}>
              Influ
            </NavLink>
          </li> */}
        </ul>
        {/* <button className={`block grid place-content-center py-3 px-1`}>
          <Image
            src={'/icons/settings.svg'}
            alt="Home"
            width={36}
            height={36}
          />
        </button> */}
      </div>
    </nav>
  );
}
 
export default Navbar;