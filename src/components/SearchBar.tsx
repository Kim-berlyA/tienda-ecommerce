import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setHasSearched(true);
      return;
    }

    const intervalId = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(intervalId);
  }, [query])

  async function handleSearch() {
    setResults([]);
    setHasSearched(true);
    setLoading(true);

    try {
      const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await res.json();
      setResults(data.products || []);
    } catch (error) {
      console.error("Search failed:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  function handleClear() {
    setResults([]);
    setQuery("");
  }

  return (
    <div className="sticky -top-1 w-full bg-white py-3 z-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Tienda"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-3 rounded-full border bg-neutral-100 w-full focus:ring-primary focus:ring-2 focus:border-primary focus:outline-none duration-100"
        />
        <button type="submit">
          <X
           onClick={handleClear}
           className="absolute right-3 top-3 text-gray-500" />
        </button>
      </div>

      {loading && <p className="mt-4 text-center text-gray-500">Searching...</p>}

      {!loading && hasSearched && query && results.length > 0 && (
        <div className="fixed top-20 bg-white w-full pt-3 overflow-y-auto inset-0 px-1">
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

      {hasSearched && !loading && query && results.length === 0 && (
        <p className="mt-4 text-center text-gray-500">
          No products found for “{query}”
        </p>
      )}
    </div>
  );
}
