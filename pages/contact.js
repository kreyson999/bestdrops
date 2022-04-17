import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

const ContactPage = ({drops}) => {
  const [isSending, setIsSending] = useState(false);
  // const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    if (isSending) return
    try {
      setIsSending(true)
      const result = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then((res) => setIsSending(false))
      console.log(result)
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
      <div>contact</div>
      {/* <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 pt-12 md:pt-12 pb-16 md:pb-24 lg:pt-16 lg:pb-32 px-4 gap-y-6">
        <div className="lg:col-span-6">
          <h1 className="text-3xl lg:text-3xl uppercase text-custom-black font-bold pb-3 z-10">Formularz kontaktowy</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 flex flex-col border-b border-custom-black pb-4 ">
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
            <button disabled={isSending ? true : false} className="self-end bg-blue-500 px-8 py-2 text-xl rounded-lg text-white w-fit hover:opacity-80">Wyślij</button>
          </form>
      </div> */}
    </>
  );
}
 
export default ContactPage;