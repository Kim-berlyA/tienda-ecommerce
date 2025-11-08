import { useEffect, useState } from "react"
import type { Product } from "../Categories/CategorySections";
import { Link } from "react-router-dom";

export default function FlashSales() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const randomIds:number[] = []

      while (randomIds.length < 10) {
        const num = Math.floor((Math.random() * 30) + 1)

        if (!randomIds.includes(num)) {
          randomIds.push(num);
        }
      }
      
      const promises = randomIds.map(id => (
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
      ));

      const results = await Promise.all(promises);
      setProducts(results);
    }

    fetchProducts();
  }, [])

  return (
    <div className="mt-3">
      <div className="bg-primary text-white p-3 text-lg mb-3">
        Flash Sales
      </div>

      <div className="flex overflow-x-auto gap-3">
        {products.map((product, i) => (
          <Link 
           key={i}
           to={`details/${product.id}`}
           className="shrink-0 size-44">
            <div className="relative">
              <img 
               src={product.thumbnail} 
               alt={product.title}
               className="h-32" />

                <div className="absolute top-0 -right-5 p-0.5 rounded-sm bg-primary/15 text-primary">
                  -12%
                </div>
            </div>

            <div>
              <p className="line-clamp-1">{product.title}</p>
              <span>₦ {(product.price * 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
