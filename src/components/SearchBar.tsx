import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form className="relative mt-5">
      <input type="text" placeholder="Search Tienda" className="p-3 rounded-full border bg-neutral-100 w-full focus:ring-primary focus:ring-2 focus:border-primary focus:outline-none duration-100" />
      <Search className="absolute right-3 top-3" />
    </form>
  )
}
