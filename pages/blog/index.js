export default function Blog() {
  return (
    <>
      <div className="relative headerBg pt-32 pb-16 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black-w-opacity">
        <header className="w-full h-full max-w-screen-lg mx-auto px-4">
          <h1 className="relative text-7xl text-center font-oswald uppercase text-white font-bold pb-3 z-20">Hot dropy</h1>
        </header>
      </div>
      <style jsx>{`
        .headerBg {
          background-image: url('/images/headers/dropsbg.png');
          background-position: center;
          background-size: contain;
          background-attachment: fixed;
        }
      `}</style>
    </>
  )
}
