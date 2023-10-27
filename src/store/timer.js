import { create } from 'zustand'

export const useTimerStore = create((set) => ({
  timer: 1000,
  changeTimer: (newValue) => set({ timer: newValue }),
}))