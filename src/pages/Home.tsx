import SearchBar from "../components/SearchBar";
import TopItems from "../components/Home/TopItems";
import banner from '../assets/black-friday.png'
import TopCategories from "../components/Home/TopCategories";
import FlashSales from "../components/Home/FlashSales";

export default function Home() {
  return (
    <div className="p-1 h-[50vh] scroll-auto">
      <SearchBar />
      <img src={banner} alt="black friday sales" className="mt-5" />
      <TopItems />
      <TopCategories />
    </div>
  )
}
