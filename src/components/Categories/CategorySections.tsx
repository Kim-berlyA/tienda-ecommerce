import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCategory } from "../../hooks/SelectedCategory";

export type Product = {
  id: number
  title: string
  images: string[]
  thumbnail: string
  category: string
};

const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
];

export default function CategorySections() {
  const [products, setProducts] = useState<Product[]>([]);
  const { selectedCategory, setSelectedCategory } = useCategory();

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
    <div className="grid grid-cols-4 w-full bg-white pt-3 h-[90vh] overflow-hidden">
      <div className="col-span-1 w-full overflow-y-auto mb-15">
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
      <div className="col-span-3 mt-3 overflow-y-auto mb-15">
        <div className="grid grid-cols-3 ">
          {products.map((product) => (
            <Link key={product.id} to={`/details/${product.id}`}>
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