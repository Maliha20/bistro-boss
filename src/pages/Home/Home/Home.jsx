import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import PopularToys from "../PopularToys/PopularToys";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EnchantedToyland | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularToys></PopularToys>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
