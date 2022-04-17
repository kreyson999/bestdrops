import Image from 'next/image'
import Link from 'next/link'


const DropItem = () => {
  return (
    <Link href={`/drop`}>
      <a className='mx-auto px-4'>
        <div className='grid grid-cols-2 gap-x-2 max-w-[600px] md:max-w-[800px] 2xl:max-w-[900px]'>
          <div className='grid max-w-[200px] md:max-w-[250px] 2xl:max-w-[300px] '>
            <Image
              src="/images/but.png"
              width={300}
              height={300}
              alt="xd"
            />
          </div>
          <div className='flex flex-col justify-between text-right'>
            <span className='uppercase text-2xl font-bold text-light-blue leading-none sm:text-3xl md:text-4xl 2xl:text-5xl'>Air Jordan 2 x Union Grey Fog</span>
            <span className='leading-none text-[1.15rem] text-white sm:text-[1.25rem] md:text-2xl'>26 Marzec 09:00</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
 
export default DropItem;