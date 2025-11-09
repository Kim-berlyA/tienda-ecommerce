import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks/useSelectedCategory";
import { categories } from "../../data/data";

export type Product = {
  id: number
  title: string
  images: string[]
  thumbnail: string
  category: string
  price: number
};

export default function CategorySections() {
  const [products, setProducts] = useState<Product[]>([]);
  const { selectedCategory, setSelectedCategory } = useCategory();

  async function fetchProducts(item:string) {
    try {
      const res = await fetch(`https://dummyjson.com/products/category/${item}`);
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  }

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="grid grid-cols-4 w-full bg-white pt-3 h-[90vh] overflow-hidden">
      <div className="col-span-1 w-full overflow-y-auto mb-15 pr-1">
        {categories.map((item, i) => (
          <button 
          key={i}
          onClick={() => {
            setSelectedCategory(item);
            }
          }
          className={`py-3 text-sm rounded-md px-2 duration-300 cursor-pointer text-left w-full ${
            selectedCategory === item
             ? "shadow-sm bg-primary text-white"
             : ""
          }`}>
            {item}
          </button>
        ))}
      </div>
      <div className="col-span-3 mt-3 overflow-y-auto mb-15">
        <div className="grid grid-cols-3 ">
          {products.map((product) => (
            <Link
             key={product.id} 
             to={`/details/${product.id}`}>
              <div 
              className="flex flex-col justify-around items-center rounded-sm shadow-sm ml-2 h-36">
                <img src={product.images[0]} 
                className="size-20"
                alt="product image" />

                <p className="text-center text-xs mb-2">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}