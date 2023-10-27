'use client'

import { useEffect } from "react"

export const Theme = () => {
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const handleClick = (theme) => {
    if (theme === 'dark-mode') {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    } else {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="w-full flex justify-end max-w-4xl px-3 sm:px-24">
      <div className="border rounded-xl bg-gray-500 overflow-hidden flex justify-between mt-3">
        <button onClick={() => handleClick('light-mode')} className="dark:bg-slate-200 bg-gray-500 px-1" title="Cambiar tema">🌞</button>
        <button onClick={() => handleClick('dark-mode')} className="bg-slate-200 dark:bg-gray-500 px-1" title="Cambiar tema">🌚</button>
      </div>
    </div>
  )
}