import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

type Product = {
  id: number;
  title: string;
  images: string[];
};

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

export default function CategorySections() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('smartphones');

  async function fetchProducts(item:string) {
    fetch(`https://dummyjson.com/products/category/${item}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.products);
        setProducts(data.products);
      }); 
  }

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, []);

  return (
    <div className="grid grid-cols-4 w-full bg-neutral-100 mt-5">
      <div className="col-span-1 w-full mb-20 sticky h-fit self-start top-0">
        {categories.map((item, i) => (
          <div 
          key={i}
          onClick={() => {
            fetchProducts(item)
            setSelectedCategory(item);
            }
          }
          className={`py-3 text-sm rounded-md px-2 duration-300 ${
            selectedCategory === item
             ? "shadow-sm bg-primary text-white"
             : ""
          }`}>
            {item}
          </div>
        ))}
      </div>
      <div className="col-span-3 mt-3">
        <div className="grid grid-cols-3 ">
          {products.map((product) => (
            <Link key={product.id} to={`/details/${product.id}`}>
              <div 
              className="flex flex-col items-center rounded-sm shadow-sm ml-2 mb-2">
                <img src={product.images[0]} 
                className="size-20"
                alt="product image" />

                <p className="text-center text-xs">{product.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


// {products.map((product) => (
//   <Link key={product.id} to={`/details/${product.id}`}>
//     <div className="border p-3 rounded hover:shadow cursor-pointer">
//       <img src={product.thumbnail} alt={product.title} className="w-48 h-48 object-cover" />
//       <h3>{product.title}</h3>
//     </div>
//   </Link>
// ))}