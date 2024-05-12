import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import toyImg from "../../../assets/toys/toy-bg.jpg";
import dollImg from "../../../assets/toys/doll-bg.jpg";
import carImg from "../../../assets/toys/car-bg.jpg";
import boardImg from "../../../assets/toys/board-bg.jpg";
import figureImg from "../../../assets/toys/figure-bg.jpg";
import useToys from "../../../hooks/useToys";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ToyCategory from "../ToyCategory/ToyCategory";

const Toys = () => {
  const [toys] = useToys();
  const dolls = toys.filter((item) => item.category === "dolls");
  const cars = toys.filter((item) => item.category === "cars");
  const figures = toys.filter((item) => item.category === "figure");
  const board = toys.filter((item) => item.category === "board");
  const offered = toys.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>EnchantedToyland | Toys</title>
      </Helmet>
      <Cover img={toyImg} title="our toys"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered toy items */}
      <ToyCategory items={offered}></ToyCategory>
      {/* doll toys  */}
      <ToyCategory items={dolls} title="dolls" img={dollImg}></ToyCategory>
      <ToyCategory items={cars} title={"main"} img={carImg}></ToyCategory>
      <ToyCategory
        items={board}
        title={"board games"}
        img={boardImg}
      ></ToyCategory>
      <ToyCategory
        items={figures}
        title={"figures"}
        img={figureImg}
      ></ToyCategory>
    </div>
  );
};

export default Toys;
