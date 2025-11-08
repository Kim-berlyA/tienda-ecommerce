import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await res.json();
      setResults(data.products || []);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="sticky -top-1 w-full bg-white py-3 z-10">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search Tienda"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 rounded-full border bg-neutral-100 w-full focus:ring-primary focus:ring-2 focus:border-primary focus:outline-none duration-100"
        />
        <Search
         className="absolute right-3 top-3 text-gray-500"
         onClick={handleSearch} />
      </form>

      {loading && <p className="mt-4 text-center text-gray-500">Searching...</p>}

      {!loading && query && results.length > 0 && (
        <div className="fixed top-18 bg-white w-full pt-3 overflow-y-auto inset-0 px-1">
          {results.map((product) => (
            <Link
            to={`/details/${product.id}`}
              key={product.id}
              className="p-3 border border-neutral-500 rounded-md hover:shadow-md transition flex gap-3 items-center mb-2"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-md h-20"
              />
              <div>
                <h3 className="font-medium mt-2">{product.title}</h3>
                <p className="text-primary font-semibold">
                  ₦{(product.price * 100).toLocaleString("en-NG")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {!loading && query && results.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No products found for “{query}”
        </p>
      )}
    </div>
  );
}
