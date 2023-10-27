'use client'

import { useEffect, useState } from "react"
import { useTimerStore } from "@/store/timer"

export const Timer = () => {
  const changeTimer = useTimerStore(state => state.changeTimer)
  const timer = useTimerStore(state => state.timer)

  const handleChange = (event) => {
    try {
      const newValue = event.target.value
      document.documentElement.style.setProperty('--timer-value', newValue+"ms");
      changeTimer(newValue)
    } catch {
      document.documentElement.style.setProperty('--timer-value', "0ms");
    }
  }

  return (
    <div className="w-full flex justify-center max-w-4xl px-3 sm:px-24">
      <div className="border rounded-xl bg-gray-500 overflow-hidden flex justify-between mt-3 text-sky-100">
        <label htmlFor="timer" className="px-4 py-3">Animation time(milisec.)</label>
        <input id="timer" type="number" className="px-3 text-sky-900" onChange={handleChange} value={timer}  />
      </div>
    </div>
  )
}