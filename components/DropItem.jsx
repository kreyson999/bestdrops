import Image from 'next/image'
import Link from 'next/link'


const DropItem = () => {
  return (
    <Link href={`/drop`}>
      <a className='grid grid-cols-2 gap-x-2 mx-4'>
        <Image
          src="/images/but.png"
          width={200}
          height={200}
          alt="xd"
        />
        <div className='flex flex-col justify-between text-right'>
          <span className='uppercase text-2xl font-bold text-light-blue leading-none'>Air Jordan 2 x Union Grey Fog</span>
          <span className='leading-none text-[1.15rem] text-white'>26 Marzec 09:00</span>
        </div>
      </a>
    </Link>
  );
}
 
export default DropItem;