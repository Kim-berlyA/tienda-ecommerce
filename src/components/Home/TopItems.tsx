import { useEffect, useState } from "react";

export default function TopItems() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    async function fetchRandomImages() {
      const randomIds = Array.from({length: 6}, () => Math.floor(Math.random() * 30) + 1);

      const promises = randomIds.map(id => 
        fetch(`https://dummyjson.com/products/${id}`)
         .then(res => res.json())
      );

      const results = await Promise.all(promises);
      setImages(results.map((result) => result.images[0]));
      console.log(results)
    }

    fetchRandomImages()
  }, []);

  return (
    <div>
      <h2 className="mt-5 mb-3 text-lg font-medium">Top Items Of {currentMonth}</h2>
      <div className="flex overflow-hidden w-full whitespace-nowrap">
        <div className="animate-flow flex gap-4 pr-4">
           {images.map((src, i) => (
             <img key={i} className="size-40 bg-neutral-200 rounded-md shrink-0" src={src} alt="random image" /> 
            ))} 
        </div>
        <div aria-hidden className="animate-flow flex gap-4 pr-4">
          {images.map((src, i) => ( 
          <img key={i} className="size-40 shrink-0 bg-neutral-200 rounded-md" src={src} alt="random image" /> ))} 
        </div> 
      </div>
    </div>
  );
}
