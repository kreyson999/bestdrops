const Loader = () => {
  return (
    <>
      <div className={`h-full w-full flex justify-center items-center`}>
        <div className="ripple-loader">
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>
        {`
          .ripple-loader {
            position: relative;
            width: 64px;
            height: 64px;
          }

          .ripple-loader div {
            position: absolute;
            border: 4px solid #28978a;
            border-radius: 50%;
            animation: ripple-loader 1s ease-out infinite;
          }

          .ripple-loader div:nth-child(2) {
            animation-delay: -0.5s;
          }

          @keyframes ripple-loader {
            0% {
              top: 32px;
              left: 32px;
              width: 0;
              height: 0;
              opacity: 1;
            }
            100% {
              top: 0;
              left: 0;
              width: 64px;
              height: 64px;
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
}
 
export default Loader;