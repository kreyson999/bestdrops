import Image from 'next/image'
import Link from 'next/link'

import getFormattedDate from "../helpers/getFormattedDate"


const DropItem = ({name, slug, featuredImage, date}) => {
  return (
    <Link href={`/drop/${slug}`}>
      <a className='mx-auto px-4'>
        <div className='grid grid-cols-2 gap-x-2 max-w-[600px] md:max-w-[800px] 2xl:max-w-[900px]'>
          <div className='grid max-w-[200px] md:max-w-[250px] 2xl:max-w-[300px] '>
            <Image
              src={featuredImage.url}
              width={300}
              height={300}
              alt={`Wygląd buta o nazwie ${name}`}
              className="object-cover"
            />
          </div>
          <div className='flex flex-col justify-between text-right'>
            <span className='uppercase text-2xl font-bold text-light-blue leading-none sm:text-3xl md:text-4xl 2xl:text-5xl'>{name}</span>
            <span className='leading-none text-[1.15rem] text-white sm:text-[1.25rem] md:text-2xl'>{getFormattedDate(date)}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
 
export default DropItem;