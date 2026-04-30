import Banner from "./components/home/Banner";
import Categories from "./components/home/Categories";
import CatNavbar from "./components/home/CatNavbar";
import DealsSection from "./components/home/Discount";
import CollectionsSection from "./components/home/FeaturedCards";
import Product from "./components/home/Product";
import Slider from "./components/home/Slider";
import TopRatedProducts from "./components/home/TopRated";

export default function Home() {
  return (
   
    <div className="">
      <CatNavbar />
     <Banner />
      {/* <Slider /> */}
      <Categories />
<Product />
<CollectionsSection />
<TopRatedProducts />
<DealsSection />
    </div>
  );
}
