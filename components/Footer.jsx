import Image from "next/image";

import Button from "./Button";

const Footer = () => {
  return (
    <footer className='flex flex-col items-center mt-6'>
      <div className='w-full flex space-x-4 items-center mb-1'>
        <hr className='grow border-t border-white'/>
        <div className="flex space-x-2">
          <a className='grid w-8 h-8'>
            <Image
            src="/icons/instagram.svg"
            width={36}
            height={36}
            className="object-cover"
            alt='Ikona instagram.com'
            />
          </a>
          <a className='grid w-8 h-8'>
            <Image
            src="/icons/tiktok.svg"
            width={36}
            height={36}
            className="object-cover"
            alt='Ikona tiktok.com'
            />
          </a>
        </div>
        <hr className='grow border-t border-white'/>
      </div>
      <div className='p-4 flex flex-col'>
        <div className="self-center">
          <Button text="Poprzednie dropy" href="/"/>
        </div>
        <div className='mt-4'>
          <p className=''>Zdjęcia użyte na stronie nie są naszego autorstwa i należa do ich prawnych właścicieli.</p>
          <button className='text-blue font-semibold'>Kontakt z nami</button>
        </div>
      </div>
      <div className='w-full flex space-x-4 items-center mb-1'>
        <hr className='grow border-t border-white'/>
        <span className='text-light-blue'>© 2022 BESTDROPS.PL</span>
        <hr className='grow border-t border-white'/>
      </div>
    </footer>
  );
}
 
export default Footer;