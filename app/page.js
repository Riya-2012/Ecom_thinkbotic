import Banner from "./components/home/Banner";
import Categories from "./components/home/Categories";
import CatNavbar from "./components/home/CatNavbar";
import Product from "./components/home/Product";
import Slider from "./components/home/Slider";

export default function Home() {
  return (
   
    <div className="">
      <CatNavbar />
     <Banner />
      {/* <Slider /> */}
      <Categories />
<Product />


    </div>
  );
}
