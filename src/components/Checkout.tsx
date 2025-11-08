import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart"
import { ArrowLeft } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Truck } from "lucide-react";

export default function Checkout() {
  const { totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="p-1">
      <div className="flex gap-3 text-2xl font-medium items-center my-5">
        <ArrowLeft
         className="size-7 ml-2"
         onClick={() => navigate(-1)} />
        <h2>Checkout</h2>
      </div>

      <div className="flex justify-between">
        <span>&nbsp;</span>
        <button
        className="text-neutral-600 mr-1"
        onClick={() => navigate(-1)}
        >
          View items &gt;
        </button>
      </div>

      <div className="shadow-sm rounded-md p-1 mt-5">
        <h2 className="mb-3 border-b pb-2 border-neutral-500 text-neutral-500">Order Summary</h2>
        <div className="flex justify-between">
          <div>Subtotal</div>
          <div>₦ {totalPrice.toLocaleString("en-NG", { minimumFractionDigits: 2 })}</div>
        </div>
        <div className="flex justify-between">
          <div>Delivery Fees</div>
          <div>₦ {(totalPrice * 0.06).toLocaleString("en-NG", { minimumFractionDigits: 2 })}</div>
        </div>
        
        <div className="border-t -mb-3 mt-3">&nbsp;</div>

        <div className="flex justify-between">
          <div>Total</div>
          <div>₦ {(totalPrice + (totalPrice * 0.06)).toLocaleString("en-NG", { minimumFractionDigits: 2 })}</div>
        </div>
      </div>

      <div className="shadow-sm rounded-md p-1 mt-5">
        <div className="flex justify-between border-b pb-2 border-neutral-500 my-3">
          <h2 className="text-neutral-500">Payment method</h2>
          <span className="text-primary">Change</span> 
        </div>

        <div className="flex gap-3 items-center">
          <CreditCard />
          <div>
            <p>Pay securely with card</p>
            <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>

      <div className="shadow-sm rounded-md p-1 mt-5">
        <div className="flex justify-between border-b pb-2 border-neutral-500 my-3">
          <h2 className="text-neutral-500">Delivery Address</h2>
          <span className="text-primary">Change Your Address</span> 
        </div>

        <div className="flex gap-3 items-center text-primary">
          <Truck fill='currentColor' />
          <div>
            <p className="text-black">Door Delivery</p>
            <p className="text-neutral-500">Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
  )
}
