import Image from 'next/image'

const Price = ({title, price, tooltipText}) => {
  return (
    <div className="flex items-center text-xl">
      <span>{title}: <span className="font-semibold text-blue">{price}</span> zł</span>
      <div className="grid ml-2 w-6 h-6">
        <Image
          src="/icons/questionmark.svg"
          width={64}
          height={64}
          alt="Ikona znaku zapytania"
        />
      </div>
    </div>
  );
}
 
export default Price;