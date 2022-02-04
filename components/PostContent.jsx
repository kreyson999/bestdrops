import Image from 'next/image'

const PostContent = ({content}) => {
  const formatContent = (content) => {
    const contentList = content.raw.children.map((obj, index) => {
      const checkTextChildren = (obj) => {
        return obj.children.map((child, childIndex) => {
          let modifiedText = child.text;
          if (child) {
            if (child.bold) {
              modifiedText = (<b  key={childIndex}>{child.text}</b>);
            }

            if (child.italic) {
              modifiedText = (<em key={childIndex}>{child.text}</em>);
            }

            if (child.underline) {
              modifiedText = (<u key={childIndex}>{child.text}</u>);
            }
            if (child.type === 'link') {
              modifiedText = (<a key={childIndex} className="inline-block font-semibold transition duration-500 transition duration-500 transform hover:-translate-y-0.5" target={"_blank"} href={child.href} rel="noreferrer">{child.children[0].text}</a>)
            }
          }
          return modifiedText
        })
      }

      switch (obj.type) {
        case 'heading-one':
          return <h1 key={index} className="text-4xl font-semibold mb-8 border-b-2 pb-6">{checkTextChildren(obj)}</h1>;
        case 'heading-two':
          return <h2 key={index} className="text-3xl font-semibold">{checkTextChildren(obj)}</h2>;
        case 'heading-three':
          return <h3 key={index} className="text-2xl font-semibold">{checkTextChildren(obj)}</h3>;
        case 'heading-four':
          return <h4 key={index} className="text-xl font-semibold">{checkTextChildren(obj)}</h4>;
        case 'paragraph':
          return <p key={index} className="text-lg text-custom-black">{checkTextChildren(obj)}</p>;
        case 'block-quote':
          return (<div className='border-box' key={index} dangerouslySetInnerHTML={{__html: obj.children[0].text}}></div>);
        case 'image':
          return (
            <div key={index} className="w-full flex justify-center my-8">
              <Image
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
                className="rounded"
              />
            </div>
          );
        case 'bulleted-list':
          return (
            <ul className="text-lg my-8 list-disc list-inside ml-4 md:ml-8" key={index}>
              {obj.children.map(item => {
                return item.children.map(item2 => {
                  return item2.children.map(item3 => {
                    return (<li key={item3.text}>{item3.text}</li>)
                  })
                })
              })}
            </ul>
          );
        case 'numbered-list':
          return (
            <ol className="text-lg my-8 list-decimal list-inside ml-4 md:ml-8" key={index}>
              {obj.children.map(item => {
                return item.children.map(item2 => {
                  return item2.children.map(item3 => {
                    return (<li key={item3.text}>{item3.text}</li>)
                  })
                })
              })}
            </ol>
          );
        default:
          return <p className="text-sm text-red-600 font-semibold" key={index}>W tym miejscu znajduje się element, który nie został dobrze sformatowany. Skontaktuj się z administratorem strony!</p>
      }
    })
    return contentList
  }


  return (
    <>
     {formatContent(content)}
    </>
  );
}

export default PostContent