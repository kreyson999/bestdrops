import Image from 'next/image'
import getFormattedDate from '../helpers/getFormattedDate'
import Link from 'next/link'


const DropItem = ({drop, isBig, isRow}) => {
  const { name, featuredImage, resell, retail, slug, isVerified} = drop
  return (
    <>
      <Link href={`/drops/${slug}`}>
        <a className={`block dropitem relative border-2 md:border-4 bg-white border-blue-600 ${isRow ? 'grid grid-cols-2 transition duration-500 transform hover:-translate-y-1' : 'aspect-square'} h-full w-full overflow-hidden rounded-2xl z-10 `}>
          <div className="relative h-full">
            <div className="absolute top-0 left-0 right-0 z-10">
              <h2 className={`font-light w-full px-1 pt-1 md:px-2 md:pt-1 md:pb-1 text-center ${isBig ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'}`}>{name}</h2>
            </div>
            <div className={`relative h-full w-full ${isRow ? 'aspect-square' : ''}`}>
              <Image
              src={featuredImage.url}
              alt={name}
              layout="fill"
              className="object-cover"
              />
            </div>
            <div className='absolute bottom-2 right-2 w-9 h-9'>
              {isVerified && <Image 
                  src={'/icons/checkbox.svg'}
                  alt='Zweryfikowany drop'
                  width={64}
                  height={64}
                />}
            </div>
          </div>
          <div className={`${isRow ? '' : 'dropitem__info absolute duration-300'} w-full flex flex-col justify-between bg-custom-black ${isBig ? 'px-2 py-2 md:px-4 md:py-4 h-1/2 -bottom-1/2' : `${isRow ? 'h-full px-2 py-2 md:px-4 md:py-4 bottom-0' : 'h-2/3 px-2 py-2 '} -bottom-2/3`}`}>
            <div>
              <p className={`text-white font-light ${isBig ? 'md:text-2xl' : 'text-sm md:text-base'}`}>{getFormattedDate(drop.date)}</p>
              <p className={`text-white font-bold ${isBig ? 'md:text-2xl' : 'text-base md:text-base'}`}>Retail: {retail} PLN</p>
              <p className={`text-white font-bold ${isBig ? 'md:text-3xl' : 'text-base md:text-lg'}`}>Resell: {resell} PLN</p>
            </div>
            <p className={`hidden sm:block text-white font-light text-center  ${isBig ? 'text-xl' : 'text-sm'}`}>Kliknij, aby zobaczyć więcej!</p>
          </div>
        </a>
      </Link>
      <style jsx>{
        `
          .dropitem:hover .dropitem__info {
            transform: translateY(-100%)
          }
        `
      }</style>
    </>
  );
}
 
export default DropItem;