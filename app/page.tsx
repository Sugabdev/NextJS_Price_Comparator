'use client'

import { SearchBar } from "./ui/SearchBar"

export default function Home() {
  return (
    <section
      className="h-full flex flex-col items-center justify-center gap-8 dark:bg-slate-800 dark:text-white"
    >
      <h1 className="text-semibold text-4xl text-center">Price Comparator</h1>
      <SearchBar />
    </section>
  )
}