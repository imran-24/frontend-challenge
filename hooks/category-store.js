import { create } from 'zustand'

export const useCategoryStore = create((set) => ({
  current: "What's New",
  update: (newCategory) => set(() => ({ current: newCategory })),
}))
