import { useCart } from "../hooks/cart"
import backArrow from '../assets/back.png';
import { Link, useNavigate } from "react-router-dom";

export default function CartContent() {
  const { cart, totalPrice, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-1 mb-15">
      <div className="flex gap-5 items-center my-5">
        <button
          onClick={() => navigate(-1)}
        >
          <img src={backArrow} alt="previous page" className="size-7 ml-5" />
        </button>
        <h2 className="text-2xl">Cart</h2>
      </div>

      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>₦ {totalPrice.toLocaleString("en-NG", { minimumFractionDigits: 2 })}</span>
      </div>

      <div className="bg-neutral-200 pt-1">
        {cart.map(item => (
          <Link
           key={item.productId}
           to={`/details/${item.productId}`}
           className="bg-white mb-2 rounded-md flex items-center">
            <img src={item.thumbnail} alt={item.title} className="size-1/4" />

            <div className="py-2 w-full">
              <p>{item.title}</p>
              <p className="text-lg font-medium">
                ₦ {(item.price * 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
              </p>
              <span className="text-neutral-700 line-through">
                ₦{(Math.round((item.price * 0.12 + item.price * 100) * 100) / 100).toLocaleString("en-NG", { minimumFractionDigits: 2 })}
              </span>
              <span className="bg-primary/40 text-primary ml-2 p-1 rounded-sm">-12%</span>
              <p className="my-1 text-neutral-500">{item.stock} units left</p>
              <div className="w-full flex justify-end">
                <div
                  className="rounded-full w-fit text-white flex mr-5"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <div className="bg-primary flex justify-center items-center size-7 rounded-sm text-xl"
                  onClick={() => removeFromCart(item.productId)}>-</div>
                  <div className="flex justify-center items-center mx-5 text-black">{item.quantity}</div>
                  <div className="bg-primary flex justify-center items-center size-7 rounded-sm text-xl"
                  onClick={() => addToCart(item.productId, item.title, item.price, item.stock, item.thumbnail, item.description)}>+</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
