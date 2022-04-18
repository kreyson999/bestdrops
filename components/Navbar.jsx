import Image from 'next/image'

const Navbar = ({title}) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="bg-blue py-2 flex items-center w-min pr-12">
        <div className="w-14 grid">
          <Image
          src="/images/logo.svg"
          width={112}
          height={112}
          alt="Logo naszej strony"
          />
        </div>
        <span className="ml-1 text-white text-2xl uppercase font-bold">{title}</span>
      </div>
      <div>
        <div className='grid pr-4'>
          <Image
          src="/icons/search.svg"
          width={32}
          height={32}
          alt='Ikona Szukaj'
          />
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;