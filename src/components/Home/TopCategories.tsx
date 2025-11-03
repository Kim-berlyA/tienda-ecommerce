import { useEffect, useState } from "react"

export default function TopCategories() {
  return (
    <div className="mt-5">
      <h2 className="text-lg font-medium mb-3">Top Categories</h2>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex flex-col items-center">
          <div className="size-32 mb-0.5 bg-neutral-200 rounded-md"></div>
          <span>Beauty</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-32 mb-0.5 bg-neutral-200 rounded-md"></div>
          <span>Furniture</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-32 mb-0.5 bg-neutral-200 rounded-md"></div>
          <span>Groceries</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-32 mb-0.5 bg-neutral-200 rounded-md"></div>
          <span>Smartphones</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-32 mb-0.5 bg-neutral-200 rounded-md"></div>
          <span>Skin Care</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-32 mb-0.5 bg-neutral-200 rounded-md"></div>
          <span>Sports Accessories</span>
        </div>
      </div>
    </div>
  )
}
