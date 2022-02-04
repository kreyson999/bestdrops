const CategoryItem = ({text, slug}) => {
  return (
    <a className="block border-2 border-blue-600 px-4 py-1 xl:p-2 xl:px-6 w-min text-lg xl:text-xl rounded-xl bg-white">
      {text}
    </a>
  );
}
 
export default CategoryItem;