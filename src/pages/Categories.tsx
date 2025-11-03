import CategorySections from "../components/Categories/CategorySections";
import SearchBar from "../components/SearchBar";

export default function Categories() {
  return (
    <div className="p-1 bg-neutral-100">
      <SearchBar />
      <CategorySections />
    </div>
  )
}
