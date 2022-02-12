import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-custom-black text-white py-8 md:py-16 mt-16">
      <div className="container mx-auto px-4 flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-center md:space-x-12">
        <div>
          <p className="font-bold">&copy; 2022 BESTDROPS.PL</p>
          <p className="text-gray-300">Zdjęcia użyte na stronie nie są naszego autorstwa i należą do ich prawdziwych właścicieli!</p>
          <Link href={'/contact'}>
            <a className="text-blue-500 font-bold">
              Kontakt z nami
            </a>
          </Link>
        </div>
        <div className="space-x-2 flex">
          <a className="w-9 h-9 block" aria-label="Nasz instagram" href="https://www.instagram.com/bestdrops.pl/">
            <Image
            src={'/icons/instagram.svg'}
            alt="Nasz instagram"
            width={64}
            height={64}
            />
          </a>
          <a className="w-9 h-9 block" aria-label="Nasz tiktok" href="https://www.tiktok.com/@bestdrops.pl?lang=pl-PL">
            <Image
            src={'/icons/tiktok.svg'}
            alt="Nasz tiktok"
            width={64}
            height={64}
            />
          </a>
        </div>
      </div>
    </footer>

  );
}
 
export default Footer;