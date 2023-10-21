'use client'
import { Toaster, toast } from "react-hot-toast";

export function Button ({ textToCopy }) {
  const handleClick = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      toast('Copiado!', {
        icon: '✅',
        position: 'botton-right',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        }
      });
    })
  }
  return (
    <>
      <div><Toaster/></div>
      <button
        type="button"
        className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:text-gray-100"
        onClick={handleClick}
      >
        Copiar
      </button>
    </>
  )
}