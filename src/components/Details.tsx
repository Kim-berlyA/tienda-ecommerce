import type { LoaderFunctionArgs } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../hooks/useCart";

export default function Details() {
  const product = useLoaderData() as any;
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const [isEmpty, setIsEmpty] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const found = cart.find(p => p.productId === product.id);
    if (found) {
      setIsEmpty(false);
      setQuantity(found.quantity);
    } else {
      setIsEmpty(true);
      setQuantity(0);
    }
  }, [cart]);

  return (
    <div className="p-1">
      <div className="bg-neutral-100 relative flex justify-center">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 bg-neutral-200 rounded-full p-3"
        >
          <ArrowLeft />
        </button>
        <img
          src={product.images[0]}
          alt="product image"
          className="h-[40vh] py-10"
        />
      </div>

      <div className="p-3 mt-3">
        <h2 className="text-lg font-medium">{product.title}</h2>
        <p className="text-xs mt-2 text-neutral-800">{product.description}</p>
        <p className="text-sm my-3">
          Brand: <span className="text-primary">{product.brand}</span>
        </p>
        <p className="flex items-center gap-2 font-medium">
          <span className="text-xl">₦{(product.price * 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}</span>
          <span className="text-neutral-500 line-through text-base">
            ₦{(Math.round((product.price * 0.12 + product.price * 100) * 100) / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
          </span>
        </p>
        <span className="text-sm text-primary">{product.stock} units left</span>
        <p className="my-3">
          Rating: {product.rating} / 5.00
          <span className="text-primary">
            {" "}
            ({Math.round(product.rating * 100) + 53} ratings)
          </span>
        </p>
        <p className="text-neutral-800 text-sm">{product.warrantyInformation}</p>
      </div>

      <div className="w-full flex justify-center">
        {isEmpty ? (
          <button
            className="bg-primary rounded-full text-white py-3 px-20 mt-20 duration-200 active:translate-y-0.5"
            onClick={() => addToCart(product.id, product.title, product.price, product.stock, product.thumbnail, product.description)}
          >
            Add to Cart
          </button>
        ) : (
          <div
            className="rounded-full text-white w-60 h-12 mt-20 flex"
          >
            <div
             className="bg-primary flex justify-center items-center p-5 h-full rounded-sm text-3xl"
             onClick={() => removeFromCart(product.id)}>
              -
            </div>
            <div
             className="flex justify-center items-center h-full w-1/2 text-black">
              {quantity}
            </div>
            <div
             className="bg-primary flex justify-center items-center p-5 h-full rounded-sm text-3xl"
             onClick={() => addToCart(product.id, product.title, product.price, product.stock, product.thumbnail, product.description)}>
              +
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function detailsLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return data;
}
