import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-custom-black text-white py-16 mt-16">
      <div className="container mx-auto px-4 flex justify-between items-center space-x-12">
        <div>
          <p className="font-bold">&copy; 2022 BESTDROPS.PL</p>
          <p className="text-gray-300">Zdjęcia użyte na stronie nie są naszego autorstwa i należą do ich prawdziwych właścicieli!</p>
        </div>
        <div className="space-x-2">
          <a aria-label="Nasz instagram" href="https://instagram.com">
            <Image
            src={'/icons/instagram_logo.png'}
            alt="Nasz instagram"
            width={40}
            height={40}
            />
          </a>
          <a aria-label="Nasz tiktok" href="https://tiktok.com">
            <Image
            src={'/icons/tiktok_logo.png'}
            alt="Nasz tiktok"
            width={40}
            height={40}
            />
          </a>
        </div>
      </div>
    </footer>

  );
}
 
export default Footer;