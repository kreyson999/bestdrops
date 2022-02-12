import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

import { ContactUser, DropItem } from "../components";
import { getDropsWithPagination, REVALIDATE_PAGE_CONTENT } from "../lib/graphCMS";

const ContactPage = ({drops}) => {
  const [currentUser, setCurrentUser] = useState('Kamil');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const users = {
    'Kamil': {
      email: 'kamil@bestdrops.pl',
      ig: 'https://www.instagram.com/piaseckii_/',
      fb: 'https://www.facebook.com/profile.php?id=100017161512453',
    },
    'Jakub': {
      email: 'contact@bestdrops.pl',
      ig: 'https://www.instagram.com/jmlynek_/',
      fb: 'https://www.facebook.com/profile.php?id=100016004405311',
    },
    'Mizer': {
      email: 'mizer@bestdrops.pl',
      ig: 'https://www.instagram.com/mizer_2137/',
      fb: 'https://www.facebook.com/profile.php?id=100014575396921',
    },
  }

  const handleChangingCurrentUser = (user) => {
    setCurrentUser(user)
  }

  const onSubmit = async (data) => {
    try {
      const result = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    } catch (error) {
      console.log(error)
    }
    reset()
  }

  return (
    <>
      <Head>
        <title>BESTDROPS.PL - Kontakt</title>
        <meta name="title" content="BESTDROPS.PL - Kontakt"/>
        <meta name="description" content="Jeśli masz do nas jakąś sprawę, możesz do nas napisać przez formularz kontaktowy."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bestdrops.pl/contact"/>
        <meta property="og:title" content="BESTDROPS.PL - Kontakt"/>
        <meta property="og:description" content="Jeśli masz do nas jakąś sprawę, możesz do nas napisać przez formularz kontaktowy."/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bestdrops.pl/contact"/>
        <meta property="twitter:title" content="BESTDROPS.PL - Kontakt"/>
        <meta property="twitter:description" content="Jeśli masz do nas jakąś sprawę, możesz do nas napisać przez formularz kontaktowy."/>
      </Head>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 pt-12 md:pt-12 pb-16 md:pb-24 lg:pt-16 lg:pb-32 px-4 gap-y-6">
        <div className="lg:col-span-6">
          <h1 className="text-3xl lg:text-3xl uppercase text-custom-black font-bold pb-3 z-10">Formularz kontaktowy</h1>
          <form onClick={handleSubmit(onSubmit)} className="space-y-2 flex flex-col border-b border-custom-black pb-4 ">
            <div>
              <input 
              {...register("name", { required: true, maxLength:16, minLength:3 })}
              className="border-2 border-blue-500 rounded-lg text-lg px-3 py-2 w-full text-blue-500" 
              type="text" 
              placeholder="Imię" />
              <span className="text-sm text-red-700">{errors.name && "Imię musi mieć co najmniej 3 litery i maksymalnie 16."}</span>
            </div>
            <div>
              <input 
              type="email"
              {...register("email", 
              { 
                required: true, 
                minLength:4, 
                maxLength:120, 
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
              })}
              className="border-2 border-blue-500 rounded-lg text-lg px-3 py-2 w-full text-blue-500" 
              placeholder="E-mail" />
              <span className="text-sm text-red-700">{errors.email && "Proszę podać prawidłowy e-mail."}</span>
            </div>
            <div>
              <textarea 
              {...register("message", { required: true, minLength:12, maxLength:500 })}
              placeholder="Wiadomość"
              className="border-2 border-blue-500 rounded-lg text-lg px-3 py-2 w-full text-blue-500 resize-none" 
              cols="30" 
              rows="4">
              </textarea>
              <span className="text-sm text-red-700">{errors.message && "Wiadomość musi mieć co najmniej 12 liter i maksymalnie 500."}</span>
            </div>
            <button className="self-end bg-blue-500 px-8 py-2 text-xl rounded-lg text-white w-fit hover:opacity-80">Wyślij</button>
          </form>
          <div className="mt-4 grid grid-cols-3 space-x-2">
            <ContactUser text={'Kamil'} isActive={currentUser === 'Kamil'} onClick={handleChangingCurrentUser}/>
            <ContactUser text={'Jakub'} isActive={currentUser === 'Jakub'} onClick={handleChangingCurrentUser}/>
            <ContactUser text={'Mizer'} isActive={currentUser === 'Mizer'} onClick={handleChangingCurrentUser}/>
          </div>
          <div className="mt-6 space-y-2">
            <p className="text-lg">E-mail: {users[currentUser].email}</p>
            <div className="flex space-x-2">
              <a href={users[currentUser].ig} className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" fill="rgba(20,20,20,1)"/></svg>
              </a>
              <a href={users[currentUser].fb} className="cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="rgba(20,20,20,1)"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-2 lg:col-start-8 xl:col-start-9 lg:col-span-5">
          <h2 className="text-2xl font-bold">Nadchodzące dropy:</h2>
          <div className="space-y-3">
            {drops.map((drop, index) => (
              <DropItem key={index} isRow={true} drop={drop}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default ContactPage;

export async function getStaticProps() {
  const date = new Date()
  const drops = await getDropsWithPagination(3, false, false, date)

  return {
    props: {
      drops: drops,
    },
    revalidate: REVALIDATE_PAGE_CONTENT,
  }
}