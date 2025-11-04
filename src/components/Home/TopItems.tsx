import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../Categories/CategorySections";

export default function TopItems() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchRandomProducts() {
      const randomIds:number[] = [];
      while (randomIds.length < 6) {
        const num = Math.floor(Math.random() * 30) + 1;
        if (!randomIds.includes(num)) {
          randomIds.push(num);
        }
      }

      const promises = randomIds.map(id => 
        fetch(`https://dummyjson.com/products/${id}`)
         .then(res => res.json())
      );

      const results = await Promise.all(promises);
      setProducts(results);
      console.log(results)
    }

    fetchRandomProducts()
  }, []);

  return (
    <div>
      <h2 className="mt-5 mb-3 text-lg font-medium">Top Items Of {currentMonth}</h2>
      <div className="flex overflow-hidden w-full whitespace-nowrap">
        <div className="animate-flow flex gap-4 pr-4 h-40">
           {products.map((product, i) => (
             <Link 
              key={i}
              to={`/details/${product.id}`}
              className="size-40 bg-neutral-200 rounded-md shrink-0"
              >
              <img className="" src={product.thumbnail} alt="random image" />
             </Link> 
            ))} 
        </div>
        <div aria-hidden className="animate-flow flex gap-4 pr-4 h-40">
          {products.map((product, i) => (
             <Link 
              key={i}
              to={`/details/${product.id}`}
              className="size-40 bg-neutral-200 rounded-md shrink-0" >
              <img className="" src={product.images[0]} alt="random image" />
             </Link> 
            ))}  
        </div> 
      </div>
    </div>
  );
}
