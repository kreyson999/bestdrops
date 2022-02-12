const ContactUser = ({text, isActive, onClick}) => {
  return (
    <>
      <button 
      onClick={() => onClick(text)}
      className={`text-xl border-2 border-blue-500 rounded-lg py-2 ${isActive ? 'bg-blue-500 text-white' : 'bg-transparent hover:opacity-70'}`}>
        {text}
      </button>
    </>
  );
}
 
export default ContactUser;