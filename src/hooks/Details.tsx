import type { LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import backArrow from '../assets/back.png'

export default function Details() {
  const product = useLoaderData() as any;
  const navigate = useNavigate();

  return (
    <div className="p-1">
      <div className="bg-neutral-100 relative flex justify-center">
        <button onClick={() => navigate(-1)} className="absolute top-3 left-3 bg-neutral-200 rounded-full p-3">
          <img src={backArrow} alt="previous page" className="size-5" />
        </button>
        <img src={product.images[0]} alt="product image" className="h-[40vh] py-10" />
      </div>

      <div className="p-3 mt-3">
        <h2 className="text-lg font-medium">{product.title}</h2>
        <p className="text-xs mt-2 text-neutral-800">{product.description}</p>
        <p className="text-sm my-3">Brand: 
          <span className="text-primary">{product.brand}</span>
        </p>
        <p className="flex items-center gap-2 font-medium">
          <span className="text-xl">₦{product.price}</span>
          <span className="text-neutral-500 line-through text-base">
            ₦{Math.round((product.price * 0.120 + product.price) * 100) / 100}
          </span>
        </p>
        <span className="text-sm text-primary">{product.stock} units left</span>
        <p className="my-3">Rating: {product.rating} / 5.00 
          <span className="text-primary"> ({Math.round(product.rating * 100) + 53} ratings)</span>  
        </p> 
        <p className="text-neutral-800 text-sm">{product.warrantyInformation}</p>
      </div>

      <div className="w-full flex justify-center">
        <button className="bg-primary rounded-full text-white py-3 px-20 mt-20">Add to Cart</button>
      </div>
    </div>
  )
}

export async function detailsLoader({params}:LoaderFunctionArgs) {
  const {id} = params;
  const res = await fetch('https://dummyjson.com/products/' + id);
  const data = await res.json();
  return data;
}