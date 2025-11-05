import { useEffect, useState } from "react"
import type { Product } from "../Categories/CategorySections";
import { Link } from "react-router-dom";

export default function TopCategories() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchRandomProducts() {
      const ids:number[] = [121, 78, 16, 172, 10, 162];
      

      const promises = ids.map(id => 
        fetch(`https://dummyjson.com/products/${id}`)
         .then(res => res.json())
      );

      const results = await Promise.all(promises);

      setProducts(results);
    }

    fetchRandomProducts()
  }, []);


  return (
    <div className="mt-5 mb-20">
      <h2 className="text-lg font-medium mb-3">Top Categories</h2>
      <div className="grid grid-cols-3 gap-2">
        {products.map((product) => (
          <Link
           key={product.id} 
           to={`/details/${product.id}`}
           className="flex flex-col items-center">
            <img src={product.thumbnail} className="size-32 mb-0.5 bg-neutral-200 rounded-md" /> 
            <span>{product.category}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
