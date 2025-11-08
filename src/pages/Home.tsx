import SearchBar from "../components/SearchBar";
import TopItems from "../components/Home/TopItems";
import banner from '../assets/black-friday.png'
import TopCategories from "../components/Home/TopCategories";
import FlashSales from "../components/Home/FlashSales";

export default function Home() {
  return (
    <div className="p-1 flex flex-col h-screen overflow-y-scroll">
      <SearchBar />
      <img src={banner} alt="black friday sales" className="mt-5" />
      <TopItems />
      <FlashSales />
      <div className="h-2 w-full bg-neutral-100 mt-5">&nbsp;</div>
      <TopCategories />
    </div>
  )
}
