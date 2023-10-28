import { create } from 'zustand'

export const useTimerStore = create((set) => ({
  timer: 500,
  changeTimer: (newValue) => set({ timer: newValue > 20000 ? 20000 : newValue }),
})) 